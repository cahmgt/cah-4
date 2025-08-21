import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Careers() {
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
                  <span>Careers</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              Join Our Team
            </h1>
            <p className="text-medium">
              Make a difference in people's lives by joining our compassionate team of healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-h3 mb-6 font-bold">
              Why Work With Us?
            </h2>
            <p className="text-medium max-w-3xl mx-auto">
              We're committed to creating a supportive work environment where our team members can thrive and make a real impact in the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Compassionate Care</h3>
              <p className="text-medium">
                Join a team that truly cares about patients and their families, providing personalized care that makes a difference.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Professional Growth</h3>
              <p className="text-medium">
                Continuous learning opportunities, certifications, and career advancement paths to help you grow professionally.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Supportive Team</h3>
              <p className="text-medium">
                Work alongside experienced professionals who support each other and share a common goal of improving patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-h3 mb-6 font-bold">
              Open Positions
            </h2>
            <p className="text-medium max-w-2xl mx-auto">
              Explore current opportunities to join our team and make a difference in home health care.
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Registered Nurse (RN)</h3>
              <p className="text-medium mb-4">
                We're seeking experienced RNs to provide skilled nursing care in patients' homes. Full-time and part-time positions available.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>Full-time/Part-time</span>
                <span>Los Angeles Area</span>
                <span>Competitive Salary</span>
              </div>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Physical Therapist</h3>
              <p className="text-medium mb-4">
                Join our team as a Physical Therapist and help patients regain mobility and independence in their homes.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>Full-time</span>
                <span>Los Angeles Area</span>
                <span>Competitive Salary</span>
              </div>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Home Health Aide</h3>
              <p className="text-medium mb-4">
                Provide personal care and companionship to patients in their homes. Training and certification support available.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>Full-time/Part-time</span>
                <span>Los Angeles Area</span>
                <span>Competitive Salary</span>
              </div>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-2">Care Coordinator</h3>
              <p className="text-medium mb-4">
                Help coordinate patient care and manage relationships with healthcare providers and families.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>Full-time</span>
                <span>Los Angeles Area</span>
                <span>Competitive Salary</span>
              </div>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-h3 mb-6 font-bold">
              How to Apply
            </h2>
            <p className="text-medium max-w-2xl mx-auto">
              Follow these simple steps to join our team and start making a difference in people's lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-3">Submit Application</h3>
              <p className="text-medium">
                Complete our online application form with your resume and cover letter.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-3">Initial Review</h3>
              <p className="text-medium">
                Our HR team will review your application and contact you within 48 hours.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-3">Interview Process</h3>
              <p className="text-medium">
                Participate in phone and in-person interviews with our team.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-3">Join Our Team</h3>
              <p className="text-medium">
                Complete onboarding and start your journey with us!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue-50">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-h3 mb-6 font-bold">
              Don't See the Right Position?
            </h2>
            <p className="text-medium mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-neutral-darkest text-white px-6 py-3 hover:bg-neutral-darker"
              >
                Contact Us
              </a>
              <a
                href="mailto:careers@cah4.com"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-scheme-background text-scheme-text px-6 py-3 hover:bg-gray-100"
              >
                Send Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
