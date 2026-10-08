// Keep contact details and all editable prices here.
const siteConfig = {
  email: "wxwstdd@gmail.com",
  phone: "+4746231251",
  phoneDisplay: "+47 462 31 251",
  instagram: "https://www.instagram.com/nktmznv/",
  facebook: "https://www.facebook.com/profile.php?id=61586316614468",
  services: [
    { id: "landing", price: 2990 },
    { id: "business", price: 5990 },
    { id: "premium", price: 9990 },
    { id: "custom", price: 12000 }
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
    heroEyebrow: "UAVHENGIG DIGITALT STUDIO · BERGEN", heroTitle: "Webdesign i Bergen.<br><span>Moderne nettsider</span><br><span class=\"text-outline\">for bedrifter.</span>",
    heroSubtitle: "Jeg designer og utvikler moderne nettsider for små bedrifter – fra første idé til lansering. En gjennomtenkt løsning som fungerer på mobil og datamaskin.",
    orderButton: "BESTILL NETTSIDE", viewServices: "SE ARBEID", heroNote: "DESIGNET FOR FOLK SOM BYGGER NOE",
    comparisonLabel: "Før- og etter-sammenligning av nettside",
    comparisonBefore: "FØR", comparisonAfter: "ETTER", comparisonAddress: "NETTSIDEKONSEPT",
    comparisonBeforeBrand: "DIN BEDRIFT", comparisonBeforeNav: "TJENESTER　OM OSS　KONTAKT",
    comparisonBeforeEyebrow: "ENKELT. TYDELIG.", comparisonBeforeTitle: "En nettside for din bedrift.",
    comparisonBeforeCopy: "Informasjon om tjenestene dine og hvordan kundene kan ta kontakt.",
    comparisonBeforeButton: "TA KONTAKT", comparisonBeforeSection: "VÅRE TJENESTER",
    comparisonAfterBrand: "DIGITALT STUDIO", comparisonAfterNav: "ARBEID　TJENESTER　KONTAKT",
    comparisonAfterEyebrow: "NETTSIDER MED RETNING", comparisonAfterTitle: "Bygget for det neste.",
    comparisonAfterCopy: "En tydelig digital tilstedeværelse, skapt for å ta virksomheten din videre.",
    comparisonAfterButton: "UTFORSK MULIGHETENE", comparisonAfterSection: "STRATEGI · DESIGN · UTVIKLING",
    comparisonBeforeAlt: "Skjermbilde av den opprinnelige nettsiden", comparisonAfterAlt: "Skjermbilde av den nye NKTMZNV-nettsiden",
    comparisonInstructions: "Dra vannrett for å sammenligne. Bruk venstre- og høyrepil for å flytte skillet, eller Home og End for ytterpunktene.",
    comparisonValue: "FØR: {before} % · ETTER: {after} %",
    heroVisualCaption: "FRA FØRSTE SKISSE TIL SISTE DETALJ", heroBottom: "BYGGET MED KLAR RETNING", scrollServices: "Bla til tjenester",
    manifestoIndex: "ET STERKT FØRSTEINNTRYKK", manifestoEyebrow: "NETTSIDEN ER OFTE FØRSTE MØTE MED MERKEVAREN DIN",
    manifestoTitle: "En god nettside<br><span>gjør inntrykk.</span>",
    manifestoBody: "Nettsiden din skal gjøre det lett å forstå hva du tilbyr og hvordan kundene kan komme i kontakt. Jeg bygger med tydelig innhold, gjennomtenkt design og mobilbruk i fokus.",
    valuePoints: ["Skreddersydd design for bedriften din", "Mobiltilpasset fra første skisse", "Responsiv utvikling for mobil, nettbrett og desktop", "SEO-vennlig struktur og teknisk grunnlag", "Norsk og engelsk når prosjektet trenger det", "Fra idé og innhold til ferdig lansering"],
    servicesEyebrow: "TJENESTER", servicesTitle: "DET JEG KAN<br><span>HJELPE MED.</span>",
    servicesIntro: "Fra første visuelle retning til ferdig nettside – velg tjenestene prosjektet ditt trenger.",
    serviceCategories: [
      { title: "Webdesign", description: "En tydelig visuell retning og et skreddersydd uttrykk som passer merkevaren og kundene dine." },
      { title: "Webutvikling", description: "Designet bygges om til en fungerende nettside med struktur og innhold tilpasset virksomheten." },
      { title: "Responsivt design", description: "En gjennomarbeidet opplevelse på mobil, nettbrett og større skjermer." },
      { title: "SEO-grunnlag", description: "Semantisk innhold og teknisk struktur som gir søkemotorer et ryddig utgangspunkt." },
      { title: "Funksjonalitet", description: "Bestilling, skjema og andre funksjoner kan tilpasses behovene i prosjektet." },
      { title: "Redesign", description: "Oppdater uttrykk, innhold og brukeropplevelse på en eksisterende nettside." }
    ],
    addonsEyebrow: "BYGG VIDERE", addonsTitle: "Tilleggstjenester", addonsIntro: "Velg tillegg i bestillingsskjemaet, så tar vi det med i forespørselen.",
    pricingEyebrow: "TYDELIGE FRA-PRISER", pricingTitle: "VELG ET<br><span>UTGANGSPUNKT.</span>",
    pricingIntro: "Prisene gir et utgangspunkt. Vi avklarer innhold, omfang og endelig pris før arbeidet starter.",
    pricingNote: "Fra-priser i NOK. Endelig omfang og pris avtales før oppstart.",
    packageTag: "NETTSIDEPAKKE", recommended: "ANBEFALT",
    serviceNames: { landing: "Starter", business: "Business", premium: "Premium", custom: "Custom" },
    serviceDescriptions: {
      landing: "En profesjonell landingsside med tydelig innhold og en enkel vei til kontakt.",
      business: "En komplett bedriftsnettside med opptil fem sider, kontaktskjema og grunnleggende SEO.",
      premium: "Et mer omfattende nettsted med skreddersydd design og utvidede funksjoner.",
      custom: "Et tilpasset omfang og funksjonalitet ut fra målene for prosjektet."
    },
    serviceFeatures: {
      landing: ["Én landingsside", "Responsivt design", "Kontaktknapper", "Grunnleggende SEO"],
      business: ["Opptil 5 sider", "Skreddersydd design", "Responsivt design", "Kontaktskjema", "Integrasjon med sosiale medier", "Animasjoner", "Grunnleggende SEO"],
      premium: ["Skreddersydd design", "Responsiv utvikling", "Utvidet funksjonalitet", "Avansert SEO-arbeid"],
      custom: ["Omfang tilpasset prosjektet", "Funksjonalitet etter behov", "Pris avklares før oppstart"]
    },
    priceFrom: "Fra",
    addons: {
      booking: "Bestillingsfunksjon", extraPage: "Ekstra underside", languages: "Norsk + engelsk", animations: "Avanserte animasjoner", custom: "Tilpasset funksjonalitet"
    },
    addonPrice: "Pris", contactForPrice: "Ta kontakt for pris", addonSelect: "Legg til i forespørselen",
    processEyebrow: "EN TYDELIG PROSESS", processTitle: "Fra idé til<br><span>lansering.</span>",
    processIntro: "Fire tydelige steg tar prosjektet fra behovsavklaring og design til utvikling, gjennomgang og lansering.",
    process: [
      { title: "Avklar behovet", description: "Vi går gjennom mål, innhold, omfang og hva nettsiden skal hjelpe kundene dine med." },
      { title: "Design retningen", description: "Jeg lager et visuelt uttrykk og en struktur som passer merkevaren og innholdet." },
      { title: "Bygg og finpuss", description: "Nettsiden utvikles, du går gjennom den, og vi gjør avtalte justeringer." },
      { title: "Klargjør lansering", description: "Etter godkjenning gjør vi nettsiden klar for publisering." }
    ],
    portfolioEyebrow: "UTVALGTE KONSEPTER", portfolioTitle: "UTVALGT<br><span>ARBEID.</span>",
    portfolioIntro: "Konsepter som viser hvordan tydelig design kan gi små merkevarer en sterkere digital tilstedeværelse.",
    portfolioDisclaimer: "Prosjektene er konseptarbeid og demoer, ikke oppdrag for ekte kunder.", concept: "KONSEPT", demo: "DEMO",
    projectTypes: { cleancar: "BILPLEIE · BESTILLINGSFLYT", local: "LOKAL TJENESTEBEDRIFT", creative: "PERSONLIG MERKEVARE · LANDINGSSIDE" },
    projects: {
      cleancar: { name: "CleanCar Bergen", description: "Konsept for bilpleie med tydelig tjenestemeny og en enkel digital bestillingsflyt.", alt: "Konseptbilde av blank sportsbil for CleanCar Bergen" },
      local: { name: "Lokal bedrift", description: "Et varmt, ryddig nettstedskonsept for en lokal tjenestebedrift.", alt: "Lyst, moderne arbeidsmiljø for nettstedskonseptet Lokal bedrift" },
      creative: { name: "Kreativ landingsside", description: "En visuell landingsside for en personlig merkevare og et kreativt tilbud.", alt: "Digitalt prosjektoversyn for et konsept til en kreativ landingsside" }
    },
    viewProject: "SE PROSJEKT", projectDialogLabel: "Prosjektkonsept", conceptNote: "Konseptarbeid — ikke et publisert kundeprosjekt.", closeDialog: "Lukk prosjektvisning",
    whyEyebrow: "SAMARBEID, MED RETNING", whyTitle: "Hvorfor<br><span>velge meg?</span>",
    benefits: [
      { title: "SKREDDERSYDD DESIGN", description: "Et visuelt uttrykk bygget rundt bedriften din og menneskene du vil nå.", mark: "01 / ✳" },
      { title: "MOBIL FØRST", description: "Innhold og knapper utformes for å være enkle å bruke på mobil.", mark: "02 / ↗" },
      { title: "RESPONSIV UTVIKLING", description: "Nettsiden tilpasser seg mobil, nettbrett og større skjermer.", mark: "03 / →" },
      { title: "SEO-VENNLIG GRUNNLAG", description: "Ryddig struktur og metadata gir et godt teknisk utgangspunkt for synlighet.", mark: "04 / ∙" },
      { title: "TYDELIG SAMARBEID", description: "Du får oversikt over leveranser, avklaringer og neste steg underveis.", mark: "05 / +" },
      { title: "FRA IDÉ TIL LANSERING", description: "Design og utvikling samles i en helhetlig prosess frem mot publisering.", mark: "06 / ↗"}
    ],
    evaluationEyebrow: "USIKKER PÅ HVA DU TRENGER?", evaluationTitle: "Få en gratis<br><span>vurdering.</span>",
    evaluationBody: "Fortell kort om bedriften og nettsiden du ser for deg. Jeg vurderer behovet og foreslår et godt neste steg – helt uforpliktende.",
    evaluationButton: "BE OM GRATIS VURDERING",
    orderEyebrow: "FORTELL MEG OM IDEEN DIN", orderTitle: "La oss bygge<br><span>nettsiden din.</span>",
    orderIntro: "Send en uforpliktende forespørsel med litt om bedriften og behovet ditt. Jeg tar kontakt for å avklare et godt neste steg.",
    orderEmailLabel: "FORETREKKER DU E-POST?", formTitle: "NETTSIDEFORESPØRSEL",
    fieldName: "NAVN", fieldBusiness: "BEDRIFTENS NAVN", fieldEmail: "E-POST", fieldPhone: "TELEFON",
    fieldService: "VELG EN TJENESTE", fieldBudget: "BUDSJETT", fieldProject: "FORTELL OM PROSJEKTET",
    namePlaceholder: "Fullt navn", businessPlaceholder: "Bedrift eller merkevare", emailPlaceholder: "deg@eksempel.no", phonePlaceholder: "+47", projectPlaceholder: "Hva trenger du hjelp med?",
    servicePrompt: "Velg en tjeneste", budgetPrompt: "Velg et budsjett", customProject: "Tilpasset prosjekt",
    budgetOptions: ["Under 6 000 NOK", "6 000–10 000 NOK", "10 000–15 000 NOK", "Over 15 000 NOK", "Usikker ennå"],
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
    heroEyebrow: "INDEPENDENT DIGITAL STUDIO · BERGEN", heroTitle: "Web design in Bergen.<br><span>Modern websites</span><br><span class=\"text-outline\">for businesses.</span>",
    heroSubtitle: "I design and build modern websites for small businesses, from the first idea to launch. Thoughtful websites made to work on mobile and desktop.",
    orderButton: "ORDER A WEBSITE", viewServices: "VIEW MY WORK", heroNote: "DESIGNED FOR PEOPLE BUILDING SOMETHING",
    comparisonLabel: "Before and after website comparison",
    comparisonBefore: "BEFORE", comparisonAfter: "AFTER", comparisonAddress: "WEBSITE CONCEPT",
    comparisonBeforeBrand: "YOUR BUSINESS", comparisonBeforeNav: "SERVICES　ABOUT　CONTACT",
    comparisonBeforeEyebrow: "SIMPLE. CLEAR.", comparisonBeforeTitle: "A website for your business.",
    comparisonBeforeCopy: "Information about your services and how customers can get in touch.",
    comparisonBeforeButton: "GET IN TOUCH", comparisonBeforeSection: "OUR SERVICES",
    comparisonAfterBrand: "DIGITAL STUDIO", comparisonAfterNav: "WORK　SERVICES　CONTACT",
    comparisonAfterEyebrow: "WEBSITES WITH INTENT", comparisonAfterTitle: "Built for what's next.",
    comparisonAfterCopy: "A clear digital presence, made to move your business forward.",
    comparisonAfterButton: "EXPLORE THE POSSIBILITIES", comparisonAfterSection: "STRATEGY · DESIGN · DEVELOPMENT",
    comparisonBeforeAlt: "Screenshot of the original website", comparisonAfterAlt: "Screenshot of the new NKTMZNV website",
    comparisonInstructions: "Drag horizontally to compare. Use the left and right arrow keys to move the divider, or Home and End to reach either limit.",
    comparisonValue: "BEFORE: {before}% · AFTER: {after}%",
    heroVisualCaption: "FROM FIRST SKETCH TO FINAL DETAIL", heroBottom: "BUILT WITH CLEAR INTENT", scrollServices: "Scroll to services",
    manifestoIndex: "A STRONG FIRST IMPRESSION", manifestoEyebrow: "YOUR WEBSITE IS OFTEN YOUR BRAND'S FIRST HELLO",
    manifestoTitle: "Make it<br><span>memorable.</span>",
    manifestoBody: "Your website should make it easy to understand what you offer and how to get in touch. I build with clear content, considered design and mobile use in mind.",
    valuePoints: ["Custom design for your business", "Mobile considered from the first sketch", "Responsive development for phones, tablets and desktop", "SEO-friendly structure and technical foundations", "Norwegian and English when the project needs it", "From idea and content through to launch"],
    servicesEyebrow: "SERVICES", servicesTitle: "WHAT I CAN<br><span>HELP WITH.</span>",
    servicesIntro: "From the first visual direction to a finished website — choose the services your project needs.",
    serviceCategories: [
      { title: "Web design", description: "A clear visual direction and a custom look that fits your brand and your customers." },
      { title: "Web development", description: "Turning the design into a working website with structure and content for your business." },
      { title: "Responsive design", description: "A considered experience on phones, tablets and larger screens." },
      { title: "SEO foundations", description: "Semantic content and technical structure give search engines a clear starting point." },
      { title: "Functionality", description: "Booking, forms and other features can be tailored to the needs of your project." },
      { title: "Website redesign", description: "Refresh the look, content and user experience of an existing website." }
    ],
    addonsEyebrow: "MAKE IT MORE", addonsTitle: "Optional add-ons", addonsIntro: "Select add-ons in the order form and I will include them in your request.",
    pricingEyebrow: "CLEAR STARTING PRICES", pricingTitle: "CHOOSE A<br><span>STARTING POINT.</span>",
    pricingIntro: "Prices are a starting point. We agree on content, scope and the final price before work begins.",
    pricingNote: "Starting prices in NOK. Final scope and price are agreed before work begins.",
    packageTag: "WEBSITE PACKAGE", recommended: "RECOMMENDED",
    serviceNames: { landing: "Starter", business: "Business", premium: "Premium", custom: "Custom" },
    serviceDescriptions: {
      landing: "A professional landing page with clear content and a simple path to get in touch.",
      business: "A complete business website with up to five pages, a contact form and basic SEO.",
      premium: "A more extensive website with custom design and expanded functionality.",
      custom: "A tailored scope and feature set based on your project goals."
    },
    serviceFeatures: {
      landing: ["One landing page", "Responsive design", "Contact links", "Basic SEO"],
      business: ["Up to 5 pages", "Custom design", "Responsive design", "Contact form", "Social media integration", "Animations", "SEO basics"],
      premium: ["Custom design", "Responsive development", "Expanded functionality", "Advanced SEO work"],
      custom: ["Scope tailored to the project", "Features based on your needs", "Price agreed before work begins"]
    },
    priceFrom: "From",
    addons: {
      booking: "Online booking", extraPage: "Extra page", languages: "Norwegian + English", animations: "Advanced animations", custom: "Custom functionality"
    },
    addonPrice: "Price", contactForPrice: "Contact for price", addonSelect: "Add to request",
    processEyebrow: "A CLEAR PROCESS", processTitle: "From first thought<br><span>to go-live.</span>",
    processIntro: "Four clear steps take the project from understanding your needs and design through development, review and launch.",
    process: [
      { title: "Clarify your needs", description: "We discuss your goals, content, scope and what the website should do for your customers." },
      { title: "Design the direction", description: "I shape a visual style and structure that fit your brand and content." },
      { title: "Build and refine", description: "The website is developed, you review it, and we make the agreed refinements." },
      { title: "Prepare for launch", description: "Once approved, the website is made ready for publication." }
    ],
    portfolioEyebrow: "SELECTED CONCEPTS", portfolioTitle: "SELECTED<br><span>WORK.</span>",
    portfolioIntro: "Concepts showing how considered design can give small brands a stronger presence online.",
    portfolioDisclaimer: "These projects are concepts and demos, not commissioned work for real clients.", concept: "CONCEPT", demo: "DEMO",
    projectTypes: { cleancar: "CAR CARE · BOOKING FLOW", local: "LOCAL SERVICE BUSINESS", creative: "PERSONAL BRAND · LANDING PAGE" },
    projects: {
      cleancar: { name: "CleanCar Bergen", description: "A car-care concept with a clear service menu and a simple online booking flow.", alt: "Glossy sports car concept image for CleanCar Bergen" },
      local: { name: "Local Business", description: "A warm, considered website concept for a neighborhood service business.", alt: "Bright modern workplace for the Local Business website concept" },
      creative: { name: "Creative Landing Page", description: "A visual landing page concept for a personal brand and creative offering.", alt: "Digital project overview for a creative landing page concept" }
    },
    viewProject: "VIEW PROJECT", projectDialogLabel: "Project concept", conceptNote: "Concept work — not a published client project.", closeDialog: "Close project preview",
    whyEyebrow: "A COLLABORATION WITH INTENT", whyTitle: "Why<br><span>choose me?</span>",
    benefits: [
      { title: "CUSTOM DESIGN", description: "A visual style built around your business and the people you want to reach.", mark: "01 / ✳" },
      { title: "MOBILE FIRST", description: "Everything works properly on phones, tablets and computers.", mark: "02 / ↗" },
      { title: "RESPONSIVE DEVELOPMENT", description: "The website adapts to phones, tablets and larger screens.", mark: "03 / →" },
      { title: "SEO-FRIENDLY FOUNDATIONS", description: "Clear structure and metadata provide a sound technical starting point.", mark: "04 / ∙" },
      { title: "CLEAR COLLABORATION", description: "You know what is being delivered, what needs agreement and what comes next.", mark: "05 / +" },
      { title: "FROM IDEA TO LAUNCH", description: "Design and development come together in a clear process through publication.", mark: "06 / ↗"}
    ],
    evaluationEyebrow: "NOT SURE WHAT YOU NEED?", evaluationTitle: "Get a free<br><span>assessment.</span>",
    evaluationBody: "Tell me a little about your business and the website you have in mind. I will assess what you need and suggest a sensible next step, with no obligation.",
    evaluationButton: "REQUEST A FREE ASSESSMENT",
    orderEyebrow: "TELL ME ABOUT YOUR IDEA", orderTitle: "Let's build<br><span>your website.</span>",
    orderIntro: "Send a no-obligation request with a little about your business and what you need. I will be in touch to discuss a sensible next step.",
    orderEmailLabel: "PREFER EMAIL?", formTitle: "WEBSITE REQUEST",
    fieldName: "NAME", fieldBusiness: "BUSINESS NAME", fieldEmail: "EMAIL", fieldPhone: "PHONE NUMBER",
    fieldService: "CHOOSE A SERVICE", fieldBudget: "BUDGET", fieldProject: "TELL ME ABOUT THE PROJECT",
    namePlaceholder: "Full name", businessPlaceholder: "Business or brand", emailPlaceholder: "you@example.com", phonePlaceholder: "+47", projectPlaceholder: "What do you need help with?",
    servicePrompt: "Choose a service", budgetPrompt: "Choose a budget", customProject: "Custom Project",
    budgetOptions: ["Under 6,000 NOK", "6,000–10,000 NOK", "10,000–15,000 NOK", "Over 15,000 NOK", "Not sure yet"],
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
const websiteComparison = document.querySelector("[data-website-comparison]");
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
  serviceGrid.innerHTML = copy.serviceCategories.map((category, index) => `<article class="service-offering" data-reveal>
    <span class="service-offering__number">0${index + 1}</span>
    <h3>${category.title}</h3>
    <p>${category.description}</p>
  </article>`).join("");
  observeReveals(serviceGrid);
}

function renderValuePoints() {
  const valueList = document.querySelector("#value-points");
  valueList.innerHTML = translations[currentLanguage].valuePoints.map((point) => `<li>${point}</li>`).join("");
}

function renderPricingCards() {
  const copy = translations[currentLanguage];
  const pricingGrid = document.querySelector("#pricing-grid");
  pricingGrid.innerHTML = siteConfig.services.map((service, index) => {
    const features = copy.serviceFeatures[service.id].map((feature) => `<li>${feature}</li>`).join("");
    const recommended = service.id === "business";
    return `<article class="pricing-card${recommended ? " pricing-card--recommended" : ""}" data-reveal${recommended ? ' aria-label="' + copy.recommended + '"' : ""}>
      ${recommended ? `<span class="pricing-card__badge">${copy.recommended}</span>` : ""}
      <div class="pricing-card__top"><span>${copy.packageTag}</span><span>0${index + 1}</span></div>
      <h3>${copy.serviceNames[service.id]}</h3>
      <p class="pricing-card__description">${copy.serviceDescriptions[service.id]}</p>
      <p class="pricing-card__price"><small>${copy.priceFrom}</small><strong>${formatPrice(service.price)} <span>NOK</span></strong></p>
      <ul class="service-card__features">${features}</ul>
      <a class="button button--quiet pricing-card__cta" href="#order" data-order-service="${service.id}"><span>${copy.orderButton}</span><span class="button__arrow" aria-hidden="true">↗</span></a>
    </article>`;
  }).join("");
  observeReveals(pricingGrid);
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
      <div class="portfolio-card__meta"><div><span class="portfolio-card__type">${copy.projectTypes[project.id]}</span><h3>${details.name}</h3><p>${details.description}</p><button class="portfolio-card__link" type="button" data-project="${project.id}">${copy.viewProject}<span aria-hidden="true"> ↗</span></button></div><span class="portfolio-card__number">0${index + 1}</span></div>
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

function updateComparisonPosition(position) {
  const boundedPosition = Math.min(95, Math.max(5, position));
  const roundedPosition = Math.round(boundedPosition * 10) / 10;
  websiteComparison.style.setProperty("--comparison-position", `${roundedPosition}%`);
  websiteComparison.setAttribute("aria-valuenow", String(roundedPosition));
  websiteComparison.setAttribute("aria-valuetext", translations[currentLanguage].comparisonValue
    .replace("{before}", String(roundedPosition))
    .replace("{after}", String(Math.round((100 - roundedPosition) * 10) / 10)));
}

function initializeWebsiteComparison() {
  const images = websiteComparison.querySelectorAll("img");
  images.forEach((image) => {
    const source = image.dataset.src;
    if (location.protocol === "file:") return;
    fetch(source, { method: "HEAD" }).then((response) => {
      if (!response.ok) return;
      image.addEventListener("load", () => image.parentElement.classList.add("is-loaded"), { once: true });
      image.src = source;
    }).catch((error) => {
      console.error(`Unable to check comparison image "${source}".`, error);
    });
  });

  let activePointerId = null;
  let hintFrame = 0;
  const stopHint = () => {
    if (hintFrame) cancelAnimationFrame(hintFrame);
    hintFrame = 0;
  };
  const markUserInteraction = () => {
    websiteComparison.classList.add("is-user-controlled");
    stopHint();
  };
  const moveToPointer = (event) => {
    const bounds = websiteComparison.getBoundingClientRect();
    if (!bounds.width) return;
    updateComparisonPosition(((event.clientX - bounds.left) / bounds.width) * 100);
  };

  websiteComparison.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    markUserInteraction();
    activePointerId = event.pointerId;
    websiteComparison.setPointerCapture(event.pointerId);
    moveToPointer(event);
  });
  websiteComparison.addEventListener("pointermove", (event) => {
    if (event.pointerId === activePointerId) moveToPointer(event);
  });
  const endPointer = (event) => {
    if (event.pointerId === activePointerId) activePointerId = null;
  };
  websiteComparison.addEventListener("pointerup", endPointer);
  websiteComparison.addEventListener("pointercancel", endPointer);
  websiteComparison.addEventListener("lostpointercapture", endPointer);

  websiteComparison.addEventListener("keydown", (event) => {
    const currentPosition = Number(websiteComparison.getAttribute("aria-valuenow"));
    let nextPosition;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") nextPosition = currentPosition - 1;
    else if (event.key === "ArrowRight" || event.key === "ArrowUp") nextPosition = currentPosition + 1;
    else if (event.key === "Home") nextPosition = 5;
    else if (event.key === "End") nextPosition = 95;
    else return;
    event.preventDefault();
    markUserInteraction();
    updateComparisonPosition(nextPosition);
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const hintStarted = performance.now() + 250;
  const hintDuration = 1050;
  const animateHint = (now) => {
    if (websiteComparison.classList.contains("is-user-controlled")) return;
    const progress = Math.min(1, Math.max(0, (now - hintStarted) / hintDuration));
    const phase = progress < 0.5 ? progress * 2 : (1 - progress) * 2;
    const easedPhase = phase * phase * (3 - 2 * phase);
    websiteComparison.style.setProperty("--comparison-position", `${50 - 4 * easedPhase}%`);
    if (progress < 1) hintFrame = requestAnimationFrame(animateHint);
    else {
      websiteComparison.style.setProperty("--comparison-position", "50%");
      hintFrame = 0;
    }
  };
  hintFrame = requestAnimationFrame(animateHint);
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
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = copy[element.dataset.i18nAlt];
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
  updateComparisonPosition(Number(websiteComparison.getAttribute("aria-valuenow")));

  renderSelectOptions();
  renderServiceCards();
  renderValuePoints();
  renderPricingCards();
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
initializeWebsiteComparison();
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
function scrollToSection(sectionId, updateHash = false) {
  if (updateHash && window.location.hash !== `#${sectionId}`) {
    window.history.pushState(null, "", `#${sectionId}`);
  }
  const targetSection = document.getElementById(sectionId);
  if (!targetSection) return;
  const header = document.querySelector(".header");
  const headerRect = header.getBoundingClientRect();
  const headerPosition = window.getComputedStyle(header).position;
  const headerOffset = ["fixed", "sticky"].includes(headerPosition) && headerRect.bottom > 0
    ? headerRect.bottom
    : 0;
  const breathingRoom = Math.max(12, Math.min(28, window.innerHeight * 0.025));
  const targetTop = window.scrollY + targetSection.getBoundingClientRect().top - headerOffset - breathingRoom;
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  window.scrollTo({ top: Math.max(0, targetTop), behavior });
}

document.addEventListener("click", (event) => {
  const sectionLink = event.target.closest('a[href="#order"], a[href="#portfolio"]');
  if (!sectionLink) return;
  event.preventDefault();
  if (sectionLink.dataset.orderService) {
    serviceSelect.value = sectionLink.dataset.orderService;
    serviceSelect.focus({ preventScroll: true });
  }
  scrollToSection(sectionLink.hash.slice(1), true);
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
