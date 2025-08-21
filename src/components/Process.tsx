import Link from 'next/link'
import { FileText, ClipboardList, Play, Phone } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: <FileText className="size-12 text-medical-primary" />,
      title: "Step 1: Doctor's Prescription",
      description: "Your home health care services start with your doctor writing a prescription for the types of services you need and how often professionals will visit.",
      link: "/contact-us",
      image: "/gims/010.png"
    },
    {
      icon: <ClipboardList className="size-12 text-medical-secondary" />,
      title: "Step 2: Contact CAHMGT",
      description: "Once you have your prescription, you or your physician can contact California Healthcare Management Group and we will take care of the rest.",
      link: "/contact-us",
      image: "/gims/011.png"
    },
    {
      icon: <Play className="size-12 text-medical-accent" />,
      title: "Step 3: Insurance Verification & Care Start",
      description: "We verify your insurance benefits prior to beginning care to ensure there are no surprises, then start delivering your customized care plan.",
      link: "/services",
      image: "/gims/012.png"
    }
  ]

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4 text-medical-primary">Getting Started</p>
              <h2 className="heading-h2 font-bold text-medical-dark">
                How to Begin Your Home Health Care Journey
              </h2>
            </div>
            <div>
              <p className="text-medium text-medical-muted">
                Starting your home health care journey with California Healthcare Management Group is simple and straightforward. We prioritize your needs and preferences, ensuring a seamless transition to receiving care at home. Our dedicated team is here to support you every step of the way.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {steps.map((step, index) => (
              <div key={index} className="p-6 rounded-lg border border-scheme-border hover:border-medical-primary transition-colors overflow-hidden group">
                <div className="relative mb-5 md:mb-6">
                  <img 
                    src={step.image} 
                    alt={`${step.title} - CAHMGT Process`}
                    className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2">
                    {step.icon}
                  </div>
                </div>
                <h3 className="heading-h4 mb-5 font-bold md:mb-6 text-medical-dark">
                  {step.title}
                </h3>
                <p className="text-medical-muted">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Link href="/services">
              <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-6 py-3 hover:bg-medical-dark hover:border-medical-dark">
                View All Services
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="inline-flex items-center justify-center rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 gap-2 text-medical-primary p-0 hover:text-medical-dark">
                Contact Us Today
                <Phone className="size-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
