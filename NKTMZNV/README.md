# NKTMZNV

Static HTML/CSS/JavaScript website with a Vercel serverless endpoint for project requests.

## Deploying on Vercel

Import this project into Vercel with the project root as the root directory. The site files remain static; `api/submit-form.js` is deployed as a Node.js serverless function at `POST /api/submit-form`. No client-side secrets or additional npm packages are required.

Add these environment variables in **Vercel → Project → Settings → Environment Variables**, for every deployment environment that should accept requests, then redeploy:

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | A Resend API key with permission to send email |
| `RESEND_FROM_EMAIL` | A sender using a domain verified in Resend, for example `NKTMZNV <requests@your-verified-domain.com>` |
| `GOOGLE_CLIENT_ID` | OAuth 2.0 client ID from Google Cloud (needed only when a requested meeting time is submitted) |
| `GOOGLE_CLIENT_SECRET` | OAuth 2.0 client secret from Google Cloud (needed only when a requested meeting time is submitted) |
| `GOOGLE_REFRESH_TOKEN` | Refresh token authorized for the Google account whose calendar should receive requested-meeting events |
| `GOOGLE_CALENDAR_ID` | `primary` for that account's primary calendar, or the ID of another calendar it can edit |

Do not commit these values or add them to `index.html` or `script.js`. `RESEND_API_KEY` and `RESEND_FROM_EMAIL` are required for every submission. The Google variables are required only for submissions that include both `meetingStart` and `meetingEnd`. Without those times, the endpoint sends the email and returns success without calling Google Calendar. The visitor only sees a generic retry message if the endpoint fails.

## SEO production URL

The production URL is `https://nktmznv-web.vercel.app/`. The canonical URL, Open Graph/structured-data URLs, robots sitemap, and sitemap homepage use this production domain.

## Email setup (Resend)

1. Create a Resend account and add/verify a sending domain.
2. Create an API key and set it as `RESEND_API_KEY` in Vercel.
3. Set `RESEND_FROM_EMAIL` to a sender address on that verified domain. The notification recipient is `wxwstdd@gmail.com`; replies are directed to the submitted client email.

## Google Calendar setup

1. In [Google Cloud Console](https://console.cloud.google.com/), create or select a project.
2. Open **APIs & Services → Library**, find **Google Calendar API**, and enable it for the project.
3. Configure the OAuth consent screen for the account type you need. If the app is in **Testing**, add the Google account that owns the destination calendar as a test user. For ongoing use, move the consent screen to **In production**; Google may require verification for an externally available app requesting calendar access.
4. Under **APIs & Services → Credentials**, create an **OAuth client ID** (Web application). Add `https://developers.google.com/oauthplayground` as an authorized redirect URI.
5. Open [OAuth 2.0 Playground](https://developers.google.com/oauthplayground), select its settings (gear icon), enable **Use your own OAuth credentials**, and enter that OAuth client's ID and secret.
6. In the Playground's scope field, enter `https://www.googleapis.com/auth/calendar.events`. Authorize the account that owns the calendar, then exchange the authorization code for tokens. Copy the resulting refresh token into Vercel as `GOOGLE_REFRESH_TOKEN`.
7. Add the OAuth client ID and secret to Vercel as `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`. Set `GOOGLE_CALENDAR_ID` to `primary` (or the target calendar ID), then redeploy.

The OAuth client must be allowed to access the selected calendar. For a secondary calendar, use its Calendar settings to find its ID and ensure the authorized account has permission to create events.

## Calendar event timing

The current form does not request a meeting date or time. A normal project enquiry sends the notification email only; it does not create any Google Calendar event. The API does not create placeholder events.

The API is ready to accept optional `meetingStart` and `meetingEnd` fields as ISO 8601 date-times with a timezone offset, for example `2027-04-12T10:00:00+02:00` and `2027-04-12T10:30:00+02:00`. Both values must be supplied, must be in the future, and the event may not exceed 12 hours. When both are supplied, the email is sent and a calendar event is created at that requested time in the `Europe/Oslo` time zone. The event description labels it as a requested meeting, not a confirmed appointment. When adding date/time inputs to the form, include both fields in the JSON sent by `script.js`.

## Spam protection and delivery behavior

The endpoint validates and bounds submitted values, escapes all user-provided content in the HTML email, checks the request origin, uses a honeypot field, and applies a best-effort per-instance limit of five submissions per IP per hour. Vercel serverless instances do not share in-memory rate-limit state; use a shared store such as Upstash if a globally enforced limit is required.

Email and calendar delivery use external services and cannot be made atomic. When meeting times are included, the endpoint sends the email first and creates the calendar event second. If calendar event creation fails, the visitor receives an error and can retry; the email may already have been delivered. Check the inbox and calendar before manually retrying such a partially completed requested-meeting submission.
