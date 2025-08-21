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
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12 text-medical-dark">
              Get in Touch
            </h1>
            <p className="text-medium text-medical-muted">
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
              <h2 className="heading-h3 mb-6 font-bold text-medical-dark">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-medical-dark">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-scheme-border rounded-button focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-medical-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-medical-dark">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-scheme-border rounded-button focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-medical-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-medical-dark">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-scheme-border rounded-button focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-medical-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-medical-dark">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-scheme-border rounded-button focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-medical-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-medical-dark">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-scheme-border rounded-button focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-medical-primary"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-6 py-3 hover:bg-medical-dark hover:border-medical-dark"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-h3 mb-6 font-bold text-medical-dark">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-medical-dark">Address</h4>
                  <p className="text-medium text-medical-muted">
                    Level 1, 12 Sample St<br />
                    Los Angeles, CA 90001
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-medical-dark">Phone</h4>
                  <a href="tel:1-818-783-4427" className="text-medium text-medical-primary hover:text-medical-dark transition-colors">
                    1-818-783-4427
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-medical-dark">Email</h4>
                  <a href="mailto:info@cahmgt.com" className="text-medium text-medical-primary hover:text-medical-dark transition-colors">
                    info@cahmgt.com
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-medical-dark">Hours of Operation</h4>
                  <p className="text-medium text-medical-muted">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 3:00 PM<br />
                    Sunday: Emergency Services Only
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-medical-dark">Emergency Contact</h4>
                  <p className="text-medium text-medical-muted">
                    For after-hours emergencies, please call our 24/7 hotline
                  </p>
                  <a href="tel:1-818-783-4427" className="text-medium font-semibold text-medical-error hover:text-medical-dark transition-colors">
                    1-818-783-4427
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
