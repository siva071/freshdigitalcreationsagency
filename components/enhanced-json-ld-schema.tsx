'use client'

export function EnhancedJsonLdSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "DigitalMarketingAgency",
    "name": "Fresh Digital Creations",
    "description": "Professional web development, mobile app development, and digital marketing services",
    "url": "https://freshdigitalcreations.com",
    "logo": "https://freshdigitalcreations.com/favicon.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Drive",
      "addressLocality": "Tech City",
      "addressRegion": "TC",
      "postalCode": "12345"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@freshdigitalcreations.com"
    },
    "sameAs": [
      "https://linkedin.com/company/freshdigitalcreations",
      "https://twitter.com/freshdigitalcreations"
    ],
    "services": [
      "Web Development",
      "Mobile App Development", 
      "UI/UX Design",
      "SEO Optimization",
      "AI Automation",
      "Graphics Design"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}
