import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Monitor, Code, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { FloatingShapes } from '@/components/BackgroundEffects.jsx';

function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      id: 'pos',
      title: 'Point of Sale Systems',
      subtitle: 'Intelligent Retail & Hospitality Management',
      description: 'Our proprietary POS solutions bring enterprise-level functionality to businesses of all sizes. From real-time inventory tracking to complex reporting, we empower your staff to operate at peak efficiency.',
      icon: Monitor,
      features: ['Real-time Inventory Management', 'Multi-location Syncing', 'Staff Performance Tracking', 'Integrated Payment Processing'],
      reverse: false
    },
    {
      id: 'web',
      title: 'Custom Web Architecture',
      subtitle: 'High-Performance Digital Experiences',
      description: 'We don\'t just build websites; we engineer digital platforms. Utilizing the latest React frameworks, our web applications are built for blinding speed, impeccable SEO, and seamless user experiences.',
      icon: Code,
      features: ['Modern React/Vite Stacks', 'Responsive Mobile-First Design', 'SEO & Performance Optimization', 'Custom CMS Integrations'],
      reverse: true
    },
    {
      id: 'ordering',
      title: 'Food Ordering Solutions',
      subtitle: 'Streamlined Kitchen to Customer Workflows',
      description: 'Reclaim your margins with a custom ordering platform. Bypass third-party delivery fees while providing your customers with a frictionless, branded ordering experience that integrates straight to your kitchen displays.',
      icon: ShoppingBag,
      features: ['Zero Third-Party Commission Fees', 'Direct Kitchen Integration', 'Customer Loyalty Programs', 'Automated Delivery Dispatch'],
      reverse: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | POS Systems, Web Dev & Ordering Apps | Tillnex</title>
        <meta name="description" content="Explore our enterprise POS solutions, high-speed custom web development, and commission-free food ordering platforms built for restaurants and retail." />
        <link rel="canonical" href="https://tillnex.space/services" />
      </Helmet>
      
      <div className="relative overflow-hidden min-h-screen bg-background pt-16 md:pt-20 pb-24">
        <FloatingShapes />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Our Services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Delivering specialized technological infrastructure designed to elevate operations, enhance customer experiences, and drive sustainable growth.
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2" style={{ perspective: "1000px" }}>
                  <motion.div 
                    whileHover={{ rotateX: 5, rotateY: service.reverse ? 5 : -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-card/60 backdrop-blur-sm border border-border flex items-center justify-center p-8 group shadow-xl hover:shadow-[0_20px_40px_rgba(0,243,243,0.1)] transition-shadow duration-500"
                  >
                    {/* Glowing pseudo border */}
                    <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/50 transition-colors duration-500 z-10 pointer-events-none" style={{ transform: "translateZ(10px)" }} />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div style={{ transform: "translateZ(40px)" }}>
                      <service.icon className="w-32 h-32 text-primary/80 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 w-fit">
                    {service.subtitle}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-foreground font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4 items-center">
                    <Button 
                      onClick={() => navigate('/contact?service=' + service.id)}
                      className="w-fit h-12 px-8 rounded-full"
                    >
                      Discuss Your Project
                    </Button>
                    <Button 
                      onClick={() => navigate('/pricing')}
                      variant="outline"
                      className="w-fit h-12 px-8 rounded-full"
                    >
                      View Pricing & Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default ServicesPage;