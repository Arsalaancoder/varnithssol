import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, Cloud, Database, GraduationCap, Compass, ArrowRight, Clock, Award } from 'lucide-react';

const trainingTracks = [
  {
    icon: Server,
    title: 'SAP Basis Security',
    tag: 'Enterprise ERP',
    duration: '8-10 Weeks',
    desc: 'SU01 user administration, PFCG role design, TMS transport system, kernel patch upgrades, and audit-ready authorization architectures.',
    link: '/and/courses/sap-basis-security'
  },
  {
    icon: Shield,
    title: 'SAP GRC 12.0 Access Control',
    tag: 'Governance & Risk',
    duration: '6-8 Weeks',
    desc: 'Access Risk Analysis (ARA), Segregation of Duties (SoD) matrices, Emergency Access Management (EAM Firefighter), and ARM provisioning.',
    link: '/and/courses/sap-grc'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps Engineering',
    tag: 'Infrastructure',
    duration: '8-10 Weeks',
    desc: 'Docker containerization, Kubernetes cluster management, AWS cloud architectures, Terraform IaC, and automated CI/CD pipelines.',
    link: '/and/courses/devops'
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    tag: 'Business Intelligence',
    duration: '6-8 Weeks',
    desc: 'Enterprise SQL warehousing, Python data manipulation, ETL pipeline automation, and executive Power BI interactive dashboarding.',
    link: '/and/courses'
  },
  {
    icon: GraduationCap,
    title: 'College Engagements & Campus Drives',
    tag: 'Academic Partnerships',
    duration: 'Semester Programs',
    desc: 'Bridging higher education with enterprise tech requirements through certified syllabus delivery, lab setup, and campus placement drives.',
    link: '/and/courses'
  },
  {
    icon: Compass,
    title: 'Career Transition & Placement Support',
    tag: 'Professional Growth',
    duration: 'Ongoing Mentorship',
    desc: '1-on-1 resume calibration, scenario-based mock interviews with working tech architects, and direct employer introductions.',
    link: '/and/courses'
  }
];

export default function TrainingSection() {
  return (
    <section id="training" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img
                src="/assets/experience_lab.jpg"
                alt="Varnith Technical Lab Immersion"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold tracking-widest text-[#0066CC] uppercase">
              TECHNICAL TRAINING DIVISION
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Enterprise Technology Training with 80% Practical Lab Immersion
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Because our recruiters actively hire for enterprise engineering teams, we know the exact tools and architectural standards companies evaluate. We turn real-time market requirements directly into hands-on lab training with 24/7 sandbox access.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/and/courses"
                className="btn-primary text-xs sm:text-sm px-6 py-2.5"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/and/contact"
                className="btn-outline text-xs sm:text-sm px-6 py-2.5"
              >
                <span>Request Course Details</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 6 Grid Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trainingTracks.map((trk) => {
            const Icon = trk.icon;
            return (
              <div
                key={trk.title}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0B2545]">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#0066CC] bg-blue-50 px-2.5 py-0.5 rounded-sm border border-blue-100">
                      {trk.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A]">
                    {trk.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {trk.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link
                    to={trk.link}
                    className="inline-flex items-center gap-1.5 font-bold text-[#0066CC] hover:text-[#0B2545] transition-colors"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="flex items-center gap-1 text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {trk.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

