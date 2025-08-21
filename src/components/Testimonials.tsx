'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      logo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      quote: "The care my mother received was exceptional. The team was compassionate and attentive, making a difficult time much easier for our family.",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      name: "Emily Johnson",
      role: "Daughter, Happy Client"
    },
    {
      logo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      quote: "The care my mother received was exceptional. The team was compassionate and attentive, making a difficult time much easier for our family.",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      name: "Emily Johnson",
      role: "Daughter, Happy Client"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative overflow-hidden" role="region" aria-roledescription="carousel">
          <div className="relative">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full pl-0 md:basis-full md:px-16"
                >
                  <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
                    <div className="mb-6 md:mb-8">
                      <img
                        src={testimonial.logo}
                        alt={`Logo ${index + 1}`}
                        className="max-h-14"
                      />
                    </div>
                    <blockquote className="heading-h5 font-bold">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
                      <div className="mb-3 md:mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={`Testimonial avatar ${index + 1}`}
                          className="size-16 min-h-16 min-w-16 rounded-full object-cover"
                        />
                      </div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={prevSlide}
              className="items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-scheme-background text-scheme-text absolute size-14 rounded-carousel top-1/2 left-0 -translate-y-1/2 mt-8 hidden md:flex md:size-14 hover:bg-gray-50"
            >
              <ChevronLeft className="size-6 text-scheme-text" />
              <span className="sr-only">Previous slide</span>
            </button>
            
            <button
              onClick={nextSlide}
              className="items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-scheme-border bg-scheme-background text-scheme-text absolute size-14 rounded-carousel top-1/2 right-0 -translate-y-1/2 mt-8 hidden md:flex md:size-14 hover:bg-gray-50"
            >
              <ChevronRight className="size-6 text-scheme-text" />
              <span className="sr-only">Next slide</span>
            </button>
          </div>
          
          <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative mx-[3px] inline-block size-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-scheme-text' : 'bg-scheme-text/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
