'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Patient's Daughter",
              content: "The care my mother received from California Healthcare Management Group was exceptional. The nurses were not only skilled but also incredibly compassionate. They treated her like family and gave us peace of mind during a difficult time.",
      rating: 5,
      image: "/gims/avintas_A_kind_young_caregiver_gently_helping_an_elderly_woma_1a4ed8d9-5c40-45c8-a39d-69e958ce39ab_0.png"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Physical Therapy Patient",
      content: "After my hip replacement, the physical therapy team helped me regain my mobility faster than expected. They were professional, encouraging, and truly cared about my recovery progress.",
      rating: 5,
      image: "/gims/avintas_A_male_caregiver_in_hospital_robes_and_an_elderly_man_4b119f78-26cb-4c9b-be54-6f89afa9dd35_1.png"
    },
    {
      id: 3,
      name: "Jennifer Chen",
      role: "Speech Therapy Patient",
      content: "The speech therapy services were life-changing. My therapist was patient, knowledgeable, and helped me regain my communication skills after my stroke. I'm so grateful for their expertise.",
      rating: 5,
      image: "/gims/avintas_A_young_black_woman_smiling_from_the_front_dressed_in_d25f7ae0-67d6-4bb0-9214-71b126c06925_3.png"
    },
    {
      id: 4,
      name: "Robert Thompson",
      role: "Skilled Nursing Patient",
      content: "The skilled nursing care I received was outstanding. The nurses were always on time, professional, and went above and beyond to ensure my comfort and recovery. Highly recommend!",
      rating: 5,
      image: "/gims/annacremer_A_kind_young_caregiver_gently_helping_an_elderly_wom_619f8841-6feb-43c9-b657-6636f75db4eb.png"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-medical-light">
      <div className="container">
        <div className="text-center mb-12 md:mb-18 lg:mb-20">
          <h2 className="heading-h3 font-bold text-medical-dark mb-4">
            What Our Patients Say
          </h2>
          <p className="text-medium text-medical-muted max-w-2xl mx-auto">
            Don't just take our word for it. Here's what families across Southern California are saying about our home health care services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden rounded-lg bg-white p-8 md:p-12 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Image
                src={testimonials[currentIndex].image}
                alt={`${testimonials[currentIndex].name} - California Healthcare Management Group Patient`}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover border-4 border-medical-primary/20"
              />
            </div>
            
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-medical-muted italic mb-4">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div>
                <p className="font-semibold text-medical-dark">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-medical-muted">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-scheme-border"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-medical-primary" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-scheme-border"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-medical-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-medical-primary' : 'bg-scheme-border'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-medium text-medical-muted mb-6">
            Join thousands of satisfied families who trust California Healthcare Management Group for their home health care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reviews/testimonials"
              className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-6 py-3 hover:bg-medical-dark hover:border-medical-dark"
            >
              Read More Reviews
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-scheme-background text-medical-primary px-6 py-3 hover:bg-medical-light hover:text-medical-dark"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
