import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/and' },
    { label: 'About', href: '/and/about' },
    { label: 'Courses', href: '/and/courses' },
    { label: 'Why Us', href: '/and/why-us' },
    { label: 'HR Services', href: '/and/hr-services' },
    { label: 'Testimonials', href: '/and/testimonials' },
    { label: 'Contact', href: '/and/contact' },
  ];

  const isCurrentActive = (href) => {
    if (href === '/and') {
      return location.pathname === '/and' || location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* 
        Solid Opaque White Navbar with Agevia-inspired entrance & layout transitions:
      */}
      <motion.header
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 py-3.5 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border-b border-stone-200/90"
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

          {/* Navigation Links in Center with smooth spring sliding indicator */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4">
            <div className="px-2 py-1 rounded-full flex items-center gap-1 bg-[#F4F5EF] border border-[#183629]/10 shadow-inner">
              {navItems.map((item) => {
                const active = isCurrentActive(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full whitespace-nowrap transition-colors duration-200 z-10 ${
                      active
                        ? 'text-[#F2C94C] font-bold'
                        : 'text-[#202923]/75 hover:text-[#183629]'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        className="absolute inset-0 bg-[#183629] rounded-full shadow-sm -z-10"
                      />
                    )}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Explore Programs CTA on Right (Yellow CTA Button with shine animation) */}
          <div className="flex items-center gap-3 shrink-0">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/and/courses"
                className="relative hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md bg-[#F2C94C] text-[#183629] hover:bg-[#DFAE22] hover:text-[#102A21] overflow-hidden group"
              >
                {/* Shine Sweep Overlay */}
                <span className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
                <span className="relative z-10">Explore Programs</span>
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

      {/* Mobile Drawer Menu with Staggered Link Reveals */}
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
              className="bg-white mx-4 rounded-[28px] p-6 shadow-2xl border border-stone-200/90 space-y-5"
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
                  className="p-1.5 rounded-full hover:bg-stone-100 text-[#183629]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col space-y-2">
                {navItems.map((item, idx) => {
                  const active = isCurrentActive(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ x: -15, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 + idx * 0.03, duration: 0.3 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-2xl text-sm font-semibold tracking-wider uppercase transition-all ${
                          active
                            ? 'bg-[#183629] text-[#F2C94C] font-bold shadow-sm'
                            : 'text-[#202923] hover:bg-[#EAF0E8]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-stone-200 space-y-3">
                <Link
                  to="/and/courses"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 px-6 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#DFAE22] shadow-sm"
                >
                  <span>Explore Programs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <div className="pt-2 text-xs text-[#737D73] space-y-1 text-center">
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
