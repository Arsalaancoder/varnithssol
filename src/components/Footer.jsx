import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { siteData } from '../data/siteData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#031E3D] text-white pt-16 pb-8 border-t border-[#063568]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand & Registered Office Column (Col-span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/and" className="inline-block">
              <img
                src="/assets/varnith-logo-white-ref.svg"
                alt="Varnith Technologies Private Limited"
                className="h-9 w-auto"
              />
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Empowering technology organizations through strategic talent acquisition, and helping ambitious professionals grow through industry-aligned IT training.
            </p>

            <div className="pt-2 space-y-2 text-xs text-gray-300 border-t border-white/10 max-w-sm">
              <p className="font-semibold text-white">Varnith Technologies Private Limited</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                <span>1-90/B/C/1, Flat No. 102, Bhanu Elite, Madhapur, Shaikpet, Hyderabad – 500081, Telangana, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <a href={`tel:${siteData.brand.rawPhone}`} className="hover:text-white transition-colors">
                  {siteData.brand.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <a href={`mailto:${siteData.brand.email}`} className="hover:text-white transition-colors">
                  {siteData.brand.email}
                </a>
              </p>
              <p className="text-[11px] text-gray-400 pt-1">CIN: U62013TS2026PTC223247</p>
            </div>
          </div>

          {/* Quick Links Column (Col-span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/and" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/and/about" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/and/why-us" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>Why Choose Us</span>
                </Link>
              </li>
              <li>
                <Link to="/and/testimonials" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link to="/and/contact" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* HR Consulting Links Column (Col-span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              HR Consulting
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/and/hr-services" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>Talent Acquisition</span>
                </Link>
              </li>
              <li>
                <Link to="/and/hr-services" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>Executive Search</span>
                </Link>
              </li>
              <li>
                <Link to="/and/hr-services" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>Contract Staffing</span>
                </Link>
              </li>
              <li>
                <Link to="/and/hr-services" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>HR Advisory & Strategy</span>
                </Link>
              </li>
              <li>
                <Link to="/and/hr-services" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>Recruitment Outsourcing</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Training Links Column (Col-span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Training Tracks
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/and/courses/sap-basis-security" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>SAP Basis Security</span>
                </Link>
              </li>
              <li>
                <Link to="/and/courses/sap-grc" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>SAP GRC 12.0</span>
                </Link>
              </li>
              <li>
                <Link to="/and/courses/devops" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>DevOps & Cloud</span>
                </Link>
              </li>
              <li>
                <Link to="/and/courses/testing" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>Quality Engineering / QA</span>
                </Link>
              </li>
              <li>
                <Link to="/and/courses/python" className="hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>Python & Automation</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {CURRENT_YEAR} Varnith Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/and/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/and/contact" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="/and/contact" className="hover:text-white transition-colors">
              Grievance Redressal
            </Link>
            <Link to="/and/contact" className="hover:text-white transition-colors">
              Corporate Governance
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
