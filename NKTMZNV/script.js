// Keep contact details and all editable prices here.
const siteConfig = {
  email: "wxwstdd@gmail.com",
  phone: "+4746231251",
  phoneDisplay: "+47 462 31 251",
  instagram: "https://www.instagram.com/nktmznv/",
  facebook: "https://www.facebook.com/profile.php?id=61586316614468",
  services: [
    { id: "landing", price: 2500 },
    { id: "business", price: 5000 },
    { id: "premium", price: 8000 }
  ],
  addons: [
    { id: "booking", price: 1500 },
    { id: "extraPage", price: 500 },
    { id: "languages", price: 1000 },
    { id: "animations", price: 1000 },
    { id: "custom", price: null }
  ],
  projects: [
    { id: "cleancar", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1300&q=85" },
    { id: "local", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1300&q=85" },
    { id: "creative", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1300&q=85" }
  ]
};

const translations = {
  no: {
    title: "Webdesign i Bergen | Moderne nettsider for bedrifter – NKTMZNV",
    description: "NKTMZNV tilbyr moderne webdesign og webutvikling i Bergen. Vi lager raske, moderne og profesjonelle nettsider for bedrifter og små bedrifter.",
    skipLink: "Hopp til innhold", homeLabel: "NKTMZNV hjem", footerHome: "NKTMZNV tilbake til toppen",
    menuOpen: "Åpne meny", menuClose: "Lukk meny", mainNav: "Hovedmeny", footerNav: "Bunnmeny",
    navHome: "Hjem", navServices: "Tjenester", navPricing: "Priser", navProcess: "Prosess", navContact: "Kontakt",
    socialLabel: "Sosiale medier", languageLabel: "Velg språk", norwegianLabel: "Norsk", englishLabel: "Engelsk",
    switchToDark: "Bytt til mørkt tema", switchToLight: "Bytt til lyst tema",
    heroEyebrow: "UAVHENGIG DIGITALT STUDIO · BERGEN", heroTitle: "WEBDESIGN I BERGEN.<br><span>MODERNE NETTSIDER</span><br><span class=\"text-outline\">FOR BEDRIFTER.</span>",
    heroSubtitle: "Jeg tilbyr webdesign og webutvikling i Bergen og ellers i Norge, og lager moderne nettsider for bedrifter.",
    orderButton: "BESTILL NETTSIDE", viewServices: "SE TJENESTER", heroNote: "DESIGNET FOR FOLK SOM BYGGER NOE",
    heroVisualLabel: "Nettsidekonsept på en dataskjerm", heroImageAlt: "Arbeidsplass for webdesign og webutvikling",
    previewHeadline: "Ideer, gjort<br><span>digitale.</span>", previewFooter: "DESIGN MED RETNING",
    heroVisualCaption: "FRA FØRSTE SKISSE TIL SISTE DETALJ", heroBottom: "BYGGET MED KLAR RETNING", scrollServices: "Bla til tjenester",
    manifestoIndex: "ET STERKT FØRSTEINNTRYKK", manifestoEyebrow: "NETTSIDEN ER OFTE FØRSTE MØTE MED MERKEVAREN DIN",
    manifestoTitle: "En god nettside<br><span>gjør inntrykk.</span>",
    manifestoBody: "En god nettside gjør det enkelt for kundene å forstå hva bedriften tilbyr, bli trygge på deg og ta neste steg.",
    servicesEyebrow: "TJENESTER", servicesTitle: "WEBDESIGN OG<br><span>WEBUTVIKLING.</span>",
    servicesIntro: "Jeg lager moderne nettsider for bedrifter i Bergen og resten av Norge, fra webdesign til ferdig utviklet løsning.",
    addonsEyebrow: "BYGG VIDERE", addonsTitle: "Tilleggstjenester", addonsIntro: "Velg tillegg i bestillingsskjemaet, så tar vi det med i forespørselen.",
    pricingNote: "Alle priser er veiledende fra-priser i NOK. Endelig omfang avklares før oppstart.",
    serviceNames: { landing: "Landingsside", business: "Bedriftsnettside", premium: "Premium nettside" },
    serviceDescriptions: {
      landing: "En tydelig og moderne start for bedrifter som trenger en sterk tilstedeværelse på nett.",
      business: "En komplett nettside for små bedrifter, bygget for å svare på kundenes spørsmål og skape kontakt.",
      premium: "En mer avansert nettside for bedrifter som vil ha en særegen digital opplevelse."
    },
    serviceFeatures: {
      landing: ["Moderne design", "Responsivt oppsett", "Tilpasset mobil", "Kontaktknapper", "Enkle animasjoner"],
      business: ["Opptil 5 sider", "Skreddersydd design", "Responsivt design", "Kontaktskjema", "Integrasjon med sosiale medier", "Animasjoner", "Grunnleggende SEO"],
      premium: ["Skreddersydd UI/UX", "Avanserte animasjoner", "Bestillingsfunksjon", "Flerspråklig støtte", "Avansert responsivt design", "SEO-optimalisering", "Tilpassede interaksjoner"]
    },
    priceFrom: "Fra", orderService: "BESTILL", serviceTag: "NETTSIDETJENESTE",
    addons: {
      booking: "Bestillingsfunksjon", extraPage: "Ekstra underside", languages: "Norsk + engelsk", animations: "Avanserte animasjoner", custom: "Tilpasset funksjonalitet"
    },
    addonPrice: "Pris", contactForPrice: "Ta kontakt for pris", addonSelect: "Legg til i forespørselen",
    processEyebrow: "EN TYDELIG PROSESS", processTitle: "Fra idé til<br><span>lansering.</span>",
    processIntro: "Fra planlegging til lansering får du tydelige avklaringer, jevn fremdrift og oversikt over neste steg.",
    process: [
      { title: "Fortell hva du trenger", description: "Vi avklarer mål, innhold og hva nettsiden skal gjøre for bedriften din." },
      { title: "Jeg lager designet", description: "Jeg former uttrykket og bygger en fungerende førsteversjon." },
      { title: "Du går gjennom nettsiden", description: "Du gir tilbakemeldinger, og vi finpusser detaljene sammen." },
      { title: "Nettsiden går live", description: "Når alt er godkjent, klargjøres nettsiden for publisering." }
    ],
    portfolioEyebrow: "UTVALGTE KONSEPTER", portfolioTitle: "UTVALGT<br><span>ARBEID.</span>",
    portfolioIntro: "Konsepter som viser hvordan tydelig design kan gi små merkevarer en sterkere digital tilstedeværelse.",
    portfolioDisclaimer: "Prosjektene er konseptarbeid og demoer, ikke oppdrag for ekte kunder.", concept: "KONSEPT", demo: "DEMO",
    projects: {
      cleancar: { name: "CleanCar Bergen", description: "Konsept for bilpleie med tydelig tjenestemeny og en enkel digital bestillingsflyt.", alt: "Konseptbilde av blank sportsbil for CleanCar Bergen" },
      local: { name: "Lokal bedrift", description: "Et varmt, ryddig nettstedskonsept for en lokal tjenestebedrift.", alt: "Lyst, moderne arbeidsmiljø for nettstedskonseptet Lokal bedrift" },
      creative: { name: "Kreativ landingsside", description: "En visuell landingsside for en personlig merkevare og et kreativt tilbud.", alt: "Digitalt prosjektoversyn for et konsept til en kreativ landingsside" }
    },
    viewProject: "SE KONSEPT", projectDialogLabel: "Prosjektkonsept", conceptNote: "Konseptarbeid — ikke et publisert kundeprosjekt.", closeDialog: "Lukk prosjektvisning",
    whyEyebrow: "SAMARBEID, MED RETNING", whyTitle: "Hvorfor<br><span>velge meg?</span>",
    benefits: [
      { title: "MODERNE DESIGN", description: "Nettsider utformet med et moderne og gjennomtenkt visuelt uttrykk.", mark: "01 / ✳" },
      { title: "MOBILEN FØRST", description: "Alt fungerer godt på telefon, nettbrett og datamaskin.", mark: "02 / ↗" },
      { title: "EFFEKTIV LEVERING", description: "En ryddig utviklingsprosess med effektiv fremdrift og rask kommunikasjon.", mark: "03 / →" },
      { title: "PERSONLIG SAMARBEID", description: "Hver nettside tilpasses kunden, målene og merkevaren.", mark: "04 / ∙" }
    ],
    orderEyebrow: "FORTELL MEG OM IDEEN DIN", orderTitle: "La oss bygge<br><span>nettsiden din.</span>",
    orderIntro: "Fortell litt om bedriften og hva du trenger. Så tar vi en uforpliktende prat om riktig løsning.",
    orderEmailLabel: "FORETREKKER DU E-POST?", formTitle: "NETTSIDEFORESPØRSEL",
    fieldName: "NAVN", fieldBusiness: "BEDRIFTENS NAVN", fieldEmail: "E-POST", fieldPhone: "TELEFON",
    fieldService: "VELG EN TJENESTE", fieldBudget: "BUDSJETT", fieldProject: "FORTELL OM PROSJEKTET",
    namePlaceholder: "Fullt navn", businessPlaceholder: "Bedrift eller merkevare", emailPlaceholder: "deg@eksempel.no", phonePlaceholder: "+47", projectPlaceholder: "Hva trenger du hjelp med?",
    servicePrompt: "Velg en tjeneste", budgetPrompt: "Velg et budsjett", customProject: "Tilpasset prosjekt",
    budgetOptions: ["Under 3 000 NOK", "3 000–5 000 NOK", "5 000–8 000 NOK", "8 000+ NOK", "Usikker ennå"],
    selectedAddons: "VALGTE TILLEGG", formNote: "Informasjonen sendes sikkert til oss gjennom dette skjemaet.",
    sendRequest: "SEND FORESPØRSEL", submittingRequest: "SENDER FORESPØRSEL…", requestFailed: "Forespørselen kunne ikke sendes akkurat nå. Prøv igjen om litt.",
    requestSent: "Forespørselen er sendt.", requestPrepared: "FORESPØRSEL MOTTATT", thankYou: "TUSEN TAKK!", requestReady: "Forespørselen din er sendt. Jeg tar kontakt snart.",
    emailHandoff: "Kalenderinvitasjon opprettes bare hvis du har oppgitt ønsket møtetid. En slik forespørsel er ikke en bekreftet avtale.", backToWebsite: "TILBAKE TIL NETTSIDEN",
    validationName: "Skriv inn navnet ditt.", validationNameShort: "Navnet må inneholde minst to tegn.", validationBusiness: "Skriv inn bedriftens navn.",
    validationEmail: "Skriv inn e-postadressen din.", validationEmailInvalid: "Skriv inn en gyldig e-postadresse.",
    validationPhone: "Skriv inn telefonnummeret ditt.", validationService: "Velg en tjeneste.", validationBudget: "Velg et budsjett.", validationProject: "Fortell kort om prosjektet ditt.",
    contactEyebrow: "NESTE STEG STARTER MED EN SAMTALE", contactTitle: "Klar for å bygge<br><span>nettsiden din?</span>",
    contactBody: "Trenger bedriften din en moderne nettside? Ta kontakt, så finner vi en løsning som passer målene og behovene dine.",
    sendEmail: "SEND E-POST", callMe: "RING MEG", contactLabel: "DIREKTE LINJER", emailLabel: "E-POST", phoneLabel: "TELEFON",
    footerDescription: "Webdesign og moderne nettsider for bedrifter i Bergen og Norge.", rights: "ALLE RETTIGHETER FORBEHOLDT.", mobileOrder: "BESTILL NETTSIDE"
  },
  en: {
    title: "NKTMZNV | Web Design in Bergen for Businesses",
    description: "NKTMZNV offers web design and development in Bergen, Norway, creating modern websites for businesses and small businesses.",
    skipLink: "Skip to content", homeLabel: "NKTMZNV home", footerHome: "NKTMZNV, back to top",
    menuOpen: "Open navigation", menuClose: "Close navigation", mainNav: "Main navigation", footerNav: "Footer navigation",
    navHome: "Home", navServices: "Services", navPricing: "Pricing", navProcess: "Process", navContact: "Contact",
    socialLabel: "Social media", languageLabel: "Choose language", norwegianLabel: "Norwegian", englishLabel: "English",
    switchToDark: "Switch to dark mode", switchToLight: "Switch to light mode",
    heroEyebrow: "INDEPENDENT DIGITAL STUDIO · BERGEN", heroTitle: "YOUR WEBSITE.<br><span>BUILT TO</span><br><span class=\"text-outline\">STAND OUT.</span>",
    heroSubtitle: "Modern, fast and responsive websites for businesses, creators and brands.",
    orderButton: "ORDER A WEBSITE", viewServices: "VIEW SERVICES", heroNote: "DESIGNED FOR PEOPLE BUILDING SOMETHING",
    heroVisualLabel: "Website concept displayed on a computer screen", heroImageAlt: "Web design and development workspace",
    previewHeadline: "Ideas, made<br><span>digital.</span>", previewFooter: "DESIGN WITH INTENT",
    heroVisualCaption: "FROM FIRST SKETCH TO FINAL DETAIL", heroBottom: "BUILT WITH CLEAR INTENT", scrollServices: "Scroll to services",
    manifestoIndex: "A STRONG FIRST IMPRESSION", manifestoEyebrow: "YOUR WEBSITE IS OFTEN YOUR BRAND'S FIRST HELLO",
    manifestoTitle: "Make it<br><span>memorable.</span>",
    manifestoBody: "A good website does more than look right. It helps people understand what you offer, trust your business and take the next step.",
    servicesEyebrow: "SERVICES", servicesTitle: "WHAT I CAN<br><span>BUILD.</span>",
    servicesIntro: "Clear deliverables, thoughtful design and a website built around what you actually need.",
    addonsEyebrow: "MAKE IT MORE", addonsTitle: "Optional add-ons", addonsIntro: "Select add-ons in the order form and I will include them in your request.",
    pricingNote: "All prices are indicative starting prices in NOK. Final scope is agreed before work begins.",
    serviceNames: { landing: "Landing Page", business: "Business Website", premium: "Premium Website" },
    serviceDescriptions: {
      landing: "A clear, modern starting point for businesses that need a confident online presence.",
      business: "A complete website for a small business, built to answer customer questions and invite contact.",
      premium: "A more advanced website for businesses looking for a distinctive digital experience."
    },
    serviceFeatures: {
      landing: ["Modern design", "Responsive layout", "Mobile optimization", "Contact buttons", "Basic animations"],
      business: ["Up to 5 pages", "Custom design", "Responsive design", "Contact form", "Social media integration", "Animations", "SEO basics"],
      premium: ["Custom UI/UX", "Advanced animations", "Booking functionality", "Multi-language support", "Advanced responsive design", "SEO optimization", "Custom interactions"]
    },
    priceFrom: "From", orderService: "ORDER", serviceTag: "WEBSITE SERVICE",
    addons: {
      booking: "Online booking", extraPage: "Extra page", languages: "Norwegian + English", animations: "Advanced animations", custom: "Custom functionality"
    },
    addonPrice: "Price", contactForPrice: "Contact for price", addonSelect: "Add to request",
    processEyebrow: "A CLEAR PROCESS", processTitle: "From first thought<br><span>to go-live.</span>",
    processIntro: "You always know what is happening, what I need from you, and what comes next.",
    process: [
      { title: "Tell me what you need", description: "We clarify your goals, content and what the website needs to do for your business." },
      { title: "I create the design", description: "I shape the visual direction and build a working first version." },
      { title: "You review the website", description: "You share feedback, and we refine the details together." },
      { title: "Your website goes live", description: "Once approved, the website is prepared for launch." }
    ],
    portfolioEyebrow: "SELECTED CONCEPTS", portfolioTitle: "SELECTED<br><span>WORK.</span>",
    portfolioIntro: "Concepts showing how considered design can give small brands a stronger presence online.",
    portfolioDisclaimer: "These projects are concepts and demos, not commissioned work for real clients.", concept: "CONCEPT", demo: "DEMO",
    projects: {
      cleancar: { name: "CleanCar Bergen", description: "A car-care concept with a clear service menu and a simple online booking flow.", alt: "Glossy sports car concept image for CleanCar Bergen" },
      local: { name: "Local Business", description: "A warm, considered website concept for a neighborhood service business.", alt: "Bright modern workplace for the Local Business website concept" },
      creative: { name: "Creative Landing Page", description: "A visual landing page concept for a personal brand and creative offering.", alt: "Digital project overview for a creative landing page concept" }
    },
    viewProject: "VIEW CONCEPT", projectDialogLabel: "Project concept", conceptNote: "Concept work — not a published client project.", closeDialog: "Close project preview",
    whyEyebrow: "A COLLABORATION WITH INTENT", whyTitle: "Why<br><span>choose me?</span>",
    benefits: [
      { title: "MODERN DESIGN", description: "Websites designed with a contemporary, considered visual style.", mark: "01 / ✳" },
      { title: "MOBILE FIRST", description: "Everything works properly on phones, tablets and computers.", mark: "02 / ↗" },
      { title: "FAST DELIVERY", description: "Efficient development, steady progress and clear communication.", mark: "03 / →" },
      { title: "PERSONAL APPROACH", description: "Every website is shaped around the client, their goals and their brand.", mark: "04 / ∙" }
    ],
    orderEyebrow: "TELL ME ABOUT YOUR IDEA", orderTitle: "Let's build<br><span>your website.</span>",
    orderIntro: "Tell me a little about your business and what you need. We can talk through the right solution, with no obligation.",
    orderEmailLabel: "PREFER EMAIL?", formTitle: "WEBSITE REQUEST",
    fieldName: "NAME", fieldBusiness: "BUSINESS NAME", fieldEmail: "EMAIL", fieldPhone: "PHONE NUMBER",
    fieldService: "CHOOSE A SERVICE", fieldBudget: "BUDGET", fieldProject: "TELL ME ABOUT THE PROJECT",
    namePlaceholder: "Full name", businessPlaceholder: "Business or brand", emailPlaceholder: "you@example.com", phonePlaceholder: "+47", projectPlaceholder: "What do you need help with?",
    servicePrompt: "Choose a service", budgetPrompt: "Choose a budget", customProject: "Custom Project",
    budgetOptions: ["Under 3,000 NOK", "3,000–5,000 NOK", "5,000–8,000 NOK", "8,000+ NOK", "Not sure yet"],
    selectedAddons: "SELECTED ADD-ONS", formNote: "Your information is sent securely to us using this form.",
    sendRequest: "SEND REQUEST", submittingRequest: "SENDING REQUEST…", requestFailed: "Your request couldn't be sent right now. Please try again shortly.",
    requestSent: "Your request has been sent.", requestPrepared: "REQUEST RECEIVED", thankYou: "THANK YOU!", requestReady: "Your request has been sent. I'll be in touch soon.",
    emailHandoff: "A calendar event is created only if you provide a requested meeting time. A request is not a confirmed appointment.", backToWebsite: "BACK TO WEBSITE",
    validationName: "Please enter your name.", validationNameShort: "Your name must contain at least two characters.", validationBusiness: "Please enter your business name.",
    validationEmail: "Please enter your email address.", validationEmailInvalid: "Please enter a valid email address.",
    validationPhone: "Please enter your phone number.", validationService: "Please choose a service.", validationBudget: "Please choose a budget.", validationProject: "Please tell me a little about your project.",
    contactEyebrow: "THE NEXT STEP STARTS WITH A CONVERSATION", contactTitle: "Ready to build<br><span>your website?</span>",
    contactBody: "Have an idea or need a website for your business? Get in touch and let's talk.",
    sendEmail: "SEND AN EMAIL", callMe: "CALL ME", contactLabel: "DIRECT LINES", emailLabel: "EMAIL", phoneLabel: "PHONE",
    footerDescription: "Modern websites for businesses, creators and brands.", rights: "ALL RIGHTS RESERVED.", mobileOrder: "ORDER A WEBSITE"
  }
};

const languageStorageKey = "nktmznv-language";
let currentLanguage = getStoredLanguage();
let currentTheme = getStoredTheme();
let statusKind = "";
let currentProjectId = null;

const serviceGrid = document.querySelector("#service-grid");
const addonList = document.querySelector("#addon-list");
const portfolioGrid = document.querySelector("#portfolio-grid");
const processList = document.querySelector("#process-list");
const whyGrid = document.querySelector("#why-grid");
const serviceSelect = document.querySelector("#client-service");
const budgetSelect = document.querySelector("#client-budget");
const orderForm = document.querySelector("#projectForm");
const formStatus = document.querySelector("#form-status");
const orderConfirmation = document.querySelector("#order-confirmation");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const themeToggle = document.querySelector("[data-theme-toggle]");
const projectDialog = document.querySelector("#project-dialog");
let formSubmitted = false;
let isSubmitting = false;

function getStoredLanguage() {
  try {
    return localStorage.getItem(languageStorageKey) === "en" ? "en" : "no";
  } catch {
    return "no";
  }
}

function getStoredTheme() {
  try {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
  } catch {
    return "light";
  }
}

function updateThemeToggle() {
  const copy = translations[currentLanguage];
  const isLight = currentTheme === "light";
  const label = copy[isLight ? "switchToDark" : "switchToLight"];
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
  themeToggle.setAttribute("aria-pressed", String(!isLight));
  themeToggle.querySelector(".theme-toggle__icon--moon").hidden = !isLight;
  themeToggle.querySelector(".theme-toggle__icon--sun").hidden = isLight;
}

function setTheme(theme, persist = true) {
  if (theme !== "light" && theme !== "dark") return;
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#0B0B0C" : "#FFFFFF";
  updateThemeToggle();
  if (!persist) return;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Theme switching remains available if browser storage is disabled.
  }
}

function formatPrice(value) {
  return new Intl.NumberFormat(currentLanguage === "no" ? "nb-NO" : "en-GB", { maximumFractionDigits: 0 }).format(value);
}

function renderServiceCards() {
  const copy = translations[currentLanguage];
  serviceGrid.innerHTML = siteConfig.services.map((service, index) => {
    const features = copy.serviceFeatures[service.id].map((feature) => `<li>${feature}</li>`).join("");
    return `<article class="service-card" data-reveal>
      <div class="service-card__top"><span class="service-card__index">0${index + 1} / ${copy.serviceTag}</span><span class="service-card__marker" aria-hidden="true">0${index + 1}</span></div>
      <h3>${copy.serviceNames[service.id]}</h3>
      <p class="service-card__description">${copy.serviceDescriptions[service.id]}</p>
      <ul class="service-card__features">${features}</ul>
      <div class="service-card__bottom"><span class="service-card__price"><small>${copy.priceFrom}</small>${formatPrice(service.price)} NOK</span><button class="service-card__order" type="button" data-order-service="${service.id}">${copy.orderService}<span aria-hidden="true">↗</span></button></div>
    </article>`;
  }).join("");
  observeReveals(serviceGrid);
}

function renderAddons() {
  const copy = translations[currentLanguage];
  addonList.innerHTML = siteConfig.addons.map((addon) => {
    const price = addon.price === null ? copy.contactForPrice : `+${formatPrice(addon.price)} NOK`;
    return `<div class="addon-row">
      <input id="addon-${addon.id}" name="addons" type="checkbox" value="${addon.id}">
      <label for="addon-${addon.id}">${copy.addons[addon.id]}</label>
      <span class="addon-row__price">${price}<small>${addon.price === null ? "" : copy.addonPrice}</small></span>
    </div>`;
  }).join("");
  updateSelectedAddons();
}

function renderProjectCards() {
  const copy = translations[currentLanguage];
  portfolioGrid.innerHTML = siteConfig.projects.map((project, index) => {
    const details = copy.projects[project.id];
    const label = index === 0 ? copy.concept : copy.demo;
    return `<article class="portfolio-card" data-reveal>
      <button class="portfolio-card__visual" type="button" data-project="${project.id}" aria-label="${copy.viewProject}: ${details.name}">
        <img src="${project.image}" alt="${details.alt}" loading="lazy">
        <span class="portfolio-card__label">${label}</span><span class="portfolio-card__open" aria-hidden="true">↗</span>
      </button>
      <div class="portfolio-card__meta"><div><h3>${details.name}</h3><p>${details.description}</p></div><span class="portfolio-card__number">0${index + 1}</span></div>
    </article>`;
  }).join("");
  observeReveals(portfolioGrid);
}

function renderProcess() {
  const copy = translations[currentLanguage];
  processList.innerHTML = copy.process.map((step, index) => `<li class="process-step" data-reveal><span class="process-step__number">0${index + 1}</span><h3>${step.title}</h3><p>${step.description}</p></li>`).join("");
  observeReveals(processList);
}

function renderBenefits() {
  const copy = translations[currentLanguage];
  whyGrid.innerHTML = copy.benefits.map((benefit) => `<article class="why-item" data-reveal><span class="why-item__index">${benefit.mark}</span><span class="why-item__glyph" aria-hidden="true">↗</span><h3>${benefit.title}</h3><p>${benefit.description}</p></article>`).join("");
  observeReveals(whyGrid);
}

function renderSelectOptions() {
  const copy = translations[currentLanguage];
  const previousService = serviceSelect.value;
  const previousBudget = budgetSelect.value;
  serviceSelect.replaceChildren(new Option(copy.servicePrompt, "", true, !previousService));
  siteConfig.services.forEach((service) => serviceSelect.add(new Option(copy.serviceNames[service.id], service.id)));
  serviceSelect.add(new Option(copy.customProject, "custom"));
  serviceSelect.value = previousService;

  budgetSelect.replaceChildren(new Option(copy.budgetPrompt, "", true, !previousBudget));
  copy.budgetOptions.forEach((option, index) => budgetSelect.add(new Option(option, String(index))));
  budgetSelect.value = previousBudget;
}

function updateSelectedAddons() {
  const copy = translations[currentLanguage];
  const chosen = new Set(Array.from(document.querySelectorAll('input[name="addons"]:checked'), (input) => input.value));
  document.querySelector("#selected-addon-list").innerHTML = siteConfig.addons.map((addon) => `<label><input type="checkbox" name="addons" value="${addon.id}" ${chosen.has(addon.id) ? "checked" : ""}><span>${copy.addons[addon.id]}</span></label>`).join("");
  syncAddonCheckboxes();
}

function syncAddonCheckboxes() {
  const checked = Array.from(document.querySelectorAll('input[name="addons"]:checked'), (input) => input.value);
  document.querySelectorAll('input[name="addons"]').forEach((input) => {
    input.checked = checked.includes(input.value);
  });
}

function renderContactDetails() {
  document.querySelectorAll("[data-site-email]").forEach((link) => { link.href = `mailto:${siteConfig.email}`; });
  document.querySelectorAll("[data-email-text]").forEach((element) => { element.textContent = siteConfig.email; });
  document.querySelectorAll("[data-site-phone]").forEach((link) => { link.href = `tel:${siteConfig.phone}`; });
  document.querySelectorAll("[data-phone-text]").forEach((element) => { element.textContent = siteConfig.phoneDisplay; });
  document.querySelectorAll('[data-social="instagram"]').forEach((link) => { link.href = siteConfig.instagram; });
  document.querySelectorAll('[data-social="facebook"]').forEach((link) => { link.href = siteConfig.facebook; });
}

function updateValidationMessages() {
  const copy = translations[currentLanguage];
  const fields = [
    [document.querySelector("#client-name"), "validationName", "validationNameShort"],
    [document.querySelector("#business-name"), "validationBusiness"],
    [document.querySelector("#client-email"), "validationEmail", "validationEmailInvalid"],
    [document.querySelector("#client-phone"), "validationPhone"],
    [serviceSelect, "validationService"],
    [budgetSelect, "validationBudget"],
    [document.querySelector("#project-description"), "validationProject"]
  ];
  fields.forEach(([field, requiredKey, invalidKey]) => {
    let message = "";
    if (!field.value.trim()) message = copy[requiredKey];
    else if (field.validity.typeMismatch && invalidKey) message = copy[invalidKey];
    else if (field.id === "client-name" && field.value.trim().length < 2) message = copy.validationNameShort;

    const error = document.querySelector(`[data-error-for="${field.id}"]`);
    const shouldShow = formSubmitted || field.dataset.touched === "true";
    error.textContent = shouldShow ? message : "";
    field.setAttribute("aria-invalid", String(shouldShow && Boolean(message)));
  });
}

function setLanguage(language) {
  if (!translations[language]) return;
  currentLanguage = language;
  const copy = translations[language];
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('meta[property="og:title"]').content = copy.title;
  document.querySelector('meta[property="og:description"]').content = copy.description;
  document.querySelector('meta[name="twitter:title"]').content = copy.title;
  document.querySelector('meta[name="twitter:description"]').content = copy.description;
  document.querySelector('meta[property="og:locale"]').content = language === "no" ? "nb_NO" : "en_GB";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", copy[element.dataset.i18nAriaLabel]);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = copy[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const selected = button.dataset.language === language;
    button.setAttribute("aria-pressed", String(selected));
    button.title = copy[button.dataset.language === "no" ? "norwegianLabel" : "englishLabel"];
  });
  const openKey = menuToggle.getAttribute("aria-expanded") === "true" ? "menuClose" : "menuOpen";
  menuToggle.dataset.i18nAriaLabel = openKey;
  menuToggle.setAttribute("aria-label", copy[openKey]);
  updateThemeToggle();

  renderSelectOptions();
  renderServiceCards();
  renderAddons();
  renderProjectCards();
  renderProcess();
  renderBenefits();
  renderContactDetails();
  updateValidationMessages();
  if (statusKind) formStatus.textContent = copy[statusKind];
  if (projectDialog.open && currentProjectId) renderProjectDialog(currentProjectId);
  try { localStorage.setItem(languageStorageKey, language); } catch { /* Language switching still works without browser storage. */ }
}

