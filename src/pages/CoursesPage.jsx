import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileCheck, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Monitor, 
  Terminal, 
  Users2, 
  Award,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';
import InquiryModal from '../components/InquiryModal';

export default function CoursesPage() {
  const location = useLocation();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('SAP Basis Security');

  const [formData, setFormData] = useState({
    enquiryType: 'batch', // batch | syllabus
    programme: 'SAP Basis Security',
    name: '',
    email: '',
    phone: '',
    learnerType: 'working-professional',
    currentRoleOrCourse: '',
    questions: '',
    consent: false
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  // Parse query parameters (e.g. ?enquiry=syllabus)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('enquiry') === 'syllabus') {
      setFormData((prev) => ({ ...prev, enquiryType: 'syllabus' }));
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please complete your name, a valid email address and phone number.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('Please check the consent box to proceed.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const endpoint = import.meta.env.VITE_CONTACT_API_URL;

      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, formType: 'training_enquiry', timestamp: new Date().toISOString() })
        });
        if (!res.ok) throw new Error('Submission rejected by server');
      } else {
        const existing = JSON.parse(localStorage.getItem('varnith_course_inquiries') || '[]');
        existing.push({
          ...formData,
          id: Date.now(),
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('varnith_course_inquiries', JSON.stringify(existing));
        await new Promise((r) => setTimeout(r, 600));
      }

      setStatus('success');
      setFormData({
        enquiryType: 'batch',
        programme: 'SAP Basis Security',
        name: '',
        email: '',
        phone: '',
        learnerType: 'working-professional',
        currentRoleOrCourse: '',
        questions: '',
        consent: false
      });
    } catch {
      setStatus('error');
      setErrorMessage('Failed to submit enquiry. Please email info@varnithglobal.com or call +91 79954 83137 directly.');
    }
  };

  const scrollToForm = (type = 'batch') => {
    setFormData((prev) => ({ ...prev, enquiryType: type }));
    const el = document.getElementById('batch-enquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const programmeSteps = [
    {
      num: "01",
      title: "Live Interactive Sessions",
      desc: "Learn in real time with experienced SAP and tech trainers. Ask questions, clarify concepts on the spot, and review recorded archives anytime.",
      icon: Monitor
    },
    {
      num: "02",
      title: "Practice Systems & Real Scenarios",
      desc: "Get dedicated access to live sandbox environments. Practice user maintenance, PFCG role assignments, and security audit simulations.",
      icon: Terminal
    },
    {
      num: "03",
      title: "Small Batches with Doubt Clearing",
      desc: "We deliberately keep cohort sizes small so every learner receives personal attention and mentor feedback on their exercises.",
      icon: Users2
    },
    {
      num: "04",
      title: "Certificate & Career Guidance",
      desc: "Earn a verified completion certificate and receive mock technical interview coaching, resume optimization, and recruitment referrals.",
      icon: Award
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
                <span>IT Academy &amp; Campus Partnerships</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3857] tracking-tight leading-tight">
                Training &amp; Development
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Learning a new skill while working or studying is not easy. Our live online programmes in SAP security are built for real lives – practical, focused and supportive. We also partner with colleges to help students step confidently into work.
              </p>

              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                Because we hire for software teams, we know the skills they look for. That shapes everything we teach.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService('SAP Basis Security');
                    setModalOpen(true);
                  }}
                  className="btn-primary text-sm sm:text-base px-6 py-3 justify-center gap-2 font-semibold"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService('Syllabus Request - SAP Programs');
                    setModalOpen(true);
                  }}
                  className="btn-secondary text-sm sm:text-base px-6 py-3 justify-center font-semibold"
                >
                  Ask for the Syllabus
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs aspect-4/3 bg-slate-50">
                <img
                  src="/assets/experience_lab.jpg"
                  alt="Varnith Technologies SAP Training & Hands-on Lab"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. PROGRAMMES SECTION */}
      <section id="programmes" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
              Specialized Tracks
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3857] tracking-tight font-['Familjen_Grotesk']">
              Programmes
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-['Familjen_Grotesk']">
              Practitioner-led technical tracks focused on enterprise ERP security, audit compliance, cloud systems, and university engineering engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Programme 1: SAP Basis Security */}
            <div className="backdrop-blur-md bg-white/85 rounded-2xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(5,110,181,0.08),0_4px_16px_rgba(244,138,37,0.06)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#056EB5]/10 via-[#127DC4]/4 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#F48A25]/8 via-transparent to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-orange-50/40 border border-slate-200/60 shadow-2xs flex items-center justify-center mb-5 shrink-0 text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                  <ShieldCheck className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                  ACADEMY TRACK • 01
                </div>
                <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk'] group-hover:text-[#056EB5] transition-colors">
                  SAP Basis Security
                </h3>
                <div className="text-xs text-[#056EB5] font-semibold mb-3 font-['Familjen_Grotesk']">
                  Live online • Foundation to Advanced
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-4">
                  Secure SAP systems: users, roles, authorisations and audits. Learn user administration, PFCG role architecture, authorization concepts, and system hardening on real sandbox systems.
                </p>
                <div className="pt-3 pb-2 space-y-2 border-t border-slate-100/90 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>User lifecycle management (SU01, SU10)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>PFCG role design &amp; SU24 authorizations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>Security audit logs &amp; compliance hardening</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100/90 flex items-center justify-between relative z-10">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService('SAP Basis Security');
                    setModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-slate-200/90 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:border-[#056EB5] hover:text-[#056EB5] transition-all font-['Familjen_Grotesk'] cursor-pointer"
                >
                  <span>Inquire about this service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F48A25] group-hover:translate-x-0.5 transition-all" />
                </button>
                <Link
                  to="/academy/sap-basis-security"
                  className="text-xs font-semibold text-[#0D5C91] hover:text-[#F48A25] transition-colors font-['Familjen_Grotesk']"
                >
                  Details
                </Link>
              </div>
            </div>

            {/* Programme 2: SAP GRC */}
            <div className="backdrop-blur-md bg-white/85 rounded-2xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(5,110,181,0.08),0_4px_16px_rgba(244,138,37,0.06)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#056EB5]/10 via-[#127DC4]/4 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#F48A25]/8 via-transparent to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-orange-50/40 border border-slate-200/60 shadow-2xs flex items-center justify-center mb-5 shrink-0 text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                  <FileCheck className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                  ACADEMY TRACK • 02
                </div>
                <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk'] group-hover:text-[#056EB5] transition-colors">
                  SAP GRC
                </h3>
                <div className="text-xs text-[#056EB5] font-semibold mb-3 font-['Familjen_Grotesk']">
                  Live online • Governance &amp; Risk
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-4">
                  Who can do what, and who checks? Access governance, risk management and audit compliance in SAP. Master Segregation of Duties (SoD), emergency access (EAM), and automated user provisioning (ARM).
                </p>
                <div className="pt-3 pb-2 space-y-2 border-t border-slate-100/90 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>Access Risk Analysis (ARA) &amp; SoD rule sets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>Emergency Access Management (EAM / Firefighter)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>Access Request Management (ARM) workflows</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100/90 flex items-center justify-between relative z-10">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService('SAP GRC');
                    setModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-slate-200/90 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:border-[#056EB5] hover:text-[#056EB5] transition-all font-['Familjen_Grotesk'] cursor-pointer"
                >
                  <span>Inquire about this service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F48A25] group-hover:translate-x-0.5 transition-all" />
                </button>
                <Link
                  to="/academy/sap-grc"
                  className="text-xs font-semibold text-[#0D5C91] hover:text-[#F48A25] transition-colors font-['Familjen_Grotesk']"
                >
                  Details
                </Link>
              </div>
            </div>

            {/* Programme 3: College Engagements */}
            <div className="backdrop-blur-md bg-white/85 rounded-2xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(5,110,181,0.08),0_4px_16px_rgba(244,138,37,0.06)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#056EB5]/10 via-[#127DC4]/4 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#F48A25]/8 via-transparent to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-orange-50/40 border border-slate-200/60 shadow-2xs flex items-center justify-center mb-5 shrink-0 text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                  <GraduationCap className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                  ACADEMY TRACK • 03
                </div>
                <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk'] group-hover:text-[#056EB5] transition-colors">
                  College Engagements
                </h3>
                <div className="text-xs text-[#056EB5] font-semibold mb-3 font-['Familjen_Grotesk']">
                  Campus Workshops • Student Readiness
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-4">
                  Practical programmes that close the gap between college and the first job. Delivered in partnership with colleges across India, focusing on enterprise software engineering skills and interview readiness.
                </p>
                <div className="pt-3 pb-2 space-y-2 border-t border-slate-100/90 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>Tailored skill modules for engineering students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>Industry awareness sessions &amp; guest talks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>Technical resume reviews &amp; mock interviews</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100/90 flex items-center justify-between relative z-10">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService('College Engagements');
                    setModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-slate-200/90 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:border-[#056EB5] hover:text-[#056EB5] transition-all font-['Familjen_Grotesk'] cursor-pointer"
                >
                  <span>Inquire about this service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F48A25] group-hover:translate-x-0.5 transition-all" />
                </button>
                <Link
                  to="/academy/college-programmes"
                  className="text-xs font-semibold text-[#0D5C91] hover:text-[#F48A25] transition-colors font-['Familjen_Grotesk']"
                >
                  Details
                </Link>
              </div>
            </div>

            {/* Programme 4: SAP S/4HANA Security & Fiori Authorizations */}
            <div className="backdrop-blur-md bg-white/85 rounded-2xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(5,110,181,0.08),0_4px_16px_rgba(244,138,37,0.06)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#056EB5]/10 via-[#127DC4]/4 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#F48A25]/8 via-transparent to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-orange-50/40 border border-slate-200/60 shadow-2xs flex items-center justify-center mb-5 shrink-0 text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                  <ShieldCheck className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                  ACADEMY TRACK • 04
                </div>
                <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk'] group-hover:text-[#056EB5] transition-colors">
                  SAP S/4HANA Security &amp; Fiori
                </h3>
                <div className="text-xs text-[#056EB5] font-semibold mb-3 font-['Familjen_Grotesk']">
                  Fiori Catalogs • Next-Gen Access Control
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-4">
                  Master next-generation SAP S/4HANA authorizations, Fiori tile catalogue assignments, OData service privileges, and migrating traditional ERP security roles.
                </p>
                <div className="pt-3 pb-2 space-y-2 border-t border-slate-100/90 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>Fiori Launchpad spaces and pages authorization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>CDS view authorizations &amp; analytical privileges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>ECC to S/4HANA security migration roadmap</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100/90 flex items-center justify-between relative z-10">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService('SAP S/4HANA Security & Fiori');
                    setModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-slate-200/90 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:border-[#056EB5] hover:text-[#056EB5] transition-all font-['Familjen_Grotesk'] cursor-pointer"
                >
                  <span>Inquire about this service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F48A25] group-hover:translate-x-0.5 transition-all" />
                </button>
                <Link
                  to="/academy/sap-basis-security"
                  className="text-xs font-semibold text-[#0D5C91] hover:text-[#F48A25] transition-colors font-['Familjen_Grotesk']"
                >
                  Details
                </Link>
              </div>
            </div>

            {/* Programme 5: Enterprise Cloud & DevSecOps */}
            <div className="backdrop-blur-md bg-white/85 rounded-2xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(5,110,181,0.08),0_4px_16px_rgba(244,138,37,0.06)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#056EB5]/10 via-[#127DC4]/4 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#F48A25]/8 via-transparent to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-orange-50/40 border border-slate-200/60 shadow-2xs flex items-center justify-center mb-5 shrink-0 text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                  <Terminal className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                  ACADEMY TRACK • 05
                </div>
                <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk'] group-hover:text-[#056EB5] transition-colors">
                  Enterprise Cloud &amp; DevSecOps
                </h3>
                <div className="text-xs text-[#056EB5] font-semibold mb-3 font-['Familjen_Grotesk']">
                  CI/CD Security • Container &amp; Cloud IAM
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk'] mb-4">
                  Practical engineering program covering automated pipeline scanning, secrets management, Terraform infrastructure compliance, and container security on AWS and Azure.
                </p>
                <div className="pt-3 pb-2 space-y-2 border-t border-slate-100/90 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>Automated SAST/DAST pipeline integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>Zero-trust cloud IAM policies &amp; least-privilege</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#056EB5]" />
                    <span>Docker &amp; Kubernetes cluster security hardening</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100/90 flex items-center justify-between relative z-10">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService('Enterprise Cloud & DevSecOps');
                    setModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-slate-200/90 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:border-[#056EB5] hover:text-[#056EB5] transition-all font-['Familjen_Grotesk'] cursor-pointer"
                >
                  <span>Inquire about this service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F48A25] group-hover:translate-x-0.5 transition-all" />
                </button>
                <Link
                  to="/academy"
                  className="text-xs font-semibold text-[#0D5C91] hover:text-[#F48A25] transition-colors font-['Familjen_Grotesk']"
                >
                  Details
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. HOW OUR PROGRAMMES WORK */}
      <section id="how-it-works" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
              Learning Model
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A3857] tracking-tight">
              How Our Programmes Work
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Built specifically for working professionals and university students who need focused, practical learning that fits their lives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmeSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/40 via-blue-50/20 to-transparent rounded-tr-2xl pointer-events-none" />

                  <div>
                    <div className="w-11 h-11 rounded-full bg-white shadow-xs border border-slate-100/90 flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform text-slate-800">
                      <Icon className="w-5 h-5 text-slate-800" />
                    </div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                      STEP {step.num}
                    </div>
                    <h3 className="text-lg font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk']">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Familjen_Grotesk']">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100/80">
                    <span className="text-[11px] font-semibold text-[#056EB5] font-['Familjen_Grotesk']">
                      Core Guarantee ✓
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. LEARNER FAQS */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3857] font-['Familjen_Grotesk']">
              FAQs &amp; Questions Learners Ask Us
            </h2>
            <p className="text-sm text-slate-600">
              Clear information on batch timings, labs, prerequisites and certificates.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-200">
            {siteData.faqs.slice(0, 6).map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full py-4 px-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0A3857]">{faq.q}</span>
                    <span className="text-xs font-semibold text-[#127DC4] ml-4">{isOpen ? 'Close' : 'View'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. TRAINING ENQUIRY FORM */}
      <section id="batch-enquiry" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-8 sm:p-10 shadow-2xs">
            <div className="border-b border-slate-200 pb-6 mb-8 space-y-2">
              <h2 className="text-2xl font-bold text-[#0A3857]">
                Ask about the next batch
              </h2>
              <p className="text-sm text-slate-600">
                Share your details below to receive upcoming batch schedules, syllabus brochures, or 1-on-1 counselor guidance.
              </p>
            </div>

            {status === 'success' ? (
              <div className="text-center py-10 space-y-4 bg-white p-6 rounded-lg border border-slate-200">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0A3857]">
                  Thank you — your enquiry has been noted
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Our training coordinator will send the requested batch schedule and syllabus details to your email address shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary text-xs font-semibold"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-6">
                
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3 text-red-700 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{errorMessage || 'Please complete your name, a valid email address and phone number.'}</span>
                  </div>
                )}

                {/* Enquiry Type & Programme */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Enquiry type
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    >
                      <option value="batch">Ask about the next batch</option>
                      <option value="syllabus">Syllabus request</option>
                      <option value="counseling">Career counseling session</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Programme
                    </label>
                    <select
                      value={formData.programme}
                      onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    >
                      <option value="SAP Basis Security">SAP Basis Security</option>
                      <option value="SAP GRC">SAP GRC</option>
                      <option value="College Engagements">College Engagements</option>
                      <option value="Technology Training">Technology Training (DevOps / Python)</option>
                    </select>
                  </div>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="priya@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    />
                  </div>
                </div>

                {/* Learner Type & Current Role/Course */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      I am a
                    </label>
                    <select
                      value={formData.learnerType}
                      onChange={(e) => setFormData({ ...formData, learnerType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    >
                      <option value="working-professional">Working professional</option>
                      <option value="student">Student</option>
                      <option value="career-switcher">Career switcher</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Current role or course
                    </label>
                    <input
                      type="text"
                      value={formData.currentRoleOrCourse}
                      onChange={(e) => setFormData({ ...formData, currentRoleOrCourse: e.target.value })}
                      placeholder="e.g. IT Administrator / Final Year B.Tech"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                    />
                  </div>
                </div>

                {/* Questions */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.questions}
                    onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
                    placeholder="Any specific questions regarding batch dates, lab setup, or syllabus..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:border-[#0A3857] focus:ring-1 focus:ring-[#0A3857] outline-none"
                  ></textarea>
                </div>

                {/* Consent */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs text-slate-500">
                    We use these details only to reply to you about this request – nothing else. See our <a href="/privacy" className="underline text-slate-700">privacy policy</a>.
                  </p>
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700 font-medium">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="w-4 h-4 text-[#0A3857] rounded border-slate-300 mt-0.5 focus:ring-[#0A3857]"
                    />
                    <span>I agree that Varnith Technologies may use these details to reply to my programme enquiry.</span>
                  </label>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full sm:w-auto px-8 py-3 text-sm font-semibold justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <span>Sending enquiry...</span>
                    ) : (
                      <>
                        <span>Send enquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
        serviceType="training"
      />
    </div>
  );
}
