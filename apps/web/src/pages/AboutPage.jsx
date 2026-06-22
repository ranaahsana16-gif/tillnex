import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { StatCard } from '@/components/StatCard.jsx';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Rocket, Target, Shield, Lightbulb, Code2, Database, Globe, Smartphone, Layers, Cpu, Server, Palette } from 'lucide-react';

const techStack = [
  { name: 'React', icon: Code2, color: 'text-cyan-400' },
  { name: 'Node.js', icon: Server, color: 'text-green-400' },
  { name: 'Next.js', icon: Globe, color: 'text-foreground' },
  { name: 'Three.js', icon: Layers, color: 'text-purple-400' },
  { name: 'PostgreSQL', icon: Database, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-300' },
  { name: 'Vite', icon: Cpu, color: 'text-amber-400' },
  { name: 'React Native', icon: Smartphone, color: 'text-blue-300' },
  { name: 'Electron', icon: Layers, color: 'text-indigo-400' },
  { name: 'Framer Motion', icon: Rocket, color: 'text-pink-400' },
  { name: 'WebSockets', icon: Globe, color: 'text-emerald-400' },
  { name: 'Vercel', icon: Server, color: 'text-foreground' },
];

const timeline = [
  {
    year: '2024',
    title: 'Tillnex Founded',
    description: 'Started with a vision to build enterprise-grade software accessible to businesses of all sizes. First client onboarded within the first month.',
  },
  {
    year: '2025',
    title: 'Ora Ordering System Launched',
    description: 'Deployed the flagship Ora food ordering platform — a fully automated ordering ecosystem with SMS OTP, geofenced delivery, and rider dispatch.',
  },
  {
    year: '2025',
    title: 'Web Development Practice Expanded',
    description: 'Scaled the custom web development division, delivering high-performance React and Next.js websites across multiple industries.',
  },
  {
    year: '2026',
    title: 'POS System in Development',
    description: 'Began building the Tillnex cloud-connected POS system with offline-first architecture, multi-register sync, and unified analytics dashboards.',
  },
];

function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>About Us | Tillnex Software Solutions</title>
        <meta name="description" content="Learn about Tillnex and our mission to provide top-tier POS systems, custom websites, and restaurant ordering solutions. Meet the team behind the technology." />
        <link rel="canonical" href="https://tillnex.space/about" />
      </Helmet>
      
      <div className="min-h-screen bg-background pt-16 md:pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              About Tillnex
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
              Engineering the Future of <span className="text-primary">Business</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a collective of software architects, designers, and strategists dedicated to transforming how businesses operate in the digital age.
            </p>
          </motion.div>

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
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Innovation First</h4>
                    <p className="text-sm text-muted-foreground">Leveraging cutting-edge frameworks and modern stacks.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Built for Reliability</h4>
                    <p className="text-sm text-muted-foreground">Systems engineered for 99.9% uptime and data integrity.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Results-Driven</h4>
                    <p className="text-sm text-muted-foreground">Every project is measured by the business impact it delivers.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
          >
            <StatCard title="Projects Delivered" value={25} suffix="+" />
            <StatCard title="Lines of Code Shipped" value={1.2} suffix="M" />
            <StatCard title="System Uptime" value={99.9} suffix="%" />
            <StatCard title="Client Retention" value={96} suffix="%" />
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Tech Stack</h2>
              <p className="text-muted-foreground text-lg">
                We build with the industry's most powerful and reliable technologies to deliver products that scale.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="bg-card/40 backdrop-blur-sm border border-border/60 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <tech.icon className={`w-7 h-7 ${tech.color} group-hover:scale-110 transition-transform duration-200`} />
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Journey</h2>
              <p className="text-muted-foreground text-lg">
                Key milestones that have shaped Tillnex into the company it is today.
              </p>
            </div>

            <div className="max-w-3xl mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border/60" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10 mt-6" />

                  {/* Spacer for alternation */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content */}
                  <div className="ml-14 md:ml-0 md:w-1/2 bg-card/40 backdrop-blur-sm border border-border/60 rounded-2xl p-6 hover:border-primary/20 transition-colors duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to work with us?</h2>
                <p className="text-muted-foreground text-lg">
                  Let's discuss your project and build something that drives real results for your business.
                </p>
              </div>
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="whitespace-nowrap rounded-full h-14 px-8 shrink-0"
              >
                Get in Touch
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default AboutPage;