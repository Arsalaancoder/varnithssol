import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, ArrowRight, ShieldCheck, Briefcase, GraduationCap, Building2, PhoneCall } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hrDropdownOpen, setHrDropdownOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const location = useLocation();

  const hrTimeout = useRef(null);
  const trainingTimeout = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setHrDropdownOpen(false);
    setTrainingDropdownOpen(false);
  }, [location.pathname]);

  const handleHrEnter = () => {
    if (hrTimeout.current) clearTimeout(hrTimeout.current);
    setHrDropdownOpen(true);
    setTrainingDropdownOpen(false);
  };
  const handleHrLeave = () => {
    hrTimeout.current = setTimeout(() => setHrDropdownOpen(false), 120);
  };

  const handleTrainingEnter = () => {
    if (trainingTimeout.current) clearTimeout(trainingTimeout.current);
    setTrainingDropdownOpen(true);
    setHrDropdownOpen(false);
  };
  const handleTrainingLeave = () => {
    trainingTimeout.current = setTimeout(() => setTrainingDropdownOpen(false), 120);
  };

  const isHome = location.pathname === '/';

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${isHome ? 'bg-[#EDF3F5] border-b border-[#D8E3E8]' : 'bg-white/95 backdrop-blur-xs border-b border-slate-200'}`}>
      {/* Top Utility Bar (Default Button Color & Crisp White Text) */}
      <div className="hidden lg:block bg-[#056EB5] border-b border-[#045992]/60 py-2 px-4 sm:px-6 lg:px-8 text-xs text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6 text-white/95">
            <span className="font-medium">Hyderabad, India • Serving Software Teams</span>
            <span className="hidden xl:inline text-white/60">•</span>
            <a href={`tel:${siteData.brand.rawPhone}`} className="hover:text-white transition-colors">
              Phone: {siteData.brand.phone}
            </a>
            <span className="hidden xl:inline text-white/60">•</span>
            <a href={`mailto:${siteData.brand.email}`} className="hover:text-white transition-colors">
              {siteData.brand.email}
            </a>
          </div>
          <div className="flex items-center space-x-5">
            <Link to="/contact" className="text-white hover:text-white/85 font-semibold transition-colors underline underline-offset-2 decoration-white/40 hover:decoration-white">
              Support & Inquiries
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          
          {/* Left: Brand Logo */}
          <Link to="/" className="flex items-center shrink-0 py-2 focus:outline-none">
            <img
              src="/assets/varnith-logo-ref.svg"
              alt="Varnith Technologies Private Limited"
              className="h-9 sm:h-10 w-auto"
            />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 font-['Familjen_Grotesk'] text-[15px]">
            {/* Home */}
            <Link
              to="/"
              className={`px-3 py-2 font-semibold rounded-md transition-colors ${
                isActive('/') ? 'text-[#0D5C91] bg-white/60' : 'text-slate-700 hover:text-[#0D5C91] hover:bg-black/5'
              }`}
            >
              Home
            </Link>

            {/* HR Consulting with Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleHrEnter}
              onMouseLeave={handleHrLeave}
            >
              <Link
                to="/hire"
                className={`inline-flex items-center gap-1 px-3 py-2 font-semibold rounded-md transition-colors ${
                  isActive('/hire') ? 'text-[#0D5C91] bg-white/60' : 'text-slate-700 hover:text-[#0D5C91] hover:bg-black/5'
                }`}
              >
                <span>HR Consulting</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${hrDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Dropdown Menu */}
              {hrDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-72 bg-white rounded-lg shadow-lg border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    HR & Hiring Services
                  </div>
                  {siteData.servicesHR.map((srv) => (
                    <Link
                      key={srv.id}
                      to={srv.href}
                      className="block px-3 py-2 text-sm text-slate-700 hover:text-[#0A3857] hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-medium">{srv.title}</div>
                      <div className="text-xs text-slate-500 line-clamp-1">{srv.tagline}</div>
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-2 pt-2 px-3">
                    <Link
                      to="/hire"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127DC4] hover:text-[#0A3857]"
                    >
                      <span>Explore all HR consulting</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Training & Development with Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleTrainingEnter}
              onMouseLeave={handleTrainingLeave}
            >
              <Link
                to="/academy"
                className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive('/academy') ? 'text-[#0A3857] bg-slate-100/70' : 'text-slate-700 hover:text-[#0A3857] hover:bg-slate-50'
                }`}
              >
                <span>Training & Development</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${trainingDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Dropdown Menu */}
              {trainingDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-72 bg-white rounded-lg shadow-lg border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Programmes & Tracks
                  </div>
                  <Link
                    to="/academy/sap-basis-security"
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-[#0A3857] hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-medium">SAP Basis Security</div>
                    <div className="text-xs text-slate-500">Live online system administration & roles</div>
                  </Link>
                  <Link
                    to="/academy/sap-grc"
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-[#0A3857] hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-medium">SAP GRC</div>
                    <div className="text-xs text-slate-500">Access control, risk governance & audit</div>
                  </Link>
                  <Link
                    to="/academy/college-programmes"
                    className="block px-3 py-2 text-sm text-slate-700 hover:text-[#0A3857] hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-medium">College Engagements</div>
                    <div className="text-xs text-slate-500">Practical career-readiness workshops</div>
                  </Link>
                  <div className="border-t border-slate-100 mt-2 pt-2 px-3">
                    <Link
                      to="/academy"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#127DC4] hover:text-[#0A3857]"
                    >
                      <span>View all programmes</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Find a Role */}
            <Link
              to="/careers"
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                isActive('/careers') ? 'text-[#0A3857] bg-slate-100/70' : 'text-slate-700 hover:text-[#0A3857] hover:bg-slate-50'
              }`}
            >
              Find a Role
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                isActive('/about') ? 'text-[#0A3857] bg-slate-100/70' : 'text-slate-700 hover:text-[#0A3857] hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                isActive('/contact') ? 'text-[#0A3857] bg-slate-100/70' : 'text-slate-700 hover:text-[#0A3857] hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-['Familjen_Grotesk'] text-xs font-medium text-white bg-[#056EB5] hover:bg-[#045992] rounded-full px-5 py-2.5 transition-all shadow-xs"
            >
              Talk to Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-[#0A3857] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-3 pb-6 space-y-2">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0A3857] transition-colors"
          >
            Home
          </Link>

          <Link
            to="/hire"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0A3857] border-t border-slate-100 transition-colors"
          >
            HR Consulting
          </Link>

          <Link
            to="/academy"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0A3857] border-t border-slate-100 transition-colors"
          >
            Training &amp; Development
          </Link>

          <Link
            to="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0A3857] border-t border-slate-100 transition-colors"
          >
            Find a Role
          </Link>

          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0A3857] border-t border-slate-100 transition-colors"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0A3857] border-t border-slate-100 transition-colors"
          >
            Contact
          </Link>

          <div className="border-t border-slate-100 pt-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-2.5 text-sm font-semibold text-white bg-[#056EB5] hover:bg-[#045992] rounded-full transition-colors shadow-xs"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

