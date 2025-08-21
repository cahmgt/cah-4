import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Sitemap() {
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
                  <span>Sitemap</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              Sitemap
            </h1>
            <p className="text-medium">
              Navigate our website easily with this comprehensive sitemap of all our pages and services.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              
              {/* Main Pages */}
              <div>
                <h2 className="heading-h3 mb-6 font-bold text-blue-600">Main Pages</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="/" className="text-medium hover:text-blue-600 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about-us" className="text-medium hover:text-blue-600 transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-medium hover:text-blue-600 transition-colors">
                      Services Overview
                    </a>
                  </li>
                  <li>
                    <a href="/contact-us" className="text-medium hover:text-blue-600 transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="text-medium hover:text-blue-600 transition-colors">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              {/* Healthcare Services */}
              <div>
                <h2 className="heading-h3 mb-6 font-bold text-green-600">Healthcare Services</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="/skilled-nursing" className="text-medium hover:text-green-600 transition-colors">
                      Skilled Nursing
                    </a>
                  </li>
                  <li>
                    <a href="/physical-therapy" className="text-medium hover:text-green-600 transition-colors">
                      Physical Therapy
                    </a>
                  </li>
                  <li>
                    <a href="/occupational-therapy" className="text-medium hover:text-green-600 transition-colors">
                      Occupational Therapy
                    </a>
                  </li>
                  <li>
                    <a href="/speech-therapy" className="text-medium hover:text-green-600 transition-colors">
                      Speech Therapy
                    </a>
                  </li>
                  <li>
                    <a href="/medical-social-services" className="text-medium hover:text-green-600 transition-colors">
                      Medical Social Services
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources & Information */}
              <div>
                <h2 className="heading-h3 mb-6 font-bold text-purple-600">Resources & Information</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="/faq" className="text-medium hover:text-purple-600 transition-colors">
                      Frequently Asked Questions
                    </a>
                  </li>
                  <li>
                    <a href="/blog-post" className="text-medium hover:text-purple-600 transition-colors">
                      Blog Posts
                    </a>
                  </li>
                  <li>
                    <a href="/testimonials" className="text-medium hover:text-purple-600 transition-colors">
                      Patient Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="/patient-rights-responsibilities" className="text-medium hover:text-purple-600 transition-colors">
                      Patient Rights & Responsibilities
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & Policies */}
              <div>
                <h2 className="heading-h3 mb-6 font-bold text-orange-600">Legal & Policies</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="/privacy-policy" className="text-medium hover:text-orange-600 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-of-service" className="text-medium hover:text-orange-600 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/disclaimer" className="text-medium hover:text-orange-600 transition-colors">
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className="heading-h3 mb-6 font-bold text-red-600">Quick Links</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="tel:1800-456-7890" className="text-medium hover:text-red-600 transition-colors">
                      Call Us: 1-800-456-7890
                    </a>
                  </li>
                  <li>
                    <a href="/contact-us" className="text-medium hover:text-red-600 transition-colors">
                      Request a Consultation
                    </a>
                  </li>
                  <li>
                    <a href="/careers/join-our-team" className="text-medium hover:text-red-600 transition-colors">
                      Join Our Team
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-medium hover:text-red-600 transition-colors">
                      View All Services
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="heading-h3 mb-6 font-bold text-indigo-600">Contact Information</h2>
                <div className="space-y-3">
                  <div className="text-medium">
                    <strong>Phone:</strong><br />
                    <a href="tel:1800-456-7890" className="hover:text-indigo-600 transition-colors">
                      1-800-456-7890
                    </a>
                  </div>
                  <div className="text-medium">
                    <strong>Email:</strong><br />
                    <a href="mailto:info@cah-4.com" className="hover:text-indigo-600 transition-colors">
                      info@cah-4.com
                    </a>
                  </div>
                  <div className="text-medium">
                    <strong>Hours:</strong><br />
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Emergency Services Only
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 p-8 bg-gray-50 rounded-lg">
              <h2 className="heading-h3 mb-6 font-bold text-center">About Our Website</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-bold mb-3">Easy Navigation</h3>
                  <p className="text-medium">
                    Our website is designed to provide easy access to all the information you need about our home health care services. Use this sitemap to quickly find the page you're looking for.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Comprehensive Information</h3>
                  <p className="text-medium">
                    From detailed service descriptions to important legal documents, we've organized our content to help you make informed decisions about your healthcare needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-h3 mb-6 font-bold">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-medium mb-8 max-w-2xl mx-auto">
              If you can't find the information you need on our website, please don't hesitate to contact us directly. Our team is here to help answer your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-neutral-darkest text-white px-6 py-3 hover:bg-neutral-darker"
              >
                Contact Us
              </a>
              <a
                href="tel:1800-456-7890"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-scheme-background text-scheme-text px-6 py-3 hover:bg-gray-100"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
