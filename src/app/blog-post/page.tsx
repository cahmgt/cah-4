import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogPost() {
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
                  <a className="" href="/">Blog</a>
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
                  <a className="" href="#">Health</a>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              The Benefits of Home Health Care
            </h1>
            <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-end">
              <div className="mb-4 flex items-center sm:mb-0">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Author avatar"
                    className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="font-semibold">Jane Doe</h6>
                  <div className="mt-1 flex">
                    <p className="text-small">11 Jan 2023</p>
                    <span className="mx-2">•</span>
                    <p className="text-small">5 min read</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-flow-col grid-cols-[max-content] items-start gap-2">
                <a href="#" className="rounded-[1.25rem] bg-scheme-foreground p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 -960 960 960"
                    className="text-scheme-text size-6"
                    fill="currentColor"
                  >
                    <path d="M280-280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h120q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600H280q-50 0-85 35t-35 85q0 50 35 85t85 35h120q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280H280Zm80-160q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h240q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440H360Zm200 160q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h120q50 0 85-35t35-85q0-50-35-85t-85-35H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h120q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H560Z" />
                  </svg>
                </a>
                <a href="#" className="rounded-[1.25rem] bg-scheme-foreground p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    className="text-scheme-text size-6"
                    fill="currentColor"
                  >
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
                  </svg>
                </a>
                <a href="#" className="rounded-[1.25rem] bg-scheme-foreground p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 512 512"
                    className="text-scheme-text size-6 p-0.5"
                    fill="currentColor"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
                <a href="#" className="rounded-[1.25rem] bg-scheme-foreground p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    className="text-scheme-text size-6"
                    fill="currentColor"
                  >
                    <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[2] size-full rounded-image object-cover"
              alt="Blog post hero image"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-lg">
            <div className="prose-base mb-12 md:mb-20">
              <h3 className="text-2xl font-bold mb-6">Introduction</h3>
              <p className="mb-4">
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
                vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
                varius id.
              </p>
              <p className="mb-4">
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
                mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis
                fusce augue enim. Quis at habitant diam at. Suscipit tristique risus,
                at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
                sodales id est ac volutpat.
              </p>
              
              <h4 className="text-xl font-bold mt-8 mb-4">Key Benefits</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Personalized care in the comfort of your home</li>
                <li>Reduced risk of hospital-acquired infections</li>
                <li>Faster recovery in familiar surroundings</li>
                <li>Family involvement in care decisions</li>
                <li>Cost-effective alternative to hospital stays</li>
              </ul>
              
              <h4 className="text-xl font-bold mt-8 mb-4">Conclusion</h4>
              <p className="mb-4">
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
                scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
                blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
                scelerisque amet nulla purus habitasse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
