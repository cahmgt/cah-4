import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function OccupationalTherapy() {
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
                  <span className="text-medical-dark">Occupational Therapy</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12 text-medical-dark">
              Occupational Therapy at Home
            </h1>
            <p className="text-medium text-medical-muted">
              Help patients develop skills for daily living and work activities in the comfort of their own home.
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
                Why Choose Home Occupational Therapy?
              </h2>
              <p className="text-medium mb-6 text-medical-muted">
                Our licensed occupational therapists work with patients in their natural environment to improve daily living skills, enhance independence, and promote safety.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-medical-dark">Real-world environment assessment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-medical-dark">Personalized treatment plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-medical-dark">Family involvement and training</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-medical-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-medical-dark">Home safety modifications</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/gims/032.png"
                className="w-full rounded-image object-cover shadow-lg"
                alt="California Healthcare Management Group Occupational Therapy - Licensed therapists helping patients develop daily living skills in the comfort of their home"
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
              Our Occupational Therapy Services
            </h2>
            <p className="text-medium max-w-2xl mx-auto text-medical-muted">
              We offer comprehensive occupational therapy services designed to help patients regain independence in daily activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Activities of Daily Living (ADL)</h3>
              <p className="text-medium text-medical-muted">
                Help with bathing, dressing, grooming, eating, and other essential daily activities to promote independence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Home Safety Assessment</h3>
              <p className="text-medium text-medical-muted">
                Evaluate home environment and recommend modifications to prevent falls and improve accessibility.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Adaptive Equipment Training</h3>
              <p className="text-medium text-medical-muted">
                Teach patients to use assistive devices and adaptive equipment for daily activities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Cognitive Rehabilitation</h3>
              <p className="text-medium text-medical-muted">
                Improve memory, attention, problem-solving, and executive function skills.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Work and Leisure Activities</h3>
              <p className="text-medium text-medical-muted">
                Help patients return to work or engage in meaningful leisure activities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Family Education</h3>
              <p className="text-medium text-medical-muted">
                Train family members to assist with therapy exercises and daily activities.
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
              Ready to Regain Your Independence?
            </h2>
            <p className="text-medium mb-8 max-w-2xl mx-auto text-medical-muted">
              Contact us today to schedule a consultation and learn how our home occupational therapy services can help you achieve your goals.
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
