import React, { useState, useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export default function Counter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.8,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    let startTimestamp = null;
    const startValue = 0;
    const targetValue = typeof value === 'number' ? value : parseFloat(value) || 0;
    const durationMs = duration * 1000;

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOutQuart(progress);
      
      const current = startValue + (targetValue - startValue) * easedProgress;
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(targetValue);
      }
    };

    const animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration, shouldReduceMotion]);

  const raw = shouldReduceMotion ? (typeof value === 'number' ? value : parseFloat(value) || 0) : displayValue;
  const formatted = decimals > 0
    ? raw.toFixed(decimals)
    : Math.floor(raw).toString();

  return (
    <span ref={ref} className={`tabular-nums inline-block ${className}`}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
