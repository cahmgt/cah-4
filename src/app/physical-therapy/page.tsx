import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PhysicalTherapy() {
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
              <ol className="flex flex-wrap items-center gap-1.5 break-words text-medical-muted sm:gap-2">
                <li className="inline-flex items-center gap-1.5">
                  <a className="text-medical-primary hover:text-medical-dark transition-colors" href="/">Home</a>
                </li>
                <li className="text-medical-muted [&>svg]:size-4">
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
                  <a className="text-medical-primary hover:text-medical-dark transition-colors" href="/services">Services</a>
                </li>
                <li className="text-medical-muted [&>svg]:size-4">
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
                  <span className="text-medical-dark">Physical Therapy</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12 text-medical-dark">
              Physical Therapy at Home
            </h1>
            <p className="text-medium text-medical-muted">
              Professional physical therapy services delivered in the comfort of your own home to help you regain strength, mobility, and independence.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="heading-h3 mb-6 font-bold text-medical-dark">
                Why Choose Home Physical Therapy?
              </h2>
              <p className="text-medium mb-6 text-medical-muted">
                Our licensed physical therapists bring expert care directly to your home, eliminating the need for travel and providing therapy in an environment where you're most comfortable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-medical-muted">Convenient home-based sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-medical-muted">Personalized treatment plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-medical-muted">Family involvement and education</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-medical-muted">Real-world environment assessment</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/gims/017.png"
                className="w-full rounded-image object-cover shadow-lg"
                alt="California Healthcare Management Group Physical Therapy - Professional home physical therapy services for recovery and rehabilitation"
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
              Our Physical Therapy Services
            </h2>
            <p className="text-medium max-w-2xl mx-auto text-medical-muted">
              We offer comprehensive physical therapy services tailored to your specific needs and recovery goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors">
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Post-Surgery Rehabilitation</h3>
              <p className="text-medium text-medical-muted">
                Specialized therapy programs to help you recover after surgical procedures, including joint replacements, spine surgery, and orthopedic procedures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors">
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Balance & Fall Prevention</h3>
              <p className="text-medium text-medical-muted">
                Programs designed to improve balance, coordination, and strength to reduce the risk of falls and enhance mobility.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors">
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Pain Management</h3>
              <p className="text-medium text-medical-muted">
                Therapeutic techniques to reduce pain and improve function through targeted exercises and manual therapy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors">
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Stroke Recovery</h3>
              <p className="text-medium text-medical-muted">
                Comprehensive rehabilitation programs to help stroke survivors regain movement, strength, and independence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors">
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Sports Injury Recovery</h3>
              <p className="text-medium text-medical-muted">
                Specialized therapy for athletes recovering from sports-related injuries, focusing on safe return to activity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors">
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Geriatric Physical Therapy</h3>
              <p className="text-medium text-medical-muted">
                Age-appropriate therapy programs designed to maintain mobility, strength, and quality of life for older adults.
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
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-medium mb-8 max-w-2xl mx-auto text-medical-muted">
              Contact us today to schedule a consultation and learn how our home physical therapy services can help you achieve your recovery goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-6 py-3 hover:bg-medical-dark hover:border-medical-dark"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:18187834427"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-scheme-background text-medical-primary px-6 py-3 hover:bg-medical-light hover:text-medical-dark"
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
