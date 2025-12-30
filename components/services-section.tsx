import { Card } from "@/components/ui/card"
import { BarChart3, Cpu, Lightbulb, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Strategic Consulting",
    description:
      "Expert guidance to optimize your business operations and achieve sustainable growth through proven methodologies.",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "Modernize your business with cutting-edge digital solutions and technologies that enhance efficiency.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Comprehensive data analysis and insights to inform strategic decision-making and drive competitive advantage.",
  },
  {
    icon: TrendingUp,
    title: "Operational Excellence",
    description: "Streamline your operations to increase efficiency, reduce costs, and maximize profitability.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-foreground text-balance">
            Comprehensive business solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {
              "We offer a range of services designed to help your business grow and succeed in today's competitive market."
            }
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
