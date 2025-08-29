'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="z-[999] flex w-full items-center border-b border-scheme-border bg-scheme-background lg:min-h-18 lg:px-[5%]">
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/gims/gims-0004.webp"
              alt="California Healthcare Management Group"
              width={200}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-4 lg:hidden">
            <div>
              <Link href="/contact-us">
                <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white w-full px-4 py-1 hover:bg-medical-dark">
                  Contact
                </button>
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-medical-primary" />
              ) : (
                <>
                  <span className="my-[3px] h-0.5 w-6 bg-medical-primary"></span>
                  <span className="my-[3px] h-0.5 w-6 bg-medical-primary"></span>
                  <span className="my-[3px] h-0.5 w-6 bg-medical-primary"></span>
                </>
              )}
            </button>
          </div>
        </div>
        
        <nav className={`overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto] ${
          isMenuOpen ? 'block' : 'hidden lg:block'
        }`}>
          <Link href="/" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2 hover:text-medical-primary transition-colors">
            Home
          </Link>
          
          <Link href="/#services" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2 hover:text-medical-primary transition-colors">
            Services
          </Link>
          
          <Link href="/about-us" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2 hover:text-medical-primary transition-colors">
            About Us
          </Link>
          
          <Link href="/reviews/testimonials" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2 hover:text-medical-primary transition-colors">
            Testimonials
          </Link>
          
          <Link href="/careers" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2 hover:text-medical-primary transition-colors">
            Careers
          </Link>
          
          <Link href="/contact-us" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2 hover:text-medical-primary transition-colors">
            Contact Us
          </Link>
        </nav>
        
        <div className="hidden justify-self-end lg:block">
          <Link href="/contact-us">
            <button className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-6 py-2 hover:bg-medical-dark">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
