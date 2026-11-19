import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white pt-10 pb-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#0A3857]">Home</Link>
            <span>/</span>
            <span className="text-[#0A3857] font-semibold">Privacy Policy</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A3857] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500">
              Last updated: November 2026 • Prepared in alignment with India’s Digital Personal Data Protection Act, 2023.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 shadow-2xs space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">1. Who We Are</h2>
              <p>
                <strong>{siteData.brand.legalName}</strong> (CIN: {siteData.brand.cin}), with registered office at {siteData.brand.address.full}. This policy describes how we collect, store, and process personal data collected through varnithglobal.com.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">2. What Information We Collect</h2>
              <p>
                We collect personal information that you provide voluntarily when submitting requests across our platform, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Contact details: Name, email address, phone number, company name.</li>
                <li>Hiring specifications: Role titles, job descriptions, compensation ranges.</li>
                <li>Learner and training inquiries: Current role, academic course, educational background.</li>
                <li>Candidate profiles: Resume details, employment history, technical skill sets.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">3. Why We Use It</h2>
              <p>
                We use your information strictly for legitimate business purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>To respond to your hiring requirements, training inquiries, or general questions.</li>
                <li>To evaluate candidates for active software engineering job openings with your consent.</li>
                <li>To deliver live online SAP Basis Security and SAP GRC training sessions.</li>
                <li>To maintain necessary records in compliance with Indian corporate and statutory laws.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">4. Who We Share It With</h2>
              <p>
                We never sell, rent, or trade your personal data. Candidate profiles are shared only with vetted partner companies after obtaining explicit consent. We may disclose details to statutory law enforcement authorities if required under Indian law.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">5. Data Retention &amp; Security</h2>
              <p>
                We retain personal information only for the duration necessary to fulfill the requested service or statutory compliance obligations. We enforce reasonable security practices to safeguard data against unauthorized access, loss, or misuse.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">6. Your Rights</h2>
              <p>
                You have the right to request access to the personal data we hold about you, request corrections, or ask for deletion of your profile by emailing <strong>info@varnithglobal.com</strong>.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0A3857]">7. Grievance Redressal</h2>
              <p>
                If you have questions or concerns regarding our privacy practices or personal data processing, please visit our <Link to="/grievance" className="text-[#127DC4] font-semibold underline">Grievance Redressal</Link> page.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

