import { HeroSection } from "@/components/hero-section"
import dynamic from 'next/dynamic'

// Lazy load components that are below the fold
const ServicesOverview = dynamic(() => import("@/components/services-overview").then(mod => ({ default: mod.ServicesOverview })), {
  loading: () => <div className="py-16 bg-gray-50 animate-pulse"><div className="container h-96"></div></div>
})

const WhyChooseUs = dynamic(() => import("@/components/why-choose-us").then(mod => ({ default: mod.WhyChooseUs })), {
  loading: () => <div className="py-16 animate-pulse"><div className="container h-96"></div></div>
})

const PortfolioTeaser = dynamic(() => import("@/components/portfolio-teaser").then(mod => ({ default: mod.PortfolioTeaser })), {
  loading: () => <div className="py-16 bg-gray-50 animate-pulse"><div className="container h-96"></div></div>
})

const TestimonialsCarousel = dynamic(() => import("@/components/testimonials-carousel").then(mod => ({ default: mod.TestimonialsCarousel })), {
  loading: () => <div className="py-24 bg-gray-50 animate-pulse"><div className="container h-96"></div></div>
})

const WhatYouCanExpect = dynamic(() => import("@/components/what-you-can-expect").then(mod => ({ default: mod.WhatYouCanExpect })), {
  loading: () => <div className="py-16 animate-pulse"><div className="container h-96"></div></div>
})

const CTASection = dynamic(() => import("@/components/cta-section").then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"><div className="container h-64"></div></div>
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioTeaser />
      <TestimonialsCarousel />
      <WhatYouCanExpect />
      <CTASection />
    </>
  )
}
