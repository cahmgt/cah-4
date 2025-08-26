import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MedicalSocialServices() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-start justify-start md:mb-16 lg:mb-20">

            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12 text-medical-dark">
              How Medical Social Services Help
            </h1>
            <p className="text-medium text-medical-muted mb-6">
              Our licensed medical social workers provide comprehensive support to help you and your family navigate the complex healthcare system and access the resources you need for optimal recovery.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-medical-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-medical-dark">Healthcare navigation and advocacy</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-medical-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-medical-dark">Resource coordination and referrals</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-medical-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-medical-dark">Emotional and psychological support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-medical-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-medical-dark">Family counseling and education</span>
              </li>
            </ul>
            
            <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="heading-h3 mb-6 font-bold text-medical-dark">
                  What We Do
                </h2>
                <p className="text-medium mb-6 text-medical-muted">
                  Our medical social workers are here to support you through every step of your healthcare journey, providing guidance, resources, and emotional support when you need it most.
                </p>
              </div>
              <div>
                <img
                  src="/gims/033.png"
                  className="w-full rounded-image object-cover shadow-lg"
                  alt="California Healthcare Management Group Medical Social Services - Professional social workers providing healthcare navigation, resource coordination, and emotional support"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-medical-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-h3 mb-6 font-bold text-medical-dark">
              Our Medical Social Services
            </h2>
            <p className="text-medium max-w-2xl mx-auto text-medical-muted">
              We provide comprehensive social work support to address the emotional, social, and practical challenges that often accompany medical conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Healthcare Navigation</h3>
              <p className="text-medium text-medical-muted">
                Help understanding medical diagnoses, treatment plans, and coordinating care between different healthcare providers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Resource Coordination</h3>
              <p className="text-medium text-medical-muted">
                Connecting you with community resources, support groups, financial assistance programs, and other helpful services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Emotional Support</h3>
              <p className="text-medium text-medical-muted">
                Providing counseling and emotional support to help you cope with the challenges of illness and recovery.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Family Counseling</h3>
              <p className="text-medium text-medical-muted">
                Supporting families in understanding and adapting to the changes that come with a loved one's medical condition.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Discharge Planning</h3>
              <p className="text-medium text-medical-muted">
                Assisting with the transition from hospital to home, ensuring you have the support and resources needed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-scheme-border hover:border-medical-primary transition-colors hover:shadow-md">
              <div className="w-12 h-12 bg-medical-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4 text-medical-dark">Advocacy Services</h3>
              <p className="text-medium text-medical-muted">
                Advocating for your rights and ensuring you receive the care and services you need and deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-h3 mb-6 font-bold text-medical-dark">
              Benefits of Medical Social Services
            </h2>
            <p className="text-medium max-w-2xl mx-auto text-medical-muted">
              Our social work services provide essential support that can significantly improve your recovery experience and overall well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-medical-dark">Reduced Stress</h3>
              <p className="text-medium text-medical-muted">
                Professional guidance helps reduce the stress and anxiety that often accompany medical challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-medical-dark">Better Outcomes</h3>
              <p className="text-medium text-medical-muted">
                Comprehensive support leads to better adherence to treatment plans and improved recovery outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-medical-dark">Family Support</h3>
              <p className="text-medium text-medical-muted">
                Families receive the guidance and support they need to better care for their loved ones.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-medical-dark">Resource Access</h3>
              <p className="text-medium text-medical-muted">
                Easy access to community resources and support services that can enhance your recovery journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-medical-light">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-h3 mb-6 font-bold text-medical-dark">
              Need Social Work Support?
            </h2>
            <p className="text-medium mb-8 max-w-2xl mx-auto text-medical-muted">
              Contact us today to learn how our medical social services can help you navigate your healthcare journey with confidence and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-6 py-3 hover:bg-medical-dark hover:border-medical-dark"
              >
                Get Support
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
