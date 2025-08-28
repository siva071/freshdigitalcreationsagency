"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Clock,
  Users,
  Award,
  Headphones,
  BarChart3,
  FileText,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: "Clock",
    title: "24/7 Project Execution",
    description: "Round-the-clock development and support to ensure your project stays on track.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: "Users",
    title: "Dedicated Team",
    description: "A team of experienced professionals dedicated to your project's success.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: "Award",
    title: "Full Award Expertise",
    description: "Award-winning expertise in web development and digital marketing strategies.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: "Headphones",
    title: "Personalized Support",
    description: "One-on-one support tailored to your specific business needs and goals.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: "BarChart3",
    title: "Real-Time Sourced",
    description: "Real-time data and analytics to track your project's progress and performance.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: "FileText",
    title: "Language Reporting",
    description: "Detailed reporting and analytics in your preferred language and format.",
    color: "bg-cyan-100 text-cyan-600"
  }
];

const iconMap = {
  "Clock": Clock,
  "Users": Users,
  "Award": Award,
  "Headphones": Headphones,
  "BarChart3": BarChart3,
  "FileText": FileText,
};

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Fresh Digital Creations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another digital agency. We're your dedicated partners committed to 
            delivering real results and growing your business online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Clock;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg hover:border-orange-500 transition-all duration-300 bg-white border-2 border-transparent shadow-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
