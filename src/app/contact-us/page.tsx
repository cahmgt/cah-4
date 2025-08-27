'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage(result.message)
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <Header />
      


      {/* Contact Form and Info */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-start">
            {/* Contact Form */}
            <div>
              <h2 className="heading-h3 mb-6 font-bold text-medical-dark">Send us a Message</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">{submitMessage}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">{submitMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-medical-dark">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
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
                      value={formData.lastName}
                      onChange={handleInputChange}
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                    value={formData.phone}
                    onChange={handleInputChange}
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
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-scheme-border rounded-button focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-medical-primary"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-6 py-3 hover:bg-medical-dark hover:border-medical-dark disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
                    17337 Ventura Blvd, Suite 202<br />
                    Encino, CA 91316
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-medical-dark">Phone</h4>
                  <a href="tel:818-783-4427" className="text-medium text-medical-primary hover:text-medical-dark transition-colors">
                    818-783-4427
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
                  <a href="tel:818-783-4427" className="text-medium font-semibold text-medical-error hover:text-medical-dark transition-colors">
                    818-783-4427
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
