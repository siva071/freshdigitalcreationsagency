import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import NewsletterForm from "@/components/newsletter-form"

export const metadata: Metadata = {
  title: "Blog - Fresh Digital Creations",
  description: "Stay updated with the latest insights on web development, AI automation, digital marketing, and technology trends.",
}

export default function BlogPage() {
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      title: "Digital Marketing Trends: What's Working in 2024",
      excerpt: "Stay ahead with the latest digital marketing strategies that drive real results. From social media to content marketing, discover what's working now.",
      date: "2024-01-05",
      readTime: "6 min read",
      author: "Fresh Digital Team",
      category: "Digital Marketing",
      slug: "digital-marketing-trends-2024",
      details: [
        "Social media marketing strategies",
        "Content marketing best practices",
        "Email marketing automation",
        "Conversion rate optimization"
      ]
    },
    {
      title: "E-commerce Solutions: Building Profitable Online Stores",
      excerpt: "Create high-converting e-commerce experiences that drive sales. Learn about platform selection, payment integration, and optimization strategies.",
      date: "2024-01-03",
      readTime: "9 min read",
      author: "Fresh Digital Team",
      category: "E-commerce",
      slug: "ecommerce-solutions-guide",
      details: [
        "Platform selection and setup",
        "Payment gateway integration",
        "Inventory management systems",
        "Conversion optimization techniques"
      ]
    },
    {
      title: "Cloud Solutions: Scalable Infrastructure for Modern Businesses",
      excerpt: "Leverage cloud technology to scale your business efficiently. Discover cloud migration, serverless architecture, and cost optimization strategies.",
      date: "2024-01-01",
      readTime: "8 min read",
      author: "Fresh Digital Team",
      category: "Cloud Technology",
      slug: "cloud-solutions-business-guide",
      details: [
        "Cloud migration strategies",
        "Serverless architecture benefits",
        "Cost optimization techniques",
        "Security and compliance best practices"
      ]
    }
  ]

  const categories = [
    "All Posts",
    "UI/UX Design",
    "Web Development",
    "Mobile Development",
    "SEO & Marketing",
    "AI & Automation",
    "Design",
    "Digital Marketing",
    "E-commerce",
    "Cloud Technology"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Stay updated with the latest insights on web development, AI automation, digital marketing, 
              and technology trends from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-24">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                      <Link href={`/blog/${post.slug}`} className="flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="px-8">
              Load More Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest insights, tips, and trends delivered straight to your inbox. 
              Join our community of digital enthusiasts and never miss an update.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  )
}
