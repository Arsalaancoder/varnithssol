import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin, ChevronDown, ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hrDropdownOpen, setHrDropdownOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [mobileHrExpanded, setMobileHrExpanded] = useState(false);
  const [mobileTrainingExpanded, setMobileTrainingExpanded] = useState(false);

  const hrTimeoutRef = useRef(null);
  const trainingTimeoutRef = useRef(null);
  const location = useLocation();

  // Close menus on route change during render
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
    setHrDropdownOpen(false);
    setTrainingDropdownOpen(false);
  }

  const handleHrEnter = () => {
    if (hrTimeoutRef.current) clearTimeout(hrTimeoutRef.current);
    setHrDropdownOpen(true);
    setTrainingDropdownOpen(false);
  };

  const handleHrLeave = () => {
    hrTimeoutRef.current = setTimeout(() => {
      setHrDropdownOpen(false);
    }, 150);
  };

  const handleTrainingEnter = () => {
    if (trainingTimeoutRef.current) clearTimeout(trainingTimeoutRef.current);
    setTrainingDropdownOpen(true);
    setHrDropdownOpen(false);
  };

  const handleTrainingLeave = () => {
    trainingTimeoutRef.current = setTimeout(() => {
      setTrainingDropdownOpen(false);
    }, 150);
  };

  const isCurrentActive = (href) => {
    if (href === '/and') {
      return location.pathname === '/and' || location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Solid Opaque White Navbar with Agevia-inspired entrance & layout transitions */}
      <motion.header
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 py-3 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border-b border-stone-200/90"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Official Varnith Global Site Logo */}
          <Link
            to="/and"
            className="flex items-center group shrink-0"
            aria-label="Varnith Global Home"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              src="/assets/varnith_logo.jpg"
              alt="Varnith Global — IT Training & HR Solutions"
              className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply"
            />
          </Link>

          {/* Navigation Links in Center with Dropdown Menus */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4">
            <div className="px-2 py-1 rounded-full flex items-center gap-0.5 bg-[#F4F5EF] border border-[#183629]/10 shadow-inner">
              {/* HOME */}
              <Link
                to="/and"
                className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full whitespace-nowrap transition-colors duration-200 z-10 ${location.pathname === '/and' || location.pathname === '/'
                    ? 'text-[#F2C94C] font-bold'
                    : 'text-[#202923]/75 hover:text-[#183629]'
                  }`}
              >
                {(location.pathname === '/and' || location.pathname === '/') && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 bg-[#183629] rounded-full shadow-sm -z-10"
                  />
                )}
                <span>Home</span>
              </Link>

              {/* HR SERVICES (Priority 1) with Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleHrEnter}
                onMouseLeave={handleHrLeave}
              >
                <Link
                  to="/and/hr-services"
                  className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full whitespace-nowrap transition-colors duration-200 z-10 inline-flex items-center gap-1 ${location.pathname.startsWith('/and/hr-services')
                      ? 'text-[#F2C94C] font-bold'
                      : 'text-[#202923]/75 hover:text-[#183629]'
                    }`}
                >
                  {location.pathname.startsWith('/and/hr-services') && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 bg-[#183629] rounded-full shadow-sm -z-10"
                    />
                  )}
                  <span>HR Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${hrDropdownOpen ? 'rotate-180' : ''}`} />
                </Link>

                {/* HR Services Dropdown Menu */}
                <AnimatePresence>
                  {hrDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl p-3 shadow-xl border border-stone-200/90 z-50 space-y-1"
                    >
                      <div className="px-3 py-2 border-b border-stone-100 flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#737D73] font-mono">

                        </span>
                        <Briefcase className="w-3.5 h-3.5 text-[#DFAE22]" />
                      </div>

                      <div className="space-y-0.5 pt-1">
                        {siteData.hrServices.map((srv) => (
                          <Link
                            key={srv.id}
                            to={`/and/hr-services/${srv.slug}`}
                            className="p-2.5 rounded-xl hover:bg-[#F4F5EF] transition-colors flex items-center justify-between group block"
                          >
                            <div>
                              <p className="text-xs font-semibold text-[#183629] group-hover:text-[#DFAE22] transition-colors">
                                {srv.title}
                              </p>
                              <span className="text-[10px] text-[#737D73]">
                                Practice 0{srv.number} • {srv.badge}
                              </span>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#183629] transition-colors" />
                          </Link>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-stone-100 mt-1">
                        <Link
                          to="/and/hr-services"
                          className="w-full px-3 py-2 rounded-xl bg-[#183629] text-[#F2C94C] text-[11px] font-bold uppercase tracking-wider hover:bg-[#102A21] transition-colors flex items-center justify-between group"
                        >
                          <span>Explore All HR Services</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* TRAINING (Priority 2) with Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleTrainingEnter}
                onMouseLeave={handleTrainingLeave}
              >
                <Link
                  to="/and/courses"
                  className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full whitespace-nowrap transition-colors duration-200 z-10 inline-flex items-center gap-1 ${location.pathname.startsWith('/and/courses')
                      ? 'text-[#F2C94C] font-bold'
                      : 'text-[#202923]/75 hover:text-[#183629]'
                    }`}
                >
                  {location.pathname.startsWith('/and/courses') && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 bg-[#183629] rounded-full shadow-sm -z-10"
                    />
                  )}
                  <span>Training</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${trainingDropdownOpen ? 'rotate-180' : ''}`} />
                </Link>

                {/* Training Dropdown Menu */}
                <AnimatePresence>
                  {trainingDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl p-3 shadow-xl border border-stone-200/90 z-50 space-y-1"
                    >
                      <div className="px-3 py-2 border-b border-stone-100 flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#737D73] font-mono">
                          IT ACADEMY • 6 TRACKS
                        </span>
                        <GraduationCap className="w-3.5 h-3.5 text-[#DFAE22]" />
                      </div>

                      <div className="space-y-0.5 pt-1">
                        {siteData.courses.map((crs) => (
                          <Link
                            key={crs.id}
                            to={`/and/courses/${crs.slug}`}
                            className="p-2.5 rounded-xl hover:bg-[#F4F5EF] transition-colors flex items-center justify-between group block"
                          >
                            <div>
                              <p className="text-xs font-semibold text-[#183629] group-hover:text-[#DFAE22] transition-colors">
                                {crs.title}
                              </p>
                              <span className="text-[10px] text-[#737D73]">
                                Track {crs.number} • {crs.duration}
                              </span>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#183629] transition-colors" />
                          </Link>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-stone-100 mt-1">
                        <Link
                          to="/and/courses"
                          className="w-full px-3 py-2 rounded-xl bg-[#183629] text-[#F2C94C] text-[11px] font-bold uppercase tracking-wider hover:bg-[#102A21] transition-colors flex items-center justify-between group"
                        >
                          <span>Explore All Programs</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ABOUT */}
              <Link
                to="/and/about"
                className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full whitespace-nowrap transition-colors duration-200 z-10 ${isCurrentActive('/and/about')
                    ? 'text-[#F2C94C] font-bold'
                    : 'text-[#202923]/75 hover:text-[#183629]'
                  }`}
              >
                {isCurrentActive('/and/about') && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 bg-[#183629] rounded-full shadow-sm -z-10"
                  />
                )}
                <span>About</span>
              </Link>

              {/* WHY US */}
              <Link
                to="/and/why-us"
                className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full whitespace-nowrap transition-colors duration-200 z-10 ${isCurrentActive('/and/why-us')
                    ? 'text-[#F2C94C] font-bold'
                    : 'text-[#202923]/75 hover:text-[#183629]'
                  }`}
              >
                {isCurrentActive('/and/why-us') && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 bg-[#183629] rounded-full shadow-sm -z-10"
                  />
                )}
                <span>Why Us</span>
              </Link>

              {/* TESTIMONIALS */}
              <Link
                to="/and/testimonials"
                className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full whitespace-nowrap transition-colors duration-200 z-10 ${isCurrentActive('/and/testimonials')
                    ? 'text-[#F2C94C] font-bold'
                    : 'text-[#202923]/75 hover:text-[#183629]'
                  }`}
              >
                {isCurrentActive('/and/testimonials') && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 bg-[#183629] rounded-full shadow-sm -z-10"
                  />
                )}
                <span>Testimonials</span>
              </Link>

              {/* CONTACT */}
              <Link
                to="/and/contact"
                className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full whitespace-nowrap transition-colors duration-200 z-10 ${isCurrentActive('/and/contact')
                    ? 'text-[#F2C94C] font-bold'
                    : 'text-[#202923]/75 hover:text-[#183629]'
                  }`}
              >
                {isCurrentActive('/and/contact') && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 bg-[#183629] rounded-full shadow-sm -z-10"
                  />
                )}
                <span>Contact</span>
              </Link>
            </div>
          </nav>

          {/* Explore HR Solutions CTA on Right (Yellow CTA Button with shine animation) */}
          <div className="flex items-center gap-3 shrink-0">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/and/hr-services"
                className="relative hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md bg-[#F2C94C] text-[#183629] hover:bg-[#DFAE22] hover:text-[#102A21] overflow-hidden group"
              >
                {/* Shine Sweep Overlay */}
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
                <span className="relative z-10">Explore HR Solutions</span>
                <ArrowUpRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Mobile Hamburger Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2.5 rounded-full text-[#183629] bg-[#F4F5EF] hover:bg-[#EAF0E8] border border-[#183629]/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu with Collapsible Accordions for HR & Courses */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden pt-20"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white mx-4 rounded-[28px] p-6 shadow-2xl border border-stone-200/90 space-y-4 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pb-3 border-b border-stone-100 flex items-center justify-between">
                <Link to="/and" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src="/assets/varnith_logo.jpg"
                    alt="Varnith Global"
                    className="h-8 w-auto object-contain mix-blend-multiply"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full text-stone-400 hover:text-[#183629]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="space-y-1">
                <Link
                  to="/and"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#183629] hover:bg-[#F4F5EF] transition-colors"
                >
                  Home
                </Link>

                {/* Mobile HR Services Collapsible */}
                <div>
                  <div className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-[#183629] hover:bg-[#F4F5EF]">
                    <Link
                      to="/and/hr-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 font-bold text-[#183629]"
                    >
                      HR Services (Priority 1)
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileHrExpanded(!mobileHrExpanded);
                      }}
                      className="p-1 text-stone-500"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileHrExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <AnimatePresence>
                    {mobileHrExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 pr-2 space-y-1 overflow-hidden"
                      >
                        {siteData.hrServices.map((srv) => (
                          <Link
                            key={srv.id}
                            to={`/and/hr-services/${srv.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-1.5 rounded-lg text-xs text-[#202923]/80 hover:text-[#183629] hover:bg-[#F4F5EF]"
                          >
                            • {srv.title}
                          </Link>
                        ))}
                        <Link
                          to="/and/hr-services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-1.5 text-xs font-bold text-[#DFAE22] uppercase tracking-wider"
                        >
                          View All HR Practices →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Training Collapsible */}
                <div>
                  <div className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-[#183629] hover:bg-[#F4F5EF]">
                    <Link
                      to="/and/courses"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 font-bold text-[#183629]"
                    >
                      IT Training (Priority 2)
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileTrainingExpanded(!mobileTrainingExpanded);
                      }}
                      className="p-1 text-stone-500"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileTrainingExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <AnimatePresence>
                    {mobileTrainingExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 pr-2 space-y-1 overflow-hidden"
                      >
                        {siteData.courses.map((crs) => (
                          <Link
                            key={crs.id}
                            to={`/and/courses/${crs.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-1.5 rounded-lg text-xs text-[#202923]/80 hover:text-[#183629] hover:bg-[#F4F5EF]"
                          >
                            • {crs.title}
                          </Link>
                        ))}
                        <Link
                          to="/and/courses"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-1.5 text-xs font-bold text-[#DFAE22] uppercase tracking-wider"
                        >
                          View All Training Programs →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/and/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#183629] hover:bg-[#F4F5EF] transition-colors"
                >
                  About
                </Link>

                <Link
                  to="/and/why-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#183629] hover:bg-[#F4F5EF] transition-colors"
                >
                  Why Us
                </Link>

                <Link
                  to="/and/testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#183629] hover:bg-[#F4F5EF] transition-colors"
                >
                  Testimonials
                </Link>

                <Link
                  to="/and/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#183629] hover:bg-[#F4F5EF] transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-2">
                <Link
                  to="/and/hr-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-full bg-[#F2C94C] text-[#183629] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-[#DFAE22]"
                >
                  <span>Explore HR Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Drawer Footer Info */}
              <div className="pt-3 border-t border-stone-100 text-xs text-[#737D73] space-y-1 text-center">
                <p className="flex items-center justify-center gap-1.5 font-medium text-[#183629]">
                  <Phone className="w-3.5 h-3.5 text-[#DFAE22]" />
                  <span>{siteData.brand.phone}</span>
                </p>
                <p className="flex items-center justify-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#DFAE22]" />
                  <span>{siteData.brand.email}</span>
                </p>
                <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#737D73]">
                  <MapPin className="w-3.5 h-3.5 text-[#DFAE22]" />
                  <span>Bhanu Elite, Madhapur, Hyderabad</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
