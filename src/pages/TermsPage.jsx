import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white pt-10 pb-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#0A3857]">Home</Link>
            <span>/</span>
            <span className="text-[#0A3857] font-semibold">Terms of Use</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A3857] tracking-tight">
              Terms of Use
            </h1>
            <p className="text-sm text-slate-500">
              Last updated: November 2026 • Legal Terms of Service for Varnith Technologies Private Limited.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 shadow-2xs space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website at varnithglobal.com, you agree to comply with and be bound by these Terms of Use established by <strong>{siteData.brand.legalName}</strong>. If you do not agree, please do not use this website.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">2. Lawful Use of the Website</h2>
              <p>
                You may use this website strictly for lawful purposes, such as learning about our HR consulting offerings, inquiring about SAP training programmes, submitting college engagement requests, or applying for job openings. You agree not to submit fraudulent information, scrape site assets, or disrupt server operations.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">3. Intellectual Property</h2>
              <p>
                All text, graphics, logos, layouts, and code on this website are the proprietary intellectual property of Varnith Technologies Private Limited and are protected by applicable copyright and trademark laws.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">4. Programme Enquiries &amp; Fees</h2>
              <p>
                Submitting a course or syllabus enquiry does not constitute an admission agreement. Course schedules, curricula, and fees are finalized through formal enrollment agreements prior to cohort commencement.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">5. No Employment Guarantee</h2>
              <p>
                While Varnith Technologies connects qualifying learners with partnering software organisations and provides rigorous interview coaching, we do not make false promises or guaranteed employment claims.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">6. Governing Law &amp; Jurisdiction</h2>
              <p>
                These Terms of Use are governed by the laws of India. Any disputes arising in connection with this website shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">7. Contact Information</h2>
              <p>
                For legal inquiries regarding these terms, contact us at <strong>info@varnithglobal.com</strong> or write to our registered office: {siteData.brand.address.full}.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

