import Image from "next/image"

export function ApproachSection() {
  return (
    <section id="approach" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden">
            <Image src="/approach.svg" alt="Data-driven business approach" fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground leading-tight text-balance">
                Data-driven strategy. Measurable results.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "We combine industry expertise with advanced analytics to develop strategies that deliver tangible business outcomes."
                }
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-serif text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Comprehensive Analysis</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"We thoroughly assess your current operations to identify opportunities and challenges."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-serif text-primary">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Strategic Planning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Custom strategies designed to align with your specific business objectives and market position."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-serif text-primary">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Implementation Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Hands-on guidance throughout execution to ensure successful outcomes and lasting impact."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
