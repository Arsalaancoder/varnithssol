import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export default function TextReveal({
  children,
  className = '',
  as: Component = 'div',
  delay = 0,
  stagger = 0.04,
  duration = 0.7,
  once = true,
  mode = 'word', // 'word' | 'line' | 'block'
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  // If text is not a simple string, render as block reveal
  if (typeof children !== 'string') {
    return (
      <Component ref={ref} className={`overflow-hidden ${className}`}>
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : shouldReduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
          transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </Component>
    );
  }

  if (mode === 'line') {
    const lines = children.split('\n');
    return (
      <Component ref={ref} className={className}>
        {lines.map((line, idx) => (
          <span key={idx} className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : shouldReduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
              transition={{
                duration,
                delay: delay + idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Component>
    );
  }

  // Word-by-word reveal (Agevia style)
  const words = children.split(' ');

  return (
    <Component ref={ref} className={className}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-[0.25em] align-top">
          <motion.span
            className="inline-block"
            initial={shouldReduceMotion ? { opacity: 0 } : { y: '110%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : shouldReduceMotion ? { opacity: 0 } : { y: '110%', opacity: 0 }}
            transition={{
              duration,
              delay: delay + idx * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

