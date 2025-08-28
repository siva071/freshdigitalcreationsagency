import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Our terms of service outline the rules and regulations for using our website and services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Use License
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of the materials on our website 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Disclaimer
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              The materials on our website are provided on an 'as is' basis. We make no warranties, 
              expressed or implied, and hereby disclaim and negate all other warranties including 
              without limitation, implied warranties or conditions of merchantability, fitness for 
              a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Limitations
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              In no event shall Digital Solutions Agency or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to business 
              interruption) arising out of the use or inability to use the materials on our website, 
              even if we or our authorized representative has been notified orally or in writing of 
              the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Service Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When you engage our services, additional terms may apply:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>All projects require a signed contract and deposit</li>
              <li>Payment terms are outlined in individual project agreements</li>
              <li>Intellectual property rights are transferred upon full payment</li>
              <li>We reserve the right to showcase completed work in our portfolio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Revisions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may revise these terms of service at any time without notice. By using this website, 
              you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
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
