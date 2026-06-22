import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ExternalLink, Lock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function PricingPage() {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'yearly' or 'monthly'

  return (
    <>
      <Helmet>
        <title>Pricing Plans & Custom Software Pricing | Tillnex</title>
        <meta name="description" content="Affordable and transparent pricing plans for Tillnex food ordering systems, custom web architecture, and waitlist details for our high-speed POS software." />
        <link rel="canonical" href="https://tillnex.space/pricing" />
      </Helmet>

      <div className="min-h-screen bg-background pt-16 md:pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Transparent Pricing, Engineered for Value
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose the infrastructure plan that suits your operational needs. All plans can be adjusted and customized based on your specific requirements.
            </p>

            {/* Toggle Switch */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <span className={`text-sm font-semibold transition-colors ${billingCycle === 'monthly' ? 'text-primary' : 'text-muted-foreground'}`}>
                Monthly billing
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'yearly' ? 'monthly' : 'yearly')}
                className="w-14 h-8 flex items-center bg-card border border-border rounded-full p-1 cursor-pointer transition-colors relative"
                aria-label="Toggle billing cycle"
              >
                <motion.div
                  className="w-6 h-6 rounded-full bg-primary"
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  style={{ x: billingCycle === 'yearly' ? 22 : 0 }}
                />
              </button>
              <span className={`text-sm font-semibold transition-colors ${billingCycle === 'yearly' ? 'text-primary' : 'text-muted-foreground'}`}>
                Yearly plan <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold ml-1">Save ~20%</span>
              </span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            
            {/* Card 1: Custom Web Development */}
            <div className="bg-card/40 backdrop-blur-md border border-border/80 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-500/30 transition-all duration-300">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-500/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6">
                  Custom Architecture
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Bespoke Website</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Tailored web systems built from scratch to support any industry, workflow, or custom API requirements.
                </p>
                
                {/* Price Display */}
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-foreground">Custom</span>
                  <span className="text-muted-foreground text-sm block mt-1">Pricing based on consultation</span>
                </div>

                <div className="h-px bg-border/60 my-6" />

                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Tailored React/Next.js/Vite configurations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Every type and category of web design supported</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">High-performance SEO & loading architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Uncapped scalability & API integrations</span>
                  </li>
                </ul>
              </div>

              <Button
                onClick={() => navigate('/contact?service=web')}
                variant="outline"
                className="w-full h-12 rounded-full font-semibold border-border hover:bg-accent"
              >
                Book Custom Consultation
              </Button>
            </div>

            {/* Card 2: Food Ordering System (FEATURED/POPULAR) */}
            <div className="relative bg-card/60 backdrop-blur-md border-2 border-primary rounded-3xl p-8 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,243,243,0.06)]">
              {/* Highlight badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                Most Popular
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                  Complete Food Suite
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Food Ordering System</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Automated restaurant delivery and menu system like our <strong>Ora Ordering</strong> ecosystem.
                </p>
                
                {/* Dynamic Price Display */}
                <div className="mb-8 min-h-[92px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {billingCycle === 'yearly' ? (
                      <motion.div
                        key="yearly"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                      >
                        <div className="flex flex-col gap-1">
                          <div className="whitespace-nowrap">
                            <span className="text-3xl font-extrabold text-foreground">35,000 PKR</span>
                            <span className="text-muted-foreground text-sm"> / year</span>
                            <span className="text-[10px] text-primary block mt-0.5">(Website Only Plan)</span>
                          </div>
                          <div className="mt-2 pt-2 border-t border-border/40 whitespace-nowrap">
                            <span className="text-3xl font-extrabold text-foreground">45,000 PKR</span>
                            <span className="text-muted-foreground text-sm"> / year</span>
                            <span className="text-[10px] text-primary block mt-0.5">(Website + Android App Plan)</span>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="monthly"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                      >
                        <div className="flex flex-col gap-1">
                          <div className="whitespace-nowrap">
                            <span className="text-3xl font-extrabold text-foreground">15,000 PKR</span>
                            <span className="text-muted-foreground text-xs"> setup + 4,500/mo</span>
                            <span className="text-[10px] text-primary block mt-0.5">(Website Only Plan)</span>
                          </div>
                          <div className="mt-2 pt-2 border-t border-border/40 whitespace-nowrap">
                            <span className="text-3xl font-extrabold text-foreground">20,000 PKR</span>
                            <span className="text-muted-foreground text-xs"> setup + 5,000/mo</span>
                            <span className="text-[10px] text-primary block mt-0.5">(Website + Android App Plan)</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="h-px bg-border/60 my-6" />

                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Automated Web + <strong>Android App</strong></span>
                      <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded ml-1.5 font-mono">iOS Coming Soon</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Location geofencing bounds for delivery radius</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Full SMS OTP customer verification & security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Secure Admin Panel (edit banners, categories, products)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Rider Portal with assigned orders & live tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Saved addresses, loyalty rewards & customer wishlist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Auto-closing operation hours & automated site dispatch</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => navigate('/contact?service=ordering')}
                  className="w-full h-12 rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Order Food System
                </Button>
                
                {/* Hidden Link directly represented by button to go to Ora Site */}
                <a
                  href="https://ora.tillnex.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full h-12 rounded-full text-sm font-semibold border border-border bg-card hover:bg-accent text-foreground transition-colors"
                >
                  View Live Demo (Ora System)
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Card 3: POS System (COMING SOON) */}
            <div className="bg-card/40 backdrop-blur-md border border-border/80 rounded-3xl p-8 flex flex-col justify-between opacity-80 hover:opacity-100 hover:border-slate-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-12 -right-16 bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-widest px-14 py-1.5 rotate-45 border border-amber-500/20">
                Development
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-amber-500/15 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-6">
                  Coming Soon
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Tillnex POS System</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Cloud-connected local registers designed for instant checkout, inventory sync, and multi-location management.
                </p>
                
                {/* Price Display */}
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-foreground flex items-center gap-2">
                    Soon
                    <Lock className="w-5 h-5 text-amber-500/70" />
                  </span>
                  <span className="text-muted-foreground text-sm block mt-1">Sign up to join our waiting list</span>
                </div>

                <div className="h-px bg-border/60 my-6" />

                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Multi-register local & cloud inventory sync</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Offline terminal transaction caching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Unified analytics dashboard & invoice generator</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Barcoding & customer database management</span>
                  </li>
                </ul>
              </div>

              <Button
                onClick={() => navigate('/contact?service=pos')}
                variant="outline"
                className="w-full h-12 rounded-full font-semibold border-amber-500/20 text-amber-500 hover:bg-amber-500/10 hover:text-amber-500 transition-colors"
              >
                Join waitlist
              </Button>
            </div>

          </div>

          {/* Pricing Disclaimer */}
          <div className="max-w-3xl mx-auto mt-16 p-6 rounded-2xl bg-card/20 border border-border/40 flex items-start gap-4">
            <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Note:</strong> The prices displayed represent baseline product configurations. Prices can vary and are adjusted based on the client's custom parameters, hosting, expected traffic scale, custom integrations, or location bounds. Contact us to get a personalized quote.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default PricingPage;
