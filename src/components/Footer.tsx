import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="size-6 text-medical-primary" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="size-6 text-medical-primary" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="size-6 text-medical-primary" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="size-6 text-medical-primary" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="size-6 text-medical-primary" />, href: "#", label: "YouTube" }
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
                <div className="text-2xl font-bold text-medical-primary">
                  CAHMGT
                </div>
              </Link>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="text-small mb-1 font-semibold text-medical-dark">Address:</p>
              <p className="text-small mb-5 md:mb-6 text-medical-muted">
                Level 1, 12 Sample St, Los Angeles, CA 90001
              </p>
              <p className="text-small mb-1 font-semibold text-medical-dark">Contact:</p>
              <a href="tel:18187834427" className="text-small block underline text-medical-primary hover:text-medical-dark transition-colors">
                1-818-783-4427
              </a>
              <a href="mailto:info@cahmgt.com" className="text-small block underline text-medical-primary hover:text-medical-dark transition-colors">
                info@cahmgt.com
              </a>
              <a href="https://www.cahmgt.com" className="text-small block underline text-medical-primary hover:text-medical-dark transition-colors">
                www.cahmgt.com
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label} className="hover:text-medical-dark transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              {quickLinks1.map((link, index) => (
                <li key={index} className="text-small py-2 font-semibold">
                  <Link href={link.href} className="text-medical-dark hover:text-medical-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {quickLinks2.map((link, index) => (
                <li key={index} className="text-small py-2 font-semibold">
                  <Link href={link.href} className="text-medical-dark hover:text-medical-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:block">
            <h3 className="text-small font-semibold mb-4 text-medical-dark">Our Services</h3>
            <ul>
              {serviceLinks.map((link, index) => (
                <li key={index} className="text-small py-2">
                  <Link href={link.href} className="text-medical-muted hover:text-medical-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="h-px w-full bg-scheme-border"></div>
        
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0 text-medical-muted">© 2024 California Healthcare Management Group. All rights reserved.</p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <Link href="/privacy-policy" className="text-medical-muted hover:text-medical-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li className="underline">
              <Link href="/terms-of-service" className="text-medical-muted hover:text-medical-primary transition-colors">
                Terms of Service
              </Link>
            </li>
            <li className="underline">
              <Link href="/disclaimer" className="text-medical-muted hover:text-medical-primary transition-colors">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