function observeReveals(root = document) {
  const targets = root.querySelectorAll("[data-reveal]:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }
  targets.forEach((target) => revealObserver.observe(target));
}

const revealObserver = "IntersectionObserver" in window ? new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -24px 0px" }) : null;

function renderProjectDialog(projectId) {
  const project = siteConfig.projects.find((item) => item.id === projectId);
  if (!project) return;
  const copy = translations[currentLanguage];
  const details = copy.projects[projectId];
  document.querySelector("#project-dialog-image").src = project.image;
  document.querySelector("#project-dialog-image").alt = details.alt;
  document.querySelector("#project-dialog-kicker").textContent = `${copy[projectId === "cleancar" ? "concept" : "demo"]} · ${copy.projectDialogLabel}`;
  document.querySelector("#project-dialog-title").textContent = details.name;
  document.querySelector("#project-dialog-description").textContent = details.description;
}

function openProject(projectId) {
  if (!siteConfig.projects.some((project) => project.id === projectId)) return;
  currentProjectId = projectId;
  renderProjectDialog(projectId);
  projectDialog.showModal();
  document.body.classList.add("dialog-open");
  projectDialog.querySelector(".project-dialog__close").focus();
}

function closeProject() {
  if (projectDialog.open) projectDialog.close();
  document.body.classList.remove("dialog-open");
  currentProjectId = null;
}

async function handleOrder(event) {
  event.preventDefault();
  if (isSubmitting) return;
  const copy = translations[currentLanguage];
  formSubmitted = true;
  updateValidationMessages();
  const firstInvalid = orderForm.querySelector('[aria-invalid="true"]');
  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }
  const values = new FormData(orderForm);
  const addonIds = [...new Set(values.getAll("addons"))];
  const serviceId = values.get("service");
  const serviceName = serviceId === "custom" ? copy.customProject : copy.serviceNames[serviceId];
  const budgetValue = values.get("budget");
  const payload = {
    name: values.get("name"),
    business: values.get("business"),
    email: values.get("email"),
    phone: values.get("phone"),
    service: serviceName,
    budget: copy.budgetOptions[Number(budgetValue)] ?? "",
    description: values.get("description"),
    addons: addonIds.map((id) => copy.addons[id]).filter(Boolean),
    website: values.get("website")
  };

  isSubmitting = true;
  statusKind = "submittingRequest";
  formStatus.textContent = copy[statusKind];
  orderForm.setAttribute("aria-busy", "true");
  const submitButton = orderForm.querySelector('[type="submit"]');
  submitButton.disabled = true;
  try {
    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error("Request submission failed");
    statusKind = "requestSent";
    formStatus.textContent = copy[statusKind];
  } catch {
    statusKind = "requestFailed";
    formStatus.textContent = copy[statusKind];
    return;
  } finally {
    isSubmitting = false;
    orderForm.removeAttribute("aria-busy");
    submitButton.disabled = false;
  }
  document.body.classList.add("dialog-open");
  orderConfirmation.showModal();
  document.querySelector("#back-to-website").focus();
}

