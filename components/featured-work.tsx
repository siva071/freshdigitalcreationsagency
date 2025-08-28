"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioItems } from "@/content/portfolio";

export function FeaturedWork() {
  // Get first 6 portfolio items for featured section
  const featuredProjects = portfolioItems.slice(0, 6);

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
            Featured Work
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover some of our recent projects that showcase our expertise across different industries and technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="group h-full bg-white hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-orange-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-orange-200/50">
                        {project.category.charAt(0)}
                      </div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-white/90 text-gray-700 hover:bg-white"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            className="bg-white/20 border-white/30 text-white text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="text-xs border-orange-200 text-orange-600 hover:bg-orange-50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm"
                        className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300"
                      >
                        <Link 
                          href={`/portfolio/${project.id}`} 
                          className="flex items-center justify-center"
                        >
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button 
            asChild 
            size="lg"
            className="bg-orange-500 hover:bg-purple-600 text-white px-8 py-3 h-auto rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/portfolio" className="flex items-center">
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
