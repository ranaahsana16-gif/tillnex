import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils.js';
import { LogoSvg } from '@/components/LogoSvg.jsx';
import { Menu, X as CloseIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const progressRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0 && progressRef.current) {
        const percent = (window.scrollY / totalScrollHeight) * 100;
        progressRef.current.style.width = `${percent}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur-xl relative">
      <div className="container mx-auto flex items-center justify-between px-4 py-5 sm:py-6 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <LogoSvg 
            gradient={true} 
            className="w-11 h-11 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-100 via-slate-400 to-slate-200 bg-clip-text text-transparent group-hover:text-slate-100 transition-all duration-300">
            Tillnex
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium tracking-wide transition-colors relative py-1 hover:text-primary',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              Get Started
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 rounded-full border border-border bg-card/40 text-muted-foreground hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <CloseIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-semibold tracking-wide py-2.5 border-b border-border/40 hover:text-primary transition-colors',
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/10 mt-2"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Futuristic Scroll Progress Line */}
      <div 
        ref={progressRef}
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-75"
        style={{ width: '0%' }}
      />
    </header>
  );
}
