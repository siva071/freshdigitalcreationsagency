import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JsonLdSchema } from "@/components/json-ld-schema"
import { EnhancedJsonLdSchema } from "@/components/enhanced-json-ld-schema"
import { PerformanceMonitor } from "@/components/performance-monitor"
import ScrollToTop from "@/components/scroll-to-top"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ErrorBoundary } from "@/components/error-boundary"
import { siteConfig } from "@/content/site"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: "Fresh Digital Creations - Web Development & Digital Marketing Agency",
    template: `%s | Fresh Digital Creations - Digital Solutions That Grow Your Business`,
  },
  description: "Professional web development, mobile app development, UI/UX design, SEO services, AI automation, and graphics design. Fresh Digital Creations delivers custom digital solutions that drive business growth.",
  keywords: [
    "web development agency",
    "mobile app development",
    "UI UX design services",
    "SEO optimization",
    "AI automation workflows",
    "graphics design",
    "digital marketing",
    "Fresh Digital Creations",
    "custom web applications",
    "responsive website design",
    "professional website development",
    "digital marketing services",
  ],
  authors: [
    {
      name: siteConfig.name,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@digitalsolutions",
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <JsonLdSchema type="organization" />
            <JsonLdSchema type="website" />
            <div className="relative flex min-h-screen flex-col">
              <a
                href="#main-content"
                className="skip-link"
              >
                Skip to main content
              </a>
              <Navbar />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
              <ScrollToTop />
              <WhatsAppFloat />
            </div>
          </ErrorBoundary>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
