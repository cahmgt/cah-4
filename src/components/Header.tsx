'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  return (
    <header className="z-[999] flex w-full items-center border-b border-scheme-border bg-scheme-background lg:min-h-18 lg:px-[5%]">
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-neutral-darkest">
              CAHMGT
            </div>
          </Link>
          <div className="flex items-center gap-4 lg:hidden">
            <div>
              <Link href="/contact-us">
                <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-neutral-darkest text-white w-full px-4 py-1">
                  Contact
                </button>
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-neutral-darkest" />
              ) : (
                <>
                  <span className="my-[3px] h-0.5 w-6 bg-neutral-darkest"></span>
                  <span className="my-[3px] h-0.5 w-6 bg-neutral-darkest"></span>
                  <span className="my-[3px] h-0.5 w-6 bg-neutral-darkest"></span>
                </>
              )}
            </button>
          </div>
        </div>
        
        <nav className={`overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto] ${
          isMenuOpen ? 'block' : 'hidden lg:block'
        }`}>
          <Link href="/" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2">
            Home
          </Link>
          
          <Link href="/about-us" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2">
            About Us
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-regular flex w-full items-center justify-center gap-4 py-3 text-center lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2"
            >
              <span>Services</span>
              <ChevronDown className={`h-6 w-6 text-scheme-text transition-transform ${
                isServicesOpen ? 'rotate-180' : ''
              }`} />
            </button>
            
            <nav className={`bg-scheme-background lg:absolute lg:z-50 lg:border lg:border-scheme-border lg:p-2 lg:[--y-close:25%] ${
              isServicesOpen ? 'block' : 'hidden'
            }`}>
              <Link href="/services" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                All Services
              </Link>
              <Link href="/skilled-nursing" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                Skilled Nursing
              </Link>
              <Link href="/physical-therapy" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                Physical Therapy
              </Link>
              <Link href="/occupational-therapy" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                Occupational Therapy
              </Link>
              <Link href="/speech-therapy" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                Speech Therapy
              </Link>
              <Link href="/medical-social-services" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                Medical Social Services
              </Link>
            </nav>
          </div>
          
          <Link href="/reviews/testimonials" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2">
            Testimonials
          </Link>
          
          <Link href="/careers" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2">
            Careers
          </Link>
          
          {/* More Info Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="text-regular flex w-full items-center justify-center gap-4 py-3 text-center lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2"
            >
              <span>More Info</span>
              <ChevronDown className={`h-6 w-6 text-scheme-text transition-transform ${
                isMoreOpen ? 'rotate-180' : ''
              }`} />
            </button>
            
            <nav className={`bg-scheme-background lg:absolute lg:z-50 lg:border lg:border-scheme-border lg:p-2 lg:[--y-close:25%] ${
              isMoreOpen ? 'block' : 'hidden'
            }`}>
              <Link href="/resources/blog" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                Blog & Resources
              </Link>
              <Link href="/faq" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                FAQs
              </Link>
              <Link href="/patient-rights-responsibilities" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                Patient Rights
              </Link>
              <Link href="/sitemap" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                Sitemap
              </Link>
            </nav>
          </div>
          
          <Link href="/contact-us" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2">
            Contact Us
          </Link>
        </nav>
        
        <div className="hidden justify-self-end lg:block">
          <Link href="/contact-us">
            <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-neutral-darkest text-white px-6 py-2">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
