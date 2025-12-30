import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle2, Code, Globe, Smartphone, Cloud, TestTube, Building2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function OperationalExcellencePage() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Thamani Crew specializes in creating tailored software solutions to meet the unique needs of diverse industries.",
      features: [
        "Requirement Analysis: Collaborating closely with clients to understand specific business challenges",
        "Tailored Solutions: Designing and developing bespoke software to enhance operational efficiency",
        "Scalable Architecture: Building systems capable of growing with the business",
      ],
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "From sleek websites to complex web platforms, Thamani Crew excels in delivering functional and visually appealing web applications.",
      features: [
        "Front-End Development: Crafting intuitive interfaces using modern frameworks like React, Angular, and Vue.js",
        "Back-End Development: Developing robust server-side logic with technologies such as Node.js, Django, and Laravel",
        "E-Commerce Solutions: Building secure and scalable online stores",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Thamani Crew's mobile app solutions cater to the increasing demand for on-the-go business accessibility.",
      features: [
        "iOS and Android Apps: Native app development for enhanced performance",
        "Cross-Platform Solutions: Cost-effective apps built with Flutter and React Native",
        "User-Centric Design: Creating apps with intuitive navigation and responsive design",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud-Based Solutions",
      description:
        "Harnessing the power of the cloud, Thamani Crew enables businesses to leverage scalability, flexibility, and cost efficiency.",
      features: [
        "SaaS Development: Building Software-as-a-Service products that drive value",
        "Cloud Migration: Transitioning legacy systems to secure cloud environments",
        "API Development: Ensuring seamless integration with third-party services",
      ],
    },
    {
      icon: TestTube,
      title: "Software Testing and Quality Assurance (QA)",
      description: "Ensuring the delivery of error-free and reliable software is a top priority.",
      features: [
        "Automated Testing: Leveraging tools like Selenium and Appium for efficient testing",
        "Manual Testing: Comprehensive functional and usability testing",
        "Performance Optimization: Identifying and resolving bottlenecks for peak performance",
      ],
    },
    {
      icon: Building2,
      title: "Enterprise Solutions",
      description: "Thamani Crew empowers enterprises with robust systems to streamline operations.",
      features: [
        "ERP Systems: Customizable solutions for resource planning and management",
        "CRM Software: Enhancing customer relationship management processes",
        "Data Analytics Tools: Empowering businesses with actionable insights",
      ],
    },
  ]

  const benefits = [
    "Expert Team: Highly skilled developers proficient in diverse technologies",
    "Client-Centric Approach: Tailored strategies to meet individual business needs",
    "Cutting-Edge Technology: Utilization of the latest development tools and trends",
    "Proven Track Record: A history of successful projects across various sectors",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-foreground text-balance">
              Software Development
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Thamani Crew is at the forefront of digital transformation, offering cutting-edge software development
              services. With a focus on delivering innovative and scalable solutions, Thamani Crew helps businesses
              thrive in an ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-medium text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 pt-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground text-balance text-center mb-12">
              Why Choose Thamani Crew?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 bg-card border-border">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground leading-relaxed">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-foreground text-balance">
              Transform Ideas Into Reality
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thamani Crew is committed to transforming ideas into reality by delivering innovative software solutions
              that drive growth and efficiency. Whether you're a startup or an established enterprise, Thamani Crew is
              your partner for digital excellence.
            </p>
            <div className="pt-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
