import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function HRServices() {
  const services = siteData.hrServices;

  return (
    <section id="hr-services" className="bg-white py-16 sm:py-20 border-b border-[#e3e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1e5bc6]">
            HR Services & Consulting
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#00184a] tracking-tight">
            Strategic HR Solutions for Growing Businesses
          </h2>
          <p className="text-base sm:text-lg text-[#5b6b85] leading-relaxed">
            From finding the right talent to building stronger workplaces, we help businesses create efficient, capable and future-ready teams.
          </p>
        </div>

        {/* 6 Minimal Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white border border-[#e3e8f0] rounded-xl p-6 hover:border-[#1e5bc6] hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase text-[#5b6b85] tracking-wider">
                    0{idx + 1} / Practice
                  </span>
                  <span className="text-[11px] font-medium text-[#1e5bc6] bg-[#1e5bc6]/10 px-2.5 py-0.5 rounded-full">
                    Enterprise SLA
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#00184a]">
                  {service.title}
                </h3>

                <p className="text-sm text-[#5b6b85] leading-relaxed">
                  {service.shortDesc || service.description}
                </p>

                {/* Offerings snippet */}
                {service.whatItIncludes && (
                  <ul className="space-y-1.5 pt-2 border-t border-[#e3e8f0] text-xs text-[#00184a]">
                    {service.whatItIncludes.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1e5bc6] shrink-0" />
                        <span className="truncate">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-5 mt-4 border-t border-[#e3e8f0]">
                <Link
                  to={`/and/hr-services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e5bc6] hover:text-[#15469e] transition-colors"
                >
                  <span>Explore service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#e3e8f0]">
          <p className="text-sm text-[#5b6b85]">
            Need a tailored recruitment plan or contract staffing for software teams?
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/and/hr-services" className="btn-blue">
              View All HR Practices
            </Link>
            <Link to="/and/contact" className="btn-outline">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
