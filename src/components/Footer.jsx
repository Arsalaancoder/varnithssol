import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { Phone, Mail, CheckCircle2, ChevronUp } from 'lucide-react';
import { siteData } from '../data/siteData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  // Parallax for Background Image & Watermark Typography
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['-12%', '0%']
  );

  const watermarkY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['20%', '0%']
  );

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    const existing = JSON.parse(localStorage.getItem('varnith_newsletter') || '[]');
    existing.push({ email: newsletterEmail, date: new Date().toISOString() });
    localStorage.setItem('varnith_newsletter', JSON.stringify(existing));
    setSubscribed(true);
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#102A21] text-white pt-20 sm:pt-28 pb-6 px-6 sm:px-12 lg:px-16 overflow-hidden rounded-t-[36px] sm:rounded-t-[44px]"
    >
      {/* Background Cinematic Photo with Subtle Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img
          src="/assets/footer_bg.jpg"
          alt="Varnith Global Corporate Vision"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-[#102A21]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A21] via-transparent to-[#102A21]/70" />
      </motion.div>

      <div className="relative z-10 max-w-[1360px] mx-auto space-y-16">
        {/* Top Header of Footer with Split-Text Reveal */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b border-white/10 pb-12">
          <div className="max-w-2xl space-y-4">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase font-bold tracking-widest text-[#F2C94C]"
            >
              EMBARK ON YOUR NEXT MILESTONE
            </motion.span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%' }}
                  animate={isInView ? { y: '0%' } : { y: '100%' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  Your Future Starts
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5 text-[#F2C94C]">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%' }}
                  animate={isInView ? { y: '0%' } : { y: '100%' }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="italic font-light inline-block"
                >
                  Here.
                </motion.span>
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-white/80 font-light leading-relaxed"
            >
              Learn with purpose. Grow with confidence. Build what comes next.
            </motion.p>
          </div>

          {/* Quick Newsletter Pill with Yellow CTA Button */}
          <div className="w-full lg:max-w-md">
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs text-[#F2C94C] flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! We'll send updates on new batches and job openings.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-5 py-3.5 pr-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#F2C94C] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-4 py-2 rounded-full bg-[#F2C94C] text-[#183629] text-xs font-bold uppercase tracking-wider hover:bg-[#DFAE22] hover:text-[#102A21] transition-all"
                >
                  Join List
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Multi-Column Links Section with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/and"
              className="inline-block bg-white p-2.5 sm:p-3 rounded-2xl shadow-md border border-white/20 hover:scale-[1.02] transition-transform"
              aria-label="Varnith Global Home"
            >
              <img
                src="/assets/varnith_logo.jpg"
                alt="Varnith Global"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              Hyderabad's premier corporate HR consulting firm and strategic talent partner, delivering high-impact recruitment solutions alongside practical enterprise IT training.
            </p>
            <div className="space-y-2 pt-2 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F2C94C]" />
                <a href={`tel:${siteData.brand.rawPhone}`} className="hover:underline">
                  {siteData.brand.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F2C94C]" />
                <a href={`mailto:${siteData.brand.email}`} className="hover:underline">
                  {siteData.brand.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#F2C94C]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/and" className="hover:text-[#F2C94C] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/and/hr-services" className="hover:text-[#F2C94C] transition-colors font-medium">HR Services</Link>
              </li>
              <li>
                <Link to="/and/courses" className="hover:text-[#F2C94C] transition-colors">IT Training</Link>
              </li>
              <li>
                <Link to="/and/about" className="hover:text-[#F2C94C] transition-colors">About Varnith</Link>
              </li>
              <li>
                <Link to="/and/why-us" className="hover:text-[#F2C94C] transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/and/testimonials" className="hover:text-[#F2C94C] transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/and/contact" className="hover:text-[#F2C94C] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Six Courses Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#F2C94C]">
              Training Programs
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/and/courses/devops" className="hover:text-[#F2C94C] transition-colors">
                  DevOps Engineering
                </Link>
              </li>
              <li>
                <Link to="/and/courses/sap-basis-security" className="hover:text-[#F2C94C] transition-colors">
                  SAP Basis Security
                </Link>
              </li>
              <li>
                <Link to="/and/courses/sap-grc" className="hover:text-[#F2C94C] transition-colors">
                  SAP GRC
                </Link>
              </li>
              <li>
                <Link to="/and/courses/data-analyst" className="hover:text-[#F2C94C] transition-colors">
                  Data Analyst
                </Link>
              </li>
              <li>
                <Link to="/and/courses/software-testing" className="hover:text-[#F2C94C] transition-colors">
                  Software Testing
                </Link>
              </li>
              <li>
                <Link to="/and/courses/python" className="hover:text-[#F2C94C] transition-colors">
                  Python Programming
                </Link>
              </li>
            </ul>
          </div>

          {/* Campus Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#F2C94C]">
              Hyderabad Campus
            </h4>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              {siteData.brand.address.line1}<br />
              {siteData.brand.address.line2}
            </p>
            <p className="text-xs text-white/60">
              Hours: {siteData.brand.hours}
            </p>
            <button
              onClick={scrollToTop}
              className="mt-3 inline-flex items-center gap-2 text-xs text-[#F2C94C] hover:underline transition-colors focus:outline-none"
            >
              <span>Back to top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © {CURRENT_YEAR} Varnith Global • Varnith Technologies Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/and/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/and/about" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/and/contact" className="hover:text-white transition-colors">Admissions</Link>
          </div>
        </div>

        {/* Oversized Decorative Clipped Typography Watermark with Subtle Parallax */}
        <div className="relative w-full overflow-hidden select-none pointer-events-none -mb-8 sm:-mb-14 pt-4">
          <motion.p
            style={{ y: watermarkY }}
            className="font-serif text-[18vw] font-bold tracking-tight text-white/[0.04] leading-none whitespace-nowrap text-center will-change-transform"
          >
            VARNITH
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
