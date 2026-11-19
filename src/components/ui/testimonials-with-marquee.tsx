import { cn } from "@/lib/utils"
import { TestimonialCard, type TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-white text-[#16191D]",
      "py-16 sm:py-20 lg:py-24 px-0 border-b border-[#EAEAEA]",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-12">
        <div className="flex flex-col items-center gap-3 px-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
            <span className="text-xs font-bold text-[#00A859] uppercase tracking-widest">
              CLIENT & LEARNER FEEDBACK
            </span>
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
          </div>
          <h2 className="max-w-[720px] text-3xl font-extrabold tracking-tight sm:text-5xl text-[#261C4E]">
            {title}
          </h2>
          <p className="max-w-[640px] text-sm sm:text-base text-[#5E6874] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1.25rem] [gap:var(--gap)] flex-row [--duration:35s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-white to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-white to-transparent sm:block" />
        </div>
      </div>
    </section>
  )
}

