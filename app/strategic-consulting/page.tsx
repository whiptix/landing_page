import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle2, Lightbulb, Network, Cloud, ShieldCheck, FolderKanban, Users, GraduationCap } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function StrategicConsultancyPage() {
  const services = [
    {
      icon: Lightbulb,
      title: "Strategic IT Planning",
      description:
        "Thamani Crew helps organizations develop robust IT strategies that align with their long-term business objectives.",
      features: [
        "Technology Roadmap Development: Crafting a clear plan for IT investments and innovations",
        "Cost Optimization: Identifying ways to maximize IT budgets without compromising quality",
        "IT Policy and Governance: Establishing policies to ensure compliance and risk mitigation",
      ],
    },
    {
      icon: Network,
      title: "IT Infrastructure Assessment",
      description:
        "Thamani Crew evaluates existing IT systems to identify strengths, weaknesses, and areas for improvement.",
      features: [
        "System Audits: Comprehensive reviews of hardware, software, and network configurations",
        "Gap Analysis: Identifying inefficiencies or vulnerabilities in current IT infrastructure",
        "Performance Recommendations: Providing actionable advice for optimization and scalability",
      ],
    },
    {
      icon: Cloud,
      title: "Digital Transformation Consulting",
      description:
        "Thamani Crew guides businesses through the complexities of digital transformation, enabling them to stay competitive in a tech-driven world.",
      features: [
        "Cloud Adoption Strategies: Transitioning operations to secure and scalable cloud environments",
        "Automation Integration: Implementing tools to streamline workflows and reduce manual tasks",
        "Emerging Technology Adoption: Leveraging AI, IoT, and blockchain for innovative solutions",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Consulting",
      description: "Protecting data and IT assets is a critical focus of Thamani Crew's consultancy services.",
      features: [
        "Risk Assessment: Evaluating potential threats and vulnerabilities",
        "Compliance Advisory: Ensuring adherence to regulations like GDPR and ISO standards",
        "Incident Response Planning: Preparing businesses to handle and recover from security breaches",
      ],
    },
    {
      icon: FolderKanban,
      title: "IT Project Management",
      description:
        "Thamani Crew provides end-to-end project management services for IT initiatives, ensuring they are delivered on time and within budget.",
      features: [
        "Requirement Analysis: Understanding business needs to define project scope",
        "Implementation Oversight: Managing resources, timelines, and milestones",
        "Post-Deployment Support: Ensuring smooth operations and addressing any post-launch issues",
      ],
    },
    {
      icon: Users,
      title: "IT Vendor Management",
      description: "Simplify vendor relationships and procurement processes with Thamani Crew's expertise.",
      features: [
        "Vendor Selection: Assisting in identifying and partnering with reliable IT vendors",
        "Contract Negotiation: Securing favorable terms for hardware, software, and services",
        "Performance Monitoring: Ensuring vendors meet service level agreements (SLAs)",
      ],
    },
    {
      icon: GraduationCap,
      title: "IT Training and Capacity Building",
      description: "Thamani Crew helps teams build the skills needed to leverage IT systems effectively.",
      features: [
        "Workforce Upskilling: Training staff on the latest technologies and best practices",
        "Change Management: Ensuring smooth transitions during IT upgrades or transformations",
        "Custom Training Programs: Tailored courses to address specific organizational needs",
      ],
    },
  ]

  const benefits = [
    "Experienced Consultants: A team with deep expertise across various IT domains",
    "Tailored Solutions: Customized advice and strategies to meet unique business needs",
    "Innovative Thinking: Staying ahead of technology trends to offer cutting-edge guidance",
    "Proven Track Record: Successful engagements with clients across industries",
    "End-to-End Support: Providing ongoing assistance beyond the consulting phase",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-foreground text-balance">
              I.T. Consultancy Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Thamani Crew, a leading tech company, provides expert IT consultancy services designed to help businesses
              align technology with their strategic goals. With a deep understanding of evolving tech trends and
              industry challenges, Thamani Crew offers tailored guidance and solutions to drive efficiency, innovation,
              and growth.
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
              Why Choose Thamani Crew for IT Consultancy Services?
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
              Transform Technology Into Your Competitive Advantage
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thamani Crew's IT consultancy services empower businesses to make informed decisions, optimize operations,
              and embrace innovation confidently. Whether you're planning a major IT overhaul or need guidance on a
              specific project, Thamani Crew is your trusted partner for success.
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
