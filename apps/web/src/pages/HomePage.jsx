import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  ShoppingBag,
  Code,
  ChevronRight,
  Star,
  Search,
  Palette,
  Rocket,
  Layers,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ServiceCard } from "@/components/ServiceCard.jsx";
import { Hero3DObject } from "@/components/Hero3DObject.jsx";
import { ClientLogos } from "@/components/ClientLogos.jsx";
import { ParticleBackground } from "@/components/ParticleBackground.jsx";
import { inlineKeyframes, FloatingShapes } from "@/components/BackgroundEffects.jsx";



/* ─── Animated counter component ─── */
function CountUp({ target, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, target, {
      duration,
      ease: "easeOut",
    });
    const unsub = rounded.on("change", (v) => setDisplay(String(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [isInView, target, duration, motionVal, rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}



/* ─── Process steps data ─── */
const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We deep-dive into your workflows, market, and pain points to map the perfect solution.",
    icon: Search,
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes and prototypes that align pixel-perfect with your brand identity.",
    icon: Palette,
  },
  {
    num: "03",
    title: "Develop",
    desc: "Production-grade code built for speed, security, and horizontal scalability.",
    icon: Code,
  },
  {
    num: "04",
    title: "Deploy",
    desc: "Zero-downtime launches with monitoring, CI/CD pipelines, and ongoing support.",
    icon: Rocket,
  },
];

/* ─── Stats data ─── */
const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
  { value: 24, suffix: "/7", label: "Expert Support" },
  { value: 5, suffix: "★", label: "Client Rated" },
];

/* ─── Testimonial data ─── */
const testimonials = [
  {
    text: "Tillnex completely transformed our business model. Their food ordering suite allowed us to escape third-party commissions entirely. The geofenced delivery bounds work flawlessly, and customers love the seamless SMS OTP login. Highly recommended!",
    name: "Ahsan Raza",
    role: "Founder, Ora Burgers",
    initials: "AR",
  },
  {
    text: "We needed a website and a custom rider app that could sync with our local kitchens. Tillnex delivered a robust platform that routes orders to our riders in real-time. Our dispatch operations have never been this smooth.",
    name: "Sarah Miller",
    role: "Operations Director, Slice & Co. Pizza",
    initials: "SM",
  },
  {
    text: "The automated business hours and auto-closing feature is a game-changer. The admin dashboard is incredibly secure and simple to modify. We can edit categories and products on the fly in seconds. Tillnex is our primary technology partner.",
    name: "Kenji Takahashi",
    role: "Owner, Bento Box Sushi",
    initials: "KT",
  },
];

/* ─── CTA Particle dots (pure CSS) ─── */
function CtaParticles() {
  const dots = Array.from({ length: 18 }, (_, i) => ({
    top: `${10 + Math.random() * 80}%`,
    left: `${5 + Math.random() * 90}%`,
    size: 2 + Math.random() * 4,
    delay: `${Math.random() * 4}s`,
    duration: `${3 + Math.random() * 4}s`,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden="true">
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/40"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            animation: `particle-float ${d.duration} ease-in-out infinite`,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOMEPAGE
   ═══════════════════════════════════════════════════════════════ */
function HomePage() {
  const navigate = useNavigate();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mql.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const anim = (props) => (prefersReducedMotion ? {} : props);
  const animInitial = (props) => (prefersReducedMotion ? { opacity: 1, y: 0, scale: 1, x: 0 } : props);

  return (
    <>
      {/* Inject keyframes */}
      <style>{inlineKeyframes}</style>

      <Helmet>
        <title>Tillnex | Enterprise POS Systems &amp; Custom Software Solutions</title>
        <meta name="description" content="Empower your business with Tillnex's enterprise-grade POS systems, high-speed custom web architectures, and seamless restaurant food ordering platforms." />
        <link rel="canonical" href="https://tillnex.space" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareCompany",
            "name": "Tillnex",
            "url": "https://tillnex.space",
            "logo": "https://tillnex.space/logo.svg",
            "description": "Tillnex delivers enterprise-grade POS systems, custom web architectures, and seamless food ordering platforms designed for scalability and business growth.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "tillnexhq@gmail.com",
              "contactType": "customer support",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://wa.me/923085121676"
            ]
          })}
        </script>
      </Helmet>

      {/* ═══════ HERO SECTION ═══════ */}
      <section className="relative overflow-hidden bg-background pt-16 md:pt-20 pb-16 md:pb-24">
        {/* Animated particles */}
        {!prefersReducedMotion && (
          <ParticleBackground className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
        )}

        {/* Floating geometric shapes */}
        <FloatingShapes />

        {/* Glow pulse behind headline */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(180 100% 45% / 0.12) 0%, transparent 70%)",
            animation: prefersReducedMotion ? "none" : "hero-glow-pulse 4s ease-in-out infinite",
          }}
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Text Column */}
            <motion.div
              initial={animInitial({ opacity: 0, y: 30 })}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Next-Generation Business Infrastructure
              </div>

              {/* Animated gradient headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-balance leading-[1.1]">
                <span className="text-foreground">Elevate Your Operations with </span>
                <span
                  style={{
                    background: "linear-gradient(135deg, hsl(180 100% 45%), hsl(280 80% 60%), hsl(180 100% 45%))",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: prefersReducedMotion ? "none" : "gradient-shift 4s ease-in-out infinite",
                  }}
                >
                  Precision
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance">
                Tillnex delivers enterprise-grade POS systems, custom web architectures, and seamless food ordering platforms designed for growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button
                  onClick={() => navigate("/services")}
                  size="lg"
                  className="w-full sm:w-auto px-8 h-14 text-base rounded-full"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  onClick={() => navigate("/contact")}
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
              initial={animInitial({ opacity: 0, scale: 0.8 })}
              animate={{ opacity: 1, scale: 1 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 w-full flex justify-center items-center"
            >
              <Hero3DObject />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════ CLIENT LOGOS MARQUEE ═══════ */}
      <ClientLogos />

      {/* ═══════ ANIMATED STATS BAR ═══════ */}
      <section className="py-12 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={animInitial({ opacity: 0, y: 20 })}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="relative group rounded-2xl p-6 text-center backdrop-blur-md bg-card/50 border border-border/60 overflow-hidden transition-all duration-300 hover:border-primary/30"
                style={{
                  background: "linear-gradient(135deg, hsl(231 38% 18% / 0.8), hsl(231 38% 14% / 0.9))",
                }}
              >
                {/* Glass shimmer on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, hsl(180 100% 45% / 0.05), hsl(280 80% 60% / 0.05))",
                  }}
                />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 relative z-10">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground font-medium relative z-10">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ SERVICES SECTION – 3D Perspective Cards ═══════ */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={animInitial({ opacity: 0, y: 20 })}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Comprehensive Solutions</h2>
            <p className="text-muted-foreground text-lg">
              We provide end-to-end technology infrastructure tailored to streamline your business workflow and maximize profitability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1200px" }}>
            {[
              {
                title: "POS Software",
                description: "Robust point-of-sale systems that handle inventory, sales tracking, and staff management with intuitive interfaces.",
                icon: Monitor,
                gradient: "from-cyan-500/20 to-cyan-600/5",
              },
              {
                title: "Web Development",
                description: "Custom, high-performance websites and web applications built with modern frameworks for scale and speed.",
                icon: Code,
                gradient: "from-purple-500/20 to-purple-600/5",
              },
              {
                title: "Food Ordering Systems",
                description: "Seamless online ordering platforms that integrate directly with your kitchen, minimizing friction and boosting revenue.",
                icon: ShoppingBag,
                gradient: "from-cyan-500/15 to-purple-500/10",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={animInitial({ opacity: 0, y: 30, rotateX: 8 })}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 group-hover:border-primary/30"
                  style={{ transition: "transform 0.5s, box-shadow 0.5s, border-color 0.5s" }}
                >
                  {/* Glow border on hover */}
                  <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, hsl(180 100% 45% / 0.15), hsl(280 80% 60% / 0.15))",
                      filter: "blur(1px)",
                      zIndex: -1,
                    }}
                  />
                  <div>
                    {/* Large gradient icon bg */}
                    <div className={`mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-primary transition-transform duration-300 group-hover:scale-110`}>
                      <service.icon className="h-9 w-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  </div>

                  <button
                    onClick={() => navigate("/pricing")}
                    className="w-full py-3 border border-primary/20 text-primary bg-primary/5 rounded-full hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all font-semibold text-sm flex items-center justify-center gap-2 group/btn"
                  >
                    View Pricing & Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW WE WORK – Interactive Process ═══════ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={animInitial({ opacity: 0, y: 20 })}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How We{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(180 100% 45%), hsl(280 80% 60%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Work
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A streamlined four-phase methodology that takes your idea from napkin sketch to production at speed.
            </p>
          </motion.div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px" aria-hidden="true">
              <div className="w-full h-full"
                style={{
                  background: "linear-gradient(90deg, hsl(180 100% 45% / 0.3), hsl(280 80% 60% / 0.3), hsl(180 100% 45% / 0.3))",
                }}
              />
            </div>

            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={animInitial({ opacity: 0, y: 30 })}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center group"
              >
                {/* Numbered badge */}
                <div className="relative mx-auto mb-6 w-32 h-32 flex items-center justify-center">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/15 group-hover:border-primary/40 transition-colors duration-500" />
                  {/* Inner circle */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, hsl(180 100% 45% / 0.1), hsl(280 80% 60% / 0.1))",
                    }}
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-background"
                    style={{
                      background: "linear-gradient(135deg, hsl(180 100% 45%), hsl(280 80% 60%))",
                    }}
                  >
                    {step.num}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>

                {/* Arrow connector for mobile (between cards) */}
                {i < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <ChevronRight className="w-6 h-6 text-primary/40 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS SECTION ═══════ */}
      <section className="py-24 bg-card border-t border-border/40 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={animInitial({ opacity: 0, y: 20 })}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Trusted by Leading Food Brands</h2>
            <p className="text-muted-foreground text-lg">
              See how restaurant owners and food delivery chains use Tillnex to own their customer experience and scale revenues.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.initials}
                initial={animInitial({ opacity: 0, y: 20 })}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="relative group bg-card/40 backdrop-blur-md border border-border/80 rounded-3xl p-8 flex flex-col justify-between hover:border-primary/30 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Glow border on hover */}
                <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, hsl(180 100% 45% / 0.08), hsl(280 80% 60% / 0.08))",
                    filter: "blur(1px)",
                    zIndex: -1,
                  }}
                />

                {/* Floating quotation mark */}
                <div className="absolute -top-3 -left-2 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                <div>
                  <div className="flex gap-1 mb-6 text-primary">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic relative z-10">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm uppercase"
                    style={{
                      background: "linear-gradient(135deg, hsl(180 100% 45% / 0.15), hsl(280 80% 60% / 0.15))",
                      color: "hsl(180 100% 45%)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA SECTION ═══════ */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={animInitial({ opacity: 0, y: 20 })}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{
              background: "linear-gradient(135deg, hsl(180 100% 45% / 0.08), hsl(280 80% 60% / 0.08), hsl(180 100% 45% / 0.06))",
              backgroundSize: "200% 200%",
              animation: prefersReducedMotion ? "none" : "cta-gradient 8s ease-in-out infinite",
              border: "1px solid hsl(180 100% 45% / 0.2)",
            }}
          >
            {/* Floating particles */}
            <CtaParticles />

            <div className="max-w-xl relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to transform your business?</h2>
              <p className="text-muted-foreground text-lg">
                Partner with Tillnex to implement technology that scales. Our team of experts is ready to analyze your needs.
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="whitespace-nowrap rounded-full h-14 px-8 shrink-0 relative z-10"
            >
              Get Started Today
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomePage;