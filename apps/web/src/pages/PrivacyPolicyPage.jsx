import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information that you voluntarily provide when using our services, including:

• **Personal Information**: Name, email address, phone number, and business name when you fill out our contact forms or sign up for our services.
• **Usage Data**: Pages visited, time spent on pages, browser type, device information, and IP address collected automatically through standard web analytics.
• **Communication Data**: The content of messages you send through our contact forms, email, or WhatsApp conversations.
• **Business Data**: Information related to your business operations when using our POS, web, or food ordering platforms, including transaction records, product catalogues, and customer order data.

We do not collect sensitive personal data such as financial account numbers, government-issued IDs, or health information unless explicitly required by a service you subscribe to.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect for the following purposes:

• **Service Delivery**: To build, deploy, and maintain the software products you have commissioned — including POS systems, websites, and food ordering platforms.
• **Communication**: To respond to your enquiries, provide project updates, and send important service-related notifications.
• **Improvement**: To analyse usage patterns and improve the performance, security, and user experience of our products.
• **Support**: To provide technical support, troubleshoot issues, and deliver ongoing maintenance for active projects.
• **Legal Compliance**: To comply with applicable laws, regulations, and legal processes.

We will never sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: '3. Data Storage & Security',
    content: `We take the security of your data seriously and implement industry-standard measures to protect it:

• All data transmitted between your browser and our servers is encrypted using TLS/SSL encryption.
• Application data is stored on secure, access-controlled servers hosted by reputable cloud providers.
• Access to personal data is restricted to authorised team members on a need-to-know basis.
• We conduct regular security reviews and apply patches promptly.

While we strive to protect your information, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security but are committed to maintaining the highest reasonable standard of protection.`,
  },
  {
    title: '4. Cookies',
    content: `Our websites may use cookies and similar tracking technologies to:

• **Essential Cookies**: Maintain your session and ensure core functionality works correctly.
• **Analytics Cookies**: Understand how visitors interact with our sites to improve performance and user experience.
• **Preference Cookies**: Remember your settings and preferences for future visits.

You can control cookie preferences through your browser settings. Disabling certain cookies may impact the functionality of our websites.`,
  },
  {
    title: '5. Third-Party Services',
    content: `We integrate with the following third-party services to deliver our products:

• **Formspree** — Used to process contact form submissions securely. Submissions are transmitted to Formspree's servers and are subject to their privacy policy.
• **WhatsApp (Meta)** — We offer WhatsApp as a communication channel. Messages sent via WhatsApp are subject to Meta's privacy policy and terms.
• **Vercel** — Our web applications are deployed on Vercel's infrastructure. Vercel may collect standard server logs including IP addresses and request metadata.
• **SMS OTP Providers** — For food ordering platforms, we use SMS verification services. Phone numbers are transmitted to our SMS provider solely for authentication purposes.

We carefully vet our third-party partners and only share the minimum data necessary for each service to function.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the following rights regarding your personal data:

• **Access**: You may request a copy of the personal data we hold about you.
• **Correction**: You may request that we correct any inaccurate or incomplete data.
• **Deletion**: You may request that we delete your personal data, subject to any legal retention requirements.
• **Objection**: You may object to the processing of your data for specific purposes.
• **Data Portability**: You may request your data in a structured, commonly used format.

To exercise any of these rights, please contact us using the details provided below. We will respond to your request within 30 days.`,
  },
  {
    title: '7. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us:

• **Email**: tillnexhq@gmail.com
• **WhatsApp**: +92 395 121676
• **Contact Form**: https://tillnex.space/contact

We are committed to resolving any privacy concerns promptly and transparently.`,
  },
];

function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Tillnex</title>
        <meta
          name="description"
          content="Read Tillnex's Privacy Policy to understand how we collect, use, and protect your personal information across our POS, web, and food ordering services."
        />
        <link rel="canonical" href="https://tillnex.space/privacy" />
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
              <Shield className="w-4 h-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
              Privacy Policy
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
                At Tillnex, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your data when you interact with our website, products, and services. By using our services, you agree to the practices described in this policy.
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

export default PrivacyPolicyPage;
