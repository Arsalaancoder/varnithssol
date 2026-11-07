import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Mail, Phone, X } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Close widget when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Close widget on Escape key press
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Container variants for the 4 expanded buttons (sequential stagger, reverse exit)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: shouldReduceMotion ? 0 : 0.03,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.04,
        staggerDirection: -1, // Buttons disappear in reverse order
      },
    },
  };

  // Item variants for each expanded button
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
      scale: shouldReduceMotion ? 1 : 0.88,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: shouldReduceMotion
        ? { duration: 0.18 }
        : {
            type: 'spring',
            damping: 22,
            stiffness: 360,
          },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 12,
      scale: shouldReduceMotion ? 1 : 0.88,
      transition: {
        duration: 0.16,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Trigger button variants
  const triggerVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.85,
      y: shouldReduceMotion ? 0 : 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.18 }
        : {
            type: 'spring',
            damping: 20,
            stiffness: 350,
          },
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.85,
      y: shouldReduceMotion ? 0 : 10,
      transition: {
        duration: 0.16,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center select-none"
      role="region"
      aria-label="Floating contact menu"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          /* ================= EXPANDED STATE (4 BUTTONS VERTICALLY) ================= */
          <motion.div
            key="expanded-contact-menu"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center gap-2"
          >
            {/* 1. Email Icon */}
            <motion.a
              href={`mailto:${siteData.brand.email}`}
              variants={itemVariants}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              title={`Email us (${siteData.brand.email})`}
              aria-label={`Send email to ${siteData.brand.email}`}
              className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-[15px] sm:rounded-[16px] bg-[#080808] border border-white/10 shadow-lg shadow-black/40 flex items-center justify-center text-[#DDFE24] hover:border-[#DDFE24]/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DDFE24]"
            >
              <Mail className="w-5 h-5 text-[#DDFE24]" strokeWidth={2} />
            </motion.a>

            {/* 2. WhatsApp Icon */}
            <motion.a
              href={siteData.brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              title="Chat with us on WhatsApp"
              aria-label="Chat with Varnith Global on WhatsApp"
              className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-[15px] sm:rounded-[16px] bg-[#080808] border border-white/10 shadow-lg shadow-black/40 flex items-center justify-center text-[#DDFE24] hover:border-[#DDFE24]/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DDFE24]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-[#DDFE24]"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.71 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
              </svg>
            </motion.a>

            {/* 3. Phone Icon */}
            <motion.a
              href={`tel:${siteData.brand.rawPhone}`}
              variants={itemVariants}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              title={`Call us at ${siteData.brand.phone}`}
              aria-label={`Call Varnith Global at ${siteData.brand.phone}`}
              className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-[15px] sm:rounded-[16px] bg-[#080808] border border-white/10 shadow-lg shadow-black/40 flex items-center justify-center text-[#DDFE24] hover:border-[#DDFE24]/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DDFE24]"
            >
              <Phone className="w-5 h-5 text-[#DDFE24] fill-[#DDFE24]" strokeWidth={1} />
            </motion.a>

            {/* 4. Close Icon (Black rounded-square container with bright lime-yellow circular X badge) */}
            <motion.button
              type="button"
              onClick={() => setIsOpen(false)}
              variants={itemVariants}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              title="Close contact options"
              aria-label="Close contact options"
              className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-[15px] sm:rounded-[16px] bg-[#080808] border border-white/10 shadow-lg shadow-black/40 flex items-center justify-center hover:border-[#DDFE24]/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DDFE24]"
            >
              <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#DDFE24] flex items-center justify-center shadow-sm">
                <X className="w-4 h-4 text-[#080808] stroke-[3]" />
              </div>
            </motion.button>
          </motion.div>
        ) : (
          /* ================= COLLAPSED STATE (SINGLE CHAT BUTTON) ================= */
          <motion.button
            key="collapsed-chat-button"
            type="button"
            onClick={() => setIsOpen(true)}
            variants={triggerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.94 }}
            title="Chat with us"
            aria-label="Open contact options"
            aria-expanded={false}
            className="w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-[15px] sm:rounded-[16px] bg-[#080808] border border-white/10 shadow-xl shadow-black/40 flex items-center justify-center hover:border-[#DDFE24]/60 hover:shadow-2xl hover:shadow-black/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DDFE24] group"
          >
            {/* Tilted Speech Bubble with 3 Dots matching screenshot 1 */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-[#DDFE24] transform -rotate-6 group-hover:scale-105 transition-transform"
              aria-hidden="true"
            >
              <path
                d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V14C20 15.1046 19.1046 16 18 16H11.5L6.5 19.5C5.83333 19.9644 5 19.4907 5 18.6757V16H6C4.89543 16 4 15.1046 4 14V5Z"
                fill="currentColor"
              />
              <circle cx="8.5" cy="9.5" r="1.15" fill="#080808" />
              <circle cx="12" cy="9.5" r="1.15" fill="#080808" />
              <circle cx="15.5" cy="9.5" r="1.15" fill="#080808" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
