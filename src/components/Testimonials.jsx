import React from 'react';
import { Star, Quote } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Testimonials() {
  const testimonials = siteData.testimonials;

  return (
    <section id="testimonials" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#00A859] uppercase">
              CLIENT & LEARNER FEEDBACK
            </span>
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16191D] tracking-tight">
            What Our Partners & <span className="text-[#00A859]">Alumni</span> Say
          </h2>

          <p className="text-base sm:text-lg text-[#5E6874] leading-relaxed">
            Real feedback from software engineering hiring leads and professionals who advanced with Varnith.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 sm:p-7 hover:border-[#00A859] hover:bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#00A859]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#00A859]/30" />
                </div>

                <p className="text-sm text-[#16191D] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00A859] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#16191D] group-hover:text-[#00A859] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#5E6874]">
                    {item.role} • {item.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
