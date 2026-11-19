import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Workflow, 
  ShieldAlert, 
  HeartHandshake, 
  LineChart, 
  Compass, 
  Clock,
  ShieldCheck, 
  FileCheck, 
  GraduationCap, 
  Code, 
  Terminal
} from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';
import InquiryModal from '../InquiryModal';

const hrIcons = [
  Users,           // Talent Acquisition
  Workflow,        // RPO
  ShieldAlert,     // Executive Hiring
  HeartHandshake,  // DE&I Hiring
  LineChart,       // Talent Intelligence
  Compass,         // HR Advisory
  Clock            // Contract Staffing
];

const trainingIcons = [
  ShieldCheck,     // SAP Basis Security
  FileCheck,       // SAP GRC
  GraduationCap,   // College Engagements
  Code,            // Technology Training
  Compass,         // Career Development
  ShieldCheck,     // SAP S/4HANA Security & Fiori
  Terminal         // Enterprise Cloud & DevSecOps
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('hr'); // 'hr' | 'training'
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const activeServices = activeTab === 'hr' ? siteData.servicesHR : siteData.servicesTraining;
  const currentIcons = activeTab === 'hr' ? hrIcons : trainingIcons;

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#0D5C91] uppercase tracking-wider font-['Familjen_Grotesk']">
            Capabilities &amp; Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D5C91] tracking-tight font-['Familjen_Grotesk']">
            How We Can Help
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-['Familjen_Grotesk']">
            Tailored HR consulting to build exceptional software teams, alongside specialized enterprise SAP training to develop mission-critical competencies.
          </p>
        </div>

        {/* Practice Tab Switcher */}
        <div className="flex items-center justify-center mb-10 lg:mb-12">
          <div className="inline-flex p-1 bg-slate-200/80 rounded-full border border-slate-300/80">
            <button
              onClick={() => setActiveTab('hr')}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-150 font-['Familjen_Grotesk'] cursor-pointer ${
                activeTab === 'hr'
                  ? 'bg-white text-[#0D5C91] shadow-2xs'
                  : 'text-slate-600 hover:text-[#0D5C91]'
              }`}
            >
              HR Consulting ({siteData.servicesHR.length})
            </button>
            <button
              onClick={() => setActiveTab('training')}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-150 font-['Familjen_Grotesk'] cursor-pointer ${
                activeTab === 'training'
                  ? 'bg-white text-[#0D5C91] shadow-2xs'
                  : 'text-slate-600 hover:text-[#0D5C91]'
              }`}
            >
              Training &amp; Development ({siteData.servicesTraining.length})
            </button>
          </div>
        </div>

        {/* Refined Glassmorphism Card Grid with Orange + Blue Identity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activeServices.map((service, idx) => {
            const Icon = currentIcons[idx % currentIcons.length];
            return (
              <motion.div
                key={service.id}
                className="backdrop-blur-md bg-white/85 rounded-2xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(5,110,181,0.08),0_4px_16px_rgba(244,138,37,0.06)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                {/* Top reflection line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent pointer-events-none" />

                {/* Subtle blue & orange ambient glass reflections */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#056EB5]/10 via-[#127DC4]/4 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#F48A25]/8 via-transparent to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />

                <div className="relative z-10">
                  {/* Clean Frosted Icon Badge with subtle gradient tint (NO DOTS) */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-orange-50/40 border border-slate-200/60 shadow-2xs flex items-center justify-center mb-5 shrink-0 text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                    <Icon className="w-5 h-5 transition-transform group-hover:scale-105" />
                  </div>

                  {/* Clean Category Eyebrow (NO DOTS) */}
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                    {activeTab === 'hr' ? 'HR CONSULTING' : 'ACADEMY TRACK'} • 0{idx + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk'] group-hover:text-[#056EB5] transition-colors">
                    {service.title}
                  </h3>

                  {/* Tagline in Logo Blue */}
                  <p className="text-xs font-semibold text-[#056EB5] mb-3 font-['Familjen_Grotesk']">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Group */}
                <div className="pt-4 mt-auto border-t border-slate-100/90 flex items-center justify-between relative z-10">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedService(service.title);
                      setModalOpen(true);
                    }}
                    className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-slate-200/90 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:border-[#056EB5] hover:text-[#056EB5] transition-all font-['Familjen_Grotesk'] cursor-pointer"
                  >
                    <span>Inquire about this service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F48A25] group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <Link
                    to={service.href}
                    className="text-xs font-semibold text-[#0D5C91] hover:text-[#F48A25] transition-colors font-['Familjen_Grotesk']"
                  >
                    Details
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section Link */}
        <div className="mt-12 text-center">
          <Link
            to={activeTab === 'hr' ? '/hire' : '/academy'}
            className="inline-flex items-center gap-2 font-['Familjen_Grotesk'] text-sm font-medium text-white bg-[#056EB5] hover:bg-[#045992] rounded-full px-6 py-3 transition-all duration-200 shadow-xs"
          >
            <span>{activeTab === 'hr' ? 'Explore Full HR Consulting Solutions' : 'View Full Training Curriculum'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
        serviceType={activeTab}
      />
    </section>
  );
}
