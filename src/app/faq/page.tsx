import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FAQ() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-start justify-start md:mb-16 lg:mb-20">
            <nav
              data-slot="breadcrumb"
              aria-label="breadcrumb"
              className="mb-6 flex w-full items-center"
            >
              <ol className="flex flex-wrap items-center gap-1.5 break-words text-scheme-text sm:gap-2">
                <li className="inline-flex items-center gap-1.5">
                  <a className="" href="/">Home</a>
                </li>
                <li className="text-scheme-text [&>svg]:size-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                  >
                    <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" />
                  </svg>
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <span>FAQ</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              Frequently Asked Questions
            </h1>
            <p className="text-medium">
              Find answers to common questions about our home health care services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {/* FAQ Item 1 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  What services does your home health care agency provide?
                </h3>
                <p className="text-medium">
                  We provide a comprehensive range of home health care services including skilled nursing, physical therapy, occupational therapy, speech therapy, medical social services, and home health aide services. All services are provided in the comfort of your own home.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  How do I know if home health care is right for me or my loved one?
                </h3>
                <p className="text-medium">
                  Home health care is ideal for individuals who need skilled medical care but prefer to receive it at home. It's often recommended after hospitalization, for chronic conditions, or when mobility is limited. Our team can assess your specific situation and recommend the best care plan.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  Are your caregivers licensed and insured?
                </h3>
                <p className="text-medium">
                  Yes, all our caregivers are licensed, certified, and insured. We conduct thorough background checks and ensure all staff meet state and federal requirements. Our team includes registered nurses, licensed therapists, and certified home health aides.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  How much does home health care cost?
                </h3>
                <p className="text-medium">
                  Costs vary depending on the type and frequency of services needed. Many services are covered by Medicare, Medicaid, and private insurance. We can help you understand your coverage and provide a detailed cost estimate during your initial consultation.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  How quickly can you start providing services?
                </h3>
                <p className="text-medium">
                  We can typically begin services within 24-48 hours of your initial contact. For urgent situations, we can often start the same day. We'll work with you to schedule services at times that are most convenient for you and your family.
                </p>
              </div>

              {/* FAQ Item 6 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  What areas do you serve?
                </h3>
                <p className="text-medium">
                  We serve the greater Los Angeles area and surrounding communities. Contact us to confirm coverage in your specific location. We're committed to providing care to as many families as possible within our service area.
                </p>
              </div>

              {/* FAQ Item 7 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  Can family members be involved in the care plan?
                </h3>
                <p className="text-medium">
                  Absolutely! We encourage family involvement and can provide training for family members on how to assist with care. We believe that family participation leads to better outcomes and more comfortable care experiences.
                </p>
              </div>

              {/* FAQ Item 8 */}
              <div className="pb-8">
                <h3 className="text-xl font-bold mb-4">
                  How do I get started with your services?
                </h3>
                <p className="text-medium">
                  Getting started is easy! Simply contact us by phone or through our website. We'll schedule a free consultation to assess your needs, discuss your care options, and create a personalized care plan. We'll also help you understand insurance coverage and payment options.
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className="text-medium mb-6">
                Still have questions? We're here to help!
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-neutral-darkest text-white px-6 py-3 hover:bg-neutral-darker"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
