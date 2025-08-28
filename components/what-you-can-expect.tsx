"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Headphones, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function WhatYouCanExpect() {
  const expectationItems = [
    {
      icon: CheckCircle,
      title: "100% Satisfaction",
      description: "We guarantee your complete satisfaction with our work or we'll make it right.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect your timeline and deliver projects on schedule, every time.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your website runs smoothly at all times.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "Regular updates and transparent communication throughout your project.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What You Can <span className="text-blue-600">Expect</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you work with Fresh Digital Creations, you get more than just a service provider. 
            You get a dedicated partner committed to your success.
          </p>
        </motion.div>

        {/* Expectations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {expectationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={item.title} variants={itemVariants}>
                <Card className={`${item.bgColor} border-0 h-full hover:shadow-lg transition-shadow duration-300`}>
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm">
                        <IconComponent className={`h-8 w-8 ${item.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
