"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  honeypot: string // Hidden field for spam protection
}

interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    honeypot: "",
  })

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.service.trim()) {
      newErrors.service = "Service selection is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check honeypot field (should be empty)
    if (formData.honeypot) {
      return // Likely spam, silently ignore
    }

    if (!validateForm()) {
      return
    }

    setFormState({ isSubmitting: true, isSuccess: false, error: null })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setFormState({ isSubmitting: false, isSuccess: true, error: null })
        setFormData({ name: "", email: "", phone: "", service: "", message: "", honeypot: "" })
      } else {
        const errorData = await response.json()
        setFormState({
          isSubmitting: false,
          isSuccess: false,
          error: errorData.message || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: "Network error. Please check your connection and try again.",
      })
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (formState.isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-green-700 dark:text-green-300 mb-6">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setFormState({ isSubmitting: false, isSuccess: false, error: null })}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleInputChange}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? "border-red-500 focus:border-red-500" : ""}
                placeholder="Your full name"
                required
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? "border-red-500 focus:border-red-500" : ""}
                placeholder="your.email@example.com"
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone (Optional)
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Service *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white ${errors.service ? "border-red-500 focus:border-red-500" : ""}`}
              required
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="seo-optimization">SEO Optimization</option>
              <option value="ai-automation">AI Automation</option>
              <option value="graphics-design">Graphics Design</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                {errors.service}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={errors.message ? "border-red-500 focus:border-red-500" : ""}
              placeholder="Tell us about your project, goals, and how we can help..."
              rows={6}
              required
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          {formState.error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-md"
            >
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm">{formState.error}</span>
            </motion.div>
          )}

          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full"
            size="lg"
          >
            {formState.isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
              />
            ) : (
              <Send className="h-5 w-5 mr-2" />
            )}
            {formState.isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            We respect your privacy and will never share your information with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
