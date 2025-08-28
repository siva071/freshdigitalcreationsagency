"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setMessage(data.message)
        setEmail("")
      } else {
        setIsSuccess(false)
        setMessage(data.error || 'Failed to subscribe')
      }
    } catch (error) {
      setIsSuccess(false)
      setMessage('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={isLoading}
          className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none disabled:opacity-50"
        />
        <Button 
          type="submit" 
          disabled={isLoading || !email}
          className="bg-white text-blue-600 hover:bg-gray-100 px-6 disabled:opacity-50"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      
      {message && (
        <div className={`mt-4 p-3 rounded-lg text-center ${
          isSuccess 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {message}
        </div>
      )}
    </div>
  )
}
