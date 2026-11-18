import React from 'react';
import { Star } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Testimonials() {
  const testimonials = siteData.testimonials;

  return (
    <section id="testimonials" className="bg-white py-16 sm:py-20 border-b border-[#e3e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
            Verified Feedback
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#00184a] tracking-tight">
            What Our Clients & Learners Say
          </h2>
          <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
            Real experiences from enterprise engineering teams and ambitious professionals who transformed their careers with Varnith.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#f7f9fc] border border-[#e3e8f0] rounded-xl p-6 hover:border-[#1e5bc6] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#f6650a]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-[#00184a] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#e3e8f0] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e5bc6]/10 text-[#1e5bc6] font-bold flex items-center justify-center text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#00184a]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#5b6b85]">
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
