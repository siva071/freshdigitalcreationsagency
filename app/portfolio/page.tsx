import type { Metadata } from "next"
import { PortfolioGrid } from "@/components/portfolio-grid"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of successful projects across web development, app development, branding, AI automation, and SEO campaigns.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Discover our successful projects that showcase our expertise across different industries and technologies. 
              Each project represents our commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container">
          <PortfolioGrid />
        </div>
      </section>
    </div>
  )
}
