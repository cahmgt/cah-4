import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-medical-light">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="heading-h2 font-bold text-medical-dark">Get Your Free Consultation Today</h1>
          <p className="text-medium text-medical-muted mt-4">
            Call us at <span className="font-semibold text-medical-primary">1-818-783-4427</span> or visit us at <span className="font-semibold text-medical-primary">www.cahmgt.com</span>
          </p>
        </div>
        <div>
          <p className="text-medium text-medical-muted">
            Discover how our dedicated team can enhance your quality of life with personalized home health care services. As a Home Care Elite Agency since 2013, we've earned the trust of thousands of families. Contact us now to learn more about our offerings and schedule your free consultation.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Link href="/services">
              <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-6 py-3 hover:bg-medical-dark hover:border-medical-dark">
                View All Services
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-scheme-background text-medical-primary px-6 py-3 hover:bg-medical-light hover:text-medical-dark">
                Contact Us Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
