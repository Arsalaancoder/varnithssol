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
  Sparkles,
  Terminal,
  Layers,
  Sparkle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData';
import InquiryModal from '../InquiryModal';
import {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
  CardCurtain,
} from '@/components/ui/card-curtain-reveal';

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
  const [viewMode, setViewMode] = useState('curtain'); // 'curtain' | 'classic'
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const activeServices = activeTab === 'hr' ? siteData.servicesHR : siteData.servicesTraining;
  const currentIcons = activeTab === 'hr' ? hrIcons : trainingIcons;

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200 relative overflow-hidden">
      {/* Decorative Geometric Accents matching reference */}
      <div className="hidden sm:block absolute top-6 left-8 lg:left-14 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#FBBF24] opacity-95 shadow-2xs pointer-events-none" />
      <div className="hidden sm:flex absolute top-10 right-0 flex-col items-end pointer-events-none z-0">
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FBBF24] opacity-95 mr-0 shadow-2xs mb-1" />
        <div className="w-12 h-14 lg:w-14 lg:h-16 rounded-l-full bg-[#009CE8] opacity-95" />
      </div>

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

        {/* Tab & View Mode Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 lg:mb-12">
          {/* Practice Tab Switcher */}
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

          {/* Interactive Card Presentation Toggle */}
          <div className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200 text-xs font-semibold font-['Familjen_Grotesk']">
            <button
              onClick={() => setViewMode('curtain')}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'curtain'
                  ? 'bg-[#056EB5] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-[#056EB5]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curtain Reveal</span>
            </button>
            <button
              onClick={() => setViewMode('classic')}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === 'classic'
                  ? 'bg-white text-slate-800 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Classic Cards
            </button>
          </div>
        </div>

        {/* Card Curtain Reveal Mode */}
        {viewMode === 'curtain' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {activeServices.map((service, idx) => {
              const Icon = currentIcons[idx % currentIcons.length];
              return (
                <CardCurtainReveal
                  key={service.id}
                  className="h-[430px] rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <CardCurtainRevealBody className="p-7 flex flex-col justify-between h-full relative z-10">
                    <div>
                      {/* Top Circular Icon */}
                      <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-200 shadow-2xs flex items-center justify-center mb-4 text-[#0D5C91]">
                        <Icon className="w-5 h-5 text-[#0D5C91]" />
                      </div>

                      {/* Eyebrow */}
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                        {activeTab === 'hr' ? 'HR CONSULTING' : 'ACADEMY TRACK'} • 0{idx + 1}
                      </div>

                      {/* Title with Curtain Hover Reveal */}
                      <CardCurtainRevealTitle className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk']">
                        {service.title}
                      </CardCurtainRevealTitle>

                      {/* Tagline */}
                      <p className="text-xs font-semibold text-[#056EB5] mb-3 font-['Familjen_Grotesk']">
                        {service.tagline}
                      </p>

                      {/* Description with Curtain Variants */}
                      <CardCurtainRevealDescription className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-4">
                        <p>{service.description}</p>
                      </CardCurtainRevealDescription>
                    </div>

                    {/* Bottom Action Group */}
                    <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between relative z-20">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(service.title);
                          setModalOpen(true);
                        }}
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:border-[#056EB5] hover:text-[#056EB5] transition-all font-['Familjen_Grotesk'] cursor-pointer"
                      >
                        <span>Inquire about this service</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </button>

                      <Link
                        to={service.href}
                        className="text-xs font-semibold text-[#0D5C91] hover:text-[#056EB5] transition-colors font-['Familjen_Grotesk']"
                      >
                        Details
                      </Link>
                    </div>

                    {/* Animated Curtain Layer */}
                    <CardCurtain className="bg-gradient-to-t from-blue-50/50 via-white/20 to-transparent pointer-events-none" />
                  </CardCurtainRevealBody>
                </CardCurtainReveal>
              );
            })}
          </div>
        ) : (
          /* Classic Frosted Card Design Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {activeServices.map((service, idx) => {
              const Icon = currentIcons[idx % currentIcons.length];
              return (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100/50 via-blue-50/20 to-transparent rounded-tr-2xl pointer-events-none" />

                  <div>
                    <div className="w-11 h-11 rounded-full bg-white shadow-xs border border-slate-100/90 flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform text-slate-800">
                      <Icon className="w-5 h-5 text-slate-800" />
                    </div>

                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                      {activeTab === 'hr' ? 'HR CONSULTING' : 'ACADEMY TRACK'} • 0{idx + 1}
                    </div>

                    <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk']">
                      {service.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#056EB5] mb-3 font-['Familjen_Grotesk']">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-auto border-t border-slate-100/80 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedService(service.title);
                        setModalOpen(true);
                      }}
                      className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:border-[#056EB5] hover:text-[#056EB5] transition-all font-['Familjen_Grotesk'] cursor-pointer"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <Link
                      to={service.href}
                      className="text-xs font-semibold text-[#0D5C91] hover:text-[#056EB5] transition-colors font-['Familjen_Grotesk']"
                    >
                      Details
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

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
