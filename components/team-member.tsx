import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  image: string
}

export function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative h-40 w-40 overflow-hidden rounded-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="space-y-1 text-center">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}
