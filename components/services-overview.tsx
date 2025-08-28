"use client"

import { motion } from "framer-motion"
import { 
  Palette, 
  Code, 
  Smartphone, 
  Search, 
  Bot, 
  Paintbrush,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/content/site"

const iconMap = {
  "Palette": Palette,
  "Code": Code,
  "Smartphone": Smartphone,
  "Search": Search,
  "Bot": Bot,
  "Paintbrush": Paintbrush,
}

const colorMap = {
  "ui-ux-design": "bg-green-100 text-green-600",
  "web-development": "bg-purple-100 text-purple-600", 
  "app-development": "bg-yellow-100 text-yellow-600",
  "seo-local-seo": "bg-blue-100 text-blue-600",
  "ai-automation": "bg-pink-100 text-pink-600",
  "graphics-design": "bg-orange-100 text-orange-600",
}

export function ServicesOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Digital Services That Drive Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete digital services to help your business grow. We build beautiful websites and 
            create effective marketing strategies that reach your customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Code
            const colorClass = colorMap[service.id as keyof typeof colorMap] || "bg-blue-100 text-blue-600"
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-lg ${colorClass} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {service.offerings.slice(0, 4).map((offering, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-blue-500 mr-2 mt-0.5">•</span>
                          {offering}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
