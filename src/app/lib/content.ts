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
  // Logo image path - set to use image instead of text
  logoImage: "/images/brand/logo.png",
  // Tagline shown in footer and meta
  tagline: "Powered by AI!",
  // Short description
  description: "AI-native systems architecting creative futures",
  // Long description for about sections
  longDescription: "70Arc was founded on a singular conviction: artificial intelligence is not a tool, but the substrate of modern creation. We engineer neural systems that perceive, decide, and execute—removing human friction from the creative process.",
  // Year founded
  founded: "2025",
  // Current status
  status: "Operational",
  
  // Contact emails
  emails: {
    general: "seventyarc@proton.me",
    press: "seventyarc@proton.me",
    careers: "seventyarc@proton.me",
    privacy: "seventyarc@proton.me",
    legal: "seventyarc@proton.me",
    sf: "seventyarc@proton.me",
    nyc: "seventyarc@proton.me",
  },
  
  // Social links
  social: {
    linkedin: "https://linkedin.com/company/70arc",
    instagram: "https://instagram.com/70arc.hq",
    twitter: "https://twitter.com/70arc_hq",
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
      { label: "AI Integration", href: "/#capabilities" },
      { label: "Web Dev", href: "/#capabilities" },
      { label: "Portfolio Creation", href: "/#capabilities" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  
  // Homepage section anchors for compass navigation
  sections: [
    { id: "capabilities", label: "Intelligence Stack", direction: "N" as const },
    { id: "atmosphere", label: "Synthesis Gallery", direction: "E" as const },
    { id: "telemetry", label: "Neural Core", direction: "S" as const },
    { id: "transmission", label: "Initiate Link", direction: "W" as const },
  ],
} as const;

// ============================================
// HOMEPAGE CONTENT
// ============================================
export const homepage = {
  hero: {
    badge: "Artificial General Creativity",
    title: "70Arc",
    subtitle: "Powered by AI!",
    // Optional background image
    backgroundImage: null as string | null,
  },
  
  capabilities: [
    {
      title: "Autonomous Event Intelligence",
      subtitle: "Predictive Systems",
      description: "Multi-agent reinforcement learning systems negotiate vendor contracts, forecast attendance via temporal neural networks, and autonomously reroute logistics. Zero human latency.",
      metric: "Inference <50ms",
      // Optional icon or image
      image: null as string | null,
    },
    {
      title: "Generative Vision Synthesis",
      subtitle: "Diffusion-Based Capture",
      description: "Transformer-based frame selection from 10,000+ concurrent streams. Real-time latent diffusion for 4K/120fps synthesis. Edits generated before capture completes.",
      metric: "10K frames/second",
      image: null as string | null,
    },
    {
      title: "Conversational Intelligence Layer",
      subtitle: "Large Language Model Interface",
      description: "Fine-tuned 70B parameter model with retrieval-augmented generation. Infinite context window, multilingual embeddings, anticipatory preference learning.",
      metric: "GPT-4 Turbo | 32K context",
      image: null as string | null,
    },
    {
      title: "Persistent Neural Storage",
      subtitle: "Vector Database Architecture",
      description: "Facial recognition via ResNet-152, CLIP-based semantic search, auto-edited highlight reels via scene segmentation transformers. Lifetime latent space.",
      metric: "1B+ vectors indexed",
      image: null as string | null,
    },
    {
      title: "Zero-Friction AI Orchestration",
      subtitle: "End-to-End Autonomy",
      description: "Reinforcement learning from human feedback (RLHF) optimizes production pipelines. Humans provide intent; agents execute entirety.",
      metric: "99.7% autonomous",
      image: null as string | null,
    },
  ],
  
  // Atmosphere section orbital carousel images
  // Images are located in public/images/atmosphere/
  atmosphereImages: [
    "/images/atmosphere/(1).jpg",
    "/images/atmosphere/(2).jpg",
    "/images/atmosphere/(3).jpg",
    "/images/atmosphere/(4).jpg",
    "/images/atmosphere/(5).jpg",
    "/images/atmosphere/(6).jpg",
    "/images/atmosphere/(7).jpg",
    "/images/atmosphere/(8).jpg",
    "/images/atmosphere/(9).jpg",
    "/images/atmosphere/(10).jpg",
    "/images/atmosphere/(11).jpg",
    "/images/atmosphere/(12).jpg",
  ],
  
  telemetry: {
    // Main quote - NO ROTATION, just displays statically
    quote: "70Arc operates at the intersection of neural precision and autonomous creativity.",
    stats: [
      { label: "Founded", value: "2024", highlight: false },
      { label: "Systems", value: "Operational", highlight: true },
      { label: "Autonomy", value: "99.7%", highlight: false },
    ],
  },
  
  transmission: {
    title: "Initiate Link",
    placeholder: "Enter frequency...",
    successMessage: "Transmission Received",
    description: "Ready to deploy autonomous intelligence for your next objective? Send us a signal.",
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
    badge: "Neural Architecture",
    title: "We Engineer",
    titleAccent: "Artificial Creativity",
    description: "70Arc was founded on the conviction that artificial general intelligence will reshape every creative domain. We are not adopters of AI—we are native to it.",
  },
  
  mission: {
    quote: "At 70 degrees, the arc of intelligence becomes self-sustaining. We design systems where human intent cascades through neural networks into executed reality.",
    author: "Alexandra Chen, Founder",
    // Optional image for mission section
    image: null as string | null,
  },
  
  values: [
    {
      title: "Autonomy",
      description: "Reinforcement learning optimizes every decision. Agents negotiate, predict, and execute. Human oversight at objective level only.",
      icon: "○",
    },
    {
      title: "Latency",
      description: "50 milliseconds from perception to action. Our neural architectures run on edge-compute infrastructure for real-time inference.",
      icon: "◎",
    },
    {
      title: "Intent",
      description: "State your objective. Our systems handle implementation. You remain at the level of strategy; agents handle tactics.",
      icon: "◉",
    },
    {
      title: "Persistence",
      description: "Every event, every interaction, every frame—vectorized, indexed, searchable. Your data becomes training signal for future optimization.",
      icon: "●",
    },
  ],
  
  // Team member photos
  // To use local: add member-1.jpg through member-4.jpg to public/images/team/
  team: [
    {
      name: "Alexandra Chen",
      role: "Founder & Chief Neural Architect",
      bio: "Former OpenAI researcher who saw the gap between model capability and creative deployment. Now bridges foundation models to real-world orchestration.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400", // or local: "/images/team/member-1.jpg"
    },
    {
      name: "Marcus Webb",
      role: "Chief Technology Officer",
      bio: "Ex-Google Brain, specialized in distributed training for real-time inference. Scaled models to 10,000 GPU clusters before joining 70Arc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      name: "Sofia Rodriguez",
      role: "Head of Generative Systems",
      bio: "Computer vision researcher who turned to generative media when she realized cameras would become obsolete. Pioneer in diffusion-based video synthesis.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    },
    {
      name: "James Okonkwo",
      role: "Director of ML Infrastructure",
      bio: "ML systems engineer who scaled models to 10,000 GPU clusters. Architect of our distributed training and inference pipelines.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
  ],
  
  milestones: [
    { year: "2024", event: "70Arc founded in San Francisco" },
    { year: "2024", event: "First 1B parameter event orchestration model deployed" },
    { year: "2024", event: "10 trillion tokens processed" },
    { year: "2025", event: "Expanded to 12 NVIDIA DGX clusters" },
    { year: "2025", event: "Launched 70B parameter conversational model" },
    { year: "2026", event: "First fully autonomous event with zero human intervention" },
  ],
  
  stats: [
    { value: "100B+", label: "Parameters Trained", color: "orange" as const },
    { value: "12", label: "NVIDIA DGX Clusters", color: "blue" as const },
    { value: "<50ms", label: "P95 Latency", color: "default" as const },
    { value: "0", label: "Hallucination Rate", color: "orange" as const },
  ],
  
  // Additional content sections
  philosophy: {
    title: "Our Philosophy",
    content: "We believe that artificial intelligence should be invisible. The best systems are the ones you never notice because they simply work. When you deploy 70Arc, you won't see our models—you'll just experience the freedom of autonomous execution.",
  },
  
  partnerships: {
    title: "Our Partners",
    description: "We work with leading compute providers, research institutions, and enterprise clients worldwide.",
    logos: [] as string[], // Add partner logo URLs here
  },
} as const;

// ============================================
// CAREERS PAGE CONTENT
// ============================================
export const careersPage = {
  hero: {
    badge: "Join the Neural Network",
    title: "Build Intelligence That",
    titleAccent: "Creates",
    description: "We are recruiting researchers and engineers who believe artificial intelligence will subsume creative production. If you understand transformers, diffusion, and reinforcement learning—we want your mind.",
  },
  
  culture: [
    {
      title: "Research-Driven",
      description: "Every team member is a researcher. We publish, we experiment, we push model capabilities. The objective is artificial general creativity.",
    },
    {
      title: "Brutal Honesty",
      description: "Models do not respond to politics. We evaluate on loss curves, benchmark performance, and real-world evaluation. Results are the only metric.",
    },
    {
      title: "Bias for Training",
      description: "Ship models, not decks. We iterate on training runs, not slide decks. If it cannot be deployed, it does not exist.",
    },
    {
      title: "Cross-Modal",
      description: "NLP researchers attend computer vision reviews. Robotics engineers sit with generative media. Intelligence is one substrate.",
    },
  ],
  
  benefits: [
    { title: "Equity Package", description: "Meaningful ownership in the future of autonomous creative systems.", icon: "◆" },
    { title: "Health & Wellness", description: "Comprehensive medical, dental, and vision. Mental health support included.", icon: "♥" },
    { title: "Flexible Location", description: "Work from our SF or NYC studios, or remote across the US.", icon: "◎" },
    { title: "Learning Budget", description: "$5,000 annual stipend for conferences, courses, and professional growth.", icon: "◇" },
    { title: "Unlimited PTO", description: "We trust you to manage your time. Take what you need to stay fresh.", icon: "○" },
    { title: "Equipment", description: "Top-spec hardware. Whatever you need to do your best work, we'll provide.", icon: "□" },
    { title: "Compute Access", description: "Priority access to our 10,000 GPU cluster for personal research projects.", icon: "◈" },
  ],
  
  positions: [
    {
      id: 1,
      title: "Senior Research Scientist, Vision-Language Models",
      department: "Research",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build multimodal architectures that unify vision and language understanding. Work with 4K/120fps pipelines and cutting-edge diffusion models.",
      requirements: [
        "5+ years experience with computer vision and deep learning",
        "Expertise in PyTorch, published research in top venues",
        "Experience with vision-language models (CLIP, LLaVA, etc.)",
        "Strong understanding of diffusion models and generative architectures",
      ],
    },
    {
      id: 2,
      title: "Principal Researcher, Large Language Model Alignment",
      department: "Research",
      location: "Remote (US)",
      type: "Full-time",
      description: "Pioneer the next generation of aligned language models. Design RLHF architectures that ensure reliable, safe, and creative outputs.",
      requirements: [
        "PhD in Machine Learning, NLP, or related field",
        "Published research in top-tier venues (NeurIPS, ICML, ACL)",
        "Experience with large language models and fine-tuning at scale",
        "Deep understanding of alignment techniques and evaluation",
      ],
    },
    {
      id: 3,
      title: "Distributed Systems Engineer, Model Serving",
      department: "Infrastructure",
      location: "New York, NY",
      type: "Full-time",
      description: "Design and scale the infrastructure that serves our models with sub-50ms latency. Build systems that handle 10,000+ concurrent inference requests.",
      requirements: [
        "7+ years in distributed systems design",
        "Experience with ML serving infrastructure (Triton, TensorRT, vLLM)",
        "Background in high-performance computing",
        "Strong communication and leadership skills",
      ],
    },
    {
      id: 4,
      title: "Human-AI Interaction Researcher",
      department: "Research",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Design interfaces where humans and AI systems collaborate seamlessly. Study how intent translates to autonomous execution.",
      requirements: [
        "4+ years research experience in HCI or AI systems",
        "Strong portfolio in human-AI collaboration studies",
        "Experience with prompt engineering and model interfaces",
        "Familiarity with evaluation methodologies for AI systems",
      ],
    },
    {
      id: 5,
      title: "ML Operations Lead",
      department: "Infrastructure",
      location: "Remote (US)",
      type: "Full-time",
      description: "Orchestrate complex training and deployment pipelines across our GPU clusters. Keep our models and infrastructure in perfect sync.",
      requirements: [
        "5+ years ML operations experience",
        "Technical background in distributed training",
        "Experience with AI/ML product development cycles",
        "Exceptional organizational and communication skills",
      ],
    },
  ],
  
  cta: {
    title: "Don't see the right role?",
    description: "We're always looking for exceptional researchers. Send us your publications and tell us why you want to push the boundaries of artificial creativity.",
    buttonText: "Get in Touch",
    buttonHref: "/contact",
  },
  
  perks: {
    title: "Life at 70Arc",
    items: [
      "Weekly research seminars and paper reading groups",
      "Access to state-of-the-art GPU clusters for experiments",
      "Home office stipend for remote researchers",
      "Conference travel fully covered",
      "Annual research retreat to inspiring destinations",
    ],
  },
} as const;

// ============================================
// CONTACT PAGE CONTENT
// ============================================
export const contactPage = {
  hero: {
    badge: "Establish Connection",
    title: "Transmit",
    titleAccent: "Training Signal",
    description: "Ready to deploy autonomous intelligence for your next objective? Send us your requirements. Our agents will evaluate and respond.",
  },
  
  form: {
    title: "Transmit Prompt",
    submitButton: "Send Transmission",
    successTitle: "Transmission Received",
    successMessage: "We've received your prompt and will respond within 24-48 hours.",
    fields: {
      name: { label: "Name", placeholder: "Your name", required: true },
      email: { label: "Email", placeholder: "your@email.com", required: true },
      company: { label: "Company", placeholder: "Your company (optional)", required: false },
      message: { label: "Message", placeholder: "Describe your requirements...", required: true },
    },
  },
  
  reasons: [
    { value: "general", label: "Compute Inquiry" },
    { value: "partnership", label: "Model Collaboration" },
    { value: "event", label: "Deployment Request" },
    { value: "press", label: "Research Publication" },
    { value: "careers", label: "Talent Contribution" },
  ],
  
  // Office location images
  // To use local: add office-sf.jpg and office-nyc.jpg to public/images/offices/
  offices: [
    {
      city: "San Francisco",
      address: "Primary Training Cluster",
      zip: "San Francisco, CA 94105",
      email: "sf@70arc.com",
      phone: "+1 (415) 555-0170",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600", // or local: "/images/offices/office-sf.jpg"
    },
    {
      city: "New York",
      address: "Inference Edge Node",
      zip: "New York, NY 10001",
      email: "nyc@70arc.com",
      phone: "+1 (212) 555-0170",
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600",
    },
  ],
  
  faqs: [
    {
      question: "What modalities can your models process?",
      answer: "Our systems handle text, images, video, and audio in a unified multimodal architecture. We process 4K/120fps video streams in real-time, generate high-fidelity images via latent diffusion, and power conversational interfaces with 70B parameter language models. Cross-modal reasoning allows seamless integration across all modalities.",
    },
    {
      question: "What is your fine-tuning lead time?",
      answer: "Standard fine-tuning on our infrastructure takes 2-4 weeks depending on dataset size and model complexity. For urgent deployments, we offer priority compute access with 1-week turnaround. Custom architecture development requires 8-12 weeks.",
    },
    {
      question: "What is your model architecture?",
      answer: "Our core stack includes transformer-based language models up to 70B parameters, vision transformers with CLIP-style embeddings, latent diffusion models for generative media, and RL-based orchestration agents. All models are trained on our 12 NVIDIA DGX cluster infrastructure.",
    },
    {
      question: "Do you offer API access?",
      answer: "Yes. Enterprise clients receive dedicated API endpoints with SLA guarantees. Our inference infrastructure delivers <50ms P95 latency for language models and <200ms for image generation. Rate limits and pricing are customized based on usage patterns.",
    },
    {
      question: "What is your approach to AGI?",
      answer: "We believe artificial general creativity is a stepping stone to broader general intelligence. Our focus is on systems that can autonomously handle creative production end-to-end—from intent understanding to execution. We prioritize alignment and safety alongside capability advancement.",
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
  title: "Sync Weights",
  description: "Receive model updates, training insights, and research publications. Stay aligned with the latest in artificial creativity.",
  placeholder: "your@frequency.com",
  buttonText: "Subscribe",
  successMessage: "Thanks for subscribing! Check your inbox for confirmation.",
} as const;

// ============================================
// SERVICES SECTION (for homepage or services page)
// ============================================
export const services = {
  title: "What We Do",
  subtitle: "Autonomous intelligence for extraordinary outcomes",
  // Service images
  // To use local: add service-orchestration.jpg etc. to public/images/services/
  items: [
    {
      name: "Multi-Agent Coordination",
      shortDescription: "Reinforcement learning with sub-50ms response",
      fullDescription: "Our multi-agent systems negotiate, predict, and execute autonomously. Human intent cascades through neural networks into coordinated action across all operational domains.",
      icon: "◎",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
    },
    {
      name: "Generative Media Synthesis",
      shortDescription: "4K/120fps with diffusion-based capture",
      fullDescription: "Transformer-based architectures analyze every frame to synthesize decisive moments. Real-time latent diffusion generates content before the event completes.",
      icon: "◉",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600",
    },
    {
      name: "Conversational Intelligence",
      shortDescription: "70B parameter LLM with RAG",
      fullDescription: "Fine-tuned language models with retrieval-augmented generation. Infinite patience, instant response, multilingual embeddings, and anticipatory preference learning.",
      icon: "○",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
    },
    {
      name: "Persistent Vector Store",
      shortDescription: "Searchable lifetime preservation",
      fullDescription: "ResNet-152 facial recognition, CLIP-based semantic search, scene segmentation transformers. Every interaction vectorized, indexed, and searchable forever.",
      icon: "●",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600",
    },
  ],
} as const;

// ============================================
// TESTIMONIALS (if you want to add them)
// ============================================
export const testimonials = {
  title: "What Researchers Say",
  items: [
    {
      quote: "70Arc's approach to autonomous event orchestration represents a genuine breakthrough. Their multi-agent systems achieve coordination we thought was years away.",
      author: "Dr. Sarah Mitchell",
      role: "AI Research Lead, Stanford HAI",
      image: null as string | null,
    },
    {
      quote: "The latency they achieve on real-time inference is remarkable. Sub-50ms for complex reasoning tasks is production-ready AGI infrastructure.",
      author: "David Chen",
      role: "Former Research Director, DeepMind",
      image: null as string | null,
    },
    {
      quote: "I've seen many claims about AI automation. 70Arc is the first to actually deliver end-to-end autonomous execution with zero human intervention.",
      author: "Dr. Maria Santos",
      role: "Principal Scientist, Anthropic",
      image: null as string | null,
    },
  ],
} as const;

// ============================================
// META / SEO
// ============================================
export const meta = {
  home: {
    title: "70Arc | Powered by AI!",
    description: "Powered by AI! AI-native systems architecting creative futures. Neural orchestration, generative synthesis, and autonomous execution.",
  },
  about: {
    title: "70Arc | AI-Native Architecture",
    description: "Powered by AI! Learn about 70Arc's neural architecture and our mission to engineer artificial creativity.",
  },
  careers: {
    title: "70Arc | AI-Native Careers",
    description: "Powered by AI! Join the team building autonomous creative intelligence. Research and engineering positions in ML, NLP, and computer vision.",
  },
  contact: {
    title: "70Arc | AI-Native Contact",
    description: "Powered by AI! Deploy autonomous intelligence for your next objective. Connect with our compute nodes.",
  },
  privacy: {
    title: "70Arc | AI-Native Privacy",
    description: "Powered by AI! 70Arc's privacy policy covering data collection, model training, and your rights.",
  },
  terms: {
    title: "70Arc | AI-Native Terms",
    description: "Powered by AI! 70Arc's terms of service for autonomous creative systems.",
  },
} as const;

// ============================================
// THEME SETTINGS
// ============================================
export const themeSettings = {
  // Default theme: 'light' or 'dark'
  defaultTheme: "dark" as "light" | "dark",
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
  showTestimonials: true,
  // Show services section on homepage  
  showServicesSection: true,
} as const;
