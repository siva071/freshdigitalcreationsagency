'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, User, ExternalLink } from 'lucide-react'

export default function DirectContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleDirectSubmit = () => {
    // Create mailto link with all form data
    const subject = `Contact from ${formData.name} - Fresh Digital Creations`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}

Sent from: Fresh Digital Creations Portfolio`

    const mailtoLink = `mailto:freshdigitalcreations@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, '_blank')
  }

  const handleGoogleFormSubmit = () => {
    // Open Google Form in new tab (you'll need to create this)
    const googleFormUrl = 'https://forms.gle/your-google-form-id'
    window.open(googleFormUrl, '_blank')
  }

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Us
          </CardTitle>
          <CardDescription>
            Fill out the form below and click "Send Email" to open your email client.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
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
                required
              />
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
                required
              />
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
              />
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
                required
              />
            </div>

            {/* Submit Options */}
            <div className="space-y-3">
              <Button
                onClick={handleDirectSubmit}
                className="w-full"
                disabled={!formData.name || !formData.email || !formData.message}
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Email (Opens Email Client)
              </Button>
              
              <div className="text-center text-sm text-gray-500">
                or
              </div>
              
              <Button
                onClick={handleGoogleFormSubmit}
                variant="outline"
                className="w-full"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Use Google Form Instead
              </Button>
            </div>

            {/* Direct Contact Info */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Direct Contact</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>📧 Email: freshdigitalcreations@gmail.com</p>
                <p>💬 WhatsApp: +91 XXXXX XXXXX</p>
                <p>📱 Phone: +91 XXXXX XXXXX</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
