"use client"

import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or doesn't exist. 
            This could happen if you followed an outdated link, mistyped the URL, or the content has been reorganized.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              What you can do next:
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 text-left">
              <li>• Check the URL for any typos or spelling errors</li>
              <li>• Use the navigation menu to find what you're looking for</li>
              <li>• Visit our homepage to explore our services</li>
              <li>• Contact us if you believe this is an error</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Link href="/services" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
                <div className="text-orange-500 font-medium">Our Services</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Web Development, AI Automation & More</div>
              </Link>
              <Link href="/about" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
                <div className="text-orange-500 font-medium">About Us</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Learn about Fresh Digital Creations</div>
              </Link>
              <Link href="/contact" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
                <div className="text-orange-500 font-medium">Contact</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Get in touch with our team</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button 
            onClick={handleGoBack}
            variant="outline" 
            size="lg"
            className="flex items-center border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Need help? Contact us:
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Our team is here to help you find what you're looking for or assist with any technical issues.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">📧</span>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Email Support</div>
                  <div className="text-orange-600 dark:text-orange-400">freshdigitalcreations@gmail.com</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">We typically respond within 24 hours</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Or reach out through our contact form for faster response
                </div>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium text-sm transition-colors"
                >
                  Visit Contact Page →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
