import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border bg-background p-6 shadow-sm">
      <div className="flex flex-col space-y-4">
        <Quote className="h-6 w-6 text-muted-foreground" />
        <p className="text-muted-foreground">{quote}</p>
        <div className="mt-auto">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
    </div>
  )
}
