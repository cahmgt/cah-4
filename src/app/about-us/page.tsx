import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutUs() {
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
                  <span>About Us</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              About Our Home Health Care Agency
            </h1>
            <p className="text-medium">
              Dedicated to providing compassionate, professional care in the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-lg">
            <div className="prose-base mb-12 md:mb-20">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="mb-4">
                We are committed to delivering exceptional home health care services that enhance the quality of life for our patients and their families. Our team of skilled professionals works tirelessly to ensure that every individual receives personalized, compassionate care in the comfort of their own home.
              </p>
              <p className="mb-4">
                With years of experience in the healthcare industry, we understand the unique challenges that families face when caring for loved ones. Our comprehensive approach addresses not only the physical needs of our patients but also their emotional and social well-being.
              </p>
              
              <h4 className="text-xl font-bold mt-8 mb-4">Why Choose Us?</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Licensed and certified healthcare professionals</li>
                <li>Personalized care plans tailored to individual needs</li>
                <li>24/7 availability for urgent care situations</li>
                <li>Comprehensive range of medical services</li>
                <li>Family-centered approach to care</li>
              </ul>
              
              <h4 className="text-xl font-bold mt-8 mb-4">Our Commitment</h4>
              <p className="mb-4">
                We believe that everyone deserves access to high-quality healthcare in the comfort of their own home. Our commitment to excellence drives everything we do, from the initial assessment to ongoing care coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
