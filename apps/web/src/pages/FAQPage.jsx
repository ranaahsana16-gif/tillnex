import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown, HelpCircle, Monitor, ShoppingBag, CreditCard, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const faqCategories = [
  {
    id: 'general',
    label: 'General',
    icon: HelpCircle,
    questions: [
      {
        q: 'What does Tillnex do?',
        a: 'Tillnex is a software company that builds enterprise-grade POS systems, custom web architectures, and commission-free food ordering platforms. We help restaurants, retailers, and businesses modernize their operations with scalable, high-performance technology.',
      },
      {
        q: 'Where is Tillnex based?',
        a: 'Tillnex operates as a globally distributed team. We serve clients across Pakistan, the Middle East, and internationally through our remote delivery model. Our primary communication channels are email and WhatsApp.',
      },
      {
        q: 'How do I get started with a project?',
        a: "Simply visit our Contact page and fill out the consultation form, or reach out to us on WhatsApp. We'll schedule a discovery call to understand your requirements, then provide a detailed proposal with timelines and pricing.",
      },
      {
        q: 'What industries do you serve?',
        a: 'We specialize in the food and hospitality sector — including restaurants, cloud kitchens, and food delivery chains. We also serve retail businesses, e-commerce stores, and any organization that needs custom web solutions or POS infrastructure.',
      },
      {
        q: 'Do you offer ongoing support after delivery?',
        a: 'Absolutely. All our plans include post-launch support. We provide bug fixes, security updates, and technical assistance. Extended maintenance and feature development plans are also available at additional cost.',
      },
    ],
  },
  {
    id: 'pos',
    label: 'POS System',
    icon: Monitor,
    questions: [
      {
        q: 'When will the Tillnex POS system be available?',
        a: 'Our POS system is currently under active development. You can join the waitlist through our Pricing page to be among the first to get access once we launch. Early adopters will receive priority onboarding and special pricing.',
      },
      {
        q: 'Will the POS work offline?',
        a: 'Yes. The Tillnex POS is designed with an offline-first architecture. Transactions are cached locally and automatically synced to the cloud once connectivity is restored, ensuring zero downtime for your business.',
      },
      {
        q: 'Can I manage multiple store locations?',
        a: "Absolutely. Multi-location management is a core feature. You'll have a unified dashboard to manage inventory, sales, and staff across all your branches in real time.",
      },
      {
        q: 'What hardware is required for the POS?',
        a: 'The Tillnex POS runs on standard Windows and Linux machines, tablets, and dedicated POS terminals. We also support barcode scanners, receipt printers, and cash drawers through standard USB and Bluetooth protocols.',
      },
    ],
  },
  {
    id: 'ordering',
    label: 'Food Ordering',
    icon: ShoppingBag,
    questions: [
      {
        q: 'How is this different from UberEats or Foodpanda?',
        a: 'Unlike third-party platforms that charge 15–30% commission on every order, Tillnex gives you a fully branded, commission-free ordering system. You own your customer data, control your margins, and build direct relationships with your customers.',
      },
      {
        q: 'Does it come with a mobile app?',
        a: 'Yes. Our food ordering plans include a fully branded Android application. iOS support is currently in development and will be available soon. The web ordering platform works flawlessly on all mobile browsers in the meantime.',
      },
      {
        q: 'How does the delivery geofencing work?',
        a: "You define your delivery radius on a map in the admin panel. When a customer enters their address, the system automatically checks whether they're within your delivery zone. Orders outside the boundary are either rejected or offered a pickup option.",
      },
      {
        q: 'Can customers track their orders in real time?',
        a: "Yes. Our rider portal includes live tracking capabilities. Once an order is dispatched, customers receive updates and can see their rider's progress in real time on the order status page.",
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Billing',
    icon: CreditCard,
    questions: [
      {
        q: 'What are your pricing plans?',
        a: 'Our food ordering system starts at 35,000 PKR/year for the website-only plan and 45,000 PKR/year for the website + Android app plan. Monthly billing is also available. Custom web development is priced based on project scope. Visit our Pricing page for full details.',
      },
      {
        q: 'Do you offer monthly billing?',
        a: 'Yes. We offer both monthly and yearly billing options. Monthly plans include a one-time setup fee plus a recurring monthly charge. Yearly plans save you approximately 20% compared to monthly billing.',
      },
      {
        q: 'Are there any hidden fees?',
        a: 'No. Our pricing is fully transparent. The quoted price covers development, deployment, and standard support. Additional costs only apply for custom feature requests, premium hosting upgrades, or extended maintenance contracts — all discussed upfront.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfers, JazzCash, Easypaisa, and international wire transfers. For larger projects, we can arrange milestone-based payment schedules so you only pay as we deliver.',
      },
    ],
  },
];

function AccordionItem({ question, answer, value }) {
  return (
    <AccordionPrimitive.Item
      value={value}
      className="border border-border/60 rounded-2xl mb-3 overflow-hidden bg-card/30 backdrop-blur-sm data-[state=open]:border-primary/30 transition-colors duration-200"
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger className="flex items-center justify-between w-full px-6 py-5 text-left text-foreground font-medium text-sm hover:text-primary transition-colors group cursor-pointer">
          <span>{question}</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 ml-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
        <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
          {answer}
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}

function FAQPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('general');

  const currentCategory = faqCategories.find((c) => c.id === activeCategory);

  return (
    <>
      <Helmet>
        <title>FAQ | Frequently Asked Questions | Tillnex</title>
        <meta
          name="description"
          content="Find answers to common questions about Tillnex's POS systems, food ordering platforms, web development services, pricing, and billing."
        />
        <link rel="canonical" href="https://tillnex.space/faq" />
      </Helmet>

      <div className="min-h-screen bg-background pt-16 md:pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
              <HelpCircle className="w-4 h-4" />
              Knowledge Base
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Got questions? We've got answers. Browse by category or search for a specific topic below.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border ${
                  activeCategory === cat.id
                    ? 'bg-primary/10 text-primary border-primary/30'
                    : 'bg-card/40 text-muted-foreground border-border/60 hover:border-primary/20 hover:text-foreground'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Accordion */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto mb-24"
          >
            <AccordionPrimitive.Root type="single" collapsible className="space-y-0">
              {currentCategory?.questions.map((item, index) => (
                <AccordionItem
                  key={`${activeCategory}-${index}`}
                  value={`item-${index}`}
                  question={item.q}
                  answer={item.a}
                />
              ))}
            </AccordionPrimitive.Root>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Still have questions?</h2>
                <p className="text-muted-foreground text-lg">
                  Our team is ready to help. Reach out and we'll get back to you within 24 hours.
                </p>
              </div>
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="whitespace-nowrap rounded-full h-14 px-8 shrink-0"
              >
                Contact Us
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default FAQPage;
