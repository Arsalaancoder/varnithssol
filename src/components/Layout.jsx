import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContactWidget from './FloatingContactWidget';

// Automatically scroll to the top of the canvas on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-[#111a14] py-0 lg:py-6 sm:px-0 lg:px-6 flex justify-center">
      <ScrollToTop />
      {/* 
        The Centered Editorial Canvas:
        Maintains the luxury magazine-style framed canvas on desktop across every page!
      */}
      <div className="w-full max-w-[1440px] bg-[#EAF0E8] text-[#202923] sm:rounded-[36px] overflow-hidden shadow-2xl relative border border-white/5 flex flex-col justify-between">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>

      {/* Floating Animated Contact Widget (mounted globally across all pages) */}
      <FloatingContactWidget />
    </div>
  );
}
