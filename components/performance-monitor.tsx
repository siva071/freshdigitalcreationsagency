'use client'
import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Basic performance monitoring using native Performance API
      const logPerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          console.log(`Page Load Time: ${navigation.loadEventEnd - navigation.fetchStart}ms`)
          console.log(`DOM Content Loaded: ${navigation.domContentLoadedEventEnd - navigation.fetchStart}ms`)
        }

        const paintEntries = performance.getEntriesByType('paint')
        paintEntries.forEach(entry => {
          console.log(`${entry.name}: ${entry.startTime}ms`)
        })
      }

      // Log performance after page load
      if (document.readyState === 'complete') {
        logPerformance()
      } else {
        window.addEventListener('load', logPerformance)
      }

      // Cleanup
      return () => {
        window.removeEventListener('load', logPerformance)
      }
    }
  }, [])

  return null
}
