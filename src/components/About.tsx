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
              Choosing the right health care provider can be difficult. Often, the decision must be made quickly. One agency can seem exactly like the next. How do you choose the one that's right for you…and the people you love?
            </p>
            <p className="text-medium text-medical-muted mb-6">
              At California Healthcare Management Group, we can help. We're different—not just in the types of health care services we offer, but in the way we deliver them.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-medical-dark">Privately Owned Since 2013</h4>
                  <p className="text-sm text-medical-muted">We care for you with a more personal touch, supported by experienced employees who have been with us from the beginning.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-medical-dark">Full Continuum of Care</h4>
                  <p className="text-sm text-medical-muted">From home health and non-medical caregiver services to palliative care and hospice, we offer comprehensive services wherever you are.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-medical-dark">Award-Winning Reputation</h4>
                  <p className="text-sm text-medical-muted">Fully accredited and licensed by state and federal organizations, including Medicare. We've earned the prestigious HOMECARE ELITE Top Agency designation.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/gims/021.png"
              className="w-full rounded-image object-cover"
              alt="CAHMGT Healthcare Team - Dedicated professionals providing compassionate home health care"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
