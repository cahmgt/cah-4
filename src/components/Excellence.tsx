import { Award, Shield, Star, Users, Clock, MapPin } from 'lucide-react'

export default function Excellence() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Joint Commission Accredited",
      description: "Recognized as one of the top-performing home health agencies in the nation",
      year: "2013-2024"
    },
    {
      icon: <Shield className="w-8 h-8 text-medical-primary" />,
      title: "Medicare Certified",
      description: "Fully licensed and certified by Medicare and state health departments",
      year: "Since 2013"
    },
    {
      icon: <Star className="w-8 h-8 text-medical-secondary" />,
      title: "High Quality Rating",
      description: "Consistently achieving the highest quality ratings from CMS",
      year: "Ongoing"
    }
  ]

  const stats = [
    {
      icon: <Users className="w-6 h-6 text-medical-primary" />,
      number: "10,000+",
      label: "Patients Served"
    },
    {
      icon: <Clock className="w-6 h-6 text-medical-secondary" />,
      number: "11+",
      label: "Years of Excellence"
    },
    {
      icon: <MapPin className="w-6 h-6 text-medical-accent" />,
      number: "5",
      label: "Counties Served"
    }
  ]

  const qualityStandards = [
    "Licensed by California Department of Public Health",
    "Accredited by The Joint Commission",
    "Medicare and Medicaid certified",
    "HIPAA compliant patient privacy protection",
    "Regular quality assurance audits",
    "Continuous staff training and development"
  ]

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-medical-light to-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-18 lg:mb-20">
          <h2 className="heading-h3 font-bold text-medical-dark mb-4">
            Excellence in Home Health Care
          </h2>
          <p className="text-medium text-medical-muted max-w-3xl mx-auto">
            Our commitment to quality, safety, and patient satisfaction has earned us recognition as one of the leading home health care agencies in Southern California.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-scheme-border shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="heading-h5 font-bold text-medical-dark mb-2">
                {achievement.title}
              </h3>
              <p className="text-medical-muted mb-3">
                {achievement.description}
              </p>
              <span className="inline-block bg-medical-primary/10 text-medical-primary px-3 py-1 rounded-full text-sm font-semibold">
                {achievement.year}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white p-8 md:p-12 rounded-lg border border-scheme-border shadow-sm mb-16 md:mb-20">
          <div className="text-center mb-8">
            <h3 className="heading-h4 font-bold text-medical-dark mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-medium text-medical-muted">
              Delivering exceptional care across Southern California
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="heading-h2 font-bold text-medical-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-medical-dark font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="heading-h4 font-bold text-medical-dark mb-6">
              Quality Standards & Certifications
            </h3>
            <p className="text-medium text-medical-muted mb-6">
              We maintain the highest standards of care through rigorous quality assurance processes, continuous training, and adherence to industry best practices.
            </p>
            
            <div className="space-y-3">
              {qualityStandards.map((standard, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-medical-success rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-medical-muted">{standard}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-medical-primary/5 p-8 rounded-lg border border-medical-primary/20">
            <h4 className="heading-h5 font-bold text-medical-dark mb-4">
              Why Choose California Healthcare Management Group?
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-medical-muted">Experienced healthcare professionals with specialized training</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-medical-muted">Personalized care plans tailored to individual needs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-medical-muted">24/7 availability for urgent care needs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-medical-muted">Comprehensive care coordination and communication</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-medical-primary p-8 md:p-12 rounded-lg text-white">
            <h3 className="heading-h4 font-bold mb-4">
              Experience the California Healthcare Management Group Difference
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join thousands of families who trust us for their home health care needs. Our commitment to excellence ensures you receive the highest quality care in the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-white bg-white text-medical-primary px-6 py-3 hover:bg-gray-100 hover:border-gray-100"
              >
                Get Started Today
              </a>
              <a
                href="/about-us"
                className="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent text-white px-6 py-3 hover:bg-white hover:text-medical-primary"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
