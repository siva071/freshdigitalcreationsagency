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
              className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600 hover:bg-orange-500 text-white text-sm font-medium cursor-pointer transition-colors duration-300"
            >
              Fresh Digital Creations
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            >
              Need a Professional Website?{" "}
              <br />
              <span className="text-gray-800">
                Crafting Your Online Success!
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-black font-medium leading-relaxed max-w-lg"
            >
              We provide web development, automations, e-commerce, mobile apps, 
              digital marketing, and creative design services.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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

          {/* Right Side - SVG Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative z-10">
              <Image
                src="/images/2form.svg"
                alt="Form Design Illustration"
                width={500}
                height={400}
                className="w-full h-auto max-w-lg"
                priority
                quality={100}
                style={{
                  filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))',
                  imageRendering: 'auto'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
