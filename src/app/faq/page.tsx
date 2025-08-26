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
                  We offer a comprehensive range of services including skilled nursing, physical therapy, occupational therapy, speech therapy, medical social services, and home health aide support. All care is provided in the comfort and safety of your own home.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  How do I know if home health care is right for me or my loved one?
                </h3>
                <p className="text-medium">
                  Home health care is ideal for anyone who needs skilled medical attention but prefers to remain at home. It's often recommended after a hospital stay, for managing chronic conditions, or when mobility is limited. Our clinical team will assess your needs and recommend a personalized care plan.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  Are all your nurses and therapists licensed?
                </h3>
                <p className="text-medium">
                  Yes. All of our Registered Nurses (RNs) and Licensed Vocational Nurses (LVNs) hold current licenses from the State of California. In addition, our licensed therapists (physical, occupational, and speech) are certified in their respective fields, ensuring you receive safe, professional, and compliant care.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  How much does home health care cost?
                </h3>
                <p className="text-medium">
                  The cost depends on the type and frequency of services required. Many services are covered by Medicare, Medi-Cal, and private insurance. During your initial consultation, we'll review your coverage and provide a clear estimate of any out-of-pocket costs.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  How quickly can you start providing services?
                </h3>
                <p className="text-medium">
                  In most cases, we can begin services within 24–48 hours of your initial contact. For urgent needs, same-day service may be available. We'll work with you to schedule visits at times that are convenient for you and your family.
                </p>
              </div>

              {/* FAQ Item 6 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  What areas do you serve?
                </h3>
                <p className="text-medium">
                  We proudly serve Los Angeles, Orange, Ventura, San Bernardino, and Riverside Counties. Please contact us to confirm availability in your specific location.
                </p>
              </div>

              {/* FAQ Item 7 */}
              <div className="border-b border-scheme-border pb-8">
                <h3 className="text-xl font-bold mb-4">
                  Can family members be involved in the care plan?
                </h3>
                <p className="text-medium">
                  Absolutely. We encourage family involvement and provide training when needed so loved ones can confidently support the patient's care. We believe family participation improves comfort and leads to better outcomes.
                </p>
              </div>

              {/* FAQ Item 8 */}
              <div className="pb-8">
                <h3 className="text-xl font-bold mb-4">
                  How do I get started?
                </h3>
                <p className="text-medium">
                  Getting started is simple. Contact us by phone or through our website to schedule a free consultation. We'll assess your needs, discuss your care options, explain insurance coverage, and create a personalized care plan tailored to you.
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
