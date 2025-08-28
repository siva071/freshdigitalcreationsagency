import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Star, Code, Zap, Globe, Database } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Web Development Services - Fresh Digital Creations",
  description: "Fast, scalable websites built with modern technologies. Next.js applications, RESTful APIs, performance optimization, and CMS integration.",
}

export default function WebDevelopmentPage() {
  const features = [
    "Next.js and React applications",
    "RESTful API development",
    "Performance optimization",
    "CMS integration (Headless/WordPress)"
  ]

  const benefits = [
    {
      icon: Code,
      title: "Modern Technologies",
      description: "Built with cutting-edge frameworks like Next.js, React, and Node.js for optimal performance."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with server-side rendering, code splitting, and advanced caching strategies."
    },
    {
      icon: Globe,
      title: "Scalable Architecture",
      description: "Built to handle growth with cloud-native architecture and microservices design patterns."
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Seamless integration with third-party services and custom API development for your needs."
    }
  ]

  const technologies = [
    { name: "Next.js", description: "React framework for production" },
    { name: "React", description: "Modern JavaScript library" },
    { name: "Node.js", description: "Server-side JavaScript runtime" },
    { name: "TypeScript", description: "Type-safe JavaScript" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    { name: "MongoDB", description: "NoSQL database" },
    { name: "PostgreSQL", description: "Relational database" },
    { name: "AWS", description: "Cloud infrastructure" }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/services" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Web Development
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Fast, scalable websites built with modern technologies
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/contact">
                  Get Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="https://wa.me/919490308528">
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              What's Included in Our Web Development Service
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Technologies We Use
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1">{tech.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Modern Website?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create a fast, scalable website that drives your business forward. 
              Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                <Link href="/contact">
                  Get Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 h-auto">
                <Link href="https://wa.me/919490308528">
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
