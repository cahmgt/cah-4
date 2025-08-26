import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="heading-h1 font-bold text-medical-dark">
              Expert Home Health Care Services Across Southern California
            </h1>
            <p className="text-medium text-medical-muted mt-4">
              As a Home Care Elite Agency since 2013, California Healthcare Management Group provides comprehensive home health care services in Los Angeles, Orange, Ventura, San Bernardino, and Riverside Counties.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link href="/services">
                <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-6 py-3 hover:bg-medical-dark hover:border-medical-dark">
                  View Our Services
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-scheme-background text-medical-primary px-6 py-3 hover:bg-medical-light hover:text-medical-dark">
                  Get Free Consultation
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="bg-medical-light p-6 rounded-lg border border-medical-primary/20">
              <h3 className="text-lg font-semibold text-medical-dark mb-4">Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-medical-muted">
                <div>• Los Angeles County</div>
                <div>• Orange County</div>
                <div>• Ventura County</div>
                <div>• San Bernardino County</div>
                <div>• Riverside County</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/gims/026.png"
            alt="California Healthcare Management Group Home Health Care Services - Professional healthcare team providing compassionate care"
            width={1200}
            height={600}
            className="w-full rounded-image object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
