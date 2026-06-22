import React from 'react';

const clients = [
  'Ora Burgers',
  'Slice & Co.',
  'Bento Box Sushi',
  'FreshBite',
  'CloudKitchen Pro',
  'UrbanEats',
];

const marqueeKeyframes = `
@keyframes marquee-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

export function ClientLogos() {
  // Duplicate the list so the scroll loops seamlessly
  const items = [...clients, ...clients];

  return (
    <section className="w-full py-10 overflow-hidden">
      <style>{marqueeKeyframes}</style>

      <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
        Trusted by businesses worldwide
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'marquee-scroll 25s linear infinite' }}
        >
          {items.map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-8 text-sm font-semibold tracking-wider text-muted-foreground/60 uppercase select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;
