import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = "923085121676";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the user has already dismissed the popup in the current session
    const isDismissed = sessionStorage.getItem('tlnx_wa_dismissed') === 'true';
    if (!isDismissed) {
      // Show the suggestion popup after a premium 2.5 second delay
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPopup(false);
    sessionStorage.setItem('tlnx_wa_dismissed', 'true');
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end">
      
      {/* Suggestion Speech Bubble Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute bottom-16 right-0 w-72 max-w-[calc(100vw-4rem)] bg-card/95 backdrop-blur-xl border border-border/90 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] border-emerald-500/20 select-none text-left"
          >
            {/* Speech bubble pointer pointing down to the WhatsApp button */}
            <div className="absolute -bottom-1.5 right-[18px] w-3 h-3 bg-card border-r border-b border-border/90 rotate-45" />

            {/* Dismiss X button */}
            <button 
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground hover:bg-accent/40 rounded-full p-1 transition-colors"
              aria-label="Dismiss suggestion"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Content Details */}
            <div className="pr-5">
              <p className="text-[10px] font-bold text-primary mb-1.5 tracking-wider uppercase">Direct Connect</p>
              <h4 className="text-sm font-bold text-foreground mb-1">Get more details!</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Have questions about Tillnex POS or custom web development? Chat directly with our team on WhatsApp.
              </p>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowPopup(false)}
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold hover:text-emerald-300 mt-3 transition-colors"
              >
                Start Chat
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group">
        {/* Hover Tooltip (displayed only when the popup is closed) */}
        {!showPopup && (
          <span className="absolute right-14 top-1/2 -translate-y-1/2 mr-3 scale-0 group-hover:scale-100 transition-all duration-200 origin-right whitespace-nowrap bg-card border border-border/80 text-foreground text-xs font-semibold px-3 py-2 rounded-xl shadow-lg select-none pointer-events-none">
            Chat on WhatsApp
          </span>
        )}

        {/* Pulsating back-ring glow */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />

        {/* Floating green button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 border border-emerald-400/20"
          aria-label="Contact us on WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.37 5.054L2 22l5.088-1.336a9.926 9.926 0 0 0 4.92 1.3c5.507 0 9.99-4.478 9.99-9.983 0-2.668-1.039-5.176-2.927-7.067A9.923 9.923 0 0 0 12.012 2zm5.782 14.184c-.318.893-1.848 1.647-2.545 1.745-.635.09-1.428.166-4.304-.997-3.673-1.488-6.04-5.187-6.223-5.428-.18-.242-1.464-1.928-1.464-3.68 0-1.75 1.026-2.605 1.396-2.98.375-.375.986-.466 1.378-.466.386 0 .736.002 1.054.017.332.015.772-.124 1.206.914.444 1.06 1.517 3.664 1.65 3.927.133.262.222.568.044.914-.178.347-.367.653-.578.892-.211.24-.44.535-.63.717-.21.202-.43.422-.186.837.243.416 1.082 1.77 2.316 2.87 1.587 1.412 2.92 1.853 3.328 2.02.408.168.65.14.893-.14.243-.28 1.042-1.205 1.32-1.615.28-.41.56-.342.943-.2.385.14 2.443 1.139 2.846 1.34.404.202.673.3.77.468.098.168.098.974-.22 1.868z" />
          </svg>
        </a>
      </div>

    </div>
  );
}

export default WhatsAppButton;
