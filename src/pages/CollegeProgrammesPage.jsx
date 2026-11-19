import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Building, 
  BookOpen, 
  Users 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function CollegeProgrammesPage() {
  const [formData, setFormData] = useState({
    contactName: '',
    designation: '',
    collegeName: '',
    city: '',
    email: '',
    phone: '',
    programmeInterest: 'skill-programmes',
    studentCount: '',
    message: '',
    consent: false
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.contactName.trim() || !formData.collegeName.trim() || !formData.city.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please complete the required contact and college fields with a valid email address.');
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
          body: JSON.stringify({ ...formData, formType: 'college_engagement_enquiry', timestamp: new Date().toISOString() })
        });
        if (!res.ok) throw new Error('Submission rejected');
      } else {
        const existing = JSON.parse(localStorage.getItem('varnith_college_inquiries') || '[]');
        existing.push({
          ...formData,
          id: Date.now(),
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('varnith_college_inquiries', JSON.stringify(existing));
        await new Promise((r) => setTimeout(r, 600));
      }

      setStatus('success');
      setFormData({
        contactName: '',
        designation: '',
        collegeName: '',
        city: '',
        email: '',
        phone: '',
        programmeInterest: 'skill-programmes',
        studentCount: '',
        message: '',
        consent: false
      });
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send college enquiry. Please contact info@varnithglobal.com directly.');
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('college-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
            <span className="text-[#0A3857] font-semibold">College engagements</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-[#127DC4]" />
                <span>Campus Partnerships</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3857] tracking-tight leading-tight">
                College engagements
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Students deserve to leave college ready, not just qualified. We partner with colleges to run practical programmes that close the gap between college and the first job.
              </p>

              <div className="pt-2">
                <button
                  onClick={scrollToForm}
                  className="btn-primary text-sm sm:text-base px-6 py-3 justify-center gap-2 font-semibold"
                >
                  <span>Colleges – talk to us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs bg-slate-50 aspect-4/3">
                <img
                  src="/assets/about_empowering.jpg"
                  alt="College Training Engagements by Varnith Technologies"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHAT WE OFFER */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3857]">
              What we offer
            </h2>
            <p className="text-base text-slate-600">
              Practical industry initiatives that give students real hands-on technical perspective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="backdrop-blur-md bg-gradient-to-br from-blue-50/80 via-white/95 to-orange-50/70 rounded-2xl p-7 space-y-3 border-2 border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(5,110,181,0.12),0_4px_16px_rgba(244,138,37,0.08)] hover:shadow-[0_20px_40px_-4px_rgba(5,110,181,0.20),0_8px_24px_rgba(244,138,37,0.14)] hover:border-[#056EB5]/50 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#056EB5] via-[#38BDF8] to-[#F48A25] opacity-85 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#056EB5]/20 via-[#38BDF8]/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-120 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#F48A25]/18 via-[#FB923C]/10 to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-120 transition-transform duration-500" />
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100/80 via-white to-orange-100/60 border-2 border-slate-200/80 shadow-xs flex items-center justify-center text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                  <BookOpen className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-lg font-bold text-[#0A3857] group-hover:text-[#056EB5] transition-colors">Skill Programmes</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Skill programmes delivered for a college's students across enterprise technology tracks, security, and cloud.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-gradient-to-br from-blue-50/80 via-white/95 to-orange-50/70 rounded-2xl p-7 space-y-3 border-2 border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(5,110,181,0.12),0_4px_16px_rgba(244,138,37,0.08)] hover:shadow-[0_20px_40px_-4px_rgba(5,110,181,0.20),0_8px_24px_rgba(244,138,37,0.14)] hover:border-[#056EB5]/50 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#056EB5] via-[#38BDF8] to-[#F48A25] opacity-85 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#056EB5]/20 via-[#38BDF8]/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-120 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#F48A25]/18 via-[#FB923C]/10 to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-120 transition-transform duration-500" />
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100/80 via-white to-orange-100/60 border-2 border-slate-200/80 shadow-xs flex items-center justify-center text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                  <Users className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-lg font-bold text-[#0A3857] group-hover:text-[#056EB5] transition-colors">Workshops &amp; Guest Sessions</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Focused technical seminars, code reviews, and guest sessions delivered by active engineering practitioners.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-gradient-to-br from-blue-50/80 via-white/95 to-orange-50/70 rounded-2xl p-7 space-y-3 border-2 border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(5,110,181,0.12),0_4px_16px_rgba(244,138,37,0.08)] hover:shadow-[0_20px_40px_-4px_rgba(5,110,181,0.20),0_8px_24px_rgba(244,138,37,0.14)] hover:border-[#056EB5]/50 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#056EB5] via-[#38BDF8] to-[#F48A25] opacity-85 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#056EB5]/20 via-[#38BDF8]/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-120 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#F48A25]/18 via-[#FB923C]/10 to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-120 transition-transform duration-500" />
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100/80 via-white to-orange-100/60 border-2 border-slate-200/80 shadow-xs flex items-center justify-center text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                  <Building className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-lg font-bold text-[#0A3857] group-hover:text-[#056EB5] transition-colors">Industry Awareness</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Industry awareness sessions for final-year students on corporate hiring processes, technical portfolios, and tech interviews.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-lg text-center">
            <p className="text-sm sm:text-base text-slate-700 font-medium">
              We do not promise placements; we promise students our best teaching and authentic industry preparation.
            </p>
          </div>

        </div>
      </section>

      {/* 3. COLLEGE CONTACT FORM */}
      <section id="college-form" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-8 sm:p-10 shadow-2xs">
            <div className="border-b border-slate-200 pb-6 mb-8 space-y-2">
              <h2 className="text-2xl font-bold text-[#0A3857]">
                Colleges – talk to us
              </h2>
              <p className="text-sm text-slate-600">
                Share your college details and what you have in mind for your students.
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
                  Our academic partnership team will reach out to discuss curriculum integration, guest lectures, or custom student workshops.
                </p>
                <div className="pt-4">
                  <button onClick={() => setStatus('idle')} className="btn-secondary text-xs font-semibold">
                    Submit another inquiry
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
                      Contact name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="e.g. Dr. K. Rao"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Designation
                    </label>
                    <input
                      type="text"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      placeholder="e.g. Head of T&P / Principal"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      College name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.collegeName}
                      onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                      placeholder="College or University name"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Hyderabad"
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
                      placeholder="tpo@college.edu"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Programme of interest
                    </label>
                    <select
                      value={formData.programmeInterest}
                      onChange={(e) => setFormData({ ...formData, programmeInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md outline-none"
                    >
                      <option value="skill-programmes">Skill programmes delivered for students</option>
                      <option value="workshops">Workshops and guest sessions</option>
                      <option value="industry-awareness">Industry awareness sessions for final-year students</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Approximate number of students
                    </label>
                    <input
                      type="text"
                      value={formData.studentCount}
                      onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                      placeholder="e.g. 60, 120, 250"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the branch, semester or target skills..."
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
                  <span>I agree that Varnith Technologies may use these details to reply to this college enquiry.</span>
                </label>

                <div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full sm:w-auto px-8 py-3 text-sm font-semibold justify-center gap-2"
                  >
                    {status === 'loading' ? 'Sending college enquiry...' : 'Send college enquiry'}
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
