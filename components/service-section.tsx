"use client"

import { motion } from "framer-motion"
import { 
  Palette, 
  Code, 
  Smartphone, 
  Search, 
  Bot, 
  Paintbrush,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const iconMap = {
  Palette,
  Code,
  Smartphone,
  Search,
  Bot,
  Paintbrush,
}

interface ServiceSectionProps {
  service: {
    id: string
    title: string
    description: string
    offerings: string[]
    icon: string
    image: string
  }
  index: number
  isReversed?: boolean
}

export function ServiceSection({ service, index, isReversed = false }: ServiceSectionProps) {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap]

  return (
    <div id={service.id} className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          isReversed ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Content */}
        <div className={isReversed ? "lg:col-start-2" : ""}>
          <div className="flex items-center mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4"
            >
              <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {service.title}
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {service.description}
          </p>

          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              What We Offer:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.offerings.map((offering, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{offering}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <Button asChild size="lg">
            <Link href="/contact" className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={isReversed ? "lg:col-start-1" : ""}
        >
          <Card className="overflow-hidden border-0 shadow-xl">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
