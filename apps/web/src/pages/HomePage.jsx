import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, ShoppingBag, Code, ChevronRight, Star } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground.jsx';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ServiceCard } from '@/components/ServiceCard.jsx';
import { Hero3DObject } from '@/components/Hero3DObject.jsx';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Tillnex | Enterprise Software Solutions</title>
        <meta name="description" content="Professional POS systems, custom website development, and intelligent food ordering solutions." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 md:pt-20 pb-16 md:pb-24">
        <ParticleBackground className="absolute inset-0 z-0 opacity-80" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Next-Generation Business Infrastructure
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-balance text-foreground leading-[1.1]">
                Elevate Your Operations with <span className="text-primary">Precision</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance">
                Tillnex delivers enterprise-grade POS systems, custom web architectures, and seamless food ordering platforms designed for growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button 
                  onClick={() => navigate('/services')}
                  size="lg"
                  className="w-full sm:w-auto px-8 h-14 text-base rounded-full"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button 
                  onClick={() => navigate('/contact')}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 h-14 text-base rounded-full bg-background hover:bg-accent hover:text-accent-foreground"
                >
                  Book a Consultation
                </Button>
              </div>
            </motion.div>

            {/* Interactive 3D Graphic Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 w-full flex justify-center items-center"
            >
              <Hero3DObject />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Comprehensive Solutions</h2>
            <p className="text-muted-foreground text-lg">
              We provide end-to-end technology infrastructure tailored to streamline your business workflow and maximize profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="POS Software"
              description="Robust point-of-sale systems that handle inventory, sales tracking, and staff management with intuitive interfaces."
              icon={Monitor}
            />
            <ServiceCard 
              title="Web Development"
              description="Custom, high-performance websites and web applications built with modern frameworks for scale and speed."
              icon={Code}
            />
            <ServiceCard 
              title="Food Ordering Systems"
              description="Seamless online ordering platforms that integrate directly with your kitchen, minimizing friction and boosting revenue."
              icon={ShoppingBag}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background border-t border-border/40 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Trusted by Leading Food Brands</h2>
            <p className="text-muted-foreground text-lg">
              See how restaurant owners and food delivery chains use Tillnex to own their customer experience and scale revenues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Review 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card/40 backdrop-blur-md border border-border/80 rounded-3xl p-8 flex flex-col justify-between hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "Tillnex completely transformed our business model. Their food ordering suite allowed us to escape third-party commissions entirely. The geofenced delivery bounds work flawlessly, and customers love the seamless SMS OTP login. Highly recommended!"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary text-sm uppercase">
                  AR
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Ahsan Raza</h4>
                  <p className="text-xs text-muted-foreground">Founder, Ora Burgers</p>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card/40 backdrop-blur-md border border-border/80 rounded-3xl p-8 flex flex-col justify-between hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "We needed a website and a custom rider app that could sync with our local kitchens. Tillnex delivered a robust platform that routes orders to our riders in real-time. Our dispatch operations have never been this smooth."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary text-sm uppercase">
                  SM
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Sarah Miller</h4>
                  <p className="text-xs text-muted-foreground">Operations Director, Slice & Co. Pizza</p>
                </div>
              </div>
            </motion.div>

            {/* Review 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card/40 backdrop-blur-md border border-border/80 rounded-3xl p-8 flex flex-col justify-between hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "The automated business hours and auto-closing feature is a game-changer. The admin dashboard is incredibly secure and simple to modify. We can edit categories and products on the fly in seconds. Tillnex is our primary technology partner."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary text-sm uppercase">
                  KT
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Kenji Takahashi</h4>
                  <p className="text-xs text-muted-foreground">Owner, Bento Box Sushi</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to transform your business?</h2>
              <p className="text-muted-foreground text-lg">
                Partner with Tillnex to implement technology that scales. Our team of experts is ready to analyze your needs.
              </p>
            </div>
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="whitespace-nowrap rounded-full h-14 px-8 shrink-0"
            >
              Get Started Today
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;