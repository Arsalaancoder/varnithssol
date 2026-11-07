import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import TextReveal from '../components/motion/TextReveal';

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16 bg-[#EAF0E8]">
      {/* Page Breadcrumb Header */}
      <section className="px-6 sm:px-12 lg:px-16 pb-4">
        <div className="max-w-[1360px] mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#737D73]"
          >
            <Link to="/and" className="hover:text-[#183629]">Home</Link>
            <span>/</span>
            <span className="text-[#183629]">Contact</span>
          </motion.div>

          <div className="space-y-4 max-w-4xl">
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block px-3 py-1 rounded-full bg-[#183629]/10 text-[#183629] text-xs font-bold tracking-widest uppercase"
            >
              REACH OUR HYDERABAD CAMPUS
            </motion.span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#183629] font-normal tracking-tight leading-[1.06]">
              <TextReveal
                text="Let's Start Your Next Chapter."
                mode="word"
                highlightWord="Next Chapter."
                highlightClassName="italic font-light text-[#DFAE22]"
              />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-xl text-[#202923]/80 font-light leading-relaxed"
            >
              Have questions about course admissions, fee structures, corporate recruitment partnerships or campus visits? Our counselors and talent directors are available to assist you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact />

      {/* Embedded Location Map Preview */}
      <section className="px-6 sm:px-12 lg:px-16 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1360px] mx-auto rounded-[32px] overflow-hidden bg-white/65 backdrop-blur-2xl border border-white/80 p-6 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_12px_40px_-8px_rgba(24,54,41,0.08)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/60">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#DFAE22]">
                CAMPUS LOCATION
              </span>
              <h3 className="font-serif text-2xl text-[#183629] font-normal mt-1">
                Bhanu Elite, Madhapur, Hyderabad
              </h3>
              <p className="text-xs text-[#737D73] mt-0.5">
                1-90/B/C/1 Flat No 102, Bhanu Elite, Madhapur, Shaikpet, Hyderabad – 500081, Telangana
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://maps.google.com/?q=Bhanu+Elite+Madhapur+Hyderabad+500081"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#183629] text-[#F2C94C] text-xs font-bold uppercase tracking-wider hover:bg-[#102A21] transition-colors shrink-0 text-center"
            >
              Open in Google Maps
            </motion.a>
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden h-72 sm:h-96 w-full bg-stone-100 relative">
            <iframe
              title="Varnith Global Campus Map"
              src="https://maps.google.com/maps?q=Bhanu+Elite,+Madhapur,+Hyderabad+500081&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[0.8] contrast-[1.05]"
            />
          </div>
        </motion.div>
      </section>

      {/* FAQ Accordion */}
      <FAQ />
    </div>
  );
}
