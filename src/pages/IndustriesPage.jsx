import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Cloud, 
  Database, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  ArrowRight,
  Server,
  Layers,
  Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';
import InquiryModal from '../components/InquiryModal';

export default function IndustriesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Software Engineering');
  const families = [
    {
      title: "Software Engineering",
      roles: "Front-end, back-end, full-stack and mobile developers.",
      tech: "React, Node.js, Python, Java, Go, TypeScript, React Native, iOS, Android, Microservices, REST APIs, GraphQL",
      icon: Code2
    },
    {
      title: "Cloud and DevOps",
      roles: "Cloud, platform, site reliability and DevOps engineers.",
      tech: "AWS, Azure, GCP, Terraform, Kubernetes, Docker, CI/CD (GitHub Actions, Jenkins), Linux, Prometheus, Grafana",
      icon: Cloud
    },
    {
      title: "Data and AI",
      roles: "Data engineers, analysts, scientists and machine learning engineers.",
      tech: "Python, SQL, Snowflake, Databricks, Apache Spark, Airflow, Power BI, Tableau, Machine Learning, Data Warehousing",
      icon: Database
    },
    {
      title: "Quality Engineering",
      roles: "Manual, automation and performance testers.",
      tech: "Selenium WebDriver, Playwright, Cypress, Postman API Testing, TestNG, JMeter, BDD/Cucumber, Test Automation Frameworks",
      icon: CheckCircle2
    },
    {
      title: "SAP and Enterprise Applications",
      roles: "SAP technical, functional and security consultants.",
      tech: "SAP Basis Security, SAP GRC Access Control, NetWeaver, S/4HANA, Fiori, Authorizations, PFCG, ABAP, Audit Compliance",
      icon: ShieldCheck
    },
    {
      title: "Technology Leadership",
      roles: "Engineering managers, architects and heads of technology.",
      tech: "Engineering Managers, Principal Architects, Directors of Engineering, Heads of Product, VPs of Technology, CTOs",
      icon: Users
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#0A3857]">Home</Link>
            <span>/</span>
            <span className="text-[#0A3857] font-semibold">Who we hire for</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#127DC4]" />
              <span>Technology Stacks &amp; Domains</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3857] tracking-tight leading-tight">
              Who we hire for
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We hire for software organisations across India – product companies, IT services firms, global capability centres, start-ups and enterprises – in any domain and any tech stack.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link to="/hire" className="btn-primary text-sm sm:text-base px-6 py-3 justify-center gap-2 font-semibold">
                <span>Explore HR Consulting</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary text-sm sm:text-base px-6 py-3 justify-center font-semibold">
                Talk to us
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ROLE FAMILIES */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3857]">
              Role families
            </h2>
            <p className="text-sm text-slate-600">
              Across India, for on-site, hybrid and remote software engineering roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {families.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100/40 via-blue-50/20 to-transparent rounded-tr-2xl pointer-events-none" />

                  <div>
                    <div className="w-11 h-11 rounded-full bg-white shadow-xs border border-slate-100/90 flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform text-slate-800">
                      <Icon className="w-5 h-5 text-slate-800" />
                    </div>

                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                      TECH VERTICAL • 0{idx + 1}
                    </div>

                    <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk']">
                      {f.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-4">
                      {f.roles}
                    </p>

                    <div className="pt-3 border-t border-slate-100/80 text-xs text-slate-500 leading-relaxed font-['Familjen_Grotesk'] mb-5">
                      <span className="font-semibold text-slate-700 block mb-1">Common skills &amp; tools:</span>
                      {f.tech}
                    </div>
                  </div>

                  <div className="pt-4 mt-auto border-t border-slate-100/80">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedService(`Hiring: ${f.title}`);
                        setModalOpen(true);
                      }}
                      className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:border-[#056EB5] hover:text-[#056EB5] transition-all font-['Familjen_Grotesk'] cursor-pointer"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. CTA */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3857]">
            Hiring for your software team?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Across India, for on-site, hybrid and remote roles. Share your requirements and let us deliver a pre-screened shortlist.
          </p>
          <div className="pt-2">
            <Link to="/hire" className="btn-primary text-sm sm:text-base px-7 py-3 font-semibold gap-2">
              <span>Share your requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
        serviceType="hr"
      />
    </div>
  );
}

