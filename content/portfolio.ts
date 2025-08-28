export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  image: string
  gallery?: string[]
  liveUrl?: string
  githubUrl?: string
  challenge: string
  approach: string
  outcome: string
  stack: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
  }
}

export const portfolioCategories = [
  "All",
  "Web",
  "App",
  "Branding",
  "AI",
  "SEO"
]

export const portfolioItems: PortfolioItem[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with AI-powered recommendations",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Stripe", "AI"],
    image: "/images/portfolio/ecommerce-platform.jpg",
    gallery: [
      "/images/portfolio/ecommerce-1.jpg",
      "/images/portfolio/ecommerce-2.jpg",
      "/images/portfolio/ecommerce-3.jpg"
    ],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
    challenge: "Client needed a scalable e-commerce platform with personalized shopping experiences and seamless payment processing.",
    approach: "Built with Next.js for optimal performance, integrated AI recommendations, and implemented secure payment processing with Stripe.",
    outcome: "40% increase in conversion rates and 60% improvement in user engagement within 3 months of launch.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Vercel"],
    testimonial: {
      quote: "The platform exceeded our expectations. Sales increased by 40% in the first quarter.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Fashion Forward"
    }
  },
  {
    id: "fitness-mobile-app",
    title: "Fitness Tracking App",
    description: "Cross-platform mobile app for fitness enthusiasts",
    category: "App",
    tags: ["React Native", "Firebase", "Health Kit"],
    image: "/images/portfolio/fitness-app.jpg",
    gallery: [
      "/images/portfolio/fitness-1.jpg",
      "/images/portfolio/fitness-2.jpg"
    ],
    liveUrl: "https://apps.apple.com/app/fitness-tracker",
    challenge: "Create an intuitive fitness app that motivates users to maintain healthy habits with social features.",
    approach: "Developed with React Native for cross-platform compatibility, integrated with health APIs, and added gamification elements.",
    outcome: "50K+ downloads in first 6 months with 4.8-star rating on app stores.",
    stack: ["React Native", "Expo", "Firebase", "Redux", "Health Kit", "Google Fit"],
    testimonial: {
      quote: "This app transformed how our users engage with fitness. The retention rate is incredible.",
      author: "Mike Chen",
      role: "Product Manager",
      company: "FitLife Studios"
    }
  },
  {
    id: "restaurant-brand-identity",
    title: "Restaurant Brand Identity",
    description: "Complete brand redesign for upscale dining establishment",
    category: "Branding",
    tags: ["Brand Design", "Logo", "Print Design"],
    image: "/images/portfolio/restaurant-branding.jpg",
    gallery: [
      "/images/portfolio/restaurant-1.jpg",
      "/images/portfolio/restaurant-2.jpg",
      "/images/portfolio/restaurant-3.jpg"
    ],
    challenge: "Rebrand a traditional restaurant to appeal to younger demographics while maintaining elegance.",
    approach: "Created modern visual identity with sophisticated typography, warm color palette, and cohesive brand materials.",
    outcome: "25% increase in younger customer demographics and improved brand recognition in local market.",
    stack: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    testimonial: {
      quote: "The new brand identity perfectly captures our restaurant's essence. Customer feedback has been overwhelmingly positive.",
      author: "Antonio Rodriguez",
      role: "Owner",
      company: "Bella Vista Restaurant"
    }
  },
  {
    id: "ai-chatbot-integration",
    title: "AI Customer Support Bot",
    description: "Intelligent chatbot for automated customer service",
    category: "AI",
    tags: ["OpenAI", "Node.js", "Natural Language Processing"],
    image: "/images/portfolio/ai-chatbot.jpg",
    challenge: "Reduce customer support workload while maintaining high-quality service and customer satisfaction.",
    approach: "Built custom AI chatbot using OpenAI GPT models with company-specific training data and seamless handoff to human agents.",
    outcome: "70% reduction in support tickets and 90% customer satisfaction rate with automated responses.",
    stack: ["OpenAI API", "Node.js", "MongoDB", "Socket.io", "React"],
    testimonial: {
      quote: "The AI chatbot handles most of our inquiries perfectly. Our support team can now focus on complex issues.",
      author: "Lisa Wang",
      role: "Customer Success Manager",
      company: "TechStart Inc."
    }
  },
  {
    id: "local-seo-campaign",
    title: "Local SEO Campaign",
    description: "Comprehensive SEO strategy for multi-location business",
    category: "SEO",
    tags: ["Local SEO", "Google Business", "Content Strategy"],
    image: "/images/portfolio/seo-campaign.jpg",
    challenge: "Improve local search visibility for a multi-location service business across different markets.",
    approach: "Implemented comprehensive local SEO strategy including Google Business Profile optimization, local content creation, and citation building.",
    outcome: "300% increase in local search visibility and 150% growth in organic leads within 6 months.",
    stack: ["Google Business Profile", "SEMrush", "Ahrefs", "Google Analytics", "Schema Markup"],
    testimonial: {
      quote: "Our local search rankings improved dramatically. We're now the top result for our services in all target cities.",
      author: "David Thompson",
      role: "Marketing Director",
      company: "Home Services Pro"
    }
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics dashboard for SaaS platform",
    category: "Web",
    tags: ["React", "D3.js", "Real-time", "Analytics"],
    image: "/images/portfolio/saas-dashboard.jpg",
    gallery: [
      "/images/portfolio/dashboard-1.jpg",
      "/images/portfolio/dashboard-2.jpg"
    ],
    liveUrl: "https://analytics-dashboard.example.com",
    challenge: "Create an intuitive dashboard that presents complex analytics data in an easily digestible format.",
    approach: "Designed clean interface with interactive charts, real-time updates, and customizable widgets using modern web technologies.",
    outcome: "40% improvement in user engagement with analytics features and reduced time-to-insight by 60%.",
    stack: ["React", "TypeScript", "D3.js", "WebSocket", "Node.js", "PostgreSQL"],
    testimonial: {
      quote: "The dashboard gives us insights we never had before. Decision-making is now data-driven and faster.",
      author: "Jennifer Lee",
      role: "VP of Product",
      company: "DataFlow Solutions"
    }
  }
]
