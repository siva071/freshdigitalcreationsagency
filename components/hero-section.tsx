"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Clean Diagonal Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-100" />
        <div 
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-400 to-orange-500"
          style={{
            clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }}
        />
      </div>

      {/* Cross/Plus Decorative Elements - Starting from diagonal middle line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Crosses positioned at the diagonal transition area (50% point) */}
        <div className="absolute top-20 left-[50%] w-3 h-3">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-400/60 transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-orange-400/60 transform -translate-x-1/2" />
        </div>
        <div className="absolute top-40 left-[52%] w-4 h-4">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-500/70 transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-orange-500/70 transform -translate-x-1/2" />
        </div>
        <div className="absolute top-60 left-[51%] w-2 h-2">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-400/50 transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-orange-400/50 transform -translate-x-1/2" />
        </div>
        <div className="absolute bottom-40 left-[53%] w-3 h-3">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-500/60 transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-orange-500/60 transform -translate-x-1/2" />
        </div>

        {/* White crosses on orange background */}
        <div className="absolute top-32 right-32 w-4 h-4">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/80 transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/80 transform -translate-x-1/2" />
        </div>
        <div className="absolute top-60 right-20 w-3 h-3">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/70 transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/70 transform -translate-x-1/2" />
        </div>
        <div className="absolute bottom-40 right-28 w-5 h-5">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/80 transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/80 transform -translate-x-1/2" />
        </div>
        <div className="absolute bottom-60 right-16 w-3 h-3">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/70 transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/70 transform -translate-x-1/2" />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                x: [0, -2, 2, -2, 2, 0],
                transition: { duration: 0.4 }
              }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600 hover:bg-orange-500 text-white text-sm font-medium cursor-pointer transition-colors duration-300"
            >
              Fresh Digital Creations
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight"
            >
              <span className="block mb-2">
                Professional Web Development & Digital Marketing Services
              </span>
              <span className="block text-gray-800">
                Fresh Digital Creations - Crafting Your Online Success
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-medium leading-relaxed max-w-2xl"
            >
              We provide web development, automations, e-commerce, mobile apps, digital marketing, and creative design services.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                y: [0, -2, 0],
                transition: { duration: 0.3 }
              }}
              className="pt-4"
            >
              <Button 
                asChild 
                size="default" 
                className="bg-orange-500 hover:bg-purple-600 text-white hover:text-white text-base px-6 py-3 h-auto rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center">
                  Let's Create Together
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Image with Effects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Animated Background Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute top-10 right-10 w-20 h-20 border-2 border-orange-300 rounded-full opacity-30"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-purple-300 rounded-full opacity-30"></div>
            </motion.div>

            {/* Floating Particles */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-5 left-5 w-3 h-3 bg-orange-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                x: [0, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-5 right-5 w-2 h-2 bg-purple-500 rounded-full opacity-60"
            />
            <motion.div
              animate={{
                y: [0, -8, 0],
                x: [0, 3, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-1/3 right-8 w-2.5 h-2.5 bg-blue-400 rounded-full opacity-60"
            />

            {/* Main Image Container with Rounded Effects */}
            <motion.div
              className="relative z-10"
            >
              {/* Glowing Effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(251, 146, 60, 0.3)",
                    "0 0 30px rgba(139, 92, 246, 0.4)",
                    "0 0 20px rgba(251, 146, 60, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-3xl -m-2"
              />

              {/* Image Container with Border Radius */}
              <div className="relative overflow-hidden rounded-3xl">
                {/* Image with Enhanced Effects */}
                <img
                  src="/images/professional-hero-illustration.svg"
                  alt="Professional web development and digital marketing services - Fresh Digital Creations"
                  width={500}
                  height={400}
                  className="w-full h-auto max-w-lg rounded-3xl"
                  style={{
                    filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.15)) saturate(1.1)'
                  }}
                />

                {/* Shine Effect */}
                <motion.div
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 rounded-3xl"
                />
              </div>
            </motion.div>

            {/* Pulsing Ring Effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 border-2 border-orange-300 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
