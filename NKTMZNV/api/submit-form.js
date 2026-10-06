const recipient = "wxwstdd@gmail.com";
const calendarTimeZone = "Europe/Oslo";
const rateLimitWindowMs = 60 * 60 * 1000;
const rateLimitMax = 5;
const requestsByIp = new Map();

function respond(res, status, error) {
  return res.status(status).json({ ok: false, error });
}

function cleanText(value, maxLength, multiline = false) {
  if (typeof value !== "string" || value.length > maxLength) return "";
  const withoutControls = value.replace(multiline ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g, "");
  return withoutControls.trim();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string") return forwardedFor.split(",").pop().trim();
  return req.socket?.remoteAddress || "unknown";
}

function isRateLimited(ip, now) {
  if (requestsByIp.size > 1000) {
    for (const [key, entry] of requestsByIp) {
      if (entry.resetAt <= now) requestsByIp.delete(key);
    }
  }

  const entry = requestsByIp.get(ip);
  if (!entry || entry.resetAt <= now) {
    requestsByIp.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }
  if (entry.count >= rateLimitMax) return true;
  entry.count += 1;
  return false;
}

function validateMeetingTime(startValue, endValue) {
  if (!startValue && !endValue) return null;
  const isoDateTime = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2})$/;
  if (typeof startValue !== "string" || typeof endValue !== "string") return null;
  if (!isoDateTime.test(startValue) || !isoDateTime.test(endValue)) return null;

  const start = new Date(startValue);
  const end = new Date(endValue);
  if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime())) return null;
  if (start <= new Date() || end <= start || end.getTime() - start.getTime() > 12 * 60 * 60 * 1000) return null;
  return { start: start.toISOString(), end: end.toISOString(), requested: true };
}

function makeCalendarEvent(form) {
  const description = [
    `Name: ${form.name}`,
    `Business: ${form.business}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Service: ${form.service}`,
    `Budget: ${form.budget}`,
    `Project description: ${form.description}`,
    `Add-ons: ${form.addons.length ? form.addons.join(", ") : "None"}`,
    `Requested meeting time: ${form.meetingStart} to ${form.meetingEnd}`,
    "This is a requested meeting, not a confirmed appointment."
  ].join("\n\n");

  return {
    summary: `Website project — ${form.business}`,
    description,
    start: { dateTime: form.meetingStart, timeZone: calendarTimeZone },
    end: { dateTime: form.meetingEnd, timeZone: calendarTimeZone }
  };
}

function makeEmail(form) {
  const rows = [
    ["Name", form.name],
    ["Business", form.business],
    ["Email", form.email],
    ["Phone", form.phone],
    ["Service", form.service],
    ["Budget", form.budget],
    ["Project description", form.description],
    ["Add-ons", form.addons.length ? form.addons.join(", ") : "None"]
  ];
  const htmlRows = rows.map(([label, value]) => `
    <tr>
      <th align="left" valign="top" style="padding:12px 14px;border-bottom:1px solid #e7ebe8;color:#607068;font-size:12px;font-weight:500;text-align:left;">${escapeHtml(label)}</th>
      <td style="padding:12px 14px;border-bottom:1px solid #e7ebe8;color:#17231d;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(value)}</td>
    </tr>`).join("");
  const text = rows.map(([label, value]) => `${label}:\n${value}`).join("\n\n");

  return {
    subject: `New website request — ${form.business}`,
    html: `<!doctype html>
      <html><body style="margin:0;padding:32px 12px;background:#f4f6f4;font-family:Arial,Helvetica,sans-serif;color:#17231d;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #e7ebe8;border-radius:12px;overflow:hidden;">
          <tr><td style="padding:26px 28px;background:#17231d;color:#fff;">
            <p style="margin:0 0 8px;color:#87ead2;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;">NKTMZNV · Website enquiry</p>
            <h1 style="margin:0;font-size:22px;font-weight:600;">New project request</h1>
          </td></tr>
          <tr><td style="padding:20px 28px 8px;color:#607068;font-size:14px;line-height:1.6;">A new request was submitted through the website.</td></tr>
          <tr><td style="padding:8px 16px 24px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">${htmlRows}</table>
          </td></tr>
        </table>
      </body></html>`,
    text
  };
}

