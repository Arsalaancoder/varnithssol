import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    const existing = JSON.parse(localStorage.getItem('varnith_newsletter') || '[]');
    existing.push({ email, date: new Date().toISOString() });
    localStorage.setItem('varnith_newsletter', JSON.stringify(existing));
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#00184a] text-white pt-14 pb-8 border-t border-[#00184a]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Registered Office Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/and" className="inline-block">
              <img
                src="/assets/varnith-logo-white-ref.svg"
                alt="Varnith Technologies Private Limited"
                className="h-8 w-auto"
              />
            </Link>

            <p className="text-sm text-[#a9b4c8] leading-relaxed max-w-sm">
              People and skills, under one roof. Made in Hyderabad, with care for every hire and every learner.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#a9b4c8] border-t border-white/10 max-w-sm">
              <p className="font-semibold text-white">Varnith Technologies Private Limited</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#93b4f0] shrink-0 mt-0.5" />
                <span>1-90/B/C/1, Flat No. 102, Bhanu Elite, Madhapur, Shaikpet, Hyderabad – 500081, Telangana, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#93b4f0] shrink-0" />
                <a href={`tel:${siteData.brand.rawPhone}`} className="hover:text-white transition-colors">
                  {siteData.brand.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#93b4f0] shrink-0" />
                <a href={`mailto:${siteData.brand.email}`} className="hover:text-white transition-colors">
                  {siteData.brand.email}
                </a>
              </p>
              <p className="text-[11px] text-white/50 pt-1">CIN: U62013TS2026PTC223247</p>
            </div>
          </div>

          {/* What We Do Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              What We Do
            </h3>
            <ul className="space-y-2 text-sm text-[#a9b4c8]">
              <li>
                <Link to="/and/hr-services" className="hover:text-white transition-colors">
                  HR Consulting & Sourcing
                </Link>
              </li>
              <li>
                <Link to="/and/hr-services/recruitment" className="hover:text-white transition-colors">
                  Talent Acquisition
                </Link>
              </li>
              <li>
                <Link to="/and/hr-services/staffing" className="hover:text-white transition-colors">
                  Contract Staffing & RPO
                </Link>
              </li>
              <li>
                <Link to="/and/courses" className="hover:text-white transition-colors">
                  Technical Training Division
                </Link>
              </li>
              <li>
                <Link to="/and/courses/sap-basis-security" className="hover:text-white transition-colors">
                  SAP Basis Security
                </Link>
              </li>
              <li>
                <Link to="/and/courses/sap-grc" className="hover:text-white transition-colors">
                  SAP GRC & Access Control
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-[#a9b4c8]">
              <li>
                <Link to="/and/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/and/why-us" className="hover:text-white transition-colors">
                  Why Varnith
                </Link>
              </li>
              <li>
                <Link to="/and/testimonials" className="hover:text-white transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link to="/and/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Updates Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Stay Informed
            </h3>
            <p className="text-xs text-[#a9b4c8] leading-relaxed">
              Updates on batch schedules, talent market intelligence, and enterprise hiring.
            </p>

            {subscribed ? (
              <div className="text-xs text-[#93b4f0] font-medium bg-white/10 p-2.5 rounded-lg border border-white/15">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#93b4f0]"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-lg bg-[#f6650a] hover:bg-[#c2410c] text-white text-xs font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a9b4c8]">
          <div>
            © {CURRENT_YEAR} Varnith Technologies Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/and/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/and/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/and/contact" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
