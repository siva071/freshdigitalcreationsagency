export const trackError = (error: Error, context?: string) => {
  console.error(`[${context || 'Unknown'}] Error:`, error)
  
  // In production, send to error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Send to Sentry, LogRocket, etc.
    // Example: Sentry.captureException(error, { tags: { context } })
  }
}