function closeOrderConfirmation() {
  if (orderConfirmation.open) orderConfirmation.close();
  document.body.classList.remove("dialog-open");
}

renderContactDetails();
setTheme(currentTheme, false);
setLanguage(currentLanguage);
observeReveals();

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[currentLanguage].menuOpen);
  }
});
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  const nextOpen = !isOpen;
  menuToggle.setAttribute("aria-expanded", String(nextOpen));
  menuToggle.setAttribute("aria-label", translations[currentLanguage][nextOpen ? "menuClose" : "menuOpen"]);
  mainNav.classList.toggle("is-open", nextOpen);
});

document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
themeToggle.addEventListener("click", () => setTheme(currentTheme === "light" ? "dark" : "light"));
function scrollToOrder(updateHash = false) {
  if (updateHash && window.location.hash !== "#order") {
    window.history.pushState(null, "", "#order");
  }
  const orderSection = document.querySelector("#order");
  const header = document.querySelector(".header");
  const headerRect = header.getBoundingClientRect();
  const headerPosition = window.getComputedStyle(header).position;
  const headerOffset = ["fixed", "sticky"].includes(headerPosition) && headerRect.bottom > 0
    ? headerRect.bottom
    : 0;
  const breathingRoom = Math.max(12, Math.min(28, window.innerHeight * 0.025));
  const targetTop = window.scrollY + orderSection.getBoundingClientRect().top - headerOffset - breathingRoom;
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  window.scrollTo({ top: Math.max(0, targetTop), behavior });
}

