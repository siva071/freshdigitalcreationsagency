"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { siteConfig } from "@/content/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isServicesOpen, setIsServicesOpen] = React.useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleServices = () => setIsServicesOpen(!isServicesOpen)

  const services = [
    { 
      title: "Website Design (UI/UX)", 
      href: "/services/ui-ux-design",
      blogHref: "/blog/ui-ux-design"
    },
    { 
      title: "Web Development", 
      href: "/services/web-development",
      blogHref: "/blog/web-development"
    },
    { 
      title: "App Development", 
      href: "/services/app-development",
      blogHref: "/blog/app-development"
    },
    { 
      title: "SEO + Local SEO", 
      href: "/services/seo",
      blogHref: "/blog/seo"
    },
    { 
      title: "AI Automation Workflows", 
      href: "/services/ai-automation",
      blogHref: "/blog/ai-automation"
    },
    { 
      title: "Graphics Design", 
      href: "/services/graphics-design",
      blogHref: "/blog/graphics-design"
    }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <span className="text-[10px] xxs:text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold whitespace-nowrap">Fresh Digital Creations</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {siteConfig.navigation.map((item) => {
            if (item.title === "Services") {
              return (
                <div 
                  key="services" 
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    onClick={toggleServices}
                    className="flex items-center space-x-1 transition-colors hover:text-orange-500 text-foreground/60 text-base"
                  >
                    <span>Services</span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      isServicesOpen && "rotate-180"
                    )} />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-background border rounded-md shadow-lg z-50"
                      >
                        <div className="py-2">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-orange-500 transition-colors"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-orange-500",
                  pathname === item.href ? "text-foreground" : "text-foreground/60",
                  item.title === "Home" ? "text-lg font-semibold" : "text-base"
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/contact">
            <Button 
              className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white hover:animate-pulse hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce"
              size="sm"
              style={{
                animation: 'shake 2s infinite, bounce 2s infinite'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animation = 'shake 0.5s ease-in-out'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animation = 'shake 2s infinite, bounce 2s infinite'
              }}
            >
              Get in Touch
            </Button>
          </Link>
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t bg-background"
          >
            <nav className="container py-4 space-y-2">
              {siteConfig.navigation.map((item) => {
                if (item.title === "Services") {
                  return (
                    <div key="services" className="space-y-1">
                      <button
                        onClick={toggleServices}
                        className="flex items-center justify-between w-full px-2 py-2 text-base font-medium transition-colors hover:text-orange-500 text-foreground/60"
                      >
                        <span>Services</span>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform",
                          isServicesOpen && "rotate-180"
                        )} />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="block px-2 py-1 text-sm text-foreground/70 hover:text-orange-500 transition-colors"
                                onClick={() => {
                                  setIsOpen(false)
                                  setIsServicesOpen(false)
                                }}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-2 py-2 font-medium transition-colors hover:text-orange-500",
                      pathname === item.href ? "text-foreground" : "text-foreground/60",
                      item.title === "Home" ? "text-lg font-semibold" : "text-base"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              })}
              
              {/* Mobile Get in Touch Button */}
              <Link href="/contact">
                <Button 
                  className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white hover:animate-pulse hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animation: 'shake 2s infinite, bounce 2s infinite'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.animation = 'shake 0.5s ease-in-out'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.animation = 'shake 2s infinite, bounce 2s infinite'
                  }}
                >
                  Get in Touch
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
