import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { LoadingSpinner } from '@/components/LoadingSpinner.jsx';

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [service, setService] = useState('');

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
        toast.success('Message Sent Successfully', {
          description: 'Thank you! We will get back to you shortly.',
        });
        e.target.reset();
        setService('');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message.');
      }
    } catch (error) {
      toast.error('Submission Failed', {
        description: error.message || 'There was an issue sending your message. Please try again or contact us via WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Get a Software Consultation | Tillnex</title>
        <meta name="description" content="Reach out to Tillnex for custom software, high-performance POS solutions, web development, and custom ordering apps. Request a consultation today." />
        <link rel="canonical" href="https://tillnex.space/contact" />
      </Helmet>
      
      <div className="min-h-screen bg-background pt-16 md:pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Let's Talk Business</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you need a full enterprise POS rollout or a custom web platform, our team is ready to deliver. Reach out today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Email Us</p>
                      <a href="mailto:tillnexhq@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">tillnexhq@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">WhatsApp Us</p>
                      <a href="https://wa.me/16677788789" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">+1 (667) 778-8789</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="+1 (555) 000-0000" className="bg-background" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select required value={service} onValueChange={setService}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pos">POS Software</SelectItem>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="ordering">Food Ordering Systems</SelectItem>
                        <SelectItem value="other">Other / Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="service" value={service} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      required 
                      placeholder="Tell us about your project requirements..." 
                      className="min-h-[150px] bg-background" 
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
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ContactPage;