document.addEventListener("click", (event) => {
  const bookingLink = event.target.closest('a[href="#order"]');
  if (!bookingLink) return;
  event.preventDefault();
  scrollToOrder(true);
});

serviceGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-order-service]");
  if (!button) return;
  serviceSelect.value = button.dataset.orderService;
  scrollToOrder();
  serviceSelect.focus({ preventScroll: true });
});

document.addEventListener("click", (event) => {
  const projectButton = event.target.closest("[data-project]");
  if (projectButton) openProject(projectButton.dataset.project);
  if (event.target.matches(".dialog-scrim")) closeProject();
});

document.querySelector(".project-dialog__close").addEventListener("click", closeProject);
projectDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
orderConfirmation.addEventListener("close", () => document.body.classList.remove("dialog-open"));
document.querySelector("#back-to-website").addEventListener("click", closeOrderConfirmation);
addonList.addEventListener("change", (event) => {
  if (event.target.matches('input[name="addons"]')) syncAddonCheckboxes();
});
orderForm.addEventListener("input", (event) => {
  event.target.dataset.touched = "true";
  updateValidationMessages();
});
orderForm.addEventListener("change", (event) => {
  event.target.dataset.touched = "true";
  updateValidationMessages();
  if (event.target.matches('input[name="addons"]')) syncAddonCheckboxes();
});
orderForm.addEventListener("focusout", (event) => {
  if (event.target.matches("input, select, textarea")) {
    event.target.dataset.touched = "true";
    updateValidationMessages();
  }
});
orderForm.addEventListener("submit", handleOrder);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[currentLanguage].menuOpen);
    mainNav.classList.remove("is-open");
  }
});
