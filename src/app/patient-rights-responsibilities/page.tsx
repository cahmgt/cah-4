import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PatientRightsResponsibilities() {
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
                  <span>Patient Rights & Responsibilities</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              Patient Rights & Responsibilities
            </h1>
            <p className="text-medium">
              Understanding your rights and responsibilities as a patient helps ensure the best possible care experience.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Rights */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-h3 mb-6 font-bold">
                Your Rights as a Patient
              </h2>
              <p className="text-medium max-w-2xl mx-auto">
                As a patient receiving home health care services, you have certain rights that we are committed to protecting and upholding.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h3 className="text-lg font-bold mb-4 text-blue-600">Right to Quality Care</h3>
                <p className="text-medium">
                  You have the right to receive high-quality, professional healthcare services that meet established standards of care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h3 className="text-lg font-bold mb-4 text-green-600">Right to Information</h3>
                <p className="text-medium">
                  You have the right to receive clear, understandable information about your diagnosis, treatment plan, and care options.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h3 className="text-lg font-bold mb-4 text-purple-600">Right to Privacy</h3>
                <p className="text-medium">
                  You have the right to privacy and confidentiality regarding your medical information and personal health records.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
                <h3 className="text-lg font-bold mb-4 text-orange-600">Right to Respect</h3>
                <p className="text-medium">
                  You have the right to be treated with dignity, respect, and consideration regardless of your background or circumstances.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                <h3 className="text-lg font-bold mb-4 text-red-600">Right to Refuse Care</h3>
                <p className="text-medium">
                  You have the right to refuse any treatment or service, though this may impact your care plan and outcomes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <h3 className="text-lg font-bold mb-4 text-indigo-600">Right to Complain</h3>
                <p className="text-medium">
                  You have the right to voice concerns or complaints about your care without fear of retaliation or discrimination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Responsibilities */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-h3 mb-6 font-bold">
                Your Responsibilities as a Patient
              </h2>
              <p className="text-medium max-w-2xl mx-auto">
                Along with your rights come important responsibilities that help ensure the best possible care experience for you and our staff.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3">Provide Accurate Information</h3>
                <p className="text-medium">
                  Share complete and accurate information about your health history, current medications, allergies, and any changes in your condition.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3">Follow Care Instructions</h3>
                <p className="text-medium">
                  Follow the care plan and instructions provided by your healthcare team to the best of your ability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3">Maintain a Safe Environment</h3>
                <p className="text-medium">
                  Ensure your home environment is safe and accessible for our staff to provide care services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3">Respect Staff and Appointments</h3>
                <p className="text-medium">
                  Treat our staff with respect and provide adequate notice for appointment cancellations or rescheduling.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3">Communicate Concerns</h3>
                <p className="text-medium">
                  Report any concerns about your care, safety, or well-being to our staff promptly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3">Participate in Your Care</h3>
                <p className="text-medium">
                  Actively participate in your care decisions and work collaboratively with your healthcare team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="heading-h3 mb-6 font-bold">
                  Advance Directives
                </h2>
                <p className="text-medium mb-4">
                  You have the right to create advance directives, such as living wills or healthcare power of attorney documents, to specify your wishes for future medical care.
                </p>
                <p className="text-medium">
                  Our staff can provide information about advance directives and help you understand how they work in the context of home health care.
                </p>
              </div>

              <div>
                <h2 className="heading-h3 mb-6 font-bold">
                  Grievance Process
                </h2>
                <p className="text-medium mb-4">
                  If you have concerns about your care or believe your rights have been violated, we have a formal grievance process to address your concerns.
                </p>
                <p className="text-medium">
                  Contact our patient advocate at 1-800-456-7890 or submit a written complaint to our office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-h3 mb-6 font-bold">
              Questions About Your Rights?
            </h2>
            <p className="text-medium mb-8 max-w-2xl mx-auto">
              If you have questions about your patient rights and responsibilities, or if you need assistance with any aspect of your care, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-neutral-darkest text-white px-6 py-3 hover:bg-neutral-darker"
              >
                Contact Us
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
