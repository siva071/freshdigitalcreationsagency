import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, Github, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioItems } from "@/content/portfolio"

interface PortfolioDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PortfolioDetailPageProps): Promise<Metadata> {
  const project = portfolioItems.find(item => item.id === params.slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.id,
  }))
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const project = portfolioItems.find(item => item.id === params.slug)
  
  if (!project) {
    notFound()
  }

  const currentIndex = portfolioItems.findIndex(item => item.id === params.slug)
  const prevProject = currentIndex > 0 ? portfolioItems[currentIndex - 1] : null
  const nextProject = currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <div className="mb-8">
            <Button asChild variant="ghost">
              <Link href="/portfolio" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex space-x-4">
                {project.liveUrl && (
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Site
                    </Link>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Challenge */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">The Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </CardContent>
            </Card>

            {/* Approach */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.approach}
                </p>
              </CardContent>
            </Card>

            {/* Outcome */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">The Outcome</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.outcome}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The technologies and tools we used to bring this project to life
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-lg px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Project Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-24">
          <div className="container">
            <Card className="max-w-4xl mx-auto border-0 shadow-lg">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  "{project.testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-lg">
                    {project.testimonial.author}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {project.testimonial.role}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-medium">
                    {project.testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Button asChild variant="outline" size="lg">
                <Link href={`/portfolio/${prevProject.id}`} className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Project
                </Link>
              </Button>
            ) : (
              <div />
            )}

            <Button asChild>
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>

            {nextProject ? (
              <Button asChild variant="outline" size="lg">
                <Link href={`/portfolio/${nextProject.id}`} className="flex items-center">
                  Next Project
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
