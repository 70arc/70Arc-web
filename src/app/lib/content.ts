// ============================================
// 70ARC UNIFIED CONTENT CONFIGURATION
// ============================================
// All website content, navigation, and settings in one place.
// Edit this file to update any text, links, images, or configuration.

// ============================================
// BRAND & COMPANY INFO
// ============================================
export const brand = {
  // Company name - appears in header, footer, and throughout
  name: "70Arc",
  // Logo text (can be replaced with image path if preferred)
  logoText: "70Arc",
  // Optional logo image - if set, will be used instead of text
  // Set to null or empty string to use text logo
  logoImage: null as string | null,
  // Tagline shown in footer and meta
  tagline: "Autonomous Creative Systems",
  // Short description
  description: "We remove gravity from the creative process.",
  // Long description for about sections
  longDescription: "70Arc was born from a simple observation: creative experiences are burdened by gravitational logistics. We built systems that remove that weight, allowing moments to float freely and memories to form naturally.",
  // Year founded
  founded: "2024",
  // Current status
  status: "Operational",
  
  // Contact emails
  emails: {
    general: "hello@70arc.com",
    press: "press@70arc.com",
    careers: "careers@70arc.com",
    privacy: "privacy@70arc.com",
    legal: "legal@70arc.com",
    sf: "sf@70arc.com",
    nyc: "nyc@70arc.com",
  },
  
  // Social links
  social: {
    linkedin: "https://linkedin.com/company/70arc",
    instagram: "https://instagram.com/70arc",
    twitter: "https://twitter.com/70arc",
  },
} as const;