async function sendEmail(form) {
  const message = makeEmail(form);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: [recipient],
      reply_to: form.email,
      subject: message.subject,
      html: message.html,
      text: message.text
    })
  });
  if (!response.ok) {
    console.error("Order email delivery failed", { status: response.status });
    throw new Error("Email delivery failed");
  }
}

async function getGoogleAccessToken() {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      grant_type: "refresh_token"
    })
  });
  const result = await response.json();
  if (!response.ok || typeof result.access_token !== "string") {
    console.error("Google Calendar authentication failed", { status: response.status });
    throw new Error("Google Calendar authentication failed");
  }
  return result.access_token;
}

async function createCalendarEvent(form) {
  const accessToken = await getGoogleAccessToken();
  const calendarId = encodeURIComponent(process.env.GOOGLE_CALENDAR_ID);
  const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(makeCalendarEvent(form))
  });
  if (!response.ok) {
    console.error("Google Calendar event creation failed", { status: response.status });
    throw new Error("Google Calendar event creation failed");
  }
}

function getMissingEnvironment(form) {
  const required = ["RESEND_API_KEY", "RESEND_FROM_EMAIL"];
  if (form.meetingStart && form.meetingEnd) {
    required.push(
      "GOOGLE_CLIENT_ID",
      "GOOGLE_CLIENT_SECRET",
      "GOOGLE_REFRESH_TOKEN",
      "GOOGLE_CALENDAR_ID"
    );
  }
  return required.filter((key) => !process.env[key]);
}

function validateForm(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  if (JSON.stringify(body).length > 20000) return null;
  if (body.website !== undefined && (typeof body.website !== "string" || body.website.trim())) return null;
  if (body.addons !== undefined && (
    !Array.isArray(body.addons)
    || body.addons.length > 10
    || body.addons.some((value) => typeof value !== "string" || value.length > 120)
  )) return null;

  const form = {
    name: cleanText(body.name, 120),
    business: cleanText(body.business, 160),
    email: cleanText(body.email, 254),
    phone: cleanText(body.phone, 40),
    service: cleanText(body.service, 120),
    budget: cleanText(body.budget, 120),
    description: cleanText(body.description, 5000, true),
    addons: Array.isArray(body.addons)
      ? body.addons.slice(0, 10).map((value) => cleanText(value, 120)).filter(Boolean)
      : []
  };

  if (!form.name || !form.business || !form.phone || !form.service || !form.budget || !form.description) return null;
  if (form.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return null;
  if (form.email.length > 254 || /[\r\n]/.test(form.business)) return null;
  if (Boolean(body.meetingStart) !== Boolean(body.meetingEnd)) return null;
  const meeting = (body.meetingStart || body.meetingEnd)
    ? validateMeetingTime(body.meetingStart, body.meetingEnd)
    : null;
  if ((body.meetingStart || body.meetingEnd) && !meeting) return null;
  if (meeting) {
    form.meetingStart = meeting.start;
    form.meetingEnd = meeting.end;
  }
  return form;
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return respond(res, 405, "Use POST to submit the form.");
  }

  const origin = req.headers.origin;
  const host = req.headers.host;
  if (!origin || !host) return respond(res, 403, "This request origin is not allowed.");
  try {
    if (new URL(origin).host !== host) return respond(res, 403, "This request origin is not allowed.");
  } catch {
    return respond(res, 403, "This request origin is not allowed.");
  }

  const contentType = req.headers["content-type"] || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return respond(res, 415, "Send the form as JSON.");
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return respond(res, 400, "The submitted form data is not valid JSON.");
    }
  }
  const form = validateForm(body);
  if (!form) return respond(res, 400, "Please check the form fields and try again.");
  if (isRateLimited(getClientIp(req), Date.now())) {
    return respond(res, 429, "Too many requests. Please try again later.");
  }

  if (getMissingEnvironment(form).length) {
    console.error("Order form integrations are missing required environment variables");
    return respond(res, 503, "The request service is not configured yet.");
  }

  try {
    await sendEmail(form);
    if (form.meetingStart && form.meetingEnd) {
      await createCalendarEvent(form);
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Order form integrations failed", { error: error.name });
    return respond(res, 502, "We couldn't complete your request right now. Please try again later.");
  }
};
