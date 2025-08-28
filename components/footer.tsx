import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Fresh Digital Creations</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your trusted partner for digital transformation. We create beautiful, 
              functional websites and effective marketing strategies that grow your business.
            </p>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/share/1B7FzinXwn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </div>
                  <span className="text-sm">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/freshdigitalcreations_?igsh=MTh5Y3RqcmFkZjVlaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <span className="text-sm">Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Website Design (UI/UX)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  SEO + Local SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-automation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AI Automation Workflows
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphics-design"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Graphics Design
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>freshdigitalcreations@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+91 9490308528</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Andhra Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Fresh Digital Creations. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
