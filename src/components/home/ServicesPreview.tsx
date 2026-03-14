'use client';

import Link from 'next/link';
import { TrendingUp, Terminal, PartyPopper } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-white dark:bg-background-dark/50 py-24 px-6 lg:px-20" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.h2 className="text-primary font-bold tracking-widest text-xs uppercase">Expertise</motion.h2>
          <motion.h3 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-black tracking-tight">
            Our Core Services
          </motion.h3>
          <motion.p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl">
            We provide a holistic approach to business expansion through specialized divisions
            that work in synergy to elevate your brand.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Service 1: Marketing */}
          <motion.div
            className="group p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col gap-6"
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <TrendingUp size={24} />
            </motion.div>
            <div className="flex flex-col gap-3">
              <motion.h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Digital Marketing
              </motion.h4>
              <motion.p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Data-driven strategies including SEO, PPC, and social media management to boost
                your online presence and conversion rates.
              </motion.p>
            </div>
          </motion.div>

          {/* Service 2: IT Solutions */}
          <motion.div
            className="group p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col gap-6"
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Terminal size={24} />
            </motion.div>
            <div className="flex flex-col gap-3">
              <motion.h4 className="text-xl font-bold text-slate-900 dark:text-white">IT Solutions</motion.h4>
              <motion.p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Custom software development, cloud infrastructure, and cybersecurity solutions
                designed to power your daily operations efficiently.
              </motion.p>
            </div>
          </motion.div>

          {/* Service 3: Events */}
          <motion.div
            className="group p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col gap-6"
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <PartyPopper size={24} />
            </motion.div>
            <div className="flex flex-col gap-3">
              <motion.h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Event Management
              </motion.h4>
              <motion.p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Memorable corporate events, product launches, and brand activations executed
                to perfection from concept to completion.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/services">
            <motion.button
              className="flex min-w-40 cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 mx-auto"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(194, 10, 10, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
