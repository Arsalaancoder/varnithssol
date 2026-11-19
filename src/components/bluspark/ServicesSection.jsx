import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, UserCheck, FileCheck, Server, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Users,
    title: 'Talent Acquisition',
    desc: 'Specialized technical recruitment across full-stack engineering, cloud, and data. Candidates are vetted in live cloud sandboxes with a 14-day delivery SLA.',
    link: '/and/hr-services/recruitment'
  },
  {
    icon: Briefcase,
    title: 'Recruitment Process Outsourcing',
    desc: 'End-to-end recruitment management and dedicated recruiting squads embedded with your engineering leadership to accelerate multi-hire technical initiatives.',
    link: '/and/hr-services/staffing'
  },
  {
    icon: UserCheck,
    title: 'Executive Search',
    desc: 'Targeted, confidential leadership mapping to place Principal Architects, Practice Directors, VP of Engineering, and senior technical leadership.',
    link: '/and/hr-services/recruitment'
  },
  {
    icon: FileCheck,
    title: 'Contract Staffing',
    desc: 'Agile staff augmentation with rapid 72-hour onboarding, complete statutory compliance (PF, ESI), and seamless contract-to-hire flexibility.',
    link: '/and/hr-services/staffing'
  },
  {
    icon: Server,
    title: 'SAP Training',
    desc: 'Enterprise hands-on lab training in SAP Basis Security, SU01 authorizations, PFCG role architecture, TMS transports, and SAP GRC 12.0 Access Control.',
    link: '/and/courses/sap-basis-security'
  },
  {
    icon: Shield,
    title: 'Enterprise Technology Training',
    desc: 'Practitioner-led technical tracks covering AWS Cloud Architecture, Docker & Kubernetes DevOps, Python Automation, and Full-Stack Quality Engineering.',
    link: '/and/courses'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Bluspark "We Can Help" */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#0066CC] uppercase">
            WE CAN HELP
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Solutions That Support Your Business
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Whether you need to close mission-critical engineering headcount or equip internal teams with specialized enterprise skills, our practices are engineered for measurable business impact.
          </p>
        </div>

        {/* 6 Clean Minimal Rectangular Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Small Icon */}
                  <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0F172A] leading-snug">
                    {svc.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Learn More Text Link */}
                <div className="pt-6 mt-4 border-t border-slate-100">
                  <Link
                    to={svc.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066CC] hover:text-[#0B2545] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

