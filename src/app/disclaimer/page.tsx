import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Disclaimer() {
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
                  <span>Disclaimer</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              Legal Disclaimer
            </h1>
            <p className="text-medium">
              Important information about the use of our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose-base space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">General Information</h3>
                <p className="mb-4">
                  The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose.
                </p>
                <p className="mb-4">
                  Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, arising from loss of data or profits arising out of, or in connection with, the use of this website.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Medical Information</h3>
                <p className="mb-4">
                  The medical information on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
                <p className="mb-4">
                  Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or emergency services immediately.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Service Availability</h3>
                <p className="mb-4">
                  Our services are subject to availability and may vary by location. The information about our services on this website is provided for informational purposes only and does not constitute an offer to provide services.
                </p>
                <p className="mb-4">
                  We reserve the right to modify, suspend, or discontinue any service at any time without notice. Contact us directly to confirm service availability in your area and to discuss your specific needs.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">External Links</h3>
                <p className="mb-4">
                  This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>
                <p className="mb-4">
                  The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. We have no control over the nature, content, and availability of those sites.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Privacy and Security</h3>
                <p className="mb-4">
                  While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of any information you transmit to us.
                </p>
                <p className="mb-4">
                  Please review our Privacy Policy for more information about how we collect, use, and protect your information.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="heading-h3 mb-6 font-bold">8. Limitation of Liability</h2>
                <p className="text-medium mb-4">
                  In no event shall California Healthcare Management Group Home Health Care Agency, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Changes to Disclaimer</h3>
                <p className="mb-4">
                  We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after any changes constitutes acceptance of the new disclaimer.
                </p>
                <p className="mb-4">
                  We encourage you to review this disclaimer periodically to stay informed about how we protect your interests and the terms governing your use of our website.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="mb-4">
                  If you have any questions about this disclaimer, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Address:</strong> 17337 Ventura Blvd, Suite 202, Encino, CA 91316</p>
                  <p className="mb-2"><strong>Phone:</strong> <a href="tel:1800-456-7890" className="text-blue-600 hover:underline">1-800-456-7890</a></p>
                  <p className="mb-2"><strong>Email:</strong> <a href="mailto:legal@cah4.com" className="text-blue-600 hover:underline">legal@cah4.com</a></p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> This disclaimer is a legal document. If you have any questions about its terms or how they apply to your situation, we recommend consulting with a qualified legal professional.
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
