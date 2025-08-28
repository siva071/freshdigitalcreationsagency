import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Our cookie policy explains how we use cookies and similar technologies on our website.",
}

export default function CookiePage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Cookie Policy
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What Are Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How We Use Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>To remember your preferences and settings</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To improve website functionality and user experience</li>
              <li>To provide personalized content and recommendations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Essential Cookies</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Analytics Cookies</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  These cookies help us understand how visitors interact with our website by collecting anonymous information.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Functional Cookies</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Managing Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Most browsers allow you to refuse cookies or delete existing cookies</li>
              <li>You can set your browser to notify you when cookies are being used</li>
              <li>Some browsers offer private browsing modes that don't store cookies</li>
              <li>You can opt out of analytics cookies through our cookie preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may use third-party services that place cookies on your device. These services include 
              analytics providers, social media platforms, and advertising networks. Each third party 
              has its own privacy and cookie policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Updates to This Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. Please check this page periodically 
              for updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Fresh Digital Creations</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>freshdigitalcreations@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+91 9490308528</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>Andhra Pradesh</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
