import Image from 'next/image'

export default function About() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="heading-h3 mb-5 font-bold md:mb-6 text-medical-dark">
              Why Choose California Healthcare Management Group?
            </h1>
            <p className="text-medium text-medical-muted mb-6">
              At California Healthcare Management Group, we understand that choosing the right home health provider is one of the most important decisions you can make for yourself or a loved one. Here's why families and patients trust us:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-medical-dark mb-2">Compassionate, Skilled Care</h4>
                  <p className="text-sm text-medical-muted">Licensed nurses and therapists provide individualized attention with professionalism, dignity, and compassion, drawing on decades of experience in hospital and home health settings. All staff are fully screened and background-checked for your peace of mind.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-medical-dark mb-2">Privately Owned & Trusted Since 2013</h4>
                  <p className="text-sm text-medical-muted">As a family-owned and locally operated agency, we deliver care with a personal touch. Many of our nurses and therapists have been with us since the beginning, bringing consistency and trust to the families we serve.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-medical-dark mb-2">Trusted Expertise</h4>
                  <p className="text-sm text-medical-muted">With strong clinical oversight and years of proven results, we deliver hospital-quality care at home, backed by Medicare certification and Joint Commission accreditation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-medical-dark mb-2">Personalized Services</h4>
                  <p className="text-sm text-medical-muted">Every care plan is tailored to the unique medical, emotional, and personal needs of each patient, promoting comfort and independence. We are available 24/7 to support you and your loved ones.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-medical-dark mb-2">Quality & Peace of Mind</h4>
                  <p className="text-sm text-medical-muted">Through ongoing oversight, patient satisfaction checks, and close collaboration with physicians, we ensure safe, reliable, and high-quality care.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-medical-dark mb-2">Advanced Tools & Technology</h4>
                  <p className="text-sm text-medical-muted">We incorporate electronic health records, telehealth, and innovative methods to improve communication, efficiency, and patient outcomes.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/gims/021.png"
              alt="California Healthcare Management Group Healthcare Team - Dedicated professionals providing compassionate home health care"
              width={600}
              height={400}
              className="w-full rounded-image object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
