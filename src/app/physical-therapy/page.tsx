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
                  <a className="" href="/services">Services</a>
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
                  <span>Physical Therapy</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              Physical Therapy at Home
            </h1>
            <p className="text-medium">
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
              <h2 className="heading-h3 mb-6 font-bold">
                Why Choose Home Physical Therapy?
              </h2>
              <p className="text-medium mb-6">
                Our licensed physical therapists bring expert care directly to your home, eliminating the need for travel and providing therapy in an environment where you're most comfortable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Convenient home-based sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Personalized treatment plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Family involvement and education</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Real-world environment assessment</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="w-full rounded-image object-cover"
                alt="Physical therapy session"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-h3 mb-6 font-bold">
              Our Physical Therapy Services
            </h2>
            <p className="text-medium max-w-2xl mx-auto">
              We offer comprehensive physical therapy services tailored to your specific needs and recovery goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Post-Surgery Rehabilitation</h3>
              <p className="text-medium">
                Specialized therapy programs to help you recover after surgical procedures, including joint replacements, spine surgery, and orthopedic procedures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Balance & Fall Prevention</h3>
              <p className="text-medium">
                Programs designed to improve balance, coordination, and strength to reduce the risk of falls and enhance mobility.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Pain Management</h3>
              <p className="text-medium">
                Therapeutic techniques to reduce pain and improve function through targeted exercises and manual therapy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Stroke Recovery</h3>
              <p className="text-medium">
                Comprehensive rehabilitation programs to help stroke survivors regain movement, strength, and independence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Sports Injury Recovery</h3>
              <p className="text-medium">
                Specialized therapy for athletes recovering from sports-related injuries, focusing on safe return to activity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Geriatric Physical Therapy</h3>
              <p className="text-medium">
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
            <h2 className="heading-h3 mb-6 font-bold">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-medium mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and learn how our home physical therapy services can help you achieve your recovery goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-neutral-darkest text-white px-6 py-3 hover:bg-neutral-darker"
              >
                Schedule Consultation
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
