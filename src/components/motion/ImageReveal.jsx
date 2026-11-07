import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function ImageReveal({
  src,
  alt = '',
  className = '',
  imageClassName = '',
  aspectRatio = 'aspect-[4/3]',
  direction = 'up', // 'up' | 'down' | 'left' | 'right'
  parallax = true,
  parallaxAmount = 30,
  delay = 0,
  duration = 1.1,
  children,
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion || !parallax ? [0, 0] : [-parallaxAmount, parallaxAmount]
  );

  const getClipPathInitial = () => {
    if (shouldReduceMotion) return 'inset(0% 0% 0% 0%)';
    switch (direction) {
      case 'up':
        return 'inset(100% 0% 0% 0%)';
      case 'down':
        return 'inset(0% 0% 100% 0%)';
      case 'left':
        return 'inset(0% 0% 0% 100%)';
      case 'right':
        return 'inset(0% 100% 0% 0%)';
      default:
        return 'inset(100% 0% 0% 0%)';
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
    >
      <motion.div
        initial={{ clipPath: getClipPathInitial() }}
        animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : { clipPath: getClipPathInitial() }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full relative overflow-hidden"
      >
        <motion.img
          src={src}
          alt={alt}
          style={{ y: parallaxY }}
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.12 }}
          animate={isInView ? { scale: 1 } : shouldReduceMotion ? { scale: 1 } : { scale: 1.12 }}
          transition={{ duration: duration * 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full h-full object-cover will-change-transform ${imageClassName}`}
          loading="lazy"
        />
        {children}
      </motion.div>
    </div>
  );
}

