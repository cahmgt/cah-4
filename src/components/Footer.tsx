import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="size-6 text-scheme-text" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="size-6 text-scheme-text" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="size-6 text-scheme-text" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="size-6 text-scheme-text" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="size-6 text-scheme-text" />, href: "#", label: "YouTube" }
  ]

  const quickLinks1 = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/careers", label: "Careers" }
  ]

  const quickLinks2 = [
    { href: "/resources/blog", label: "Blog & Resources" },
    { href: "/reviews/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQs" },
    { href: "/patient-rights-responsibilities", label: "Patient Rights" },
    { href: "/sitemap", label: "Sitemap" }
  ]

  const serviceLinks = [
    { href: "/skilled-nursing", label: "Skilled Nursing" },
    { href: "/physical-therapy", label: "Physical Therapy" },
    { href: "/occupational-therapy", label: "Occupational Therapy" },
    { href: "/speech-therapy", label: "Speech Therapy" },
    { href: "/medical-social-services", label: "Medical Social Services" }
  ]

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <Link href="/" className="flex items-center">
                <div className="text-2xl font-bold text-neutral-darkest">
                  CAHMGT
                </div>
              </Link>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="text-small mb-1 font-semibold">Address:</p>
              <p className="text-small mb-5 md:mb-6">
                Level 1, 12 Sample St, Los Angeles, CA 90001
              </p>
              <p className="text-small mb-1 font-semibold">Contact:</p>
              <a href="tel:1800-456-7890" className="text-small block underline hover:text-neutral-600">
                1-800-456-7890
              </a>
              <a href="mailto:info@cah-4.com" className="text-small block underline hover:text-neutral-600">
                info@cah-4.com
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label} className="hover:text-neutral-600 transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              {quickLinks1.map((link, index) => (
                <li key={index} className="text-small py-2 font-semibold">
                  <Link href={link.href} className="hover:text-neutral-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {quickLinks2.map((link, index) => (
                <li key={index} className="text-small py-2 font-semibold">
                  <Link href={link.href} className="hover:text-neutral-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:block">
            <h3 className="text-small font-semibold mb-4">Our Services</h3>
            <ul>
              {serviceLinks.map((link, index) => (
                <li key={index} className="text-small py-2">
                  <Link href={link.href} className="hover:text-neutral-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="h-px w-full bg-scheme-border"></div>
        
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">© 2024 CAHMGT. All rights reserved.</p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <Link href="/privacy-policy" className="hover:text-neutral-600 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li className="underline">
              <Link href="/terms-of-service" className="hover:text-neutral-600 transition-colors">
                Terms of Service
              </Link>
            </li>
            <li className="underline">
              <Link href="/disclaimer" className="hover:text-neutral-600 transition-colors">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
