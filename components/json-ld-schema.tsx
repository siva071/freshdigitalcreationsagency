import { siteConfig } from "@/content/site"

interface JsonLdProps {
  type: "organization" | "website" | "service" | "portfolio" | "breadcrumb"
  data?: any
}

export function JsonLdSchema({ type, data }: JsonLdProps) {
  const getSchema = () => {
    const baseUrl = siteConfig.url

    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          description: siteConfig.description,
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phone,
            contactType: "customer service",
            email: siteConfig.contact.email,
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.contact.address,
          },
          sameAs: [
            siteConfig.links.linkedin,
            siteConfig.links.twitter,
            siteConfig.links.instagram,
            siteConfig.links.github,
          ],
          foundingDate: "2019",
          numberOfEmployees: "10-50",
          serviceArea: {
            "@type": "Place",
            name: "Worldwide",
          },
        }

      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          description: siteConfig.description,
          url: baseUrl,
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${baseUrl}/portfolio?search={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            logo: `${baseUrl}/logo.png`,
          },
        }

      case "service":
        return siteConfig.services.map((service) => ({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: baseUrl,
          },
          serviceType: service.title,
          areaServed: "Worldwide",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: service.title,
            itemListElement: service.offerings.map((offering, index) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: offering,
              },
              position: index + 1,
            })),
          },
        }))

      case "portfolio":
        if (!data) return null
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: data.title,
          description: data.description,
          image: data.image,
          creator: {
            "@type": "Organization",
            name: siteConfig.name,
            url: baseUrl,
          },
          dateCreated: "2023",
          genre: data.category,
          keywords: data.tags.join(", "),
          ...(data.liveUrl && { url: data.liveUrl }),
          ...(data.githubUrl && { codeRepository: data.githubUrl }),
        }

      case "breadcrumb":
        if (!data) return null
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.url}`,
          })),
        }

      default:
        return null
    }
  }

  const schema = getSchema()
  if (!schema) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(Array.isArray(schema) ? schema : schema),
      }}
    />
  )
}
