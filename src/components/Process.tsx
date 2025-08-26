import { ClipboardList, UserCheck, Calendar, Heart, CheckCircle } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8 text-medical-primary" />,
      title: "Initial Assessment",
      description: "Our team conducts a comprehensive evaluation of your needs, medical history, and home environment to create a personalized care plan.",
      details: [
        "Medical history review",
        "Home safety assessment",
        "Care needs evaluation",
        "Insurance verification"
      ]
    },
    {
      icon: <UserCheck className="w-8 h-8 text-medical-secondary" />,
      title: "Care Team Assignment",
      description: "We carefully match you with qualified healthcare professionals who have the right skills and experience for your specific needs.",
      details: [
        "Licensed nurse selection",
        "Therapist matching",
        "Background verification",
        "Experience validation"
      ]
    },
    {
      icon: <Calendar className="w-8 h-8 text-medical-accent" />,
      title: "Care Plan Implementation",
      description: "Your personalized care plan is put into action with scheduled visits, treatments, and ongoing monitoring of your progress.",
      details: [
        "Regular visit scheduling",
        "Treatment administration",
        "Progress monitoring",
        "Care coordination"
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-medical-primary" />,
      title: "Ongoing Support",
      description: "We provide continuous support, regular assessments, and adjust your care plan as needed to ensure optimal outcomes.",
      details: [
        "Regular assessments",
        "Care plan updates",
        "Family communication",
        "24/7 availability"
      ]
    }
  ]

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="text-center mb-12 md:mb-18 lg:mb-20">
          <h2 className="heading-h3 font-bold text-medical-dark mb-4">
            How Our Home Health Care Process Works
          </h2>
          <p className="text-medium text-medical-muted max-w-3xl mx-auto">
            From initial contact to ongoing care, we make the process simple and transparent. Here's how we deliver exceptional home health care services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-medical-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Step Content */}
              <div className="bg-white p-6 rounded-lg border border-scheme-border shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                
                <h3 className="heading-h5 font-bold text-medical-dark mb-3 text-center">
                  {step.title}
                </h3>
                
                <p className="text-medical-muted mb-4 text-center">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-medical-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-medical-muted">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-medical-primary/30 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-medical-light p-8 rounded-lg border border-medical-primary/20">
            <h3 className="heading-h4 font-bold text-medical-dark mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-medium text-medical-muted mb-6 max-w-2xl mx-auto">
              Our team is ready to help you navigate the home health care process. Contact us today for a free consultation and assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-medical-primary text-white px-6 py-3 hover:bg-medical-dark hover:border-medical-dark"
              >
                Schedule Free Consultation
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-medical-primary bg-scheme-background text-medical-primary px-6 py-3 hover:bg-medical-light hover:text-medical-dark"
              >
                Learn More About Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
