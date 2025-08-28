"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedHeroIllustration() {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <svg
        width="500"
        height="400"
        viewBox="0 0 500 400"
        className="w-full h-auto max-w-lg"
        style={{ filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))' }}
      >
        {/* Background Elements */}
        <defs>
          <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle cx="250" cy="200" r="180" fill="#f3f4f6" opacity="0.5" />

        {/* Floating Smartphone */}
        <motion.g
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Phone Shadow */}
          <ellipse cx="320" cy="340" rx="25" ry="8" fill="#000" opacity="0.1" />
          
          {/* Phone Body */}
          <rect 
            x="280" 
            y="120" 
            width="80" 
            height="140" 
            rx="12" 
            fill="url(#phoneGradient)"
            transform="rotate(15 320 190)"
          />
          
          {/* Phone Screen */}
          <rect 
            x="285" 
            y="130" 
            width="70" 
            height="120" 
            rx="8" 
            fill="url(#screenGradient)"
            transform="rotate(15 320 190)"
          />
          
          {/* Screen Content - App Icons */}
          <g transform="rotate(15 320 190)">
            <rect x="290" y="140" width="12" height="12" rx="2" fill="#fff" opacity="0.9" />
            <rect x="305" y="140" width="12" height="12" rx="2" fill="#fff" opacity="0.7" />
            <rect x="320" y="140" width="12" height="12" rx="2" fill="#fff" opacity="0.8" />
            <rect x="335" y="140" width="12" height="12" rx="2" fill="#fff" opacity="0.6" />
            
            <rect x="290" y="155" width="12" height="12" rx="2" fill="#fff" opacity="0.8" />
            <rect x="305" y="155" width="12" height="12" rx="2" fill="#fff" opacity="0.9" />
            <rect x="320" y="155" width="12" height="12" rx="2" fill="#fff" opacity="0.7" />
            <rect x="335" y="155" width="12" height="12" rx="2" fill="#fff" opacity="0.8" />
          </g>
          
          {/* Phone Home Button */}
          <circle 
            cx="320" 
            cy="240" 
            r="4" 
            fill="#fff" 
            opacity="0.8"
            transform="rotate(15 320 190)"
          />
        </motion.g>

        {/* Young Man Character */}
        <motion.g
          animate={{ 
            x: [0, 3, 0, -2, 0],
            y: [0, -1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Character Shadow */}
          <ellipse cx="180" cy="340" rx="30" ry="10" fill="#000" opacity="0.1" />
          
          {/* Legs */}
          <motion.g
            animate={{ 
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transformOrigin: "180px 280px" }}
          >
            {/* Left Leg */}
            <rect x="170" y="280" width="8" height="35" rx="4" fill="#4f46e5" />
            <rect x="168" y="310" width="12" height="20" rx="6" fill="#1f2937" />
            
            {/* Right Leg */}
            <rect x="185" y="280" width="8" height="35" rx="4" fill="#4f46e5" />
            <rect x="183" y="310" width="12" height="20" rx="6" fill="#1f2937" />
          </motion.g>

          {/* Body */}
          <rect x="165" y="220" width="30" height="60" rx="15" fill="#6366f1" />
          
          {/* Arms */}
          <motion.g
            animate={{ 
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transformOrigin: "160px 240px" }}
          >
            {/* Left Arm */}
            <rect x="155" y="230" width="6" height="25" rx="3" fill="url(#skinGradient)" />
            <circle cx="158" cy="255" r="4" fill="url(#skinGradient)" />
          </motion.g>
          
          <motion.g
            animate={{ 
              rotate: [0, -3, 3, 0]
            }}
            transition={{ 
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            style={{ transformOrigin: "205px 240px" }}
          >
            {/* Right Arm */}
            <rect x="202" y="230" width="6" height="25" rx="3" fill="url(#skinGradient)" />
            <circle cx="205" cy="255" r="4" fill="url(#skinGradient)" />
          </motion.g>

          {/* Head */}
          <circle cx="180" cy="200" r="18" fill="url(#skinGradient)" />
          
          {/* Hair */}
          <path 
            d="M 162 190 Q 180 175 198 190 Q 195 185 180 185 Q 165 185 162 190" 
            fill="#374151" 
          />
          
          {/* Face Features */}
          <circle cx="174" cy="195" r="1.5" fill="#374151" />
          <circle cx="186" cy="195" r="1.5" fill="#374151" />
          <path d="M 175 205 Q 180 208 185 205" stroke="#374151" strokeWidth="1" fill="none" />
          
          {/* Shirt Details */}
          <circle cx="180" cy="235" r="2" fill="#4338ca" />
          <circle cx="180" cy="245" r="2" fill="#4338ca" />
        </motion.g>

        {/* Floating Decorative Elements */}
        <motion.g
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <circle cx="100" cy="100" r="4" fill="#f97316" />
          <circle cx="400" cy="120" r="6" fill="#8b5cf6" />
          <circle cx="80" cy="300" r="3" fill="#06b6d4" />
        </motion.g>

        {/* Tech Icons Floating Around */}
        <motion.g
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: "250px 200px" }}
        >
          {/* Wifi Icon */}
          <g transform="translate(350, 80)">
            <path d="M 0 10 Q 5 5 10 10" stroke="#f97316" strokeWidth="2" fill="none" />
            <path d="M -2 12 Q 5 2 12 12" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.7" />
            <circle cx="5" cy="12" r="1" fill="#f97316" />
          </g>
          
          {/* Code Brackets */}
          <g transform="translate(120, 80)">
            <path d="M 2 0 L 0 5 L 2 10" stroke="#8b5cf6" strokeWidth="2" fill="none" />
            <path d="M 8 0 L 10 5 L 8 10" stroke="#8b5cf6" strokeWidth="2" fill="none" />
          </g>
        </motion.g>
      </svg>
    </div>
  );
}
