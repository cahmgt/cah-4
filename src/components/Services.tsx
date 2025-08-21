import Link from 'next/link'
import { Home, Users, Activity } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Home className="size-12 text-scheme-text" />,
      title: "Skilled Nursing Services for Personalized Care and Support",
      description: "Our skilled nursing services are tailored to provide expert medical care at home.",
      link: "/skilled-nursing"
    },
    {
      icon: <Activity className="size-12 text-scheme-text" />,
      title: "Physical Therapy to Enhance Mobility and Independence",
      description: "Our physical therapy services focus on restoring mobility and improving quality of life.",
      link: "/physical-therapy"
    },
    {
      icon: <Users className="size-12 text-scheme-text" />,
      title: "Occupational Therapy for Daily Living Skills and Rehabilitation",
      description: "Our occupational therapy services help clients regain independence in daily activities.",
      link: "/occupational-therapy"
    }
  ]

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="heading-h3 font-bold">
              Comprehensive Home Health Care Services Tailored to Your Needs
            </h2>
          </div>
          <div>
            <p className="text-medium">
              At our agency, we provide a full spectrum of home health care services
              designed to support your health and well-being. Our dedicated team of
              professionals is here to ensure you receive the highest quality care
              in the comfort of your home. From skilled nursing to therapy services,
              we are committed to meeting your unique needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          {services.map((service, index) => (
            <div key={index}>
              <div className="mb-5 md:mb-6">
                {service.icon}
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                {service.title}
              </h3>
              <p>{service.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Link href={service.link}>
                  <button className="inline-flex items-center justify-center rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 gap-2 text-scheme-text p-0 hover:text-neutral-600">
                    Learn More
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
          ))}
        </div>
      </div>
    </section>
  )
}
