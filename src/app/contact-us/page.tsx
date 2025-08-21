import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactUs() {
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
                  <span>Contact Us</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              Get in Touch
            </h1>
            <p className="text-medium">
              We're here to help. Contact us to learn more about our services or to schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-start">
            {/* Contact Form */}
            <div>
              <h2 className="heading-h3 mb-6 font-bold">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-scheme-border rounded-button focus:outline-none focus:ring-2 focus:ring-scheme-text"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-scheme-border rounded-button focus:outline-none focus:ring-2 focus:ring-scheme-text"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-scheme-border rounded-button focus:outline-none focus:ring-2 focus:ring-scheme-text"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-scheme-border rounded-button focus:outline-none focus:ring-2 focus:ring-scheme-text"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-scheme-border rounded-button focus:outline-none focus:ring-2 focus:ring-scheme-text"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-neutral-darkest text-white px-6 py-3 hover:bg-neutral-darker"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-h3 mb-6 font-bold">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-medium">
                    Level 1, 12 Sample St<br />
                    Los Angeles, CA 90001
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <a href="tel:1800-456-7890" className="text-medium hover:underline">
                    1-800-456-7890
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <a href="mailto:info@cah4.com" className="text-medium hover:underline">
                    info@cah4.com
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Hours of Operation</h4>
                  <p className="text-medium">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 3:00 PM<br />
                    Sunday: Emergency Services Only
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Emergency Contact</h4>
                  <p className="text-medium">
                    For after-hours emergencies, please call our 24/7 hotline
                  </p>
                  <a href="tel:1800-456-7890" className="text-medium font-semibold text-red-600 hover:underline">
                    1-800-456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
