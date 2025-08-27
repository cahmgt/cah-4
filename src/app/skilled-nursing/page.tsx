import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SkilledNursing() {
  return (
    <main>
      <Header />
      


      {/* Service Overview */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="heading-h3 mb-6 font-bold text-medical-dark">
                Why Choose Home Skilled Nursing?
              </h2>
              <p className="text-medium mb-6 text-medical-muted">
                Our registered nurses provide expert medical care in your home, ensuring you receive the highest quality nursing services while maintaining your comfort and independence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-medical-dark">Licensed registered nurses</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-medical-dark">Comprehensive health monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-medical-dark">24/7 availability for urgent care</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-medical-dark">Family education and support</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/gims/031.png"
                className="w-full rounded-image object-cover shadow-lg"
                alt="California Healthcare Management Group Skilled Nursing Care - Professional registered nurses providing expert medical care in the comfort of your home"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-medical-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-h3 mb-6 font-bold text-medical-dark">
              Our Skilled Nursing Services
            </h2>
            <p className="text-medium max-w-2xl mx-auto text-medical-muted">
              We provide comprehensive skilled nursing care to meet your medical needs in the comfort of your home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Wound Care</h3>
              <p className="text-medium text-medical-muted">
                Professional assessment and treatment of surgical wounds, pressure ulcers, and other complex wounds.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Medication Management</h3>
              <p className="text-medium text-medical-muted">
                Medication administration, monitoring, and education to ensure safe and effective treatment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Health Monitoring</h3>
              <p className="text-medium text-medical-muted">
                Vital signs monitoring, blood glucose testing, and other health assessments as needed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Catheter Care</h3>
              <p className="text-medium text-medical-muted">
                Insertion, maintenance, and removal of various types of catheters with proper infection control.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">IV Therapy</h3>
              <p className="text-medium text-medical-muted">
                Administration of intravenous medications, fluids, and nutrition in the home setting.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Patient Education</h3>
              <p className="text-medium text-medical-muted">
                Teaching patients and families about medical conditions, treatments, and self-care techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-h3 mb-6 font-bold text-medical-dark">
              Need Professional Nursing Care?
            </h2>
            <p className="text-medium mb-8 max-w-2xl mx-auto text-medical-muted">
              Contact us today to schedule a consultation and learn how our skilled nursing services can help you receive the care you need at home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-6 py-3 hover:bg-medical-dark hover:border-medical-dark"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:818-783-4427"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-scheme-background text-scheme-text px-6 py-3 hover:bg-medical-light"
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
