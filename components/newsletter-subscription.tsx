"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    console.log('📧 Submitting newsletter subscription:', email)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      console.log('📡 Newsletter response status:', response.status)
      
      const data = await response.json()
      console.log('📦 Newsletter response data:', data)

      if (response.ok) {
        setIsSuccess(true)
        setMessage(data.message)
        setEmail("")
      } else {
        setIsSuccess(false)
        setMessage(data.error || `Failed to subscribe (${response.status})`)
        console.error('❌ Newsletter API Error:', data)
      }
    } catch (error) {
      console.error('❌ Newsletter Network Error:', error)
      setIsSuccess(false)
      setMessage('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-500 rounded-full">
            <Mail className="h-6 w-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
          Stay Updated with Our Newsletter
        </CardTitle>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Get the latest insights, tips, and trends delivered straight to your inbox. 
          Join our community of digital enthusiasts and never miss an update.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white disabled:opacity-50"
                placeholder="Enter your email address"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isLoading || !email}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg disabled:opacity-50 transition-colors"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
        </form>

        {message && (
          <div className={`mt-4 p-4 rounded-lg flex items-center gap-3 ${
            isSuccess 
              ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800' 
              : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
          }`}>
            {isSuccess ? (
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
            )}
            <span className="text-sm font-medium">{message}</span>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
