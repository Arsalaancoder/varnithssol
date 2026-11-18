import React from 'react';

const techBadges = [
  'SAP Basis Security',
  'SAP GRC',
  'AWS & Cloud',
  'DevOps & Kubernetes',
  'Python Development',
  'Data Analytics & Power BI',
  'Software Testing & QA',
  'Full-Stack Engineering'
];

export default function TechRail() {
  return (
    <section className="bg-[#f7f9fc] border-b border-[#e3e8f0] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#5b6b85] shrink-0">
            Core domains we hire for and train in:
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {techBadges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white border border-[#e3e8f0] rounded-md text-xs font-medium text-[#00184a]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
