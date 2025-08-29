import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import Excellence from '@/components/Excellence'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <Excellence />
      <CTA />
      <Footer />
    </main>
  )
}
