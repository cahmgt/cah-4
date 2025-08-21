import Link from 'next/link'

export default function Hero() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="heading-h1 font-bold">
              Compassionate Home Health Care for Your Loved Ones
            </h1>
          </div>
          <div>
            <p className="text-medium">
              At our modern home health care agency, we prioritize your
              family&apos;s well-being with personalized services. Our youthful and
              dedicated team is here to provide exceptional care in the comfort of
              your home.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link href="/services">
                <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-neutral-darkest text-white px-6 py-3 hover:bg-neutral-800">
                  Learn More
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-scheme-background text-scheme-text px-6 py-3 hover:bg-gray-50">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  )
}
