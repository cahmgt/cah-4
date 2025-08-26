import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Services() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-start justify-start md:mb-16 lg:mb-20">
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12 text-medical-dark">
              Our Home Health Care Services
            </h1>
            <p className="text-medium text-medical-muted">
              Comprehensive care solutions tailored to meet your family's unique needs. California Healthcare Management Group provides expert home health care services across Southern California.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {/* Physical Therapy */}
            <div className="flex size-full flex-col items-start justify-start text-start bg-white p-6 rounded-lg border border-scheme-border hover:border-medical-primary transition-colors shadow-sm">
              <a href="/physical-therapy" className="mb-6 w-full">
                <Image
                  src="/gims/018.png"
                  alt="California Healthcare Management Group Physical Therapy - Professional home physical therapy services for recovery and rehabilitation"
                  width={400}
                  height={300}
                  className="aspect-[3/2] size-full rounded-image object-cover shadow-md hover:shadow-lg transition-shadow"
                />
              </a>
              <h2 className="heading-h5 font-bold mb-4 text-medical-dark">
                Physical Therapy
              </h2>
              <p className="mb-4 text-medical-muted">
                Specialized physical therapy services to help patients regain strength, mobility, and independence.
              </p>
              <a href="/physical-therapy" className="text-medical-primary font-semibold hover:text-medical-dark transition-colors">
                Learn More →
              </a>
            </div>

            {/* Occupational Therapy */}
            <div className="flex size-full flex-col items-start justify-start text-start bg-white p-6 rounded-lg border border-scheme-border hover:border-medical-primary transition-colors shadow-sm">
              <a href="/occupational-therapy" className="mb-6 w-full">
                <Image
                  src="/gims/019.png"
                  alt="California Healthcare Management Group Occupational Therapy - Helping patients develop skills for daily living and work activities"
                  width={400}
                  height={300}
                  className="aspect-[3/2] size-full rounded-image object-cover shadow-md hover:shadow-lg transition-shadow"
                />
              </a>
              <h2 className="heading-h5 font-bold mb-4 text-medical-dark">
                Occupational Therapy
              </h2>
              <p className="mb-4 text-medical-muted">
                Help patients develop skills for daily living and work activities.
              </p>
              <a href="/occupational-therapy" className="text-medical-primary font-semibold hover:text-medical-dark transition-colors">
                Learn More →
              </a>
            </div>

            {/* Speech Therapy */}
            <div className="flex size-full flex-col items-start justify-start text-start bg-white p-6 rounded-lg border border-scheme-border hover:border-medical-primary transition-colors shadow-sm">
              <a href="/speech-therapy" className="mb-6 w-full">
                <Image
                  src="/gims/020.png"
                  alt="California Healthcare Management Group Speech Therapy - Improving communication, swallowing, and cognitive-linguistic skills"
                  width={400}
                  height={300}
                  className="aspect-[3/2] size-full rounded-image object-cover shadow-md hover:shadow-lg transition-shadow"
                />
              </a>
              <h2 className="heading-h5 font-bold mb-4 text-medical-dark">
                Speech Therapy
              </h2>
              <p className="mb-4 text-medical-muted">
                Improve communication, swallowing, and cognitive-linguistic skills.
              </p>
              <a href="/speech-therapy" className="text-medical-primary font-semibold hover:text-medical-dark transition-colors">
                Learn More →
              </a>
            </div>

            {/* Skilled Nursing */}
            <div className="flex size-full flex-col items-start justify-start text-start bg-white p-6 rounded-lg border border-scheme-border hover:border-medical-primary transition-colors shadow-sm">
              <a href="/skilled-nursing" className="mb-6 w-full">
                <Image
                  src="/gims/021.png"
                  alt="California Healthcare Management Group Skilled Nursing - Professional nursing care including wound care, medication management, and health monitoring"
                  width={400}
                  height={300}
                  className="aspect-[3/2] size-full rounded-image object-cover shadow-md hover:shadow-lg transition-shadow"
                />
              </a>
              <h2 className="heading-h5 font-bold mb-4 text-medical-dark">
                Skilled Nursing
              </h2>
              <p className="mb-4 text-medical-muted">
                Professional nursing care including wound care, medication management, and health monitoring.
              </p>
              <a href="/skilled-nursing" className="text-medical-primary font-semibold hover:text-medical-dark transition-colors">
                Learn More →
              </a>
            </div>

            {/* Medical Social Services */}
            <div className="flex size-full flex-col items-start justify-start text-start bg-white p-6 rounded-lg border border-scheme-border hover:border-medical-primary transition-colors shadow-sm">
              <a href="/medical-social-services" className="mb-6 w-full">
                <Image
                  src="/gims/022.png"
                  alt="California Healthcare Management Group Medical Social Services - Support with care coordination, community resources, and emotional support"
                  width={400}
                  height={300}
                  className="aspect-[3/2] size-full rounded-image object-cover shadow-md hover:shadow-lg transition-shadow"
                />
              </a>
              <h2 className="heading-h5 font-bold mb-4 text-medical-dark">
                Medical Social Services
              </h2>
              <p className="mb-4 text-medical-muted">
                Support with care coordination, community resources, and emotional support.
              </p>
              <a href="/medical-social-services" className="text-medical-primary font-semibold hover:text-medical-dark transition-colors">
                Learn More →
              </a>
            </div>

            {/* Home Health Aides */}
            <div className="flex size-full flex-col items-start justify-start text-start bg-white p-6 rounded-lg border border-scheme-border hover:border-medical-primary transition-colors shadow-sm">
              <a href="#" className="mb-6 w-full">
                <Image
                  src="/gims/023.png"
                  alt="California Healthcare Management Group Home Health Aides - Personal care assistance with daily activities and companionship"
                  width={400}
                  height={300}
                  className="aspect-[3/2] size-full rounded-image object-cover shadow-md hover:shadow-lg transition-shadow"
                />
              </a>
              <h2 className="heading-h5 font-bold mb-4 text-medical-dark">
                Home Health Aides
              </h2>
              <p className="mb-4 text-medical-muted">
                Personal care assistance with daily activities and companionship.
              </p>
              <a href="#" className="text-medical-primary font-semibold hover:text-medical-dark transition-colors">
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
