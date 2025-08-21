import Link from 'next/link'

export default function Excellence() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Excellence</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Recognized for Outstanding Home Health Care Services
            </h1>
            <p className="text-medium">
              Our agency is proud to be accredited by the Joint Commission, ensuring
              the highest standards of care. We have also received numerous awards
              for our commitment to quality and patient satisfaction.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link href="/about-us">
                <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-scheme-background text-scheme-text px-6 py-3 hover:bg-gray-50">
                  Learn More
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="inline-flex items-center justify-center rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 gap-2 text-scheme-text p-0 hover:text-neutral-600">
                  Contact
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
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
