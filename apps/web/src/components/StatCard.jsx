import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useTransform, animate } from 'framer-motion';

function parseStatValue(value) {
  const str = String(value);
  // Match a number (possibly decimal) and any trailing suffix
  const match = str.match(/^([\d.]+)(.*)$/);
  if (!match) return { number: 0, suffix: str, decimals: 0 };
  const numStr = match[1];
  const suffix = match[2] || '';
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { number: parseFloat(numStr), suffix, decimals };
}

export function StatCard({ title, value, suffix: explicitSuffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const { number: targetNumber, suffix: parsedSuffix, decimals } = parseStatValue(value);
  const displaySuffix = explicitSuffix ?? parsedSuffix;

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
  );

  const displayRef = useRef(null);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, targetNumber, {
      duration: 2,
      ease: 'easeOut',
    });

    // Subscribe to rounded value changes and update DOM directly for performance
    const unsubscribe = rounded.on('change', (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = v;
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, targetNumber, motionValue, rounded]);

  return (
    <div ref={ref} className="rounded-3xl border border-border bg-card p-8 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground mb-3">{title}</p>
      <p className="text-4xl font-bold text-foreground">
        <span ref={displayRef}>0</span>
        {displaySuffix && <span className="text-2xl font-semibold text-primary">{displaySuffix}</span>}
      </p>
    </div>
  );
}

export default StatCard;
