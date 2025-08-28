"use client"

import { motion } from "framer-motion"
import { Target, Users, Trophy } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function PortfolioTeaser() {
  const promiseItems = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that impact your bottom line."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work as an extension of your team, not just a vendor."
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-400 via-orange-500 to-pink-500">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Promise
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            We promise to deliver exceptional digital solutions that not only meet your expectations but exceed them. Your success is our success, and we're committed to building long-term partnerships based on trust, transparency, and outstanding results.
          </p>
        </motion.div>

        {/* Promise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {promiseItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
