import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Services() {
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
                  <span>Our Services</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              Our Home Health Care Services
            </h1>
            <p className="text-medium">
              Comprehensive care solutions tailored to meet your family's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {/* Physical Therapy */}
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="/physical-therapy" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Physical Therapy"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </a>
              <h2 className="heading-h5 font-bold mb-4">
                Physical Therapy
              </h2>
              <p className="mb-4">
                Specialized physical therapy services to help patients regain strength, mobility, and independence.
              </p>
              <a href="/physical-therapy" className="text-scheme-text font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            {/* Occupational Therapy */}
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="/occupational-therapy" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Occupational Therapy"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </a>
              <h2 className="heading-h5 font-bold mb-4">
                Occupational Therapy
              </h2>
              <p className="mb-4">
                Help patients develop skills for daily living and work activities.
              </p>
              <a href="/occupational-therapy" className="text-scheme-text font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            {/* Speech Therapy */}
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="/speech-therapy" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Speech Therapy"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </a>
              <h2 className="heading-h5 font-bold mb-4">
                Speech Therapy
              </h2>
              <p className="mb-4">
                Improve communication, swallowing, and cognitive-linguistic skills.
              </p>
              <a href="/speech-therapy" className="text-scheme-text font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            {/* Skilled Nursing */}
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="/skilled-nursing" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Skilled Nursing"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </a>
              <h2 className="heading-h5 font-bold mb-4">
                Skilled Nursing
              </h2>
              <p className="mb-4">
                Professional nursing care including wound care, medication management, and health monitoring.
              </p>
              <a href="/skilled-nursing" className="text-scheme-text font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            {/* Medical Social Services */}
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="/medical-social-services" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Medical Social Services"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </a>
              <h2 className="heading-h5 font-bold mb-4">
                Medical Social Services
              </h2>
              <p className="mb-4">
                Support with care coordination, community resources, and emotional support.
              </p>
              <a href="/medical-social-services" className="text-scheme-text font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            {/* Home Health Aides */}
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="#" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Home Health Aides"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </a>
              <h2 className="heading-h5 font-bold mb-4">
                Home Health Aides
              </h2>
              <p className="mb-4">
                Personal care assistance with daily activities and companionship.
              </p>
              <a href="#" className="text-scheme-text font-semibold hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
