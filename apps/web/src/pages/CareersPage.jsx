import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, Globe2, DollarSign, Send, MapPin, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { LoadingSpinner } from '@/components/LoadingSpinner.jsx';
import { FloatingShapes } from '@/components/BackgroundEffects.jsx';

function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      const response = await fetch("https://formspree.io/f/xkoezaea", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success('Application Sent Successfully', {
          description: 'Thank you for applying! We will review your details and get back to you.',
        });
        e.target.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send application.');
      }
    } catch (error) {
      toast.error('Submission Failed', {
        description: error.message || 'There was an issue sending your application. Please try again or contact us via WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers | Remote Sales Jobs | Tillnex</title>
        <meta name="description" content="Join Tillnex as a Remote Sales Representative. Connect clients needing custom websites and software, and earn a 40% commission per project. Apply now." />
        <link rel="canonical" href="https://tillnex.space/careers" />
      </Helmet>
      
      <div className="relative overflow-hidden min-h-screen bg-background pt-16 md:pt-20 pb-24">
        <FloatingShapes />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Join the Tillnex Team</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a rapidly growing technology company building powerful web and software solutions. Partner with us and build a lucrative career from anywhere in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto" style={{ perspective: "1200px" }}>
            
            {/* Job Details Card */}
            <div className="space-y-8 h-full">
              <motion.div 
                whileHover={{ rotateX: 2, rotateY: 2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-card/40 backdrop-blur-md border border-border/60 rounded-3xl p-8 shadow-lg hover:shadow-[0_20px_40px_rgba(0,243,243,0.05)] transition-shadow duration-300 relative h-full flex flex-col"
              >
                {/* Glow accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" style={{ transform: "translateZ(1px)" }} />
                
                <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 w-max">
                  Actively Hiring
                </div>
                
                <h2 className="text-3xl font-extrabold text-foreground mb-4">Remote Sales Representative</h2>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center text-sm font-medium text-muted-foreground bg-background/50 px-3 py-1.5 rounded-full border border-border">
                    <Globe2 className="w-4 h-4 mr-2 text-primary" />
                    USA, Canada, Australia (Remote)
                  </div>
                  <div className="flex items-center text-sm font-medium text-muted-foreground bg-background/50 px-3 py-1.5 rounded-full border border-border">
                    <DollarSign className="w-4 h-4 mr-2 text-green-500" />
                    Commission-Based
                  </div>
                  <div className="flex items-center text-sm font-medium text-muted-foreground bg-background/50 px-3 py-1.5 rounded-full border border-border">
                    <Briefcase className="w-4 h-4 mr-2 text-purple-500" />
                    Work From Home
                  </div>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">About The Role</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Are you a natural networker? We are looking for motivated individuals to find clients who need custom websites, POS systems, or software. Your job is simple: find the client and connect them with us. We handle all the development, design, and deployment.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Compensation & Perks</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <DollarSign className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground"><strong>40% Commission</strong> paid directly to you from a client's first payment.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">100% Remote — work from the comfort of your home, setting your own hours.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-border/60">
                    <h3 className="text-sm font-bold text-foreground mb-4">Quick Apply / Contact</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://wa.me/923085121676" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl text-sm font-semibold hover:border-primary/50 transition-colors">
                        <MessageSquare className="w-4 h-4 text-green-500" />
                        WhatsApp Us
                      </a>
                      <a href="mailto:tillnexhq@gmail.com" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl text-sm font-semibold hover:border-primary/50 transition-colors">
                        <Mail className="w-4 h-4 text-primary" />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Application Form */}
            <div className="h-full">
              <motion.div 
                whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-card/40 backdrop-blur-md border border-border/60 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-[0_20px_40px_rgba(0,243,243,0.05)] transition-shadow duration-300 relative h-full"
              >
                {/* Glow accent */}
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" style={{ transform: "translateZ(1px)" }} />
                
                <div className="relative z-10 mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Submit Your Application</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form below and we will contact you with the next steps.</p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required placeholder="John" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required placeholder="Doe" className="bg-background" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@company.com" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" name="country" required placeholder="USA, Canada, etc." className="bg-background" />
                    </div>
                  </div>

                  {/* Hidden field to identify it's a job application */}
                  <input type="hidden" name="formType" value="Job Application: Remote Sales Representative" />
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Why are you a good fit?</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      required 
                      placeholder="Tell us briefly about your sales experience or how you plan to find clients..." 
                      className="min-h-[120px] bg-background" 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base rounded-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <LoadingSpinner size={20} className="text-primary-foreground" />
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default CareersPage;