// ============================================
// NAVIGATION
// ============================================
export const navigation = {
  main: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  
  footer: {
    company: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Event Orchestration", href: "/#capabilities" },
      { label: "Cinematography", href: "/#capabilities" },
      { label: "Guest Concierge", href: "/#capabilities" },
      { label: "Memory Archives", href: "/#capabilities" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  
  // Homepage section anchors for compass navigation
  sections: [
    { id: "capabilities", label: "Capabilities", direction: "N" as const },
    { id: "atmosphere", label: "Atmosphere", direction: "E" as const },
    { id: "telemetry", label: "Telemetry", direction: "S" as const },
    { id: "transmission", label: "Transmission", direction: "W" as const },
  ],
} as const;

// ============================================
// HOMEPAGE CONTENT
// ============================================
export const homepage = {
  hero: {
    badge: "Autonomous Creative Systems",
    title: "70Arc",
    subtitle: "We remove gravity from the creative process.",
    // Optional background image
    backgroundImage: null as string | null,
  },
  
  capabilities: [
    {
      title: "Neural Event Orchestration",
      subtitle: "Predictive Logistics",
      description: "AI agents negotiate vendor contracts, predict attendance fluctuations, and reroute logistics in real-time. Our systems anticipate problems before they occur.",
      metric: "Latency <50ms",
      // Optional icon or image
      image: null as string | null,
    },
    {
      title: "Computational Cinematography",
      subtitle: "Automated Post-Production",
      description: "Computer vision selects the decisive moment from 10,000 frames. Delivered before the event ends. Every angle covered, every moment preserved.",
      metric: "4K/120fps",
      image: null as string | null,
    },
    {
      title: "Generative Guest Concierge",
      subtitle: "LLM Interface",
      description: "Infinite patience. Instantaneous response. Every guest has a personal steward available 24/7, speaking their language and anticipating their needs.",
      metric: "GPT-4 Turbo",
      image: null as string | null,
    },
    {
      title: "Synthetic Memory Archives",
      subtitle: "Automated Curation",
      description: "Facial recognition for privacy. Auto-edited highlight reels. Searchable lifetime archive. Your memories, organized and preserved forever.",
      metric: "1M+ frames processed",
      image: null as string | null,
    },
    {
      title: "Anti-Gravity Workflow",
      subtitle: "The Philosophy",
      description: "We remove the friction of production. You float through the experience. No stress, no logistics to manage, just pure creative immersion.",
      metric: "Zero friction",
      image: null as string | null,
    },
  ],
  
  // Atmosphere section images - Unsplash URLs or local images
  atmosphereImages: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400",
    "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=400",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400",
  ],
  
  telemetry: {
    // Main quote - NO ROTATION, just displays statically
    quote: "70Arc operates at the intersection of analog sensitivity and digital weightlessness.",
    stats: [
      { label: "Founded", value: "2024", highlight: false },
      { label: "Systems", value: "Operational", highlight: true },
      { label: "Gravity", value: "Removed", highlight: false },
    ],
  },
  
  transmission: {
    title: "Transmission",
    placeholder: "Enter frequency...",
    successMessage: "Transmission Received",
    description: "Ready to remove gravity from your next experience? Send us a signal.",
  },
  
  footer: {
    atmosphereText: "Entering Atmosphere",
  },
} as const;

// ============================================
// ABOUT PAGE CONTENT
// ============================================
export const aboutPage = {
  hero: {
    badge: "About 70Arc",
    title: "We Engineer",
    titleAccent: "Weightlessness",
    description: "70Arc was born from a simple observation: creative experiences are burdened by gravitational logistics. We built systems that remove that weight, allowing moments to float freely and memories to form naturally.",
  },
  
  mission: {
    quote: "At 70 degrees arc, objects escape Earth's pull. That's our threshold. We design systems that let creativity break free from operational gravity.",
    author: "Alexandra Chen, Founder",
    // Optional image for mission section
    image: null as string | null,
  },
  
  values: [
    {
      title: "Weightlessness",
      description: "We remove friction from every process. When gravity is gone, creativity floats freely.",
      icon: "○",
    },
    {
      title: "Precision",
      description: "50 milliseconds. That's our tolerance. Every system operates at orbital accuracy.",
      icon: "◎",
    },
    {
      title: "Presence",
      description: "We handle the logistics so you can be fully present in the moment.",
      icon: "◉",
    },
    {
      title: "Memory",
      description: "Every experience deserves to be remembered. We capture, curate, and preserve.",
      icon: "●",
    },
  ],
  
  team: [
    {
      name: "Alexandra Chen",
      role: "Founder & Chief Architect",
      bio: "Former NASA systems engineer who saw the inefficiencies in creative production and decided to apply orbital mechanics to event logistics.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    },
    {
      name: "Marcus Webb",
      role: "Chief Technology Officer",
      bio: "Ex-Google AI researcher specializing in real-time computer vision. Believes every moment deserves to be captured at the speed of light.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      name: "Sofia Rodriguez",
      role: "Head of Creative Systems",
      bio: "Documentary filmmaker turned technologist. Spent a decade behind the lens before building machines that see better than humans.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    },
    {
      name: "James Okonkwo",
      role: "Director of Operations",
      bio: "Logistics mastermind who orchestrated supply chains across three continents. Now applies that precision to making events feel effortless.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
  ],
  
  milestones: [
    { year: "2024", event: "70Arc founded in San Francisco" },
    { year: "2024", event: "First neural orchestration system deployed" },
    { year: "2024", event: "Processed 1 million frames in a single event" },
    { year: "2025", event: "Expanded to 12 metropolitan markets" },
    { year: "2025", event: "Launched guest concierge AI v2.0" },
    { year: "2026", event: "100th event milestone with zero gravity failures" },
  ],
  
  stats: [
    { value: "100+", label: "Events Orchestrated", color: "orange" as const },
    { value: "12", label: "Markets Served", color: "blue" as const },
    { value: "<50ms", label: "System Latency", color: "default" as const },
    { value: "0", label: "Gravity Failures", color: "orange" as const },
  ],
  
  // Additional content sections
  philosophy: {
    title: "Our Philosophy",
    content: "We believe that technology should be invisible. The best systems are the ones you never notice because they simply work. When you attend an event powered by 70Arc, you won't see our technology—you'll just feel the freedom to be fully present.",
  },
  
  partnerships: {
    title: "Our Partners",
    description: "We work with leading venues, brands, and creators worldwide.",
    logos: [] as string[], // Add partner logo URLs here
  },
} as const;

// ============================================
// CAREERS PAGE CONTENT
// ============================================
export const careersPage = {
  hero: {
    badge: "Join the Crew",
    title: "Build Systems That",
    titleAccent: "Defy Gravity",
    description: "We're assembling a team of engineers, designers, and operators who believe that creative experiences should float freely. If you're ready to work on problems that matter, we want to meet you.",
  },
  
  culture: [
    {
      title: "Mission-Driven",
      description: "Every line of code, every design decision, every process improvement moves us closer to removing gravity from creative experiences.",
    },
    {
      title: "Radical Candor",
      description: "We believe in honest, direct communication. Feedback is a gift we give each other to grow. No politics, just progress.",
    },
    {
      title: "Bias for Action",
      description: "We move fast and iterate. Perfect is the enemy of launched. Ship, learn, improve, repeat.",
    },
    {
      title: "Cross-Pollination",
      description: "Engineers attend events. Designers write algorithms. We blur the lines to build better systems and understand our users.",
    },
  ],
  
  benefits: [
    { title: "Equity Package", description: "Meaningful ownership in the future of autonomous creative systems.", icon: "◆" },
    { title: "Health & Wellness", description: "Comprehensive medical, dental, and vision. Mental health support included.", icon: "♥" },
    { title: "Flexible Location", description: "Work from our SF or NYC studios, or remote across the US.", icon: "◎" },
    { title: "Learning Budget", description: "$5,000 annual stipend for conferences, courses, and professional growth.", icon: "◇" },
    { title: "Unlimited PTO", description: "We trust you to manage your time. Take what you need to stay fresh.", icon: "○" },
    { title: "Equipment", description: "Top-spec hardware. Whatever you need to do your best work, we'll provide.", icon: "□" },
  ],
  
  positions: [
    {
      id: 1,
      title: "Senior Computer Vision Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build real-time frame selection algorithms that identify the decisive moment from 10,000+ frames. Work with 4K/120fps pipelines and cutting-edge AI.",
      requirements: [
        "5+ years experience with computer vision systems",
        "Expertise in PyTorch or TensorFlow",
        "Experience with real-time video processing",
        "Strong understanding of image quality metrics",
      ],
    },
    {
      id: 2,
      title: "AI/ML Research Scientist",
      department: "Research",
      location: "Remote (US)",
      type: "Full-time",
      description: "Pioneer the next generation of generative guest concierge systems. Design LLM architectures that provide infinite patience with instant response.",
      requirements: [
        "PhD in Machine Learning, NLP, or related field",
        "Published research in top-tier venues (NeurIPS, ICML, ACL)",
        "Experience with large language models and fine-tuning",
        "Strong experimentation and analysis skills",
      ],
    },
    {
      id: 3,
      title: "Event Systems Architect",
      department: "Operations",
      location: "New York, NY",
      type: "Full-time",
      description: "Design the neural orchestration systems that power autonomous event logistics. Predict, adapt, and execute with sub-50ms latency.",
      requirements: [
        "7+ years in distributed systems design",
        "Experience with real-time decision systems",
        "Background in event production a plus",
        "Strong communication and leadership skills",
      ],
    },
    {
      id: 4,
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Craft weightless interfaces that make complex autonomous systems feel effortless. Design for both operators and end guests across web and mobile.",
      requirements: [
        "4+ years product design experience",
        "Strong portfolio in B2B and consumer products",
        "Experience with motion design and micro-interactions",
        "Familiarity with design systems and component libraries",
      ],
    },
    {
      id: 5,
      title: "Technical Program Manager",
      department: "Operations",
      location: "Remote (US)",
      type: "Full-time",
      description: "Orchestrate complex cross-functional initiatives across engineering, research, and operations. Keep our systems and teams in perfect orbit.",
      requirements: [
        "5+ years program management experience",
        "Technical background (engineering degree preferred)",
        "Experience with AI/ML product development cycles",
        "Exceptional organizational and communication skills",
      ],
    },
  ],
  
  cta: {
    title: "Don't see the right role?",
    description: "We're always looking for exceptional people. Send us your portfolio and tell us why you want to help remove gravity from creative experiences.",
    buttonText: "Get in Touch",
    buttonHref: "/contact",
  },
  
  perks: {
    title: "Life at 70Arc",
    items: [
      "Weekly team lunches and quarterly offsites",
      "Access to events we power (with VIP treatment)",
      "Home office stipend for remote workers",
      "Commuter benefits for in-office staff",
      "Annual company retreat to inspiring destinations",
    ],
  },
} as const;

// ============================================
// CONTACT PAGE CONTENT
// ============================================
export const contactPage = {
  hero: {
    badge: "Contact",
    title: "Initiate",
    titleAccent: "Transmission",
    description: "Ready to remove gravity from your next experience? We're here to listen, understand, and design a solution that floats.",
  },
  
  form: {
    title: "Send a Message",
    submitButton: "Send Transmission",
    successTitle: "Transmission Received",
    successMessage: "We've received your message and will respond within 24-48 hours.",
    fields: {
      name: { label: "Name", placeholder: "Your name", required: true },
      email: { label: "Email", placeholder: "your@email.com", required: true },
      company: { label: "Company", placeholder: "Your company (optional)", required: false },
      message: { label: "Message", placeholder: "Tell us about your vision...", required: true },
    },
  },
  
  reasons: [
    { value: "general", label: "General Inquiry" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "event", label: "Event Inquiry" },
    { value: "press", label: "Press & Media" },
    { value: "careers", label: "Career Inquiry" },
  ],
  
  offices: [
    {
      city: "San Francisco",
      address: "70 Mission Street, Suite 2400",
      zip: "San Francisco, CA 94105",
      email: "sf@70arc.com",
      phone: "+1 (415) 555-0170",
      // Optional office image
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    },
    {
      city: "New York",
      address: "70 Hudson Yards, 48th Floor",
      zip: "New York, NY 10001",
      email: "nyc@70arc.com",
      phone: "+1 (212) 555-0170",
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600",
    },
  ],
  
  faqs: [
    {
      question: "What types of events does 70Arc support?",
      answer: "We specialize in high-end private events, corporate gatherings, product launches, and luxury celebrations. Our autonomous systems are designed for events where every detail matters and every moment deserves to be captured perfectly. We've worked with Fortune 500 companies, luxury brands, and discerning private clients.",
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend reaching out at least 8-12 weeks before your event for full orchestration services. For cinematography-only packages, 4-6 weeks is typically sufficient. We can accommodate shorter timelines for select events depending on availability.",
    },
    {
      question: "What is included in your standard package?",
      answer: "Our core offering includes neural event orchestration, computational cinematography (4K/120fps), generative guest concierge, and synthetic memory archives. Each package is customized based on event scale and requirements. We'll work with you to create the perfect configuration.",
    },
    {
      question: "Do you operate internationally?",
      answer: "Currently, we serve 12 metropolitan markets across the United States. International expansion is planned for late 2026. Contact us to discuss potential international events on a case-by-case basis—we've made exceptions for the right projects.",
    },
    {
      question: "What makes 70Arc different from traditional event services?",
      answer: "Traditional services require you to manage vendors, timelines, and logistics. Our autonomous systems handle everything with sub-50ms latency—predicting problems before they occur, capturing moments you'd otherwise miss, and creating searchable archives that last forever.",
    },
  ],
  
  socialTitle: "Follow Our Orbit",
  
  additionalInfo: {
    responseTime: "We typically respond within 24-48 hours",
    availability: "Our team is available Monday-Friday, 9am-6pm PT",
  },
} as const;

// ============================================
// NEWSLETTER
// ============================================
export const newsletter = {
  title: "Stay in Orbit",
  description: "Receive transmissions about our latest innovations, event insights, and cosmic updates.",
  placeholder: "your@frequency.com",
  buttonText: "Subscribe",
  successMessage: "Thanks for subscribing! Check your inbox for confirmation.",
} as const;

// ============================================
// SERVICES SECTION (for homepage or services page)
// ============================================
export const services = {
  title: "What We Do",
  subtitle: "Autonomous systems for extraordinary experiences",
  items: [
    {
      name: "Event Orchestration",
      shortDescription: "AI-powered logistics with sub-50ms response",
      fullDescription: "Our neural orchestration system predicts attendance fluctuations, negotiates vendor contracts, and reroutes logistics in real-time. You focus on the experience; we handle everything else.",
      icon: "◎",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
    },
    {
      name: "Computational Cinematography",
      shortDescription: "4K/120fps with AI frame selection",
      fullDescription: "Computer vision analyzes every frame to find the decisive moments. Delivered edits before your event ends, with a searchable archive for future access.",
      icon: "◉",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600",
    },
    {
      name: "Guest Concierge",
      shortDescription: "LLM-powered personal assistance",
      fullDescription: "Every guest gets a personal steward with infinite patience and instant response. Dietary requests, directions, scheduling—handled automatically and gracefully.",
      icon: "○",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
    },
    {
      name: "Memory Archives",
      shortDescription: "Searchable lifetime preservation",
      fullDescription: "Facial recognition for privacy-aware organization. Auto-edited highlight reels. Your memories preserved, organized, and accessible forever.",
      icon: "●",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600",
    },
  ],
} as const;

// ============================================
// TESTIMONIALS (if you want to add them)
// ============================================
export const testimonials = {
  title: "What Clients Say",
  items: [
    {
      quote: "70Arc transformed our product launch. The seamless coordination and stunning visuals set a new standard for what's possible.",
      author: "Sarah Mitchell",
      role: "VP Marketing, TechCorp",
      image: null as string | null,
    },
    {
      quote: "The guest concierge was incredible. Every attendee felt like a VIP. We've never had feedback this positive.",
      author: "David Chen",
      role: "Events Director, Luxury Brand Co.",
      image: null as string | null,
    },
    {
      quote: "I didn't have to think about logistics once. I was fully present for my daughter's wedding, exactly as it should be.",
      author: "Maria Santos",
      role: "Private Client",
      image: null as string | null,
    },
  ],
} as const;

// ============================================
// META / SEO
// ============================================
export const meta = {
  home: {
    title: "70Arc | Autonomous Creative Systems",
    description: "We remove gravity from the creative process. Neural event orchestration, computational cinematography, and anti-gravity workflows.",
  },
  about: {
    title: "About | 70Arc",
    description: "Learn about 70Arc's mission to remove gravity from creative experiences through autonomous systems.",
  },
  careers: {
    title: "Careers | 70Arc",
    description: "Join the team building autonomous creative systems. View open positions in engineering, design, and operations.",
  },
  contact: {
    title: "Contact | 70Arc",
    description: "Get in touch with 70Arc. Offices in San Francisco and New York.",
  },
  privacy: {
    title: "Privacy Policy | 70Arc",
    description: "70Arc's privacy policy covering data collection, security, and your rights.",
  },
  terms: {
    title: "Terms of Service | 70Arc",
    description: "70Arc's terms of service for autonomous creative systems.",
  },
} as const;

// ============================================
// THEME SETTINGS
// ============================================
export const themeSettings = {
  // Default theme: 'light' or 'dark'
  defaultTheme: "light" as "light" | "dark",
  // Allow theme switching
  allowThemeSwitching: true,
  // Respect system preference
  respectSystemPreference: true,
} as const;

// ============================================
// FEATURE FLAGS
// ============================================
export const features = {
  // Show the compass navigation on homepage
  showCompassNav: true,
  // Show newsletter signup in footer
  showNewsletter: true,
  // Enable dark mode toggle
  enableDarkMode: true,
  // Show testimonials section
  showTestimonials: false,
  // Show services section on homepage  
  showServicesSection: true,
} as const;
