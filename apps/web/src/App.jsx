import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'sonner';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { ParticleBackground } from '@/components/ParticleBackground.jsx';
import { CustomCursor } from '@/components/CustomCursor.jsx';
import { WhatsAppButton } from '@/components/WhatsAppButton.jsx';
import { BackToTop } from '@/components/BackToTop.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import { LoadingSpinner } from '@/components/LoadingSpinner.jsx';

// Lazy-loaded pages for performance
const HomePage = React.lazy(() => import('@/pages/HomePage.jsx'));
const ServicesPage = React.lazy(() => import('@/pages/ServicesPage.jsx'));
const AboutPage = React.lazy(() => import('@/pages/AboutPage.jsx'));
const ContactPage = React.lazy(() => import('@/pages/ContactPage.jsx'));
const PricingPage = React.lazy(() => import('@/pages/PricingPage.jsx'));
const FAQPage = React.lazy(() => import('@/pages/FAQPage.jsx'));
const PrivacyPolicyPage = React.lazy(() => import('@/pages/PrivacyPolicyPage.jsx'));
const TermsOfServicePage = React.lazy(() => import('@/pages/TermsOfServicePage.jsx'));

function SuspenseFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper><Suspense fallback={<SuspenseFallback />}><HomePage /></Suspense></PageWrapper>
        } />
        <Route path="/services" element={
          <PageWrapper><Suspense fallback={<SuspenseFallback />}><ServicesPage /></Suspense></PageWrapper>
        } />
        <Route path="/about" element={
          <PageWrapper><Suspense fallback={<SuspenseFallback />}><AboutPage /></Suspense></PageWrapper>
        } />
        <Route path="/contact" element={
          <PageWrapper><Suspense fallback={<SuspenseFallback />}><ContactPage /></Suspense></PageWrapper>
        } />
        <Route path="/pricing" element={
          <PageWrapper><Suspense fallback={<SuspenseFallback />}><PricingPage /></Suspense></PageWrapper>
        } />
        <Route path="/faq" element={
          <PageWrapper><Suspense fallback={<SuspenseFallback />}><FAQPage /></Suspense></PageWrapper>
        } />
        <Route path="/privacy-policy" element={
          <PageWrapper><Suspense fallback={<SuspenseFallback />}><PrivacyPolicyPage /></Suspense></PageWrapper>
        } />
        <Route path="/terms-of-service" element={
          <PageWrapper><Suspense fallback={<SuspenseFallback />}><TermsOfServicePage /></Suspense></PageWrapper>
        } />
        <Route path="*" element={
          <PageWrapper>
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background px-4">
              <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
              <p className="text-xl text-muted-foreground mb-8 text-center">We couldn't find the page you're looking for.</p>
              <a href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                Return Home
              </a>
            </div>
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <CustomCursor />
        <WhatsAppButton />
        <BackToTop />
        <ParticleBackground className="fixed inset-0 z-0 opacity-20 pointer-events-none" />
        
        <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.015)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.015)_1px,_transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="sticky top-0 z-30"
        >
          <Header />
        </motion.div>

        <main className="flex-grow relative z-10 flex flex-col overflow-hidden">
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_30%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex-grow"
          >
            <AnimatedRoutes />
          </motion.div>
        </main>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <Footer />
        </motion.div>

        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;