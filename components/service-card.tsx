import { BarChart, Code, DollarSign, Lightbulb, Palette, Settings } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
        {icon === "lightbulb" && <Lightbulb className="h-6 w-6" />}
        {icon === "code" && <Code className="h-6 w-6" />}
        {icon === "barChart" && <BarChart className="h-6 w-6" />}
        {icon === "palette" && <Palette className="h-6 w-6" />}
        {icon === "dollarSign" && <DollarSign className="h-6 w-6" />}
        {icon === "settings" && <Settings className="h-6 w-6" />}
      </div>
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-xl text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
