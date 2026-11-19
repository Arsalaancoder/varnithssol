import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cloud, Database, CheckSquare, Layers, Award, ArrowRight } from 'lucide-react';

const domains = [
  {
    title: 'Software Engineering',
    desc: 'Full-stack developers, frontend specialists, backend architects, and mobile engineers across modern languages.',
    icon: Code,
    skills: ['Java / Spring Boot', 'Python / Django', 'React / Next.js', 'Node.js / TypeScript', 'Go / Microservices']
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Cloud architects, DevOps leads, site reliability engineers, and platform automation specialists.',
    icon: Cloud,
    skills: ['AWS / Azure / GCP', 'Kubernetes & Docker', 'Terraform & IaC', 'CI/CD Automation', 'Prometheus / Grafana']
  },
  {
    title: 'Data & AI',
    desc: 'Data engineers, analytics engineers, BI developers, machine learning practitioners, and data architects.',
    icon: Database,
    skills: ['Python & PySpark', 'Power BI / Tableau', 'SQL & Data Warehousing', 'Snowflake / Databricks', 'ETL Pipelines']
  },
  {
    title: 'Quality Engineering',
    desc: 'SDETs, test automation engineers, API testers, and performance verification professionals.',
    icon: CheckSquare,
    skills: ['Selenium WebDriver', 'Postman / REST APIs', 'Cypress & Playwright', 'JMeter & Performance', 'Test Automation Frameworks']
  },
  {
    title: 'SAP & Enterprise Applications',
    desc: 'Enterprise ERP specialists, security administrators, compliance analysts, and functional leads.',
    icon: Layers,
    skills: ['SAP Basis Administration', 'SAP GRC Access Control', 'Role Architecture / PFCG', 'Security & Audit', 'SAP S/4HANA Migration']
  },
  {
    title: 'Technology Leadership',
    desc: 'Directors of engineering, VP of technology, technical product managers, and enterprise practice leads.',
    icon: Award,
    skills: ['VP of Engineering', 'Director of DevOps', 'Principal Architects', 'Engineering Managers', 'Practice Leads']
  }
];

export default function WhoWeHireFor() {
  return (
    <section id="who-we-hire-for" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#00A859] uppercase">
              TECHNICAL SPECIALIZATION
            </span>
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16191D] tracking-tight">
            Who We <span className="text-[#00A859]">Hire For</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5E6874] leading-relaxed">
            We source, evaluate, and place high-performing talent across the six most critical domains in modern software and enterprise engineering.
          </p>
        </div>

        {/* 6-Item Grid matching Template */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {domains.map((dom, idx) => {
            const Icon = dom.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 sm:p-7 hover:border-[#00A859] hover:bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-white border border-[#E5E7EB] text-[#00A859] group-hover:bg-[#00A859] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#16191D] group-hover:text-[#00A859] transition-colors">
                    {dom.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E6874] leading-relaxed">
                    {dom.desc}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-[#16191D] uppercase tracking-wider block mb-2">
                      Common Roles & Stacks:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dom.skills.map((sk, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white text-[#16191D] text-xs rounded border border-[#E5E7EB] font-medium"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-[#E5E7EB]">
                  <Link
                    to="/and/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A859] group-hover:text-[#008F4C]"
                  >
                    <span>Request profiles in this domain</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
