import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Testimonials() {
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
                  <span>Testimonials</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              What Our Patients Say
            </h1>
            <p className="text-medium">
              Hear from families who have experienced our compassionate home health care services firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
            {/* Testimonial 1 */}
            <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
              <div className="mb-6 flex md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 -960 960 960"
                    className="size-6 text-yellow-400"
                    fill="currentColor"
                  >
                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg font-bold mb-6">
                "The care my mother received was exceptional and compassionate. The team went above and beyond to ensure her comfort and recovery."
              </blockquote>
              <div className="mt-auto">
                <div className="mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 1"
                    className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                  />
                </div>
                <div className="mb-3 md:mb-4">
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-sm text-gray-600">Daughter, Client</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
              <div className="mb-6 flex md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 -960 960 960"
                    className="size-6 text-yellow-400"
                    fill="currentColor"
                  >
                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg font-bold mb-6">
                "Their team was professional and truly cared for my father. The physical therapy helped him regain his independence."
              </blockquote>
              <div className="mt-auto">
                <div className="mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 2"
                    className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                  />
                </div>
                <div className="mb-3 md:mb-4">
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm text-gray-600">Son, Client</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
              <div className="mb-6 flex md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 -960 960 960"
                    className="size-6 text-yellow-400"
                    fill="currentColor"
                  >
                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg font-bold mb-6">
                "I couldn't have asked for better support during recovery. The speech therapy made all the difference in my communication."
              </blockquote>
              <div className="mt-auto">
                <div className="mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 3"
                    className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                  />
                </div>
                <div className="mb-3 md:mb-4">
                  <p className="font-semibold">Emily Johnson</p>
                  <p className="text-sm text-gray-600">Patient, Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-h3 mb-6 font-bold">
              More Patient Stories
            </h2>
            <p className="text-medium max-w-2xl mx-auto">
              Read more about how our services have positively impacted the lives of our patients and their families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 -960 960 960"
                    className="size-5 text-yellow-400"
                    fill="currentColor"
                  >
                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg mb-6">
                "The occupational therapy team helped my husband regain his ability to perform daily activities. Their patience and expertise were remarkable."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 4"
                  className="size-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">Maria Rodriguez</p>
                  <p className="text-sm text-gray-600">Wife, Client</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 -960 960 960"
                    className="size-5 text-yellow-400"
                    fill="currentColor"
                  >
                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg mb-6">
                "The skilled nursing care was exceptional. The nurse was knowledgeable, caring, and always available when we needed help."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 5"
                  className="size-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">Robert Wilson</p>
                  <p className="text-sm text-gray-600">Patient, Client</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 -960 960 960"
                    className="size-5 text-yellow-400"
                    fill="currentColor"
                  >
                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg mb-6">
                "The medical social worker provided invaluable support in navigating insurance and connecting us with community resources."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 6"
                  className="size-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">Lisa Chen</p>
                  <p className="text-sm text-gray-600">Daughter, Client</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 -960 960 960"
                    className="size-5 text-yellow-400"
                    fill="currentColor"
                  >
                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg mb-6">
                "The home health aide was wonderful with my grandmother. She provided both care and companionship that made a real difference."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 7"
                  className="size-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">David Thompson</p>
                  <p className="text-sm text-gray-600">Grandson, Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-h3 mb-6 font-bold">
              Ready to Experience Our Care?
            </h2>
            <p className="text-medium mb-8 max-w-2xl mx-auto">
              Join the many families who have trusted us with their loved ones' care. Contact us today to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-neutral-darkest text-white px-6 py-3 hover:bg-neutral-darker"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-scheme-background text-scheme-text px-6 py-3 hover:bg-gray-100"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
