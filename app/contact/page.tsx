import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"
import SupabaseContactForm from "@/components/supabase-contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team to discuss your project. We'd love to help bring your digital vision to life.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Have a project in mind? We'd love to hear from you! Reach out to discuss your ideas, 
              get a quote, or simply say hello. We're here to help bring your digital vision to life 
              with innovative solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Ready to start your project? Contact us directly using any of the methods below.
              </p>
              
              <div className="space-y-6">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Email Us
                        </h3>
                        <a href="mailto:freshdigitalcreations@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                          freshdigitalcreations@gmail.com
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Available 24/7 - Quick responses guaranteed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          WhatsApp
                        </h3>
                        <a href="https://wa.me/919490308528" className="text-green-600 dark:text-green-400 hover:underline">
                          +91 9490308528
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Available 24/7 for instant support
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Location
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Andhra Pradesh, India
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Serving clients worldwide
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <SupabaseContactForm />
            </div>
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
