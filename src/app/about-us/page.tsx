import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutUs() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-start justify-start md:mb-16 lg:mb-20">
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12 text-medical-dark">
              About California Healthcare Management Group
            </h1>
            <p className="text-medium text-medical-muted">
              Privately owned and operated since 2013, providing compassionate, professional care in the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose-base mb-12 md:mb-20">
              <h3 className="text-2xl font-bold mb-6 text-medical-dark">Our Mission</h3>
              <p className="mb-4 text-medical-muted">
                We are committed to delivering exceptional home health care services that enhance the quality of life for our patients and their families. Our team of skilled professionals works tirelessly to ensure that every individual receives personalized, compassionate care in the comfort of their own home.
              </p>
              <p className="mb-4 text-medical-muted">
                With years of experience in the healthcare industry, we understand the unique challenges that families face when caring for loved ones. Our comprehensive approach addresses not only the physical needs of our patients but also their emotional and social well-being.
              </p>
              
              <h4 className="text-xl font-bold mt-8 mb-4 text-medical-dark">What Makes Us Different</h4>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-medical-light p-6 rounded-lg">
                  <h5 className="font-semibold text-medical-dark mb-3">Privately Owned Since 2013</h5>
                  <p className="text-sm text-medical-muted">We care for you with a more personal touch, supported by experienced employees—some of whom have been with us from the beginning. Our employees are fully screened, completing criminal background checks before they are hired.</p>
                </div>
                <div className="bg-medical-light p-6 rounded-lg">
                  <h5 className="font-semibold text-medical-dark mb-3">Full Continuum of Care</h5>
                  <p className="text-sm text-medical-muted">From home health and non-medical caregiver services to palliative care and hospice, we offer a range of services to meet your short- or long-term needs wherever you are.</p>
                </div>
                <div className="bg-medical-light p-6 rounded-lg">
                  <h5 className="font-semibold text-medical-dark mb-3">Award-Winning Reputation</h5>
                  <p className="text-sm text-medical-muted">We are fully accredited and licensed by state and federal organizations, including Medicare. We have earned the prestigious designation as a HOMECARE ELITE Top Agency.</p>
                </div>
                <div className="bg-medical-light p-6 rounded-lg">
                  <h5 className="font-semibold text-medical-dark mb-3">Areas We Serve</h5>
                  <p className="text-sm text-medical-muted">Los Angeles County, Orange County, Ventura County, San Bernardino County, and Riverside County.</p>
                </div>
              </div>
              
              <h4 className="text-xl font-bold mt-8 mb-4 text-medical-dark">Full Continuum of Care</h4>
              <p className="mb-4 text-medical-muted">
                At California Healthcare Management Group, we provide a full continuum of care designed to meet both short- and long-term health needs in the comfort of home. Our licensed nurses and therapists deliver compassionate, skilled services with professionalism and dignity, drawing on decades of experience in hospital and home health settings. As a family-owned agency trusted since 2013, we bring a personal touch and consistency, with many of our clinicians joining us from the very beginning. Backed by Medicare certification and Joint Commission accreditation, we combine trusted expertise with innovative tools such as electronic health records and telehealth to enhance safety, communication, and outcomes. In addition to skilled nursing and therapy, we assist with arranging medical equipment, lab tests, mobile radiology, podiatry, and other healthcare services to ensure all patient needs are met. We also work closely with physicians to coordinate care, giving families peace of mind that their loved ones are fully supported at every step.
              </p>
              
              <h4 className="text-xl font-bold mt-8 mb-4 text-medical-dark">Nursing Specialties</h4>
              <p className="mb-4 text-medical-muted">California Healthcare Management Group specializes in Home Care for patients with the following diagnoses:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <ul className="list-disc pl-6 text-medical-muted space-y-1">
                  <li>Spinal Cord Injury</li>
                  <li>Brain Injury</li>
                  <li>Cerebral Palsy</li>
                  <li>Epilepsy/Seizure Disorder</li>
                  <li>Muscular Dystrophy</li>
                  <li>Chromosomal Disorders</li>
                  <li>Chronic Respiratory Diseases</li>
                  <li>Cancer</li>
                  <li>Multiple Sclerosis</li>
                </ul>
                <ul className="list-disc pl-6 text-medical-muted space-y-1">
                  <li>Lou Gehrig Disease</li>
                  <li>Parkinson's Disease</li>
                  <li>Stroke Aftercare</li>
                  <li>Diabetes</li>
                  <li>Heart Disease</li>
                  <li>Alzheimer's</li>
                  <li>Aids/HIV Positive</li>
                  <li>Autism</li>
                  <li>Down Syndrome</li>
                  <li>Failure to Thrive</li>
                </ul>
              </div>
              
              <h4 className="text-xl font-bold mt-8 mb-4 text-medical-dark">Home Care Services Include</h4>
              <ul className="list-disc pl-6 mb-6 text-medical-muted space-y-2">
                <li>Assessment</li>
                <li>Medication Administration</li>
                <li>Ventilator Care</li>
                <li>Tracheostomy Care</li>
                <li>Suctioning</li>
                <li>G-Tube Feedings and Care</li>
                <li>Monitor Vital Signs</li>
                <li>Check Blood Sugars</li>
                <li>Provide Wound Care</li>
              </ul>
              
              <h4 className="text-xl font-bold mt-8 mb-4 text-medical-dark">Our Commitment</h4>
              <p className="mb-4 text-medical-muted">
                We believe that everyone deserves access to high-quality healthcare in the comfort of their own home. Our commitment to excellence drives everything we do, from the initial assessment to ongoing care coordination.
              </p>
              <p className="mb-4 text-medical-muted">
                As a Home Care Elite Agency, we have earned the trust of thousands of families who needed help after a hospital stay or during an extended illness. We're here to ensure you receive these services with the quality associated with the highest medical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
