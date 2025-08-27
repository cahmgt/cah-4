import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function IVTherapy() {
  return (
    <main>
      <Header />
      


      {/* IV Therapy Content */}
      <section className="px-[5%] py-8 md:py-12 lg:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose-base mb-8 md:mb-12">
              <h3 className="text-2xl font-bold mb-6 text-medical-dark">Our IV Therapy Services</h3>
              <p className="mb-6 text-medical-muted">
                Our IV therapy services are designed to provide safe, effective, and convenient care in the comfort of your home. Administered by our team of highly skilled Registered Nurses—with many years of hospital experience in phlebotomy and IV therapy—each infusion is delivered with the highest level of clinical expertise and care.
              </p>
              <p className="mb-6 text-medical-muted">
                Under the guidance of our clinical leadership, IV therapy delivers vital fluids, vitamins, and medications directly into the bloodstream for faster absorption and improved results. Whether prescribed for hydration, immune support, recovery after illness or surgery, or the management of chronic conditions, our personalized IV treatments help patients feel stronger, recover quicker, and maintain their health without the need for repeated hospital visits.
              </p>
              <p className="mb-6 text-medical-muted">
                By bringing this level of professional care to your doorstep, we ensure comfort, safety, and continuity of treatment tailored to each patient's medical needs.
              </p>
              
              <h4 className="text-xl font-bold mt-8 mb-4 text-medical-dark">What We Offer</h4>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-medical-light p-6 rounded-lg">
                  <h5 className="font-semibold text-medical-dark mb-3">Hydration Therapy</h5>
                  <p className="text-sm text-medical-muted">Replenish fluids and electrolytes for optimal health and recovery.</p>
                </div>
                <div className="bg-medical-light p-6 rounded-lg">
                  <h5 className="font-semibold text-medical-dark mb-3">Immune Support</h5>
                  <p className="text-sm text-medical-muted">Boost your immune system with vitamin infusions and immune-boosting medications.</p>
                </div>
                <div className="bg-medical-light p-6 rounded-lg">
                  <h5 className="font-semibold text-medical-dark mb-3">Recovery Support</h5>
                  <p className="text-sm text-medical-muted">Accelerate recovery after illness, surgery, or medical procedures.</p>
                </div>
                <div className="bg-medical-light p-6 rounded-lg">
                  <h5 className="font-semibold text-medical-dark mb-3">Chronic Condition Management</h5>
                  <p className="text-sm text-medical-muted">Ongoing IV therapy for managing chronic health conditions.</p>
                </div>
              </div>
              
              <h4 className="text-xl font-bold mt-8 mb-4 text-medical-dark">Why Choose Our IV Therapy</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-medical-muted">Administered by experienced Registered Nurses with hospital IV therapy expertise</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-medical-muted">Clinical leadership oversight for all treatments</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-medical-muted">Personalized treatment plans tailored to your medical needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-medical-muted">Convenient home-based care eliminating hospital visits</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-medical-muted">Faster absorption and improved results through direct bloodstream delivery</p>
                </div>
              </div>
              
              <h4 className="text-xl font-bold mt-8 mb-4 text-medical-dark">Our Commitment to Safety</h4>
              <p className="mb-4 text-medical-muted">
                Your safety is our top priority. All our IV therapy services are performed under strict clinical protocols, with our nurses following the highest standards of care. We maintain comprehensive safety measures and use only the highest quality medical supplies and equipment.
              </p>
              <p className="mb-4 text-medical-muted">
                Our team is fully licensed, insured, and undergoes regular training to ensure the most current and effective IV therapy techniques. We work closely with your healthcare provider to coordinate care and ensure optimal treatment outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
