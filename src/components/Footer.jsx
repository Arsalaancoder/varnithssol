import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Navigation, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-[#0A3857] text-white pt-16 pb-12 border-t border-[#07273D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          
          {/* Column 1: Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block focus:outline-none">
              <div className="bg-white p-2 rounded-md inline-block">
                <img
                  src="/assets/varnith-logo-ref.svg"
                  alt="Varnith Technologies Private Limited"
                  className="h-8 w-auto"
                />
              </div>
            </Link>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              {siteData.brand.tagline}
            </p>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              {siteData.brand.aboutShort}
            </p>
            
            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#127DC4] shrink-0 mt-0.5" />
                <div>
                  <span>{siteData.brand.address.full}</span>
                  <div className="mt-1">
                    <a
                      href={siteData.brand.address.mapDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#38BDF8] hover:text-white inline-flex items-center gap-1 text-[11px] font-semibold transition-colors"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#127DC4] shrink-0" />
                <a href={`tel:${siteData.brand.rawPhone}`} className="hover:text-white transition-colors">
                  {siteData.brand.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#127DC4] shrink-0" />
                <a href={`mailto:${siteData.brand.email}`} className="hover:text-white transition-colors">
                  {siteData.brand.email}
                </a>
              </div>
              <div className="text-slate-400">
                <span>CIN: {siteData.brand.cin}</span>
              </div>
            </div>
          </div>

          {/* Column 2: HR Consulting */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              HR Consulting
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/hire#talent-acquisition" className="hover:text-white transition-colors">
                  Talent Acquisition
                </Link>
              </li>
              <li>
                <Link to="/hire#rpo" className="hover:text-white transition-colors">
                  RPO Solutions
                </Link>
              </li>
              <li>
                <Link to="/hire#executive-hiring" className="hover:text-white transition-colors">
                  Executive Hiring
                </Link>
              </li>
              <li>
                <Link to="/hire#dei-hiring" className="hover:text-white transition-colors">
                  DE&I Hiring
                </Link>
              </li>
              <li>
                <Link to="/hire#talent-intelligence" className="hover:text-white transition-colors">
                  Talent Intelligence
                </Link>
              </li>
              <li>
                <Link to="/hire#hr-advisory" className="hover:text-white transition-colors">
                  HR Advisory
                </Link>
              </li>
              <li>
                <Link to="/hire#contract-staffing" className="hover:text-white transition-colors">
                  Contract Staffing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Training & Development */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Training & Academy
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/academy/sap-basis-security" className="hover:text-white transition-colors">
                  SAP Basis Security
                </Link>
              </li>
              <li>
                <Link to="/academy/sap-grc" className="hover:text-white transition-colors">
                  SAP GRC Access Control
                </Link>
              </li>
              <li>
                <Link to="/academy/college-programmes" className="hover:text-white transition-colors">
                  College Engagements
                </Link>
              </li>
              <li>
                <Link to="/academy#programmes" className="hover:text-white transition-colors">
                  Technology Training
                </Link>
              </li>
              <li>
                <Link to="/academy#how-it-works" className="hover:text-white transition-colors">
                  Career Development
                </Link>
              </li>
              <li>
                <Link to="/academy#batch-enquiry" className="hover:text-white transition-colors">
                  Batch & Syllabus Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Portal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Company & Roles
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Varnith
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Who We Hire For
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
            
            <div className="pt-3">
              <Link
                to="/hire"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127DC4] hover:text-white transition-colors"
              >
                <span>Hire with Varnith</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* Office Location & Map Strip */}
        <div className="py-10 border-b border-slate-700/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#07273D]/60 border border-slate-700/70 rounded-xl p-6 sm:p-8">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#127DC4]/20 text-[#38BDF8] rounded text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Our Office Location</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Varnith Technologies – Madhapur, Hyderabad
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {siteData.brand.address.full}
              </p>
              <div className="text-xs text-slate-400">
                Landmark: {siteData.brand.address.landmark}
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <a
                  href={siteData.brand.address.mapDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#127DC4] hover:bg-[#0f6aa7] text-white rounded-md font-semibold transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-400 font-medium">
                  {siteData.brand.hours}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 h-52 sm:h-56 w-full rounded-lg overflow-hidden border border-slate-700 shadow-md relative bg-slate-800">
              <iframe
                title="Varnith Technologies Office Location Map"
                src={siteData.brand.address.mapEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Varnith Technologies Private Limited. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="/grievance" className="hover:text-white transition-colors">
              Grievance Redressal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

