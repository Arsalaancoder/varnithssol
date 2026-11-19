import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Users, 
  Calendar, 
  Clock, 
  BookOpen, 
  FileCheck,
  ChevronDown,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export default function SAPBasisSecurityPage() {
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

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

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
          body: JSON.stringify({ ...formData, formType: 'sap_basis_enquiry', timestamp: new Date().toISOString() })
        });
        if (!res.ok) throw new Error('Submission rejected');
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
      setErrorMessage('Failed to send enquiry. Please contact info@varnithglobal.com directly.');
    }
  };

  const scrollToForm = (type = 'batch') => {
    setFormData((prev) => ({ ...prev, enquiryType: type }));
    const el = document.getElementById('enquiry-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const modules = [
    {
      num: "01",
      title: "SAP Security Concepts & Architecture",
      desc: "Overview of SAP NetWeaver architecture, client concepts, system landscape (DEV, QA, PRD), and foundational security principles."
    },
    {
      num: "02",
      title: "User Administration & User Types",
      desc: "Managing dialog, system, communication, service, and reference users via SU01, SU10 mass maintenance, and password policy hardening."
    },
    {
      num: "03",
      title: "Roles & Authorisations (PFCG)",
      desc: "Deep dive into Profile Generator (PFCG), single roles, composite roles, derived roles, and org-level authorization values."
    },
    {
      num: "04",
      title: "Authorisation Objects & Access Troubleshooting",
      desc: "Field-level access control, SU24 authorization proposal checks, analyzing authorization failures via SU53, and system trace (ST01)."
    },
    {
      num: "05",
      title: "Securing Critical Transactions & Tables",
      desc: "Restricting sensitive transaction codes (SM49, SE38, SA38), table access groups (S_TABU_DIS, S_TABU_NAM), and background jobs."
    },
    {
      num: "06",
      title: "Security Audit Logs & Transport Management",
      desc: "Configuring security audit filters (SM19), analyzing audit trails (SM20), and moving security roles cleanly through TMS."
    }
  ];

  const courseFaqs = [
    {
      q: "Do I need prior SAP experience?",
      a: "Basic IT, database, or software administration knowledge helps. Our foundational modules cover core SAP NetWeaver concepts before diving into advanced security."
    },
    {
      q: "Is this an official SAP certification course?",
      a: "This is a specialized, practitioner-led Varnith Technologies programme. It prepares you thoroughly for real enterprise security responsibilities and industry certification exams."
    },
    {
      q: "What is the schedule for upcoming batches?",
      a: "We offer weekday evening and weekend cohorts designed for working professionals. Please submit an enquiry to receive current batch start dates and schedules."
    },
    {
      q: "Will I receive hands-on lab access?",
      a: "Yes. Every learner receives dedicated access to real SAP sandbox servers to practice SU01, PFCG, authorization debugging, and audit logging."
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#0A3857]">Home</Link>
            <span>/</span>
            <Link to="/academy" className="hover:text-[#0A3857]">Training &amp; Development</Link>
            <span>/</span>
            <span className="text-[#0A3857] font-semibold">SAP Basis Security</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#127DC4]" />
                <span>Enterprise ERP Track</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3857] tracking-tight leading-tight">
                SAP Basis Security
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Every SAP system holds an organisation's most important data, and someone has to keep it safe. Learn how – from users and roles to authorisations and security audits.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => scrollToForm('batch')}
                  className="btn-primary text-sm sm:text-base px-6 py-3 justify-center gap-2 font-semibold"
                >
                  <span>Enquire now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToForm('syllabus')}
                  className="btn-secondary text-sm sm:text-base px-6 py-3 justify-center font-semibold"
                >
                  Ask for the syllabus
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs bg-slate-50 aspect-4/3">
                <img
                  src="/assets/course_sap_new.png"
                  alt="SAP Basis Security Online Training Course"
                  className="w-full h-full object-contain p-6"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHO IT IS FOR & FORMAT */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Who It Is For */}
            <div className="bg-white border border-slate-200 rounded-lg p-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
                Audience
              </div>
              <h2 className="text-2xl font-bold text-[#0A3857]">
                Who it is for
              </h2>
              <ul className="space-y-3 pt-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#127DC4] shrink-0 mt-0.5" />
                  <span>SAP Basis consultants moving into enterprise security specialisation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#127DC4] shrink-0 mt-0.5" />
                  <span>SAP functional consultants and system administrators</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#127DC4] shrink-0 mt-0.5" />
                  <span>IT professionals who want to start a focused career in SAP security</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#127DC4] shrink-0 mt-0.5" />
                  <span>Graduates with a technical or computer applications background</span>
                </li>
              </ul>
            </div>

            {/* Format & Batch Details */}
            <div className="bg-white border border-slate-200 rounded-lg p-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
                Format
              </div>
              <h2 className="text-2xl font-bold text-[#0A3857]">
                Format and batch details
              </h2>
              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-900">Format</span>
                  <span className="text-slate-600">Live online interactive classes</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-900">Lab Access</span>
                  <span className="text-slate-600">24/7 dedicated SAP sandbox access</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-900">Schedule</span>
                  <span className="text-slate-600">Weekend &amp; evening batches available</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-semibold text-slate-900">Batch Dates</span>
                  <span className="text-[#127DC4] font-medium">Inquire below for next batch</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT YOU WILL LEARN */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A3857] tracking-tight">
              What you will learn
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              A comprehensive curriculum designed to take you from foundational authorization concepts to enterprise security auditing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <div
                key={m.num}
                className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-6 space-y-3 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#0A3857] text-white">
                    Module {m.num}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0A3857]">{m.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FAQS */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0A3857] text-center mb-8">
            Frequently asked questions
          </h2>
          <div className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-200">
            {courseFaqs.map((faq, idx) => (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A3857]">{faq.q}</span>
                  <span className="text-xs font-semibold text-[#127DC4] ml-4">
                    {openFaq === idx ? 'Close' : 'View'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BATCH & SYLLABUS ENQUIRY FORM */}
      <section id="enquiry-form" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-8 sm:p-10 shadow-2xs">
            <div className="border-b border-slate-200 pb-6 mb-8 space-y-2">
              <h2 className="text-2xl font-bold text-[#0A3857]">
                Batch and syllabus enquiry
              </h2>
              <p className="text-sm text-slate-600">
                Request the full SAP Basis Security syllabus or ask about the next scheduled batch.
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
                  Our coordinator will send the SAP Basis Security syllabus brochure and batch timetable to your email.
                </p>
                <div className="pt-4">
                  <button onClick={() => setStatus('idle')} className="btn-secondary text-xs font-semibold">
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                    {errorMessage || 'Please fill in required fields.'}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Enquiry type
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md outline-none"
                    >
                      <option value="batch">Ask about the next batch</option>
                      <option value="syllabus">Syllabus request</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md outline-none"
                    />
                  </div>
                </div>

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
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md outline-none"
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
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.questions}
                    onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
                    placeholder="Specific questions about batch timings or prerequisites..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md outline-none"
                  ></textarea>
                </div>

                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700 font-medium">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="w-4 h-4 text-[#0A3857] rounded border-slate-300 mt-0.5"
                  />
                  <span>I agree that Varnith Technologies may use these details to reply to my programme enquiry.</span>
                </label>

                <div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full sm:w-auto px-8 py-3 text-sm font-semibold justify-center gap-2"
                  >
                    {status === 'loading' ? 'Sending enquiry...' : 'Send enquiry'}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>
    </div>
  );
}
