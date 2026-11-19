import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { Star } from 'lucide-react';
import InnerPageLayout from '../components/InnerPageLayout';

export default function TestimonialsPage() {
  return (
    <InnerPageLayout
      title="Testimonials"
      subtitle="Real experiences and verified reviews from engineering hiring leads and tech professionals who scaled with Varnith."
      breadcrumb={[{ label: 'Testimonials' }]}
      activePath="/and/testimonials"
    >
      <div className="space-y-10">
        
        {/* Intro */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#063568]" />
            <span className="text-xs font-bold text-[#063568] uppercase tracking-wider">
              VERIFIED SUCCESS STORIES
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#16191D]">
            What Companies & Learners Say
          </h2>

          <p className="text-sm sm:text-base text-[#5E6874] leading-relaxed">
            From closing mission-critical leadership roles in under two weeks to securing specialized SAP security positions, here is how our clients and students describe working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {siteData.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-7 hover:border-[#063568] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#063568]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#063568] bg-[#F2F3FC] px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#16191D] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#063568] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#16191D] group-hover:text-[#063568] transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#5E6874]">
                    {t.role} • {t.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#16191D]">
              Ready to write your own success story?
            </h4>
            <p className="text-xs text-[#5E6874] mt-0.5">
              Contact our team for recruitment partnerships or course enrolment.
            </p>
          </div>
          <Link to="/and/contact" className="btn-green text-xs px-6 py-2.5 shrink-0">
            Talk to Our Team
          </Link>
        </div>

      </div>
    </InnerPageLayout>
  );
}
