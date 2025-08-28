"use client"

import Link from "next/link"
import Image from "next/image"

export function WhatsAppFloat() {
  // Replace with your actual WhatsApp number (include country code without + sign)
  const whatsappNumber = "919490308528" // Update this with your WhatsApp number
  const message = "Hi! I'm interested in your digital services."
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/images/apps.8453.13655054093851568.4a371b72-2ce8-4bdb-9d83-be49894d3fa0.png"
        alt="WhatsApp"
        width={48}
        height={48}
        className="w-12 h-12 rounded-full"
      />
    </Link>
  )
}
