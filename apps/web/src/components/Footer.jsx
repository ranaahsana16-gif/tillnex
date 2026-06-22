import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { LogoSvg } from '@/components/LogoSvg.jsx';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // Mock newsletter subscription
    toast.success('Subscription Successful!', {
      description: `Thank you for subscribing with ${email}.`,
    });
    setEmail('');
  };

  return (
    <footer className="relative z-10 border-t border-border/80 bg-card/40 backdrop-blur-md pt-16 pb-8">
      {/* Premium accent colored dividing line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Info (2 Columns) */}
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <LogoSvg 
                gradient={true} 
                className="w-11 h-11 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-100 via-slate-400 to-slate-200 bg-clip-text text-transparent group-hover:text-slate-100 transition-all duration-300">
                Tillnex
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Next-generation business infrastructure. We deliver enterprise-grade POS systems, custom web architectures, and seamless food ordering systems engineered for growth.
            </p>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">POS Software</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Ordering Systems</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Enterprise Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary transition-colors">Pricing Plans</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Stay Connected</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Subscribe to our newsletter for insights on scaling business infrastructure.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 pl-4 pr-12 rounded-full border border-border bg-background/60 text-sm text-foreground focus:border-primary focus:outline-none placeholder:text-muted-foreground transition-colors"
                />
                <button 
                  type="submit" 
                  className="absolute right-1 w-9 h-9 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <p>© {new Date().getFullYear()} Tillnex. All rights reserved.</p>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-400">All systems operational</span>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
