import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle2, Search, MessageSquare, Target, TrendingUp, BarChart, Globe2, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function BusinessIntelligencePage() {
  const services = [
    {
      icon: Search,
      title: "Market Research and Analysis",
      description:
        "Understanding the market is the foundation of every successful strategy. Thamani Crew offers in-depth research services to uncover actionable insights.",
      features: [
        "Customer Insights: Identifying target audiences and understanding their needs and behaviors",
        "Competitor Analysis: Evaluating competitors to uncover market positioning opportunities",
        "Market Trends: Keeping businesses ahead of emerging industry trends and dynamics",
      ],
    },
    {
      icon: MessageSquare,
      title: "Brand Positioning and Messaging",
      description:
        "Thamani Crew helps businesses define and communicate their unique value propositions to stand out in competitive markets.",
      features: [
        "Value Proposition Development: Crafting clear, compelling brand messages that resonate with target audiences",
        "Brand Differentiation: Identifying unique selling points (USPs) to distinguish your business",
        "Integrated Messaging: Ensuring consistent communication across all platforms and channels",
      ],
    },
    {
      icon: Target,
      title: "Go-to-Market (GTM) Strategy",
      description:
        "Thamani Crew develops effective GTM strategies that ensure successful product launches and market penetration.",
      features: [
        "Market Entry Plans: Identifying the best approaches for entering new markets",
        "Channel Strategy: Choosing the most effective distribution and communication channels",
        "Launch Campaigns: Designing and executing impactful product or service launches",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Strategy",
      description:
        "With digital transformation at the forefront, Thamani Crew equips businesses with robust online marketing strategies.",
      features: [
        "Search Engine Optimization (SEO): Enhancing visibility through targeted keywords and optimization",
        "Content Marketing: Creating engaging content to attract and retain audiences",
        "Social Media Strategy: Leveraging platforms like LinkedIn, Instagram, and Facebook for audience engagement",
      ],
    },
    {
      icon: BarChart,
      title: "Data-Driven Marketing",
      description: "Thamani Crew utilizes advanced analytics to create strategies backed by real-time data.",
      features: [
        "Customer Segmentation: Identifying and targeting high-value customer groups",
        "Performance Metrics: Monitoring KPIs to measure and improve campaign effectiveness",
        "Predictive Analytics: Anticipating market shifts and customer behaviors",
      ],
    },
    {
      icon: Globe2,
      title: "Market Expansion Strategy",
      description: "For businesses looking to grow, Thamani Crew designs strategies to expand reach and impact.",
      features: [
        "Geographical Expansion: Assessing new regions and markets for growth potential",
        "Product Diversification: Identifying opportunities to introduce new products or services",
        "Partnerships and Alliances: Establishing strategic collaborations to enhance market presence",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Crisis and Reputation Management",
      description: "Thamani Crew helps businesses navigate challenges while maintaining a strong market presence.",
      features: [
        "Crisis Communication Plans: Preparing for potential disruptions with clear action steps",
        "Reputation Monitoring: Tracking and managing public perception",
        "Recovery Strategies: Implementing measures to rebuild trust and confidence post-crisis",
      ],
    },
  ]

  const benefits = [
    "Comprehensive Expertise: A multidisciplinary approach combining tech and market insights",
    "Data-Driven Approach: Using analytics and research to inform strategies",
    "Customization: Tailored strategies to meet unique business goals and industry contexts",
    "Proven Success: A track record of helping clients achieve measurable market success",
    "End-to-End Solutions: From research to execution and performance evaluation",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-foreground text-balance">
              Market Strategies
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Thamani Crew extends its expertise beyond technology by offering exceptional Market Strategy Services.
              These services are tailored to help businesses identify opportunities, understand market dynamics, and
              create actionable strategies that yield tangible results.
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
              Why Choose Thamani Crew for Market Strategy Services?
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
              Your Strategic Partner for Market Success
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thamani Crew's Market Strategy Services are designed to empower businesses to make informed decisions,
              optimize resource allocation, and drive sustainable growth. Whether you are launching a new product,
              entering a new market, or redefining your brand, Thamani Crew is your strategic partner for success.
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
