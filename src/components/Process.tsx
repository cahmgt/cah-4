import Link from 'next/link'
import { Home, ClipboardList, Play } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: <Home className="size-12 text-scheme-text" />,
      title: "Step 1: Initial Consultation and Assessment",
      description: "We begin with a comprehensive consultation to understand your unique needs.",
      link: "/contact-us"
    },
    {
      icon: <ClipboardList className="size-12 text-scheme-text" />,
      title: "Step 2: Creating Your Personalized Care Plan",
      description: "Our team collaborates with you to design a tailored care plan.",
      link: "/services"
    },
    {
      icon: <Play className="size-12 text-scheme-text" />,
      title: "Step 3: Implementation of Care Services",
      description: "We begin delivering your customized care as planned.",
      link: "/services"
    }
  ]

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Care</p>
              <h2 className="heading-h2 font-bold">
                Your Journey to Personalized Home Health Care
              </h2>
            </div>
            <div>
              <p className="text-medium">
                Starting your home health care journey with us is simple and
                straightforward. We prioritize your needs and preferences, ensuring
                a seamless transition to receiving care at home. Our dedicated team
                is here to support you every step of the way.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {steps.map((step, index) => (
              <div key={index}>
                <div className="mb-5 md:mb-6">
                  {step.icon}
                </div>
                <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Link href="/services">
              <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-scheme-background text-scheme-text px-6 py-3 hover:bg-gray-50">
                Learn More
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="inline-flex items-center justify-center rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 gap-2 text-scheme-text p-0 hover:text-neutral-600">
                Sign Up
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 -960 960 960"
                  className="text-scheme-text"
                  fill="currentColor"
                >
                  <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
