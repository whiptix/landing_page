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
      <header className="sticky top-0 z-40 w-full bg-white border-b border-indigo-500/50">
        <div className=" flex h-16 w-full justify-around px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              {/*<span className="font-bold text-xl">Thamani Crew</span>  */}
              <Image src="/thamani_crew_logo_v1.svg" alt="Thamani Crew Logo" width={150} height={60} /> 
            </Link>
            <nav className="hidden md:flex gap-6">
               <Link
                href="#services"
                className="flex items-center text-xl  text-muted-foreground transition-colors hover:text-primary"
              >
                Solutions
              </Link>
              
               <Link
                href="#about"
                className="flex items-center text-xl text-muted-foreground transition-colors hover:text-primary"
              >
                Contact Us
              </Link>
              {/*
               <Link
                href="/case-studies"
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
          <div></div>
          <div className="flex items-center gap-4">
            <MobileNav />
           
            
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-slate-50 to-slate-100 */}
        <section className="w-full py-6 bg-gradient-to-r from-slate-50 to-slate-100"> 
          <div className="container mx-auto px-4 md:px-6">
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
                    <Link href="#services" className="text-xl">Explore Solutions</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="landing1.svg?height=350&width=350"
                width={350}
                height={350}
                alt="Hero Image"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-4 md:py-6 lg:py-8 bg-white">
          <div className="container mx-auto px-4 md:px-6">
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
            <div className="mx-auto grid  items-center gap-6 py-6 lg:grid-cols-4 lg:gap-12">
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
                title="Business Intelligence"
                description="Comprehensive data analysis to inform strategic decision-making."
                icon="barChart"
              />
              <ServiceCard
                title="Operational Excellence"
                description="Streamline your operations to increase efficiency and reduce costs."
                icon="settings"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-4 md:py-6 lg:py-8 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
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
                 
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="contact-info">
                  <div className="inline-block rounded-lg bg-slate-800 px-3 py-1 text-sm">Contacts</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                  <p>Have a question or need more information? We’re here to help.</p>
                  <p><strong>Email:</strong> info@thamanicrew.com</p>
                  <p><strong>Phone:</strong> (254) 794-535-947</p>
                  <p><strong>Location:</strong> Nairobi, Kenya</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-slate-900 text-slate-200">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} ThamaniCrew. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
