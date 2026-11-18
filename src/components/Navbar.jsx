import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
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

  const isActive = (path) => {
    if (path === '/and') {
      return location.pathname === '/and' || location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e3e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/and" className="flex items-center shrink-0 py-2">
            <img
              src="/assets/varnith-logo-ref.svg"
              alt="Varnith Technologies Private Limited"
              className="h-8 sm:h-9 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {/* Home */}
            <Link
              to="/and"
              className={`text-[15px] font-medium transition-colors ${
                isActive('/and') ? 'text-[#1e5bc6] font-semibold' : 'text-[#00184a] hover:text-[#1e5bc6]'
              }`}
            >
              Home
            </Link>

            {/* HR Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleHrEnter}
              onMouseLeave={handleHrLeave}
            >
              <Link
                to="/and/hr-services"
                className={`inline-flex items-center gap-1 text-[15px] font-medium transition-colors py-2 ${
                  isActive('/and/hr-services') ? 'text-[#1e5bc6] font-semibold' : 'text-[#00184a] hover:text-[#1e5bc6]'
                }`}
              >
                <span>HR Consulting</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${hrDropdownOpen ? 'rotate-180 text-[#1e5bc6]' : 'text-[#5b6b85]'}`} />
              </Link>

              {hrDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-lg border border-[#e3e8f0] py-2 mt-1">
                  <div className="px-3.5 py-1.5 text-[11px] font-bold text-[#5b6b85] uppercase tracking-wider border-b border-[#e3e8f0] mb-1">
                    HR Practice Offerings
                  </div>
                  {siteData.hrServices.map((svc) => (
                    <Link
                      key={svc.id}
                      to={`/and/hr-services/${svc.slug}`}
                      className="block px-3.5 py-2 text-sm text-[#00184a] hover:bg-[#f7f9fc] hover:text-[#1e5bc6] transition-colors"
                    >
                      <div className="font-medium">{svc.title}</div>
                      <div className="text-xs text-[#5b6b85] truncate">{svc.shortDesc}</div>
                    </Link>
                  ))}
                  <div className="border-t border-[#e3e8f0] mt-1 pt-1">
                    <Link
                      to="/and/hr-services"
                      className="block px-3.5 py-1.5 text-xs font-semibold text-[#1e5bc6] hover:underline"
                    >
                      View All HR Practices →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Training Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleTrainingEnter}
              onMouseLeave={handleTrainingLeave}
            >
              <Link
                to="/and/courses"
                className={`inline-flex items-center gap-1 text-[15px] font-medium transition-colors py-2 ${
                  isActive('/and/courses') ? 'text-[#1e5bc6] font-semibold' : 'text-[#00184a] hover:text-[#1e5bc6]'
                }`}
              >
                <span>Training & Development</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${trainingDropdownOpen ? 'rotate-180 text-[#1e5bc6]' : 'text-[#5b6b85]'}`} />
              </Link>

              {trainingDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-lg border border-[#e3e8f0] py-2 mt-1">
                  <div className="px-3.5 py-1.5 text-[11px] font-bold text-[#5b6b85] uppercase tracking-wider border-b border-[#e3e8f0] mb-1">
                    Programmes & Tracks
                  </div>
                  {siteData.courses.map((course) => (
                    <Link
                      key={course.id}
                      to={`/and/courses/${course.slug}`}
                      className="block px-3.5 py-2 text-sm text-[#00184a] hover:bg-[#f7f9fc] hover:text-[#1e5bc6] transition-colors"
                    >
                      <div className="font-medium">{course.title}</div>
                      <div className="text-xs text-[#5b6b85]">{course.category} • {course.duration}</div>
                    </Link>
                  ))}
                  <div className="border-t border-[#e3e8f0] mt-1 pt-1">
                    <Link
                      to="/and/courses"
                      className="block px-3.5 py-1.5 text-xs font-semibold text-[#1e5bc6] hover:underline"
                    >
                      View All Programmes →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              to="/and/about"
              className={`text-[15px] font-medium transition-colors ${
                isActive('/and/about') ? 'text-[#1e5bc6] font-semibold' : 'text-[#00184a] hover:text-[#1e5bc6]'
              }`}
            >
              About
            </Link>

            {/* Why Us */}
            <Link
              to="/and/why-us"
              className={`text-[15px] font-medium transition-colors ${
                isActive('/and/why-us') ? 'text-[#1e5bc6] font-semibold' : 'text-[#00184a] hover:text-[#1e5bc6]'
              }`}
            >
              Why Us
            </Link>

            {/* Testimonials */}
            <Link
              to="/and/testimonials"
              className={`text-[15px] font-medium transition-colors ${
                isActive('/and/testimonials') ? 'text-[#1e5bc6] font-semibold' : 'text-[#00184a] hover:text-[#1e5bc6]'
              }`}
            >
              Testimonials
            </Link>

            {/* Contact */}
            <Link
              to="/and/contact"
              className={`text-[15px] font-medium transition-colors ${
                isActive('/and/contact') ? 'text-[#1e5bc6] font-semibold' : 'text-[#00184a] hover:text-[#1e5bc6]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons matching reference */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${siteData.brand.rawPhone}`}
              className="text-xs font-medium text-[#5b6b85] hover:text-[#00184a] px-2 py-1 inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#1e5bc6]" />
              <span>{siteData.brand.phone}</span>
            </a>

            <Link
              to="/and/contact"
              className="btn-orange"
            >
              Talk to us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#00184a] hover:bg-[#f7f9fc] rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e3e8f0] bg-white px-4 py-5 space-y-3">
          <Link
            to="/and"
            className="block py-2 text-base font-medium text-[#00184a] hover:text-[#1e5bc6]"
          >
            Home
          </Link>

          {/* Mobile HR Services Accordion */}
          <div>
            <button
              onClick={() => setMobileHrOpen(!mobileHrOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-medium text-[#00184a]"
            >
              <span>HR Consulting</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileHrOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileHrOpen && (
              <div className="pl-4 py-1 space-y-2 border-l-2 border-[#1e5bc6]/20 mt-1">
                <Link
                  to="/and/hr-services"
                  className="block text-sm font-semibold text-[#1e5bc6] py-1"
                >
                  All HR Services →
                </Link>
                {siteData.hrServices.map((svc) => (
                  <Link
                    key={svc.id}
                    to={`/and/hr-services/${svc.slug}`}
                    className="block text-sm text-[#5b6b85] hover:text-[#00184a] py-1"
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
              className="w-full flex items-center justify-between py-2 text-base font-medium text-[#00184a]"
            >
              <span>Training & Development</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileTrainingOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileTrainingOpen && (
              <div className="pl-4 py-1 space-y-2 border-l-2 border-[#f6650a]/20 mt-1">
                <Link
                  to="/and/courses"
                  className="block text-sm font-semibold text-[#f6650a] py-1"
                >
                  All Training Programmes →
                </Link>
                {siteData.courses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/and/courses/${course.slug}`}
                    className="block text-sm text-[#5b6b85] hover:text-[#00184a] py-1"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/and/about"
            className="block py-2 text-base font-medium text-[#00184a] hover:text-[#1e5bc6]"
          >
            About
          </Link>

          <Link
            to="/and/why-us"
            className="block py-2 text-base font-medium text-[#00184a] hover:text-[#1e5bc6]"
          >
            Why Us
          </Link>

          <Link
            to="/and/testimonials"
            className="block py-2 text-base font-medium text-[#00184a] hover:text-[#1e5bc6]"
          >
            Testimonials
          </Link>

          <Link
            to="/and/contact"
            className="block py-2 text-base font-medium text-[#00184a] hover:text-[#1e5bc6]"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-[#e3e8f0] flex flex-col gap-2.5">
            <Link
              to="/and/contact"
              className="btn-orange w-full text-center"
            >
              Talk to us
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
