import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border border-[#EAEAEA]",
        "bg-white shadow-xs",
        "p-5 text-start sm:p-6",
        "hover:border-[#00A859] hover:shadow-card-hover",
        "w-[300px] sm:w-[320px] shrink-0",
        "transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-11 w-11 border border-[#EAEAEA]">
          <AvatarImage src={author.avatar} alt={author.name} className="object-cover" />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-bold text-[#16191D] leading-tight">
            {author.name}
          </h3>
          <p className="text-xs text-[#00A859] font-medium mt-0.5">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="mt-3.5 text-xs sm:text-sm text-[#5E6874] leading-relaxed italic">
        "{text}"
      </p>
    </Card>
  )
}
