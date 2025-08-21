import Link from 'next/link'
import { Home, Users, Activity, Heart, Syringe, Stethoscope, Pill, Scissors, Microscope, Camera } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Home className="size-12 text-medical-primary" />,
      title: "Skilled Nursing Services",
      description: "Registered nurses providing medication administration, wound care, IV therapy, and comprehensive medical care in your home.",
      link: "/skilled-nursing",
      image: "/gims/004.png"
    },
    {
      icon: <Activity className="size-12 text-medical-secondary" />,
      title: "Physical Therapy",
      description: "Doctoral-level physical therapists helping patients regain motor function after injury, surgery, or illness.",
      link: "/physical-therapy",
      image: "/gims/005.png"
    },
    {
      icon: <Users className="size-12 text-medical-accent" />,
      title: "Occupational Therapy",
      description: "Licensed professionals helping patients regain fine motor skills for daily living activities.",
      link: "/occupational-therapy",
      image: "/gims/006.png"
    },
    {
      icon: <Heart className="size-12 text-medical-primary" />,
      title: "Speech Therapy",
      description: "Skilled speech pathologists treating language, fluency, voice disorders, and swallowing issues.",
      link: "/speech-therapy",
      image: "/gims/007.png"
    },
    {
      icon: <Stethoscope className="size-12 text-medical-secondary" />,
      title: "Medical Social Workers",
      description: "Healthcare professionals assessing psychosocial needs and providing counseling and community resources.",
      link: "/medical-social-services",
      image: "/gims/008.png"
    },
    {
      icon: <Syringe className="size-12 text-medical-accent" />,
      title: "IV Therapy",
      description: "Specialized intravenous therapy services provided in the comfort of your home.",
      link: "/iv-therapy",
      image: "/gims/009.png"
    }
  ]

  const additionalServices = [
    "Bathing Nurses",
    "Mobile Podiatrist", 
    "Mobile Ultrasound",
    "Mobile X-Ray",
    "Mobile Physicians",
    "Medical Supplies",
    "Wound Care Specialists",
    "Mobile Lab"
  ]

  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="heading-h3 font-bold text-medical-dark">
              Comprehensive Home Health Care Services Tailored to Your Needs
            </h2>
          </div>
          <div>
            <p className="text-medium text-medical-muted">
              California Healthcare Management Group offers a full spectrum of home health care services designed to support your health and well-being. Our dedicated team of licensed professionals is committed to meeting your unique needs with the highest medical standards.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg border border-scheme-border hover:border-medical-primary transition-colors overflow-hidden group">
              <div className="relative mb-5 md:mb-6">
                <img 
                  src={service.image} 
                  alt={`${service.title} - CAHMGT Healthcare Services`}
                  className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2">
                  {service.icon}
                </div>
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4 text-medical-dark">
                {service.title}
              </h3>
              <p className="text-medical-muted">{service.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Link href={service.link}>
                  <button className="inline-flex items-center justify-center rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 gap-2 text-medical-primary p-0 hover:text-medical-dark">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 -960 960 960"
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
        
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-12">
            <h3 className="heading-h4 font-bold text-medical-dark mb-4">
              Additional Specialized Services
            </h3>
            <p className="text-medium text-medical-muted max-w-2xl mx-auto">
              Beyond our core services, we offer specialized care solutions to meet diverse healthcare needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-4 bg-medical-light rounded-lg border border-scheme-border hover:border-medical-primary transition-colors">
                <div className="w-12 h-12 bg-medical-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Scissors className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-medical-dark text-sm">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
