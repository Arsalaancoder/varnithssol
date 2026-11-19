import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hrDropdownOpen, setHrDropdownOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [mobileHrOpen, setMobileHrOpen] = useState(false);
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(false);

  const hrTimeout = useRef(null);
  const trainingTimeout = useRef(null);
  const location = useLocation();

  // Adjust menus during render on route transition
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
    setHrDropdownOpen(false);
    setTrainingDropdownOpen(false);
  }

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

  const isActive = (path) => {
    if (path === '/and' || path === '/') {
      return location.pathname === '/and' || location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Left: Varnith Technologies Logo */}
          <Link to="/and" className="flex items-center shrink-0 py-1.5">
            <img
              src="/assets/varnith-logo-ref.svg"
              alt="Varnith Technologies Private Limited"
              className="h-8 sm:h-9 w-auto"
            />
          </Link>

          {/* Center: Desktop Navigation Links matching Acuvic */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Home */}
            <Link
              to="/and"
              className={`text-[13px] xl:text-sm font-bold transition-colors py-2 relative ${
                isActive('/and') ? 'text-[#063568]' : 'text-[#171717] hover:text-[#063568]'
              }`}
            >
              <span>Home</span>
              {isActive('/and') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#063568]" />
              )}
            </Link>

            {/* About */}
            <Link
              to="/and/about"
              className={`text-[13px] xl:text-sm font-bold transition-colors py-2 relative ${
                isActive('/and/about') ? 'text-[#063568]' : 'text-[#171717] hover:text-[#063568]'
              }`}
            >
              <span>About</span>
              {isActive('/and/about') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#063568]" />
              )}
            </Link>

            {/* HR Consulting Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleHrEnter}
              onMouseLeave={handleHrLeave}
            >
              <Link
                to="/and/hr-services"
                className={`inline-flex items-center gap-1 text-[13px] xl:text-sm font-bold transition-colors py-2 relative ${
                  isActive('/and/hr-services') ? 'text-[#063568]' : 'text-[#171717] hover:text-[#063568]'
                }`}
              >
                <span>HR Consulting</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${hrDropdownOpen ? 'rotate-180 text-[#063568]' : 'text-[#5E6874]'}`} />
                {isActive('/and/hr-services') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#063568]" />
                )}
              </Link>

              {hrDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-md shadow-xl border border-[#E5E7EB] py-2 mt-1 animate-fadeIn">
                  <div className="px-4 py-2 text-[11px] font-bold text-[#5E6874] uppercase tracking-wider border-b border-[#E5E7EB] mb-1 bg-[#F8F9FA]">
                    Enterprise HR Practice
                  </div>
                  {siteData.hrServices.map((svc) => (
                    <Link
                      key={svc.id}
                      to={`/and/hr-services/${svc.slug}`}
                      className="block px-4 py-2.5 text-sm text-[#16191D] hover:bg-[#F2F3FC] hover:text-[#063568] transition-colors"
                    >
                      <div className="font-semibold">{svc.title}</div>
                      <div className="text-xs text-[#5E6874] truncate">{svc.shortDescription || svc.description}</div>
                    </Link>
                  ))}
                  <div className="border-t border-[#E5E7EB] mt-1 pt-2 px-4 pb-1">
                    <Link
                      to="/and/hr-services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063568] hover:text-[#04274d]"
                    >
                      <span>Explore All HR Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Training & Development Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleTrainingEnter}
              onMouseLeave={handleTrainingLeave}
            >
              <Link
                to="/and/courses"
                className={`inline-flex items-center gap-1 text-[13px] xl:text-sm font-bold transition-colors py-2 relative ${
                  isActive('/and/courses') ? 'text-[#063568]' : 'text-[#171717] hover:text-[#063568]'
                }`}
              >
                <span>Training & Development</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${trainingDropdownOpen ? 'rotate-180 text-[#063568]' : 'text-[#5E6874]'}`} />
                {isActive('/and/courses') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#063568]" />
                )}
              </Link>

              {trainingDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-md shadow-xl border border-[#E5E7EB] py-2 mt-1 animate-fadeIn">
                  <div className="px-4 py-2 text-[11px] font-bold text-[#5E6874] uppercase tracking-wider border-b border-[#E5E7EB] mb-1 bg-[#F8F9FA]">
                    Technical Training Tracks
                  </div>
                  {siteData.courses.map((course) => (
                    <Link
                      key={course.id}
                      to={`/and/courses/${course.slug}`}
                      className="block px-4 py-2.5 text-sm text-[#16191D] hover:bg-[#F2F3FC] hover:text-[#063568] transition-colors"
                    >
                      <div className="font-semibold">{course.title}</div>
                      <div className="text-xs text-[#5E6874]">{course.category} • {course.duration}</div>
                    </Link>
                  ))}
                  <div className="border-t border-[#E5E7EB] mt-1 pt-2 px-4 pb-1">
                    <Link
                      to="/and/courses"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063568] hover:text-[#04274d]"
                    >
                      <span>Explore All Programs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Find a Role (or Why Us) */}
            <Link
              to="/and/why-us"
              className={`text-[13px] xl:text-sm font-bold transition-colors py-2 relative ${
                isActive('/and/why-us') ? 'text-[#063568]' : 'text-[#171717] hover:text-[#063568]'
              }`}
            >
              <span>Why Us</span>
              {isActive('/and/why-us') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#063568]" />
              )}
            </Link>

            {/* Contact */}
            <Link
              to="/and/contact"
              className={`text-[13px] xl:text-sm font-bold transition-colors py-2 relative ${
                isActive('/and/contact') ? 'text-[#063568]' : 'text-[#171717] hover:text-[#063568]'
              }`}
            >
              <span>Contact</span>
              {isActive('/and/contact') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#063568]" />
              )}
            </Link>
          </nav>

          {/* Right Action Buttons matching Template: Client Login + Talk to Us */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/and/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5E6874] hover:text-[#063568] transition-colors"
            >
              <User className="w-3.5 h-3.5" />
              <span>Client Login</span>
            </Link>

            <Link
              to="/and/contact"
              className="bg-[#063568] hover:bg-[#04274d] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-sm transition-colors shadow-xs"
            >
              Talk to Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#16191D] hover:bg-[#F8F9FA] rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#063568]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white px-4 py-5 space-y-3">
          <Link
            to="/and"
            className="block py-2 text-base font-semibold text-[#16191D] hover:text-[#063568]"
          >
            Home
          </Link>

          <Link
            to="/and/about"
            className="block py-2 text-base font-semibold text-[#16191D] hover:text-[#063568]"
          >
            About
          </Link>

          {/* Mobile HR Services Accordion */}
          <div>
            <button
              onClick={() => setMobileHrOpen(!mobileHrOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-semibold text-[#16191D]"
            >
              <span>HR Consulting</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileHrOpen ? 'rotate-180 text-[#063568]' : ''}`} />
            </button>
            {mobileHrOpen && (
              <div className="pl-4 py-1 space-y-2 border-l-2 border-[#063568] mt-1 bg-[#F8F9FA] rounded-r-md">
                <Link
                  to="/and/hr-services"
                  className="block text-sm font-bold text-[#063568] py-1"
                >
                  All HR Services →
                </Link>
                {siteData.hrServices.map((svc) => (
                  <Link
                    key={svc.id}
                    to={`/and/hr-services/${svc.slug}`}
                    className="block text-sm text-[#5E6874] hover:text-[#063568] py-1"
                  >
                    {svc.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Training Accordion */}
          <div>
            <button
              onClick={() => setMobileTrainingOpen(!mobileTrainingOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-semibold text-[#16191D]"
            >
              <span>Training & Development</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileTrainingOpen ? 'rotate-180 text-[#063568]' : ''}`} />
            </button>
            {mobileTrainingOpen && (
              <div className="pl-4 py-1 space-y-2 border-l-2 border-[#063568] mt-1 bg-[#F8F9FA] rounded-r-md">
                <Link
                  to="/and/courses"
                  className="block text-sm font-bold text-[#063568] py-1"
                >
                  All Training Programmes →
                </Link>
                {siteData.courses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/and/courses/${course.slug}`}
                    className="block text-sm text-[#5E6874] hover:text-[#063568] py-1"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/and/why-us"
            className="block py-2 text-base font-semibold text-[#16191D] hover:text-[#063568]"
          >
            Why Us
          </Link>

          <Link
            to="/and/contact"
            className="block py-2 text-base font-semibold text-[#16191D] hover:text-[#063568]"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-[#E5E7EB] flex flex-col gap-2.5">
            <Link
              to="/and/contact"
              className="btn-green w-full text-center"
            >
              Talk to Us
            </Link>
            <a
              href={`tel:${siteData.brand.rawPhone}`}
              className="btn-outline w-full text-center"
            >
              Call {siteData.brand.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
