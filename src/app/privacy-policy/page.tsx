import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
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
                  <span>Privacy Policy</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              Privacy Policy
            </h1>
            <p className="text-medium">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose-base space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Information We Collect</h3>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you contact us, request services, or fill out forms on our website. This may include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Name, address, and contact information</li>
                  <li>Medical history and health information</li>
                  <li>Insurance and payment information</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">How We Use Your Information</h3>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide and coordinate home health care services</li>
                  <li>Communicate with you about your care</li>
                  <li>Process payments and insurance claims</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Improve our services and website</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Information Sharing</h3>
                <p className="mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>With your explicit consent</li>
                  <li>To provide medical care and coordinate services</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect your health and safety</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Data Security</h3>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Encryption of sensitive data</li>
                  <li>Secure access controls</li>
                  <li>Regular security assessments</li>
                  <li>Employee training on privacy practices</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Your Rights</h3>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt out of certain communications</li>
                  <li>File a complaint if you believe your privacy rights have been violated</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <p className="mb-4">
                  If you have questions about this privacy policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Address:</strong> Level 1, 12 Sample St, Los Angeles, CA 90001</p>
                  <p className="mb-2"><strong>Phone:</strong> <a href="tel:1800-456-7890" className="text-blue-600 hover:underline">1-800-456-7890</a></p>
                  <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@cah4.com" className="text-blue-600 hover:underline">privacy@cah4.com</a></p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Updates to This Policy</h3>
                <p className="mb-4">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the effective date. We encourage you to review this policy periodically.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Effective Date:</strong> January 1, 2024
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
