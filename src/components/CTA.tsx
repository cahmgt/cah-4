import Link from 'next/link'
import { Phone, Mail, Calendar, ArrowRight } from 'lucide-react'

export default function CTA() {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-medical-primary" />,
      title: "Call Us Today",
      description: "Speak with our care coordinators",
      action: "818-783-4427",
      href: "tel:818-783-4427",
      primary: true
    },
    {
      icon: <Mail className="w-6 h-6 text-medical-secondary" />,
      title: "Email Us",
      description: "Send us a message anytime",
      action: "info@cahmgt.com",
      href: "mailto:info@cahmgt.com",
      primary: false
    },
    {
      icon: <Calendar className="w-6 h-6 text-medical-accent" />,
      title: "Schedule Consultation",
      description: "Free in-home assessment",
      action: "Book Now",
      href: "/contact-us",
      primary: true
    }
  ]

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-r from-medical-primary to-medical-dark text-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-18 lg:mb-20">
          <h2 className="heading-h2 font-bold mb-6">
            Ready to Get Started with Home Health Care?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Don't wait to get the care you or your loved one deserves. Our team is ready to help you navigate the home health care process and provide the highest quality services.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                {method.title}
              </h3>
              <p className="text-center opacity-80 mb-4">
                {method.description}
              </p>
              <div className="text-center">
                {method.primary ? (
                  <a
                    href={method.href}
                    className="inline-flex items-center justify-center gap-2 bg-white text-medical-primary px-6 py-3 rounded-button font-semibold hover:bg-gray-100 transition-colors"
                  >
                    {method.action}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href={method.href}
                    className="inline-flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-button font-semibold hover:bg-white hover:text-medical-primary transition-colors"
                  >
                    {method.action}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/20 text-center">
          <h3 className="heading-h3 font-bold mb-6">
            Free Consultation & Assessment
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards better health care at home. Our experienced team will conduct a comprehensive assessment and create a personalized care plan tailored to your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-white text-medical-primary px-8 py-4 text-lg font-semibold hover:bg-gray-100"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-medical-primary"
            >
              View Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm opacity-80">Emergency Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">100%</div>
              <div className="text-sm opacity-80">Licensed Professionals</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">5-Star</div>
              <div className="text-sm opacity-80">Quality Rating</div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center mt-12">
          <p className="text-lg opacity-80 mb-4">
            Serving Los Angeles, Orange, Ventura, San Bernardino, and Riverside Counties
          </p>
          <p className="text-sm opacity-70">
            Medicare, Medicaid, and most private insurance accepted
          </p>
        </div>
      </div>
    </section>
  )
}
