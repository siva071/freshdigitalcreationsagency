import type { Metadata } from "next"
import { Users, Award, Clock, Heart, Target, Lightbulb } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our team, mission, and values. We're a full-service digital agency passionate about creating exceptional digital experiences.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About Fresh Digital Creations
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm a passionate digital creator dedicated to building innovative solutions that drive 
              real business results for clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                My Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I believe that great digital experiences have the power to transform businesses and 
                connect people in meaningful ways. My mission is to help companies of all sizes 
                leverage technology to achieve their goals and create lasting impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From startups to established enterprises, I partner with clients to understand 
                their unique challenges and deliver solutions that not only meet their immediate 
                needs but also position them for future growth.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Digital Innovation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Transforming ideas into reality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These core values guide everything I do and shape how I work with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Client-First Approach",
                description: "I put client success at the center of everything I do, building long-term partnerships based on trust and results."
              },
              {
                icon: Lightbulb,
                title: "Innovation & Creativity",
                description: "I stay ahead of industry trends and embrace new technologies to deliver cutting-edge solutions that give clients a competitive edge."
              },
              {
                icon: Target,
                title: "Results-Driven",
                description: "Every project we undertake is focused on delivering measurable results that contribute to our clients' business objectives."
              },
              {
                icon: Users,
                title: "Collaborative Partnership",
                description: "I work as an extension of your team, fostering open communication and collaboration throughout every project."
              },
              {
                icon: Award,
                title: "Quality Excellence",
                description: "I maintain the highest standards in my work, from initial concept to final delivery, ensuring exceptional quality in every detail."
              },
              {
                icon: Clock,
                title: "Reliability & Transparency",
                description: "I deliver on my promises, meet deadlines, and maintain clear communication throughout the entire project lifecycle."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I bring together years of experience across multiple disciplines to deliver 
              comprehensive digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                skills: ["React & Next.js", "Full-Stack Development", "API Integration", "Performance Optimization"],
                icon: "💻"
              },
              {
                title: "UI/UX Design",
                skills: ["User Research", "Wireframing & Prototyping", "Responsive Design", "User Testing"],
                icon: "🎨"
              },
              {
                title: "Digital Marketing",
                skills: ["SEO & Local SEO", "Content Strategy", "Social Media Marketing", "Analytics"],
                icon: "📈"
              },
              {
                title: "AI Automation",
                skills: ["Workflow Automation", "Chatbot Development", "API Integration", "Process Optimization"],
                icon: "🤖"
              },
              {
                title: "Graphics Design",
                skills: ["Brand Identity", "Social Media Graphics", "Print Design", "Digital Assets"],
                icon: "✨"
              },
              {
                title: "Project Management",
                skills: ["Agile Methodology", "Timeline Management", "Client Communication", "Quality Assurance"],
                icon: "📋"
              }
            ].map((skill, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {skill.title}
                  </h3>
                  <ul className="space-y-2">
                    {skill.skills.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect my commitment to delivering exceptional results for clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'd love to learn about your project and discuss how I can help bring your vision to life. 
              Let's start a conversation about your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
