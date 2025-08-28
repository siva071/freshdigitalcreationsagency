"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Palette, 
  Code, 
  Smartphone, 
  Search, 
  Bot, 
  Paintbrush,
  CheckCircle,
  ArrowRight,
  Monitor,
  ShoppingCart,
  TrendingUp,
  Settings
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

const iconMap = {
  "Palette": Palette,
  "Code": Code,
  "Smartphone": Smartphone,
  "Search": Search,
  "Bot": Bot,
  "Paintbrush": Paintbrush,
};

const colorMap = {
  "ui-ux-design": "bg-green-100 text-green-600",
  "web-development": "bg-purple-100 text-purple-600", 
  "app-development": "bg-yellow-100 text-yellow-600",
  "seo-local-seo": "bg-blue-100 text-blue-600",
  "ai-automation": "bg-pink-100 text-pink-600",
  "graphics-design": "bg-orange-100 text-orange-600",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-pink-500">Digital Services</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Complete digital services to help your business grow. We build beautiful websites and 
              create effective marketing strategies that reach your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Code;
              const colorClass = colorMap[service.id as keyof typeof colorMap] || "bg-blue-100 text-blue-600";
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's discuss your project and see how we can help bring your vision to life. 
              Get a free consultation and proposal tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
