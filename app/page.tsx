import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import { TeamMember } from "@/components/team-member"
import { TestimonialCard } from "@/components/testimonial-card"
import { ServiceCard } from "@/components/service-card"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Thamani Crew</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              {/* <Link
                href="#services"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About 
              </Link>
               <Link
                href="#case-studies"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Case Studies
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Testimonials
              </Link> */}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {/* <MobileNav />
            <Button asChild className="hidden md:flex">
              <Link href="#contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button> */}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-slate-50 to-slate-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Business Potential
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We help businesses transform their operations, increase revenue, and achieve sustainable growth
                    through strategic consulting and innovative solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {/* <Button asChild size="lg">
                    <Link href="#contact">
                      Get Started <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button> */}
                  <Button variant="outline" size="lg">
                    <Link href="#services">Explore Services</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="landing1.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Business Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a range of services designed to help your business grow and succeed in today's competitive
                  market.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <ServiceCard
                title="Strategic Consulting"
                description="Expert guidance to optimize your business operations and achieve sustainable growth."
                icon="lightbulb"
              />
              <ServiceCard
                title="Digital Transformation"
                description="Modernize your business with cutting-edge digital solutions and technologies."
                icon="code"
              />
              <ServiceCard
                title="Market Analysis"
                description="In-depth research and insights to help you understand your market and competitors."
                icon="barChart"
              />
              <ServiceCard
                title="Brand Development"
                description="Create a compelling brand identity that resonates with your target audience."
                icon="palette"
              />
              <ServiceCard
                title="Financial Planning"
                description="Comprehensive financial strategies to maximize profitability and minimize risk."
                icon="dollarSign"
              />
              <ServiceCard
                title="Operational Excellence"
                description="Streamline your operations to increase efficiency and reduce costs."
                icon="settings"
              />
            </div>
          </div>
        </section>


        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-slate-800 px-3 py-1 text-sm">Our Approach</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Data-Driven Strategy. Measurable Results.
                </h2>
                <p className="max-w-[600px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We combine industry expertise with advanced analytics to develop strategies that deliver tangible
                  business outcomes. Our methodical approach ensures that every recommendation is backed by data and
                  aligned with your business objectives.
                </p>
                {/* <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="mt-4 bg-transparent text-white hover:bg-slate-800"
                >
                  <Link href="#contact">
                    Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="grid w-full gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Discovery</h3>
                      <p className="text-slate-300">Understanding your business, goals, and challenges</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Analysis</h3>
                      <p className="text-slate-300">Data-driven research and competitive assessment</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Strategy</h3>
                      <p className="text-slate-300">Developing tailored solutions and implementation plans</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Execution</h3>
                      <p className="text-slate-300">Implementing strategies with ongoing optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-slate-900 text-slate-200">
        <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} ThamaniCrew. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            {/* <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Cookies
            </Link> */}
          </nav>
        </div>
      </footer>
    </div>
  )
}
