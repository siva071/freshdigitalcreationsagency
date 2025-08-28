import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Search, TrendingUp, Target, BarChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "SEO + Local SEO Services - Fresh Digital Creations",
  description: "Get found online with data-driven SEO strategies. Technical SEO audits, on-page optimization, schema markup, and Google Business Profile optimization.",
}

export default function SEOPage() {
  const features = [
    "Technical SEO audits and fixes",
    "On-page optimization",
    "Schema markup implementation",
    "Google Business Profile optimization"
  ]

  const benefits = [
    {
      icon: Search,
      title: "Higher Rankings",
      description: "Improve your search engine rankings with proven SEO strategies and techniques."
    },
    {
      icon: TrendingUp,
      title: "More Traffic",
      description: "Attract more organic traffic from users actively searching for your services."
    },
    {
      icon: Target,
      title: "Local Visibility",
      description: "Dominate local search results and attract customers in your area."
    },
    {
      icon: BarChart,
      title: "Measurable Results",
      description: "Track your progress with detailed analytics and performance reports."
    }
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
              SEO + Local SEO
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Get found online with data-driven SEO strategies
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="/contact">
                  Get Free SEO Audit
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
              What's Included in Our SEO Service
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's improve your search rankings and attract more customers. 
              Get your free SEO audit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                <Link href="/contact">
                  Get Free SEO Audit
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
