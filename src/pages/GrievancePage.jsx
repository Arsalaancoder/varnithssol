import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function GrievancePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white pt-10 pb-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-[#0A3857]">Home</Link>
            <span>/</span>
            <span className="text-[#0A3857] font-semibold">Grievance Redressal</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A3857] tracking-tight">
              Grievance Redressal
            </h1>
            <p className="text-base text-slate-600">
              If you have a concern about how we handle your personal data or our services, contact our grievance desk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 shadow-2xs space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A3857]">Grievance Officer</h2>
              <p>
                In accordance with India’s Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, the details for grievance redressal are provided below:
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-6 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Company</span>
                <span className="font-semibold text-slate-900">{siteData.brand.legalName}</span>
                <div className="text-xs text-slate-500 font-mono">CIN: {siteData.brand.cin}</div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Office Address</span>
                <span className="text-slate-700">{siteData.brand.address.full}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Email</span>
                  <a href={`mailto:${siteData.brand.email}`} className="text-[#127DC4] font-semibold">
                    {siteData.brand.email}
                  </a>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Contact Phone</span>
                  <a href={`tel:${siteData.brand.rawPhone}`} className="text-[#0A3857] font-semibold">
                    {siteData.brand.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A3857]">Resolution Timeline</h2>
              <p>
                We acknowledge receipt of all formal grievances within 48 business hours and investigate and resolve valid concerns within the period stipulated by applicable Indian laws.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Link to="/contact" className="btn-primary text-xs font-semibold">
                Contact Customer Support Desk
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

