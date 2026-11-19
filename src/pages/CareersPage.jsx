import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  Send,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

export default function CareersPage() {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedFunction, setSelectedFunction] = useState('All');
  const [selectedRole, setSelectedRole] = useState(null); // for apply modal
  const [applyData, setApplyData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    notes: ''
  });
  const [applyStatus, setApplyStatus] = useState('idle');

  const filteredRoles = siteData.sampleRoles.filter((role) => {
    const locMatch = selectedLocation === 'All' || role.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const funcMatch = selectedFunction === 'All' || role.team.toLowerCase().includes(selectedFunction.toLowerCase());
    return locMatch && funcMatch;
  });

  const handleApply = (e) => {
    e.preventDefault();
    if (!applyData.name.trim() || !applyData.email.trim() || !applyData.phone.trim()) {
      setApplyStatus('error');
      return;
    }
    setApplyStatus('loading');
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('varnith_candidate_applications') || '[]');
      existing.push({
        ...applyData,
        role: selectedRole?.title || 'General Profile',
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('varnith_candidate_applications', JSON.stringify(existing));
      setApplyStatus('success');
    }, 600);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-white pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#0A3857]">Home</Link>
            <span>/</span>
            <span className="text-[#0A3857] font-semibold">Find a Role</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-[#0A3857] uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-[#127DC4]" />
              <span>Software Engineering Careers</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3857] tracking-tight leading-tight">
              Find a role
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Looking for your next step? We hire for software organisations across India, and we treat every candidate the way we would want to be treated: honestly, and with a reply. Browse open roles, or send us your profile.
            </p>

            <div className="p-4 bg-[#F8FAFC] border border-slate-200 rounded-lg flex items-center gap-3 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span><strong>Notice to candidates:</strong> We never charge candidates a fee at any stage of the recruitment process.</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FILTER & ROLE LISTINGS */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Filters Bar */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Filter className="w-4 h-4 text-[#0A3857]" />
                <span>Filters:</span>
              </div>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-3 py-1.5 text-xs font-semibold bg-slate-50 border border-slate-300 rounded-md text-slate-700 outline-none"
              >
                <option value="All">All Locations</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Pune">Pune</option>
                <option value="Remote">Remote</option>
              </select>

              {/* Function Filter */}
              <select
                value={selectedFunction}
                onChange={(e) => setSelectedFunction(e.target.value)}
                className="px-3 py-1.5 text-xs font-semibold bg-slate-50 border border-slate-300 rounded-md text-slate-700 outline-none"
              >
                <option value="All">All Functions</option>
                <option value="Engineering">Product Engineering</option>
                <option value="DevOps">Cloud &amp; DevOps</option>
                <option value="Data">Data Analytics</option>
                <option value="Quality">Quality Engineering</option>
                <option value="Enterprise">Enterprise Applications</option>
                <option value="Leadership">Technology Leadership</option>
              </select>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Showing {filteredRoles.length} open position{filteredRoles.length === 1 ? '' : 's'}
            </div>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="backdrop-blur-md bg-gradient-to-br from-blue-50/80 via-white/95 to-orange-50/70 rounded-2xl p-7 border-2 border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(5,110,181,0.12),0_4px_16px_rgba(244,138,37,0.08)] hover:shadow-[0_20px_40px_-4px_rgba(5,110,181,0.20),0_8px_24px_rgba(244,138,37,0.14)] hover:border-[#056EB5]/50 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Top thick dual-color brand accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#056EB5] via-[#38BDF8] to-[#F48A25] opacity-85 group-hover:opacity-100 transition-opacity" />

                {/* Visible Light Blue & Light Orange glass reflections */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#056EB5]/20 via-[#38BDF8]/10 to-transparent rounded-tr-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-[#F48A25]/18 via-[#FB923C]/10 to-transparent rounded-bl-2xl pointer-events-none group-hover:scale-115 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100/80 via-white to-orange-100/60 border-2 border-slate-200/80 shadow-xs flex items-center justify-center mb-5 shrink-0 text-[#056EB5] group-hover:text-[#F48A25] transition-colors duration-300">
                    <Briefcase className="w-5 h-5 transition-transform group-hover:scale-105" />
                  </div>

                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Familjen_Grotesk']">
                    {role.team} • {role.type}
                  </div>

                  <h3 className="text-xl font-bold text-[#0D5C91] mb-2 leading-snug font-['Familjen_Grotesk'] group-hover:text-[#056EB5] transition-colors">
                    {role.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600 mb-4 font-['Familjen_Grotesk']">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#056EB5]" />
                      <span>{role.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#056EB5]" />
                      <span>{role.experience}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100/90 text-xs text-slate-500 font-['Familjen_Grotesk'] mb-5">
                    <span className="font-semibold text-slate-700">Stack:</span> {role.stack}
                  </div>
                </div>

                <div className="pt-4 mt-auto border-t border-slate-100/90 relative z-10">
                  <button
                    onClick={() => {
                      setSelectedRole(role);
                      setApplyStatus('idle');
                    }}
                    className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-slate-200/90 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:shadow-xs hover:border-[#056EB5] hover:text-[#056EB5] transition-all font-['Familjen_Grotesk'] cursor-pointer"
                  >
                    <span>Apply for this role</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F48A25] group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Don't see your stack? Box */}
          <div className="p-8 bg-white border border-slate-200 rounded-xl text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#0A3857]">
              Don't see your exact role listed?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We frequently hire for unlisted niche roles across software engineering, cloud, SAP and data. Send us your profile and we'll keep you in mind for upcoming mandates.
            </p>
            <button
              onClick={() => {
                setSelectedRole({ title: 'General Profile Submission' });
                setApplyStatus('idle');
              }}
              className="btn-secondary text-xs font-semibold px-6 py-2.5"
            >
              Share Your Profile with Us
            </button>
          </div>

        </div>
      </section>

      {/* 3. APPLICATION MODAL */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold text-[#127DC4] uppercase tracking-wider">Candidate Application</span>
              <h3 className="text-xl font-bold text-[#0A3857]">{selectedRole.title}</h3>
              <p className="text-xs text-slate-500">Submit your details directly to our technical talent recruiters.</p>
            </div>

            {applyStatus === 'success' ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-[#0A3857]">Application Received</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you! Our technical recruiters will review your background and respond within 2-3 business days.
                </p>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="btn-primary text-xs font-semibold px-5 py-2 mt-2"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                {applyStatus === 'error' && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200">
                    Please fill in your name, email, and phone number.
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={applyData.name}
                    onChange={(e) => setApplyData({ ...applyData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md outline-none"
                    placeholder="e.g. Anand Varma"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={applyData.email}
                      onChange={(e) => setApplyData({ ...applyData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md outline-none"
                      placeholder="anand@example.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={applyData.phone}
                      onChange={(e) => setApplyData({ ...applyData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">LinkedIn Profile or Portfolio URL</label>
                  <input
                    type="url"
                    value={applyData.linkedin}
                    onChange={(e) => setApplyData({ ...applyData, linkedin: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md outline-none"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Summary / Current Stack</label>
                  <textarea
                    rows={2}
                    value={applyData.notes}
                    onChange={(e) => setApplyData({ ...applyData, notes: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md outline-none"
                    placeholder="Briefly highlight years of experience, primary framework, notice period..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={applyStatus === 'loading'}
                    className="btn-primary w-full text-xs font-semibold py-2.5 justify-center"
                  >
                    {applyStatus === 'loading' ? 'Submitting...' : 'Submit Profile'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

