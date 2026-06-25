import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using the Tillnex website (tillnex.space) and any software products, platforms, or services provided by Tillnex ("Services"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms").

If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms. If you do not agree with any part of these Terms, you must not use our Services.`,
  },
  {
    title: '2. Description of Services',
    content: `Tillnex provides the following technology services:

• **Point of Sale (POS) Systems** — Cloud-connected and offline-capable POS software for retail and hospitality businesses, including inventory management, sales tracking, and multi-location synchronisation.
• **Custom Web Development** — Bespoke websites and web applications built with modern frameworks (React, Vite, Next.js) tailored to your business requirements.
• **Food Ordering Platforms** — Commission-free, branded online ordering systems with features including geofenced delivery, SMS OTP verification, rider portals, and admin dashboards.

The specific scope, features, and deliverables of each engagement are defined in the project proposal or service agreement provided to you before work commences.`,
  },
  {
    title: '3. User Obligations',
    content: `When using our Services, you agree to:

• Provide accurate and complete information during registration, consultation, and throughout the project lifecycle.
• Use the Services only for lawful purposes and in compliance with all applicable local, national, and international laws and regulations.
• Not attempt to reverse-engineer, decompile, or disassemble any software provided by Tillnex.
• Not use the Services to transmit malicious code, spam, or any material that infringes on the rights of others.
• Maintain the confidentiality of any login credentials, API keys, or access tokens provided to you.
• Promptly notify Tillnex of any unauthorized use of your accounts or any security breach.

You are solely responsible for all activity that occurs under your account or through your use of the Services.`,
  },
  {
    title: '4. Intellectual Property',
    content: `• **Tillnex IP**: All software, code, designs, documentation, trademarks, and other intellectual property created by Tillnex prior to or independent of your project remain the exclusive property of Tillnex.
• **Client IP**: Upon full payment of all agreed fees, you receive a non-exclusive, perpetual license to use the custom deliverables created specifically for your project. Source code ownership transfer is available as an add-on where specified in the service agreement.
• **Third-Party Components**: Our products may incorporate open-source libraries and third-party tools. These components remain subject to their respective licenses.
• **Feedback**: Any feedback, suggestions, or ideas you provide to Tillnex may be used to improve our Services without any obligation or compensation to you.

You may not use Tillnex's name, logo, or branding for any purpose without prior written consent.`,
  },
  {
    title: '5. Payment Terms',
    content: `• **Currency**: All pricing is denominated in Pakistani Rupees (PKR) unless otherwise specified in your service agreement.
• **Food Ordering Plans**: Our food ordering system is available at 35,000 PKR/year (Website Only) and 45,000 PKR/year (Website + Android App). Monthly plans are also available with a one-time setup fee plus monthly recurring charges. Yearly plans offer approximately 20% savings.
• **Custom Web Development**: Pricing is determined on a project-by-project basis following consultation. A detailed quote is provided before work begins.
• **Payment Schedule**: Depending on the project scope, payment may be structured as upfront, milestone-based, or recurring subscription. The specific schedule will be outlined in your service agreement.
• **Late Payments**: Payments not received within 15 days of the due date may result in service suspension until the balance is settled. We reserve the right to charge a late fee of 2% per month on overdue amounts.
• **Refunds**: Refunds are evaluated on a case-by-case basis. Once development work has commenced, partial refunds may be issued proportional to the work not yet completed.`,
  },
  {
    title: '6. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law:

• Tillnex shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, business opportunities, or goodwill, arising from your use of or inability to use the Services.
• Our total aggregate liability for any claim arising out of these Terms or the Services shall not exceed the total amount you have paid to Tillnex in the twelve (12) months preceding the claim.
• Tillnex does not guarantee that the Services will be uninterrupted, error-free, or free of harmful components, although we strive for 99.9% uptime and actively maintain all deployed systems.
• You acknowledge that software may contain bugs and that Tillnex's obligation is limited to commercially reasonable efforts to resolve reported issues within a reasonable timeframe.`,
  },
  {
    title: '7. Termination',
    content: `• **By You**: You may terminate your use of the Services at any time by providing written notice to tillnexhq@gmail.com. Termination does not entitle you to a refund of fees already paid for work completed.
• **By Tillnex**: We reserve the right to suspend or terminate your access to the Services if you breach these Terms, fail to make required payments, or engage in activity that threatens the security or integrity of our systems.
• **Effect of Termination**: Upon termination, your right to use the Services ceases immediately. We will provide you with a reasonable period (typically 30 days) to retrieve your data before it is permanently deleted from our systems.
• **Survival**: Sections relating to Intellectual Property, Limitation of Liability, and Governing Law shall survive termination of these Terms.`,
  },
  {
    title: '8. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising out of or relating to these Terms or the Services shall be resolved through good-faith negotiation. If a resolution cannot be reached, disputes shall be submitted to the exclusive jurisdiction of the courts in Lahore, Pakistan.

We encourage all parties to resolve disputes amicably and will make every reasonable effort to do so before pursuing formal legal channels.`,
  },
  {
    title: '9. Changes to These Terms',
    content: `We reserve the right to modify these Terms at any time. When we make material changes, we will update the "Last updated" date at the top of this page and, where practical, notify you via email or through our website.

Your continued use of the Services after any changes constitutes your acceptance of the revised Terms. We recommend reviewing this page periodically to stay informed about our terms and conditions.`,
  },
  {
    title: '10. Contact Information',
    content: `If you have any questions or concerns about these Terms of Service, please contact us:

• **Email**: tillnexhq@gmail.com
• **WhatsApp**: +92 308 5121676
• **Contact Form**: https://tillnex.space/contact

We aim to respond to all enquiries within 48 business hours.`,
  },
];

function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Tillnex</title>
        <meta
          name="description"
          content="Read the Tillnex Terms of Service covering service descriptions, payment terms, intellectual property, liability, and governing law for all Tillnex products."
        />
        <link rel="canonical" href="https://tillnex.space/terms" />
      </Helmet>

      <div className="min-h-screen bg-background pt-16 md:pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
              <FileText className="w-4 h-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-sm">
              Last updated: June 1, 2026
            </p>
          </motion.div>

          {/* Intro */}
          <div className="max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card/40 backdrop-blur-sm border border-border/60 rounded-2xl p-8"
            >
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client", "you") and Tillnex ("Company", "we", "us"). Please read these Terms carefully before using any of our services or products. Your use of our Services signifies your acceptance of these Terms.
              </p>
            </motion.div>
          </div>

          {/* Sections */}
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default TermsOfServicePage;
