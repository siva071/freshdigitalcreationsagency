import NewsletterSubscription from "./newsletter-subscription"

export default function NewsletterCTASection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <NewsletterSubscription />
      </div>
    </section>
  )
}
