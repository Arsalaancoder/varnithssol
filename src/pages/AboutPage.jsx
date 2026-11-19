import React from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import InnerPageLayout from '../components/InnerPageLayout';

export default function AboutPage() {
  const leadership = [
    {
      name: "Senior Talent Advisory Lead",
      role: "Enterprise Recruitment & RPO Practice",
      desc: "14+ years specializing in technical executive search, software engineering scaling, and talent intelligence across Tier-1 Indian tech hubs.",
      image: "/assets/hr_carousel_1.jpg"
    },
    {
      name: "Principal SAP Architect & Mentor",
      role: "Enterprise ERP & Security Lead",
      desc: "16+ years implementing SAP Basis, S/4HANA migrations, and SAP GRC Access Control for global manufacturing and IT consulting giants.",
      image: "/assets/hr_carousel_2.jpg"
    },
    {
      name: "Cloud & DevOps Practice Lead",
      role: "Infrastructure Automation & Labs",
      desc: "11+ years designing AWS enterprise infrastructure, Kubernetes orchestrations, and CI/CD pipelines. Mentored 450+ engineers.",
      image: "/assets/hr_carousel_3.jpg"
    }
  ];

  return (
    <InnerPageLayout
      title="About Us"
      subtitle="People and skills, under one roof. Made in Hyderabad, with care for every hire and every learner."
      breadcrumb={[{ label: 'About Us' }]}
      activePath="/and/about"
    >
      <div className="space-y-12">
        
        {/* Featured Image matching Template */}
        <div className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-card">
          <img
            src="/assets/experience_collab.jpg"
            alt="Varnith Technologies Team"
            className="w-full h-80 sm:h-96 object-cover"
          />
        </div>

        {/* Narrative Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#063568]" />
            <span className="text-xs font-bold text-[#063568] uppercase tracking-wider">
              OUR HERITAGE & DUAL MISSION
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#16191D]">
            Welcome to Varnith Technologies
          </h2>

          <p className="text-sm sm:text-base text-[#5E6874] leading-relaxed">
            Headquartered at Bhanu Elite, Madhapur, Hyderabad, <strong>Varnith Technologies Private Limited</strong> operates two interconnected business practices designed to solve the two biggest bottlenecks in the tech industry: finding qualified engineers, and building true production capability.
          </p>

          <p className="text-sm sm:text-base text-[#5E6874] leading-relaxed">
            For years, software companies struggled with hiring agencies that circulated generic resumes without evaluating technical substance. At the same time, professionals spent months on theoretical courses that left them unprepared for actual production environments.
          </p>

          <p className="text-sm sm:text-base text-[#5E6874] leading-relaxed">
            Varnith was founded to close that loop. Because we hire directly for enterprise engineering teams, we know what technical managers actually evaluate. That real-time intelligence feeds straight into our SAP, Cloud, and QA training curricula.
          </p>
        </div>

        {/* Two Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F2F3FC] text-[#063568] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#16191D]">
              HR Consulting Division
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6874] leading-relaxed">
              Specialized talent acquisition, contract staffing, and RPO for software companies across India with SLA-backed 14-day turnaround.
            </p>
            <Link
              to="/and/hr-services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063568] hover:underline pt-2"
            >
              <span>Explore HR Consulting</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F2F3FC] text-[#063568] flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#16191D]">
              IT Training Division
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6874] leading-relaxed">
              Hands-on enterprise lab training in SAP Basis Security, SAP GRC, DevOps, and Quality Engineering with 80% practical immersion.
            </p>
            <Link
              to="/and/courses"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063568] hover:underline pt-2"
            >
              <span>Explore Training Tracks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Key Corporate Statistics */}
        <div className="bg-[#16191D] text-white rounded-xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-[#063568]">10+ Yrs</div>
            <div className="text-xs text-gray-300 mt-1">Corporate Experience</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">450+</div>
            <div className="text-xs text-gray-300 mt-1">Verified Placements</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#063568]">96.4%</div>
            <div className="text-xs text-gray-300 mt-1">SLA Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">80%</div>
            <div className="text-xs text-gray-300 mt-1">Practical Lab Hours</div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#16191D]">
            Our Operating Principles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-[#E5E7EB] rounded-lg p-4 bg-white flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#063568] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#16191D]">Honest Assessments</h4>
                <p className="text-xs text-[#5E6874] mt-0.5">We provide candid guidance on talent availability and realistic hiring timelines.</p>
              </div>
            </div>
            <div className="border border-[#E5E7EB] rounded-lg p-4 bg-white flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#063568] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#16191D]">Rigorous Lab Testing</h4>
                <p className="text-xs text-[#5E6874] mt-0.5">Every shortlisted candidate and student is evaluated in real production sandboxes.</p>
              </div>
            </div>
            <div className="border border-[#E5E7EB] rounded-lg p-4 bg-white flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#063568] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#16191D]">Zero Resume Spam</h4>
                <p className="text-xs text-[#5E6874] mt-0.5">We only submit calibrated shortlists of candidates who meet 100% of the role brief.</p>
              </div>
            </div>
            <div className="border border-[#E5E7EB] rounded-lg p-4 bg-white flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#063568] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#16191D]">Dedicated Lead Account</h4>
                <p className="text-xs text-[#5E6874] mt-0.5">One single point of contact who owns your delivery from role brief to day-one joining.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Staff Grid matching Template: Our Heroes of The Intelligence Staff */}
        <div className="space-y-6 pt-4 border-t border-[#E5E7EB]">
          <div>
            <span className="text-xs font-bold text-[#063568] uppercase tracking-wider block">
              EXPERIENCED PRACTITIONERS
            </span>
            <h3 className="text-2xl font-bold text-[#16191D]">
              Our Heroes of The Advisory & Mentor Staff
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {leadership.map((lead, idx) => (
              <div key={idx} className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white hover:border-[#063568] transition-colors">
                <img
                  src={lead.image}
                  alt={lead.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4 space-y-1.5">
                  <h4 className="text-sm font-bold text-[#16191D]">{lead.name}</h4>
                  <p className="text-xs font-semibold text-[#063568]">{lead.role}</p>
                  <p className="text-xs text-[#5E6874] leading-relaxed pt-1">{lead.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#16191D]">
              Ready to partner with Varnith Technologies?
            </h4>
            <p className="text-xs text-[#5E6874] mt-0.5">
              Discuss enterprise hiring or schedule a free syllabus consultation.
            </p>
          </div>
          <Link to="/and/contact" className="btn-green text-xs px-6 py-2.5 shrink-0">
            Talk to Us Today
          </Link>
        </div>

      </div>
    </InnerPageLayout>
  );
}
