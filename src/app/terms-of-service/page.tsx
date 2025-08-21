import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsOfService() {
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
                  <span>Terms of Service</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              Terms of Service
            </h1>
            <p className="text-medium">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">1. Acceptance of Terms</h2>
                <p className="text-medium mb-4">
                  By accessing and using the services provided by CAHMGT, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">2. Description of Service</h2>
                <p className="text-medium mb-4">
                  CAHMGT provides home health care services including but not limited to skilled nursing, physical therapy, occupational therapy, speech therapy, and medical social services. Our services are designed to provide professional healthcare in the comfort of your home.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">3. User Responsibilities</h2>
                <p className="text-medium mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-medium">
                  <li>Provide accurate and complete information about your health status</li>
                  <li>Follow the care plan and instructions provided by our healthcare professionals</li>
                  <li>Maintain a safe environment for our staff during home visits</li>
                  <li>Notify us immediately of any changes in your condition or circumstances</li>
                  <li>Respect the privacy and professional boundaries of our staff</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">4. Privacy and Confidentiality</h2>
                <p className="text-medium mb-4">
                  We are committed to protecting your privacy and maintaining the confidentiality of your health information. All information collected, used, or disclosed is governed by our Privacy Policy and applicable healthcare privacy laws.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">5. Payment and Insurance</h2>
                <p className="text-medium mb-4">
                  Payment for services is due according to the terms outlined in your service agreement. We accept various forms of payment and work with most major insurance providers. You are responsible for any co-pays, deductibles, or non-covered services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">6. Cancellation and Rescheduling</h2>
                <p className="text-medium mb-4">
                  We require 24-hour notice for cancellation or rescheduling of appointments. Late cancellations may result in a cancellation fee. In case of emergencies or illness, please contact us as soon as possible.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">7. Emergency Situations</h2>
                <p className="text-medium mb-4">
                  In case of medical emergencies, please call 911 immediately. Our staff will coordinate with emergency services and your healthcare team as appropriate.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">8. Limitation of Liability</h2>
                <p className="text-medium mb-4">
                  CAHMGT provides healthcare services in accordance with professional standards. However, we cannot guarantee specific outcomes, and we are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">9. Termination of Services</h2>
                <p className="text-medium mb-4">
                  Services may be terminated by either party with appropriate notice. We reserve the right to terminate services if it becomes unsafe for our staff or if you fail to comply with these terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">10. Changes to Terms</h2>
                <p className="text-medium mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">11. Governing Law</h2>
                <p className="text-medium mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the state where services are provided, without regard to conflict of law principles.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">12. Contact Information</h2>
                <p className="text-medium mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-medium mb-2">
                    <strong>Phone:</strong> 1-800-456-7890
                  </p>
                  <p className="text-medium mb-2">
                    <strong>Email:</strong> info@cah-4.com
                  </p>
                  <p className="text-medium">
                    <strong>Address:</strong> [Your Business Address]
                  </p>
                </div>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <p className="text-medium text-blue-800">
                  <strong>Last Updated:</strong> December 2024
                </p>
                <p className="text-medium text-blue-800 mt-2">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
