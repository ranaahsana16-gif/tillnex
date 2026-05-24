import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { StatCard } from '@/components/StatCard.jsx';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Tillnex Software Solutions</title>
        <meta name="description" content="Learn about Tillnex and our mission to provide top-tier POS systems, custom websites, and restaurant ordering solutions." />
        <link rel="canonical" href="https://tillnex.space/about" />
      </Helmet>
      
      <div className="min-h-screen bg-background pt-16 md:pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Engineering the Future of Business
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a collective of software architects, designers, and strategists dedicated to transforming how businesses operate in the digital age.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded with a clear vision, Tillnex emerged from the realization that too many businesses were held back by disjointed, legacy software. Restaurants struggled with high delivery commissions, and retailers battled complex, outdated POS systems.
                </p>
                <p>
                  We set out to build cohesive ecosystems. By combining enterprise-grade POS solutions with modern web architectures and bespoke ordering systems, we provide our clients with a unified, powerful technological foundation.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-3xl p-10 lg:p-12 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                To democratize enterprise-level technology, empowering businesses to scale efficiently without the friction of technical debt.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Innovation</h4>
                    <p className="text-sm text-muted-foreground">Always utilizing modern stacks.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Reliability</h4>
                    <p className="text-sm text-muted-foreground">Systems engineered for 99.9% uptime.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            <StatCard title="Active Installations" value={450} suffix="+" />
            <StatCard title="Lines of Code" value={1.2} suffix="M" />
            <StatCard title="Uptime" value={99.9} suffix="%" />
            <StatCard title="Team Members" value={24} />
          </div>

        </div>
      </div>
    </>
  );
}

export default AboutPage;