import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Monitor, ShoppingBag, Code, TrendingUp, Users, Clock, Zap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 'ora-burgers',
    featured: true,
    name: 'Ora Burgers',
    category: 'Food Ordering System',
    url: 'https://ora.tillnex.space/',
    description:
      'A fully automated food ordering ecosystem built for Ora Burgers — one of our flagship deployments. The platform enables customers to browse a dynamic menu, place real-time orders with SMS OTP verification, track delivery via a rider portal, and pay on delivery. The admin dashboard gives the restaurant full control over categories, products, banners, and business hours.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Real-Time WebSockets', 'Geofencing', 'SMS OTP'],
    metrics: [
      { label: 'Order Accuracy', value: '99.8%', icon: Zap },
      { label: 'Avg. Load Time', value: '<1.2s', icon: Clock },
      { label: 'Monthly Orders', value: '2,400+', icon: TrendingUp },
      { label: 'Active Users', value: '1,800+', icon: Users },
    ],
  },
  {
    id: 'flavor-street',
    featured: false,
    name: 'Flavor Street Kitchen',
    category: 'Web Development',
    description:
      'A high-performance restaurant website with an integrated menu showcase, gallery, reservation system, and SEO-optimised landing pages. Built on a modern React stack with server-side rendering for search engine visibility and sub-second page loads.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Formspree'],
    metrics: [
      { label: 'Lighthouse Score', value: '98', icon: Zap },
      { label: 'Bounce Rate Drop', value: '42%', icon: TrendingUp },
    ],
  },
  {
    id: 'tillnex-pos-preview',
    featured: false,
    name: 'Tillnex POS Preview',
    category: 'POS System',
    description:
      'An early preview of the Tillnex cloud-connected point-of-sale system currently under active development. Featuring offline-first transaction caching, multi-register inventory synchronisation, barcode scanning, and a unified analytics dashboard for multi-location management.',
    tech: ['Electron', 'React', 'Node.js', 'SQLite', 'Cloud Sync'],
    metrics: [
      { label: 'Transaction Speed', value: '<0.3s', icon: Clock },
      { label: 'Offline Capable', value: '100%', icon: Zap },
    ],
  },
  {
    id: 'artisan-ecom',
    featured: false,
    name: 'Artisan E-Commerce',
    category: 'Web Development',
    description:
      'A bespoke e-commerce storefront for a premium artisan goods retailer. Features product filtering, a dynamic cart system, Stripe integration for payments, and an admin panel for inventory and order management.',
    tech: ['Next.js', 'Stripe API', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    metrics: [
      { label: 'Conversion Rate', value: '+35%', icon: TrendingUp },
      { label: 'Page Speed', value: '95+', icon: Zap },
    ],
  },
];

const categoryColors = {
  'Food Ordering System': 'bg-primary/10 text-primary',
  'Web Development': 'bg-purple-500/10 text-purple-400',
  'POS System': 'bg-amber-500/10 text-amber-500',
};

function PortfolioPage() {
  const navigate = useNavigate();
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <Helmet>
        <title>Our Work | Portfolio & Case Studies | Tillnex</title>
        <meta
          name="description"
          content="Explore Tillnex's portfolio of enterprise POS systems, custom web architectures, and food ordering platforms. See real results from real clients."
        />
        <link rel="canonical" href="https://tillnex.space/portfolio" />
      </Helmet>

      <div className="min-h-screen bg-background pt-16 md:pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Case Studies & Live Projects
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
                Our <span className="text-primary">Work</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                Every project we deliver is engineered for performance, scalability, and real business impact. Here's a look at what we've built.
              </p>
            </motion.div>
          </div>

          {/* Featured Project */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="mb-24"
            >
              <div className="relative bg-card/60 backdrop-blur-md border-2 border-primary rounded-3xl overflow-hidden">
                <div className="absolute top-6 right-6 bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-10">
                  Featured
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Visual */}
                  <div className="relative bg-gradient-to-br from-primary/5 via-card to-card flex items-center justify-center p-12 lg:p-16 min-h-[320px]">
                    <div className="text-center">
                      <ShoppingBag className="w-24 h-24 text-primary/60 mx-auto mb-6" />
                      <p className="text-sm text-muted-foreground font-mono">ora.tillnex.space</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/80" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 w-fit ${categoryColors[featured.category]}`}>
                      {featured.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {featured.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {featured.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featured.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                      {featured.metrics.map((m) => (
                        <div key={m.label} className="bg-background/60 border border-border/40 rounded-2xl p-4 text-center">
                          <m.icon className="w-4 h-4 text-primary mx-auto mb-2" />
                          <p className="text-lg font-bold text-foreground">{m.value}</p>
                          <p className="text-[11px] text-muted-foreground mt-1">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    <a
                      href={featured.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors w-fit"
                    >
                      View Live Demo
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Projects */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
              More Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/40 backdrop-blur-md border border-border/80 rounded-3xl p-8 flex flex-col justify-between hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    {/* Category */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 ${categoryColors[project.category] || 'bg-primary/10 text-primary'}`}>
                      {project.category}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                      {project.category === 'POS System' && <Monitor className="w-7 h-7 text-primary/70" />}
                      {project.category === 'Web Development' && <Code className="w-7 h-7 text-primary/70" />}
                      {project.category === 'Food Ordering System' && <ShoppingBag className="w-7 h-7 text-primary/70" />}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">{project.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-[11px] font-medium border border-border/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="flex gap-4 mb-2">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="flex items-center gap-2">
                          <m.icon className="w-3.5 h-3.5 text-primary" />
                          <div>
                            <p className="text-sm font-bold text-foreground">{m.value}</p>
                            <p className="text-[10px] text-muted-foreground">{m.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Have a project in mind?</h2>
                <p className="text-muted-foreground text-lg">
                  Let's build something exceptional together. Share your vision with us and we'll engineer the solution.
                </p>
              </div>
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="whitespace-nowrap rounded-full h-14 px-8 shrink-0"
              >
                Start a Conversation
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default PortfolioPage;
