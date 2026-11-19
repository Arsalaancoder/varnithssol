import React from 'react';

const technologies = [
  { name: 'SAP S/4HANA', label: 'SAP S/4HANA & GRC' },
  { name: 'AWS Cloud', label: 'Amazon Web Services' },
  { name: 'Docker', label: 'Docker Containers' },
  { name: 'Kubernetes', label: 'Kubernetes (K8s)' },
  { name: 'Python', label: 'Python & Django' },
  { name: 'Spring Boot', label: 'Java Spring Boot' },
  { name: 'Power BI', label: 'Microsoft Power BI' },
  { name: 'Terraform', label: 'Terraform Cloud IaC' }
];

export default function PartnerLogoStrip({ title = "TRUSTED BY ENTERPRISE PLATFORMS & HIRING TEAMS" }) {
  return (
    <div className="bg-white py-8 sm:py-10 border-b border-[#E2E6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold tracking-widest text-[#5E6874] uppercase">
            {title}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 opacity-75 hover:opacity-100 transition-opacity">
          {technologies.map((tech, idx) => (
            <div 
              key={idx}
              className="px-4 py-2 bg-[#F2F3FC] border border-[#E2E6F0] rounded-sm text-xs sm:text-sm font-bold text-[#063568] tracking-tight"
            >
              {tech.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
