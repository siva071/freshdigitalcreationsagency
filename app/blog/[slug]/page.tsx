import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Blog posts data - same as in the main blog page
const blogPosts = [
  {
    title: "Website Design (UI/UX): Creating User-Centered Digital Experiences",
    excerpt: "Beautiful, user-centered designs that convert visitors into customers. Learn about user research, wireframes, responsive design systems, and accessibility-first approaches.",
    date: "2024-01-20",
    readTime: "8 min read",
    author: "Fresh Digital Team",
    category: "UI/UX Design",
    slug: "website-design-ui-ux-guide",
    details: [
      "User research and persona development",
      "Wireframes and interactive prototypes", 
      "Responsive design systems",
      "Accessibility-first design approach"
    ],
    content: `
      <h2>Creating Beautiful, User-Centered Digital Experiences</h2>
      <p>In today's digital landscape, having a beautiful website isn't enough. Your website needs to be user-centered, conversion-focused, and accessible to all users. At Fresh Digital Creations, we specialize in creating UI/UX designs that not only look stunning but also drive real business results.</p>
      
      <h3>Our UI/UX Design Process</h3>
      <p>Our comprehensive design process ensures that every element of your website serves a purpose and contributes to your business goals.</p>
      
      <h4>1. User Research and Persona Development</h4>
      <p>We start by understanding your target audience through comprehensive user research. This includes analyzing user behavior, conducting surveys, and creating detailed user personas that guide our design decisions.</p>
      
      <h4>2. Wireframes and Interactive Prototypes</h4>
      <p>Before diving into visual design, we create detailed wireframes and interactive prototypes. This allows us to test user flows and ensure optimal user experience before investing in visual design.</p>
      
      <h4>3. Responsive Design Systems</h4>
      <p>We create comprehensive design systems that ensure consistency across all devices and screen sizes. Our responsive designs adapt seamlessly from desktop to mobile, providing an optimal experience for all users.</p>
      
      <h4>4. Accessibility-First Design Approach</h4>
      <p>Accessibility isn't an afterthought in our design process. We follow WCAG guidelines to ensure your website is usable by everyone, including users with disabilities.</p>
      
      <h3>Why Choose Our UI/UX Design Services?</h3>
      <p>Our team combines creativity with data-driven insights to create designs that not only look great but also perform exceptionally well. We focus on conversion optimization, user engagement, and brand consistency.</p>
      
      <p>Ready to transform your digital presence with user-centered design? Contact us today to discuss your project and see how we can help you create a website that truly converts visitors into customers.</p>
    `
  },
  {
    title: "Web Development: Building Fast, Scalable Modern Websites",
    excerpt: "Fast, scalable websites built with modern technologies. Discover Next.js applications, RESTful APIs, performance optimization, and CMS integration strategies.",
    date: "2024-01-18",
    readTime: "10 min read",
    author: "Fresh Digital Team",
    category: "Web Development",
    slug: "modern-web-development-guide",
    details: [
      "Next.js and React applications",
      "RESTful API development",
      "Performance optimization",
      "CMS integration (Headless/WordPress)"
    ],
    content: `
      <h2>Building Fast, Scalable Modern Websites</h2>
      <p>Modern web development requires more than just creating functional websites. Today's users expect lightning-fast loading times, seamless interactions, and flawless performance across all devices. Our web development services focus on creating websites that excel in all these areas.</p>
      
      <h3>Our Technology Stack</h3>
      <p>We use cutting-edge technologies to build websites that are not only fast and scalable but also maintainable and future-proof.</p>
      
      <h4>1. Next.js and React Applications</h4>
      <p>We specialize in Next.js and React development, creating dynamic, interactive web applications with server-side rendering for optimal performance and SEO. Our applications are built with modern JavaScript frameworks that ensure scalability and maintainability.</p>
      
      <h4>2. RESTful API Development</h4>
      <p>We develop robust RESTful APIs that power your web applications, enabling seamless data exchange and integration with third-party services. Our APIs are designed for scalability, security, and performance.</p>
      
      <h4>3. Performance Optimization</h4>
      <p>Page speed is crucial for user experience and SEO. We implement advanced optimization techniques including code splitting, lazy loading, image optimization, and caching strategies to ensure your website loads in under 3 seconds.</p>
      
      <h4>4. CMS Integration (Headless/WordPress)</h4>
      <p>We integrate powerful content management systems that give you full control over your website content. Whether you prefer headless CMS solutions or traditional WordPress, we ensure seamless content management capabilities.</p>
      
      <h3>Development Best Practices</h3>
      <p>Our development process follows industry best practices including version control, automated testing, continuous integration, and deployment pipelines. This ensures reliable, maintainable code that can scale with your business.</p>
      
      <p>Ready to build a modern, high-performance website? Contact us to discuss your web development needs and discover how we can help you create a digital presence that drives results.</p>
    `
  },
  {
    title: "App Development: Native and Cross-Platform Mobile Solutions",
    excerpt: "Native and cross-platform mobile apps that users love. Explore React Native development, Expo framework, App Store optimization, and analytics integration.",
    date: "2024-01-15",
    readTime: "9 min read",
    author: "Fresh Digital Team",
    category: "Mobile Development",
    slug: "mobile-app-development-guide",
    details: [
      "React Native development",
      "Expo framework expertise",
      "App Store optimization",
      "Push notifications and analytics"
    ],
    content: `
      <h2>Native and Cross-Platform Mobile Solutions</h2>
      <p>Mobile apps are essential for businesses looking to engage with their customers on-the-go. Our mobile app development services focus on creating apps that users love, with seamless performance and intuitive user experiences.</p>
      
      <h3>Our Mobile Development Approach</h3>
      <p>We specialize in creating mobile applications that work flawlessly across both iOS and Android platforms while maintaining native performance and user experience.</p>
      
      <h4>1. React Native Development</h4>
      <p>Using React Native, we build cross-platform mobile apps that share code between iOS and Android while maintaining native performance. This approach reduces development time and costs while ensuring consistent user experience across platforms.</p>
      
      <h4>2. Expo Framework Expertise</h4>
      <p>We leverage the Expo framework to accelerate development and deployment processes. Expo provides powerful tools for building, deploying, and updating React Native apps with ease, enabling faster time-to-market.</p>
      
      <h4>3. App Store Optimization</h4>
      <p>Getting your app discovered is crucial for success. We optimize your app store listings with compelling descriptions, screenshots, and keywords to improve visibility and download rates on both Apple App Store and Google Play Store.</p>
      
      <h4>4. Push Notifications and Analytics</h4>
      <p>We integrate advanced push notification systems to keep users engaged and comprehensive analytics to track user behavior, app performance, and business metrics. This data-driven approach helps optimize your app for better user retention.</p>
      
      <h3>App Development Process</h3>
      <p>Our development process includes thorough planning, user experience design, development, testing, deployment, and ongoing maintenance. We ensure your app meets the highest quality standards and provides exceptional user experience.</p>
      
      <p>Ready to bring your app idea to life? Contact us to discuss your mobile app development needs and learn how we can help you create an app that users will love.</p>
    `
  },
  {
    title: "SEO + Local SEO: Get Found Online with Data-Driven Strategies",
    excerpt: "Get found online with data-driven SEO strategies. Master technical SEO audits, on-page optimization, schema markup, and Google Business Profile optimization.",
    date: "2024-01-12",
    readTime: "12 min read",
    author: "Fresh Digital Team",
    category: "SEO & Marketing",
    slug: "seo-local-seo-strategies",
    details: [
      "Technical SEO audits and fixes",
      "On-page optimization",
      "Schema markup implementation",
      "Google Business Profile optimization"
    ],
    content: `
      <h2>Get Found Online with Data-Driven SEO Strategies</h2>
      <p>Search Engine Optimization (SEO) is crucial for online visibility and business growth. Our comprehensive SEO services help businesses rank higher in search results, attract more organic traffic, and convert visitors into customers.</p>
      
      <h3>Our SEO Services</h3>
      <p>We provide end-to-end SEO solutions that cover all aspects of search engine optimization, from technical improvements to content strategy and local search optimization.</p>
      
      <h4>1. Technical SEO Audits and Fixes</h4>
      <p>We conduct comprehensive technical SEO audits to identify and fix issues that may be preventing your website from ranking well. This includes site speed optimization, mobile-friendliness, crawlability, and indexability improvements.</p>
      
      <h4>2. On-Page Optimization</h4>
      <p>Our on-page optimization services include keyword research, content optimization, meta tag optimization, header structure improvement, and internal linking strategies. We ensure every page is optimized for both search engines and users.</p>
      
      <h4>3. Schema Markup Implementation</h4>
      <p>We implement structured data markup to help search engines better understand your content and display rich snippets in search results. This can significantly improve your click-through rates and visibility.</p>
      
      <h4>4. Google Business Profile Optimization</h4>
      <p>For local businesses, we optimize Google Business Profiles to improve local search visibility. This includes profile optimization, review management, local citation building, and local content strategy.</p>
      
      <h3>SEO Results You Can Measure</h3>
      <p>We provide detailed reporting and analytics to track your SEO progress. Our data-driven approach ensures that every strategy is backed by measurable results and continuous improvement.</p>
      
      <p>Ready to improve your search engine rankings and attract more organic traffic? Contact us to discuss your SEO needs and learn how we can help you dominate search results in your industry.</p>
    `
  },
  {
    title: "AI Automation Workflows: Streamline Your Business Operations",
    excerpt: "Streamline operations with intelligent automation solutions. Learn workflow automation, AI chatbot development, LLM integration, and data pipeline automation.",
    date: "2024-01-10",
    readTime: "11 min read",
    author: "Fresh Digital Team",
    category: "AI & Automation",
    slug: "ai-automation-workflows-guide",
    details: [
      "Workflow automation (n8n, Zapier, Make)",
      "AI chatbot development",
      "LLM integration and fine-tuning",
      "Data pipeline automation"
    ],
    content: `
      <h2>Streamline Your Business Operations with AI Automation</h2>
      <p>Artificial Intelligence and automation are transforming how businesses operate. Our AI automation services help you streamline repetitive tasks, improve efficiency, and focus on what matters most - growing your business.</p>
      
      <h3>Our AI Automation Services</h3>
      <p>We specialize in creating intelligent automation solutions that integrate seamlessly with your existing business processes and tools.</p>
      
      <h4>1. Workflow Automation (n8n, Zapier, Make)</h4>
      <p>We design and implement automated workflows using powerful platforms like n8n, Zapier, and Make. These automations can handle tasks like data synchronization, email marketing, lead management, and customer onboarding without manual intervention.</p>
      
      <h4>2. AI Chatbot Development</h4>
      <p>Our custom AI chatbots provide 24/7 customer support, lead qualification, and sales assistance. Built with advanced natural language processing, our chatbots understand context and provide human-like interactions that improve customer satisfaction.</p>
      
      <h4>3. LLM Integration and Fine-Tuning</h4>
      <p>We integrate Large Language Models (LLMs) into your business processes and fine-tune them for your specific use cases. This enables advanced content generation, document analysis, customer service automation, and decision support systems.</p>
      
      <h4>4. Data Pipeline Automation</h4>
      <p>We create automated data pipelines that collect, process, and analyze your business data in real-time. This enables better decision-making through automated reporting, predictive analytics, and business intelligence dashboards.</p>
      
      <h3>Benefits of AI Automation</h3>
      <p>Our AI automation solutions can reduce operational costs by up to 60%, improve accuracy, and free up your team to focus on strategic initiatives. We ensure smooth implementation with minimal disruption to your existing processes.</p>
      
      <p>Ready to transform your business with AI automation? Contact us to discuss your automation needs and discover how we can help you work smarter, not harder.</p>
    `
  },
  {
    title: "Graphics Design: Compelling Visual Brand Storytelling",
    excerpt: "Compelling visual designs that communicate your brand story. Discover brand identity design, social media kits, pitch decks, and digital advertising creatives.",
    date: "2024-01-08",
    readTime: "7 min read",
    author: "Fresh Digital Team",
    category: "Design",
    slug: "graphics-design-brand-storytelling",
    details: [
      "Brand identity and logo design",
      "Social media design kits",
      "Pitch deck and presentation design",
      "Digital advertising creatives"
    ],
    content: `
      <h2>Compelling Visual Brand Storytelling</h2>
      <p>Visual design is the foundation of effective brand communication. Our graphics design services help businesses create compelling visual identities that tell their story, engage their audience, and drive business results.</p>
      
      <h3>Our Graphics Design Services</h3>
      <p>We provide comprehensive design solutions that cover all aspects of visual brand communication, from logo design to digital marketing materials.</p>
      
      <h4>1. Brand Identity and Logo Design</h4>
      <p>We create memorable brand identities that reflect your company's values and resonate with your target audience. Our logo designs are versatile, scalable, and designed to work across all media and applications.</p>
      
      <h4>2. Social Media Design Kits</h4>
      <p>Our social media design kits include templates, graphics, and brand guidelines that ensure consistent visual communication across all social platforms. We create designs that are optimized for engagement and brand recognition.</p>
      
      <h4>3. Pitch Deck and Presentation Design</h4>
      <p>We design compelling pitch decks and presentations that help you communicate your ideas effectively. Our designs combine clear information hierarchy with engaging visuals to keep your audience engaged and persuaded.</p>
      
      <h4>4. Digital Advertising Creatives</h4>
      <p>Our digital advertising creatives are designed to capture attention and drive conversions. We create banner ads, social media ads, and display advertising that align with your brand and campaign objectives.</p>
      
      <h3>Design Process</h3>
      <p>Our design process begins with understanding your brand, target audience, and objectives. We then create multiple design concepts, refine based on feedback, and deliver final designs with all necessary file formats and brand guidelines.</p>
      
      <p>Ready to elevate your brand with compelling visual design? Contact us to discuss your graphics design needs and see how we can help you tell your brand story through powerful visual communication.</p>
    `
  }
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    return {
      title: "Post Not Found - Fresh Digital Creations",
      description: "The blog post you're looking for could not be found."
    }
  }

  return {
    title: `${post.title} - Fresh Digital Creations`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="mb-6">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Key Features */}
                <Card className="mt-12 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Key Features & Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {post.details.map((detail, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-lg sticky top-8">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">Ready to Get Started?</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Let's discuss your project and see how we can help you achieve your goals.
                    </p>
                    <div className="space-y-4">
                      <Button asChild className="w-full">
                        <Link href="/contact">
                          Get Free Consultation
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="https://wa.me/919490308528">
                          WhatsApp Us
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold mb-4">Contact Information</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <p>📧 freshdigitalcreations@gmail.com</p>
                        <p>📱 +91 9490308528</p>
                        <p>📍 Andhra Pradesh, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.slug !== post.slug)
                .slice(0, 4)
                .map((relatedPost, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          Read More →
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
