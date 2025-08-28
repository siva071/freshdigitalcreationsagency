import SupabaseContactForm from "./supabase-contact-form"

export default function ContactFormCTASection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let's discuss your ideas and bring them to life. Get in touch with us today for a free consultation.
          </p>
        </div>
        <SupabaseContactForm />
      </div>
    </section>
  )
}
