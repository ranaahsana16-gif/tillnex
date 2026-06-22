import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, Filter } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Why Restaurants Are Ditching Third-Party Delivery Apps',
    excerpt:
      'Third-party delivery platforms charge up to 30% commission per order. Discover how restaurants are reclaiming their margins with custom ordering systems and what it means for the future of food tech.',
    category: 'Business',
    date: 'May 28, 2026',
    readTime: '6 min read',
  },
  {
    id: 2,
    title: 'Building a Real-Time Ordering Platform with WebSockets',
    excerpt:
      'A deep dive into the architecture behind real-time order synchronisation — from the customer\'s checkout to the kitchen display system — using WebSockets and Node.js event-driven patterns.',
    category: 'Technology',
    date: 'May 15, 2026',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'The Complete Guide to Choosing a POS System in 2026',
    excerpt:
      'Cloud-connected or offline-first? Single-location or multi-branch? We break down everything you need to know before investing in a point-of-sale system for your business.',
    category: 'Business',
    date: 'Apr 30, 2026',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'React Performance Patterns Every Developer Should Know',
    excerpt:
      'From code-splitting to memoisation strategies, learn the React performance patterns that keep our production apps loading under 1.2 seconds — even on slow 3G networks.',
    category: 'Tutorials',
    date: 'Apr 12, 2026',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Digital Transformation for Small Restaurants: A Practical Roadmap',
    excerpt:
      'You don\'t need a massive budget to modernize your restaurant. Here\'s a step-by-step roadmap for adopting online ordering, digital menus, and automated operations without the enterprise price tag.',
    category: 'Business',
    date: 'Mar 22, 2026',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'SEO for Web Apps: Going Beyond Meta Tags',
    excerpt:
      'Server-side rendering, structured data, Core Web Vitals — learn the modern SEO techniques that actually move the needle for JavaScript-heavy web applications and SPAs.',
    category: 'Tutorials',
    date: 'Mar 5, 2026',
    readTime: '9 min read',
  },
];

const categories = ['All', 'Technology', 'Business', 'Tutorials'];

const categoryColors = {
  Technology: 'bg-primary/10 text-primary',
  Business: 'bg-purple-500/10 text-purple-400',
  Tutorials: 'bg-amber-500/10 text-amber-500',
};

function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPosts =
    activeFilter === 'All' ? posts : posts.filter((p) => p.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Blog | Insights & Updates | Tillnex</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on restaurant technology, POS systems, digital transformation, and web development best practices from the Tillnex team."
        />
        <link rel="canonical" href="https://tillnex.space/blog" />
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
              <BookOpen className="w-4 h-4" />
              Tillnex Blog
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
              Insights & <span className="text-primary">Updates</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Expert perspectives on restaurant technology, business growth strategies, and modern software engineering from our team.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border ${
                  activeFilter === cat
                    ? 'bg-primary/10 text-primary border-primary/30'
                    : 'bg-card/40 text-muted-foreground border-border/60 hover:border-primary/20 hover:text-foreground'
                }`}
              >
                {cat === 'All' && <Filter className="w-3.5 h-3.5" />}
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card/40 backdrop-blur-md border border-border/80 rounded-3xl overflow-hidden flex flex-col hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Decorative Header */}
                  <div className="h-48 bg-gradient-to-br from-primary/5 via-card to-card relative flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${categoryColors[post.category] || 'bg-primary/10 text-primary'}`}>
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center text-primary text-sm font-semibold hover:gap-3 gap-2 transition-all duration-200 w-fit"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No posts found in this category yet. Check back soon!</p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default BlogPage;
