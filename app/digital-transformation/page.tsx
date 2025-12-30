import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  CheckCircle2,
  Workflow,
  Bot,
  TestTube,
  Brain,
  Database,
  Cloud,
  Factory,
  Code,
  Smartphone,
  Globe,
  Bug,
  Building2,
} from "lucide-react"
import { Card } from "@/components/ui/card"

export default function DigitalTransformationPage() {
  const automationServices = [
    {
      icon: Workflow,
      title: "Business Process Automation (BPA)",
      description:
        "Thamani Crew transforms repetitive and time-consuming tasks into automated workflows, boosting efficiency across operations.",
      features: [
        "Workflow Optimization: Mapping and automating processes for seamless operations",
        "Task Automation: Replacing manual tasks with software-driven efficiency",
        "Custom Automation Solutions: Tailored tools to meet the unique needs of different industries",
      ],
    },
    {
      icon: Bot,
      title: "Robotic Process Automation (RPA)",
      description:
        "Harnessing the power of RPA, Thamani Crew enables businesses to automate routine tasks with precision.",
      features: [
        "Data Entry Automation: Reducing human errors and processing times",
        "Report Generation: Automating the creation of detailed, real-time reports",
        "System Integration: Enabling legacy systems to function efficiently with automated bots",
      ],
    },
    {
      icon: TestTube,
      title: "Automated Testing Services",
      description: "Ensuring the reliability and performance of software is a cornerstone of Thamani Crew's offerings.",
      features: [
        "Regression Testing: Automating repetitive testing cycles for consistent results",
        "Performance Testing: Simulating real-world scenarios to identify bottlenecks",
        "Continuous Integration (CI): Streamlining testing within development pipelines",
      ],
    },
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description: "Thamani Crew integrates Artificial Intelligence (AI) into automation to unlock smarter solutions.",
      features: [
        "Predictive Analytics: Using AI to anticipate trends and inform decision-making",
        "Natural Language Processing (NLP): Automating text and speech-based processes",
        "Chatbots and Virtual Assistants: Enhancing customer interactions through intelligent automation",
      ],
    },
    {
      icon: Database,
      title: "Automated Data Management",
      description: "Simplify complex data processes with Thamani Crew's data automation services.",
      features: [
        "Data Extraction and Transformation: Automating data processing tasks for speed and accuracy",
        "Database Management: Ensuring databases are updated and optimized without manual intervention",
        "Big Data Processing: Handling large datasets with efficiency and reliability",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud-Based Automation",
      description: "Thamani Crew leverages the cloud to provide scalable and flexible automation solutions.",
      features: [
        "Automated Deployments: Streamlining application deployment in cloud environments",
        "Monitoring and Alerts: Proactive system monitoring with automated alerts for anomalies",
        "Backup Automation: Ensuring consistent and secure cloud backups",
      ],
    },
    {
      icon: Factory,
      title: "Industry-Specific Automation Solutions",
      description: "Thamani Crew tailors its automation services to cater to the unique needs of various sectors.",
      features: [
        "Manufacturing: Automating supply chain and production processes",
        "Healthcare: Streamlining patient record management and billing systems",
        "Retail: Enhancing inventory management and customer service through automation",
      ],
    },
  ]

  const softwareServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Creating tailored software solutions to meet the unique needs of diverse industries.",
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
        "From sleek websites to complex web platforms, delivering functional and visually appealing web applications.",
      features: [
        "Front-End Development: Crafting intuitive interfaces using modern frameworks like React, Angular, and Vue.js",
        "Back-End Development: Developing robust server-side logic with technologies such as Node.js, Django, and Laravel",
        "E-Commerce Solutions: Building secure and scalable online stores",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Mobile app solutions cater to the increasing demand for on-the-go business accessibility.",
      features: [
        "iOS and Android Apps: Native app development for enhanced performance",
        "Cross-Platform Solutions: Cost-effective apps built with Flutter and React Native",
        "User-Centric Design: Creating apps with intuitive navigation and responsive design",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud-Based Solutions",
      description: "Harnessing the power of the cloud to leverage scalability, flexibility, and cost efficiency.",
      features: [
        "SaaS Development: Building Software-as-a-Service products that drive value",
        "Cloud Migration: Transitioning legacy systems to secure cloud environments",
        "API Development: Ensuring seamless integration with third-party services",
      ],
    },
    {
      icon: Bug,
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
      description: "Empowering enterprises with robust systems to streamline operations.",
      features: [
        "ERP Systems: Customizable solutions for resource planning and management",
        "CRM Software: Enhancing customer relationship management processes",
        "Data Analytics Tools: Empowering businesses with actionable insights",
      ],
    },
  ]

  const benefits = [
    "Expert Team: Highly skilled developers proficient in diverse technologies",
    "Expertise in Automation: Proven track record of implementing successful automation projects",
    "Customized Solutions: Tailored to align with your business objectives",
    "Advanced Technologies: Leveraging the latest in AI, RPA, and cloud computing",
    "Cost Efficiency: Reducing operational costs through automation",
    "Enhanced Productivity: Freeing teams to focus on strategic tasks by eliminating repetitive work",
    "Client-Centric Approach: Tailored strategies to meet individual business needs",
    "Cutting-Edge Technology: Utilization of the latest development tools and trends",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-foreground text-balance">
              Digital Transformation Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              In a world where speed and accuracy define success, Thamani Crew stands out as a pioneer in delivering
              automated software services and custom software development. We help businesses leverage technology to
              streamline processes, reduce errors, and increase productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Automated Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground text-balance text-center mb-16">
              Automated Software Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {automationServices.map((service, index) => {
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
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground text-balance text-center mb-16">
              Software Development Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {softwareServices.map((service, index) => {
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
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
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
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-foreground text-balance">
              Build a Smarter, Faster, More Productive Future
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thamani Crew's digital transformation services redefine how businesses operate, delivering unparalleled
              efficiency and innovation. Whether you're looking to automate a single process or transform your entire
              operation with custom software, Thamani Crew is your trusted partner.
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
