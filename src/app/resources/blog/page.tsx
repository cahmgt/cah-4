import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ResourcesBlog() {
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
              <ol className="flex flex-wrap items-center gap-1.5 break-words text-medical-muted sm:gap-2">
                <li className="inline-flex items-center gap-1.5">
                  <a className="text-medical-primary hover:text-medical-dark transition-colors" href="/">Home</a>
                </li>
                <li className="text-medical-muted [&>svg]:size-4">
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
                  <a className="text-medical-primary hover:text-medical-dark transition-colors" href="/resources">Resources</a>
                </li>
                <li className="text-medical-muted [&>svg]:size-4">
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
                  <span className="text-medical-dark">Blog</span>
                </li>
              </ol>
            </nav>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12 text-medical-dark">
              Healthcare Resources & Blog
            </h1>
            <p className="text-medium text-medical-muted">
              Stay informed with our latest articles, tips, and insights about home healthcare, wellness, and medical topics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src="/gims/024.png"
                    className="w-full h-64 md:h-full object-cover"
                    alt="California Healthcare Management Group Featured Article - The Benefits of Home Health Care: Why Choose Care at Home?"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="text-sm text-medical-primary mb-2 font-semibold">Featured Article</div>
                  <h2 className="heading-h3 mb-4 font-bold text-medical-dark">
                    The Benefits of Home Health Care: Why Choose Care at Home?
                  </h2>
                  <p className="text-medium mb-4 text-medical-muted">
                    Discover how home health care can provide better outcomes, increased comfort, and improved quality of life for patients and their families.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-medical-muted">
                      By Dr. Sarah Johnson • 5 min read
                    </div>
                    <a
                      href="/blog-post"
                      className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-4 py-2 hover:bg-medical-dark hover:border-medical-dark text-sm"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-medical-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-h3 mb-6 font-bold text-medical-dark">
              Browse by Category
            </h2>
            <p className="text-medium max-w-2xl mx-auto text-medical-muted">
              Find articles and resources that match your interests and needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow border border-scheme-border hover:border-medical-primary">
              <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-medical-dark">Wellness Tips</h3>
              <p className="text-medium text-medical-muted">
                Health and wellness advice for better living
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow border border-scheme-border hover:border-medical-primary">
              <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-medical-dark">Home Care</h3>
              <p className="text-medium text-medical-muted">
                Tips for managing care at home
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow border border-scheme-border hover:border-medical-primary">
              <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-medical-dark">Medical Info</h3>
              <p className="text-medium text-medical-muted">
                Educational content about medical conditions
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow border border-scheme-border hover:border-medical-primary">
              <div className="w-16 h-16 bg-medical-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-medical-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-medical-dark">Family Support</h3>
              <p className="text-medium text-medical-muted">
                Resources for caregivers and families
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-h3 mb-6 font-bold text-medical-dark">
              Recent Articles
            </h2>
            <p className="text-medium max-w-2xl mx-auto text-medical-muted">
              Stay up to date with our latest healthcare insights and tips.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-scheme-border hover:border-medical-primary">
              <img
                src="/gims/025.png"
                className="w-full h-48 object-cover"
                alt="California Healthcare Management Group Article - Understanding Physical Therapy: What to Expect"
              />
              <div className="p-6">
                <div className="text-sm text-medical-muted mb-2">December 15, 2024</div>
                <h3 className="text-lg font-bold mb-3 text-medical-dark">
                  Understanding Physical Therapy: What to Expect
                </h3>
                <p className="text-medium text-medical-muted mb-4">
                  Learn about the physical therapy process and how it can help you recover and improve your mobility.
                </p>
                <a
                  href="/blog-post"
                  className="text-medical-primary hover:text-medical-dark font-medium transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-scheme-border hover:border-medical-primary">
              <img
                src="/gims/026.png"
                className="w-full h-48 object-cover"
                alt="California Healthcare Management Group Article - Nutrition Tips for Seniors: Eating Well at Home"
              />
              <div className="p-6">
                <div className="text-sm text-medical-muted mb-2">December 10, 2024</div>
                <h3 className="text-lg font-bold mb-3 text-medical-dark">
                  Nutrition Tips for Seniors: Eating Well at Home
                </h3>
                <p className="text-medium text-medical-muted mb-4">
                  Discover simple nutrition strategies to maintain health and energy as you age.
                </p>
                <a
                  href="/blog-post"
                  className="text-medical-primary hover:text-medical-dark font-medium transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-scheme-border hover:border-medical-primary">
              <img
                src="/gims/027.png"
                className="w-full h-48 object-cover"
                alt="California Healthcare Management Group Article - Managing Chronic Conditions: A Caregiver's Guide"
              />
              <div className="p-6">
                <div className="text-sm text-medical-muted mb-2">December 5, 2024</div>
                <h3 className="text-lg font-bold mb-3 text-medical-dark">
                  Managing Chronic Conditions: A Caregiver's Guide
                </h3>
                <p className="text-medium text-medical-muted mb-4">
                  Essential tips and strategies for caregivers supporting loved ones with chronic health conditions.
                </p>
                <a
                  href="/blog-post"
                  className="text-medical-primary hover:text-medical-dark font-medium transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-scheme-border hover:border-medical-primary">
              <img
                src="/gims/028.png"
                className="w-full h-48 object-cover"
                alt="California Healthcare Management Group Article - Speech Therapy: Improving Communication at Home"
              />
              <div className="p-6">
                <div className="text-sm text-medical-muted mb-2">November 30, 2024</div>
                <h3 className="text-lg font-bold mb-3 text-medical-dark">
                  Speech Therapy: Improving Communication at Home
                </h3>
                <p className="text-medium text-medical-muted mb-4">
                  How speech therapy can enhance communication skills and quality of life for patients and families.
                </p>
                <a
                  href="/blog-post"
                  className="text-medical-primary hover:text-medical-dark font-medium transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-scheme-border hover:border-medical-primary">
              <img
                src="/gims/029.png"
                className="w-full h-48 object-cover"
                alt="California Healthcare Management Group Article - Fall Prevention: Keeping Your Home Safe"
              />
              <div className="p-6">
                <div className="text-sm text-medical-muted mb-2">November 25, 2024</div>
                <h3 className="text-lg font-bold mb-3 text-medical-dark">
                  Fall Prevention: Keeping Your Home Safe
                </h3>
                <p className="text-medium text-medical-muted mb-4">
                  Practical steps to reduce fall risks and create a safer home environment for seniors.
                </p>
                <a
                  href="/blog-post"
                  className="text-medical-primary hover:text-medical-dark font-medium transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-scheme-border hover:border-medical-primary">
              <img
                src="/gims/030.png"
                className="w-full h-48 object-cover"
                alt="California Healthcare Management Group Article - The Role of Occupational Therapy in Daily Living"
              />
              <div className="p-6">
                <div className="text-sm text-medical-muted mb-2">November 20, 2024</div>
                <h3 className="text-lg font-bold mb-3 text-medical-dark">
                  The Role of Occupational Therapy in Daily Living
                </h3>
                <p className="text-medium text-medical-muted mb-4">
                  How occupational therapy helps patients regain independence in daily activities and routines.
                </p>
                <a
                  href="/blog-post"
                  className="text-medical-primary hover:text-medical-dark font-medium transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-medical-light">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-h3 mb-6 font-bold text-medical-dark">
              Stay Updated
            </h2>
            <p className="text-medium mb-8 text-medical-muted">
              Subscribe to our newsletter for the latest healthcare tips, articles, and updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-scheme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-6 py-3 hover:bg-medical-dark hover:border-medical-dark"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-medical-muted mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
