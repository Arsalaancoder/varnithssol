import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { Star } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#f7f9fc] py-12 sm:py-16 border-b border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-medium text-[#5b6b85]">
            <Link to="/and" className="hover:text-[#1e5bc6]">Home</Link>
            <span>/</span>
            <span className="text-[#00184a] font-semibold">Testimonials</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
              Verified Feedback
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#00184a] tracking-tight">
              Real Experiences. Meaningful Growth.
            </h1>
            <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
              Read how software engineers, career switchers, and corporate clients in Hyderabad and across India achieved their goals through Varnith Technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteData.testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-[#e3e8f0] rounded-xl p-6 sm:p-8 hover:border-[#1e5bc6] transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#f6650a]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#1e5bc6] bg-[#1e5bc6]/10 px-2.5 py-0.5 rounded-full">
                      Verified Review
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#00184a] leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e3e8f0] flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#1e5bc6]/10 text-[#1e5bc6] font-bold flex items-center justify-center text-base">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#00184a]">
                      {t.name}
                    </h3>
                    <p className="text-xs text-[#5b6b85]">
                      {t.role} • {t.course}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Outcomes Stats */}
      <section className="bg-[#f7f9fc] py-12 border-y border-[#e3e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white border border-[#e3e8f0] rounded-xl p-6">
            <div className="text-3xl font-bold text-[#1e5bc6]">80%</div>
            <div className="text-xs text-[#5b6b85] mt-1 font-semibold uppercase tracking-wider">
              Practical Lab Immersion
            </div>
          </div>
          <div className="bg-white border border-[#e3e8f0] rounded-xl p-6">
            <div className="text-3xl font-bold text-[#f6650a]">10+ Yrs</div>
            <div className="text-xs text-[#5b6b85] mt-1 font-semibold uppercase tracking-wider">
              Mentor Industry Experience
            </div>
          </div>
          <div className="bg-white border border-[#e3e8f0] rounded-xl p-6">
            <div className="text-3xl font-bold text-[#00184a]">Direct</div>
            <div className="text-xs text-[#5b6b85] mt-1 font-semibold uppercase tracking-wider">
              HR Sourcing & Placements
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
