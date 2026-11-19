import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Phone, Mail, FileText, Download, CheckCircle2, Send } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function InnerPageLayout({
  title,
  subtitle,
  breadcrumb = [],
  activePath,
  bannerImage = '/assets/cta_bg.jpg',
  children
}) {
  const location = useLocation();
  const currentPath = activePath || location.pathname;

  // Sidebar form state
  const [quickForm, setQuickForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!quickForm.name || !quickForm.email) return;
    setSubmitting(true);
    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem('varnith_quick_inquiries') || '[]');
      stored.push({ ...quickForm, date: new Date().toISOString(), path: currentPath });
      localStorage.setItem('varnith_quick_inquiries', JSON.stringify(stored));
      setSubmitting(false);
      setSubmitted(true);
      setQuickForm({ name: '', email: '', phone: '', message: '' });
    }, 400);
  };

  // Sidebar navigation items
  const hrLinks = [
    { label: 'Talent Acquisition', href: '/and/hr-services/recruitment' },
    { label: 'Staffing & RPO Solutions', href: '/and/hr-services/staffing' },
    { label: 'HR Consulting & Advisory', href: '/and/hr-services/hr-consulting' },
    { label: 'Payroll & HR Administration', href: '/and/hr-services/payroll' },
    { label: 'Workforce Management', href: '/and/hr-services/workforce-management' },
    { label: 'HR Strategy & Organizational Support', href: '/and/hr-services/hr-strategy' },
  ];

  const trainingLinks = [
    { label: 'SAP Basis Security', href: '/and/courses/sap-basis-security' },
    { label: 'SAP GRC & Access Control', href: '/and/courses/sap-grc' },
    { label: 'DevOps & Cloud Engineering', href: '/and/courses/devops' },
    { label: 'Quality Engineering & Testing', href: '/and/courses/testing' },
    { label: 'Python Full-Stack & Automation', href: '/and/courses/python' },
    { label: 'College Engagements & Campus Drives', href: '/and/courses' },
  ];

  const generalLinks = [
    { label: 'About Varnith Technologies', href: '/and/about' },
    { label: 'Why Choose Us', href: '/and/why-us' },
    { label: 'Client Testimonials', href: '/and/testimonials' },
    { label: 'Contact Us', href: '/and/contact' },
  ];

  const isCurrentActive = (href) => {
    if (currentPath === href) return true;
    if (href !== '/and' && currentPath.endsWith(href.replace('/and', ''))) return true;
    return false;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Full-Width Photographic Title Banner with Dark Overlay matching template */}
      <section className="relative bg-[#16191D] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#2A3036]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerImage}
            alt="Title Banner Background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/90 to-[#111827]/75" />
          {/* Subtle green geometric decorative shape from template */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#063568]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
              <Link to="/and" className="hover:text-white transition-colors">Home</Link>
              {breadcrumb.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3 h-3 text-[#063568]" />
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#063568] font-semibold">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed pt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 2. Main Two-Column Layout matching Template Slide 3 */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Sidebar (Col-span 4) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Category 1: HR Services Menu */}
              <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-lg p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                  <h3 className="text-base font-bold text-[#16191D] uppercase tracking-wide">
                    HR Consulting Services
                  </h3>
                  <span className="text-[11px] font-semibold text-[#063568] bg-[#F2F3FC] px-2 py-0.5 rounded">
                    Practice
                  </span>
                </div>

                <div className="space-y-2">
                  {hrLinks.map((item, idx) => {
                    const active = isCurrentActive(item.href);
                    return (
                      <Link
                        key={idx}
                        to={item.href}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-semibold transition-all ${
                          active
                            ? 'bg-[#063568] text-white shadow-xs'
                            : 'bg-white hover:bg-[#F2F3FC] text-[#16191D] hover:text-[#063568] border border-[#E5E7EB]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className={`w-4 h-4 shrink-0 ${active ? 'text-white' : 'text-[#5E6874]'}`} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Category 2: IT Training Tracks */}
              <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-lg p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                  <h3 className="text-base font-bold text-[#16191D] uppercase tracking-wide">
                    Training & Development
                  </h3>
                  <span className="text-[11px] font-semibold text-[#063568] bg-[#F2F3FC] px-2 py-0.5 rounded">
                    Programs
                  </span>
                </div>

                <div className="space-y-2">
                  {trainingLinks.map((item, idx) => {
                    const active = isCurrentActive(item.href);
                    return (
                      <Link
                        key={idx}
                        to={item.href}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-semibold transition-all ${
                          active
                            ? 'bg-[#063568] text-white shadow-xs'
                            : 'bg-white hover:bg-[#F2F3FC] text-[#16191D] hover:text-[#063568] border border-[#E5E7EB]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className={`w-4 h-4 shrink-0 ${active ? 'text-white' : 'text-[#5E6874]'}`} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Category 3: Corporate & Quick Links */}
              <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-lg p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                  <h3 className="text-base font-bold text-[#16191D] uppercase tracking-wide">
                    Corporate Links
                  </h3>
                  <span className="text-[11px] font-semibold text-[#5E6874] bg-white px-2 py-0.5 rounded border border-[#E5E7EB]">
                    Overview
                  </span>
                </div>

                <div className="space-y-2">
                  {generalLinks.map((item, idx) => {
                    const active = isCurrentActive(item.href);
                    return (
                      <Link
                        key={idx}
                        to={item.href}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-semibold transition-all ${
                          active
                            ? 'bg-[#063568] text-white shadow-xs'
                            : 'bg-white hover:bg-[#F2F3FC] text-[#16191D] hover:text-[#063568] border border-[#E5E7EB]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className={`w-4 h-4 shrink-0 ${active ? 'text-white' : 'text-[#5E6874]'}`} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact Box matching Template Sidebar */}
              <div className="bg-white border-2 border-[#063568]/30 rounded-lg p-6 shadow-xs space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#063568] uppercase tracking-wider">
                    Immediate Support
                  </span>
                  <h4 className="text-lg font-bold text-[#16191D]">
                    Quick Contact
                  </h4>
                  <p className="text-xs text-[#5E6874]">
                    Have a question about hiring or upskilling? Send our advisory team a direct note.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-[#F2F3FC] border border-[#063568] rounded-md p-4 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-[#063568] mx-auto" />
                    <p className="text-xs font-bold text-[#16191D]">Message Received!</p>
                    <p className="text-xs text-[#5E6874]">
                      Our corporate team in Madhapur will call or email you within 2 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#063568] font-semibold underline mt-2"
                    >
                      Send another query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={quickForm.name}
                        onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#063568] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Corporate Email *"
                        value={quickForm.email}
                        onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#063568] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={quickForm.phone}
                        onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#063568] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={3}
                        placeholder="How can we help you?"
                        value={quickForm.message}
                        onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-[#E5E7EB] rounded-md focus:border-[#063568] focus:outline-hidden resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full btn-green justify-center text-xs py-2.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}

                <div className="pt-3 border-t border-[#E5E7EB] space-y-1.5 text-xs text-[#5E6874]">
                  <a
                    href={`tel:${siteData.brand.rawPhone}`}
                    className="flex items-center gap-2 hover:text-[#063568] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#063568]" />
                    <span>{siteData.brand.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteData.brand.email}`}
                    className="flex items-center gap-2 hover:text-[#063568] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#063568]" />
                    <span>{siteData.brand.email}</span>
                  </a>
                </div>
              </div>

              {/* Download Brochure Widget */}
              <div className="bg-[#16191D] text-white rounded-lg p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-[#063568] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      Corporate Profile & Brochure
                    </h5>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Download our full capability deck & verified training syllabi (PDF).
                    </p>
                  </div>
                </div>
                <a
                  href={`tel:${siteData.brand.rawPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#063568]" />
                  <span>Request PDF via WhatsApp / Email</span>
                </a>
              </div>

            </aside>

            {/* Right Main Content (Col-span 8) */}
            <main className="lg:col-span-8">
              {children}
            </main>

          </div>
        </div>
      </section>
    </div>
  );
}
