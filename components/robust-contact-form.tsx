'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { AlertCircle, CheckCircle, Loader2, Mail, Phone, User } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface ApiResponse {
  success: boolean
  message: string
  details?: {
    notificationSent: boolean
    autoReplySent: boolean
    services: {
      notification: string
      autoReply: string
    }
  }
  errors?: Array<{ message: string; path: string[] }>
  debug?: any
}

export default function RobustContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear field error when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.length > 100) {
      errors.name = 'Name is too long'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    if (formData.phone && formData.phone.length > 20) {
      errors.phone = 'Phone number is too long'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters'
    } else if (formData.message.length > 1000) {
      errors.message = 'Message is too long (max 1000 characters)'
    }
    
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setStatusMessage('')
    
    try {
      const response = await fetch('/api/contact/robust-route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data: ApiResponse = await response.json()
      
      if (data.success) {
        setSubmitStatus('success')
        setStatusMessage(data.message)
        
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        
        // Log success details in development
        if (process.env.NODE_ENV === 'development' && data.details) {
          console.log('Email delivery details:', data.details)
        }
        
      } else {
        setSubmitStatus('error')
        setStatusMessage(data.message)
        
        // Handle validation errors
        if (data.errors) {
          const errors: Record<string, string> = {}
          data.errors.forEach(error => {
            const field = error.path[0]
            if (field) {
              errors[field] = error.message
            }
          })
          setFieldErrors(errors)
        }
        
        // Log debug info in development
        if (process.env.NODE_ENV === 'development' && data.debug) {
          console.error('API Error Details:', data.debug)
        }
      }
      
    } catch (error) {
      console.error('Network error:', error)
      setSubmitStatus('error')
      setStatusMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    setSubmitStatus('idle')
    setStatusMessage('')
    setFieldErrors({})
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Contact Us
        </CardTitle>
        <CardDescription>
          Send us a message and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Your full name"
              className={fieldErrors.name ? 'border-red-500' : ''}
              disabled={isSubmitting}
              required
            />
            {fieldErrors.name && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {fieldErrors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your.email@example.com"
              className={fieldErrors.email ? 'border-red-500' : ''}
              disabled={isSubmitting}
              required
            />
            {fieldErrors.email && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {fieldErrors.email}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone (Optional)
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+1 (555) 123-4567"
              className={fieldErrors.phone ? 'border-red-500' : ''}
              disabled={isSubmitting}
            />
            {fieldErrors.phone && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {fieldErrors.phone}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message">
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us about your project, questions, or how we can help you..."
              rows={6}
              className={fieldErrors.message ? 'border-red-500' : ''}
              disabled={isSubmitting}
              required
            />
            <div className="flex justify-between items-center">
              {fieldErrors.message ? (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {fieldErrors.message}
                </p>
              ) : (
                <p className="text-sm text-gray-500">
                  {formData.message.length}/1000 characters
                </p>
              )}
            </div>
          </div>

          {/* Status Messages */}
          {statusMessage && (
            <div className={`p-4 rounded-lg flex items-center gap-2 ${
              submitStatus === 'success' 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {submitStatus === 'success' ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
            
            {submitStatus === 'success' && (
              <Button
                type="button"
                variant="outline"
                onClick={resetForm}
              >
                Send Another
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
