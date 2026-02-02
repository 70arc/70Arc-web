export const content = {
  global: {
    siteTitle: "70Arc",
    metaTitle: "70Arc | Autonomous Creative Systems",
    metaDescription: "We remove gravity from the creative process. AI-powered event orchestration and computational cinematography.",
    colors: {
      accentOrange: "#FF4F00",
      accentBlue: "#2C3E50",
    },
  },
  navigation: {
    // Main Compass Navigation (Home + Pages)
    compass: [
      { id: "about", direction: "N" as const, label: "The Origin", type: "page", path: "/about" },
      { id: "social", direction: "E" as const, label: "Array", type: "page", path: "/social" },
      { id: "telemetry", direction: "S" as const, label: "Telemetry", type: "scroll", path: "#telemetry" },
      { id: "careers", direction: "W" as const, label: "Join Crew", type: "page", path: "/careers" },
    ],
    // Secondary "Dock" or footer links
    footer: [
      { label: "Capabilities", path: "/#capabilities" },
      { label: "Atmosphere", path: "/#atmosphere" },
      { label: "Transmission", path: "/#transmission" },
    ],
  },
  hero: {
    title: "70Arc",
    badge: "Autonomous Creative Systems",
    tagline: "We remove gravity from the creative process.",
    scrollIndicator: "Scroll to explore",
  },
  capabilities: {
    sectionLabel: "Capabilities",
    headline: "Intelligence Without Friction",
    items: [
      {
        title: "Neural Event Orchestration",
        subtitle: "Predictive Logistics",
        description: "AI agents negotiate vendor contracts, predict attendance fluctuations, and reroute logistics in real-time. The event self-corrects before you even notice the variance.",
        spec: "latency <50ms",
      },
      {
        title: "Computational Cinematography",
        subtitle: "Automated Post-Production",
        description: "Computer vision selects the decisive moment from 10,000 frames. Color grading via learned preferences. A complete cinematic record delivered before the event ends.",
        spec: "4k/120fps capable",
      },
      {
        title: "Generative Guest Concierge",
        subtitle: "LLM Interface",
        description: "Infinite patience. Instantaneous response. Every guest has a personal steward in their pocket, capable of solving complex logistical queries in any language.",
        spec: "gpt-4 turbo, multilingual",
      },
      {
        title: "Synthetic Memory Archives",
        subtitle: "Automated Curation",
        description: "Facial recognition for privacy compliance. Auto-edited highlight reels. A searchable, taggable lifetime archive generated overnight, preserving the emotional resonance.",
        spec: "gdpr compliant",
      },
      {
        title: "Anti-Gravity Workflow",
        subtitle: "The Philosophy",
        description: "We remove the friction of production. You float through the experience. We handle the mass, the weight, and the complexity of the physical world.",
        spec: "zero-g enabled",
      },
    ],
  },
  atmosphere: {
    sectionLabel: "Atmosphere",
    headline: "A Nebula of Moments",
    bubbles: [
      { id: 1, label: "Wedding / Lake Como", size: 280, x: 15, y: 0, speed: 0.8 },
      { id: 2, label: "Summit / Tokyo", size: 180, x: 70, y: 50, speed: 1.2 },
      { id: 3, label: "Gala / Monaco", size: 320, x: 40, y: 120, speed: 0.6 },
      { id: 4, label: "Launch / San Francisco", size: 150, x: 80, y: 180, speed: 1.0 },
      { id: 5, label: "Retreat / Maldives", size: 220, x: 10, y: 250, speed: 0.9 },
      { id: 6, label: "Ceremony / Kyoto", size: 200, x: 55, y: 320, speed: 1.1 },
      { id: 7, label: "Exhibition / London", size: 160, x: 30, y: 400, speed: 0.7 },
      { id: 8, label: "Conference / Dubai", size: 260, x: 75, y: 450, speed: 1.3 },
      { id: 9, label: "Dinner / Paris", size: 190, x: 20, y: 520, speed: 0.85 },
      { id: 10, label: "Festival / Ibiza", size: 240, x: 60, y: 580, speed: 1.05 },
      { id: 11, label: "Wedding / Tuscany", size: 170, x: 45, y: 650, speed: 0.75 },
      { id: 12, label: "Opening / New York", size: 300, x: 15, y: 700, speed: 0.95 },
    ],
  },
  telemetry: {
    sectionLabel: "Telemetry",
    statement: "70Arc operates at the intersection of analog sensitivity and digital weightlessness. We build systems that feel human, but perform like machines.",
    stats: [
      { label: "founded", value: "2024" },
      { label: "systems", value: "Operational", highlight: true },
      { label: "gravity", value: "Removed" },
    ],
  },
  transmission: {
    sectionLabel: "Transmission",
    headline: "Open Frequency",
    placeholder: "Enter frequency...",
    successMessage: "Transmission Received",
  },
  exitVector: {
    enteringAtmosphere: "entering atmosphere",
    returnLink: "return to void",
    copyright: "© 70arc 2026",
  },
  // NEW SECTIONS
  about: {
    title: "The Origin",
    heroText: "Before the machine, there was the weight. 70Arc was born from the desire to float.",
    philosophy: [
      {
        heading: "Zero-G Thinking",
        text: "We believe creative work should essentially be weightless. The logistics, the contracts, the scheduling—these are heavy objects that drag the spirit down. We build anti-gravity engines for the creative mind.",
      },
      {
        heading: "The Steward Model",
        text: "Technology should not be a tool you wield, but a steward that walks beside you. Our agents are designed to anticipate, not just react. To care, not just compute.",
      },
    ],
    team: [
      { name: "Dr. Aris Thorne", role: "Chief Architect", description: "Former aerospace engineer turned event theorist." },
      { name: "Lina Vesper", role: "Head of Aesthetics", description: "Computational photographer and analog purist." },
      { name: "Unit 70", role: "Central Intelligence", description: "The core logistical model running the platform." },
    ],
  },
  careers: {
    title: "Join the Crew",
    intro: "We are looking for pilots, not passengers. Help us map the void.",
    perks: ["Remote-First / Void-Based", "Equity in the Machine", "Unlimited Orbital Time (PTO)"],
    roles: [
      {
        title: "Senior Systems Engineer",
        department: "Logistics Core",
        location: "Remote",
        type: "Full-time",
        description: "Architect the neural pathways that route logistics for thousands of simultaneous events.",
      },
      {
        title: "Frontend Cosmonaut",
        department: "Interface",
        location: "Remote",
        type: "Full-time",
        description: "Build weightless interfaces using Next.js and WebGL. Must have a strong stomach for zero-g.",
      },
      {
        title: "Computational Curator",
        department: "Memory Archives",
        location: "London, UK",
        type: "Hybrid",
        description: "Train our computer vision models to understand the subtle nuance of human emotion in photography.",
      },
    ],
  },
  social: {
    title: "Communications Array",
    intro: "Incoming signals from across the sector.",
    links: [
      { platform: "Twitter / X", handle: "@70arc_systems", url: "https://twitter.com" },
      { platform: "Instagram", handle: "@70arc.visuals", url: "https://instagram.com" },
      { platform: "LinkedIn", handle: "/company/70arc", url: "https://linkedin.com" },
    ],
    press: [
      { source: "Wired", title: "The Event Company That Removed Gravity", date: "Jan 2024" },
      { source: "Monocle", title: "Analog Soul, Digital Heart: Inside 70Arc", date: "Dec 2023" },
      { source: "TechCrunch", title: "70Arc Raises Series A to fix 'The Heavy Problem'", date: "Nov 2023" },
    ],
  },
};
