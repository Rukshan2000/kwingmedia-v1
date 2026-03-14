'use client';

import Link from 'next/link';
import { TrendingUp, Terminal, PartyPopper, Zap } from 'lucide-react';
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
          <motion.h2 className="text-primary font-bold tracking-widest text-xs uppercase">What We Offer</motion.h2>
          <motion.h3 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-black tracking-tight">
            Future-Proofing Your Brand Through Media & Technology
          </motion.h3>
          <motion.p className="text-slate-600 dark:text-slate-400 text-base max-w-3xl">
            We combine creative advertising, seamless event management, music & video productions, and cutting-edge IT solutions to power your brand's growth.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Service 1: Strategic Advertising & Branding */}
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
                Strategic Advertising & Branding
              </motion.h4>
              <motion.p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                We craft data-driven campaigns and visual identities that resonate with your target demographic. From brand positioning to multi-channel digital marketing, we create narratives that capture market share and build lasting brand equity.
              </motion.p>
              <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2 mt-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>All kinds of Branding Materials</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Digital Marketing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Creative Media Direction</span>
                </li>
              </ul>
            </div>
            <Link href="/branding">
              <motion.button
                className="mt-auto text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
                whileHover={{ x: 4 }}
              >
                Learn More →
              </motion.button>
            </Link>
          </motion.div>

          {/* Service 2: Event Management */}
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
                We specialize in the end-to-end orchestration of corporate, commercial, and private events. Our team manages every logistical detail—from venue procurement to on-site coordination—ensuring seamless execution aligned with your objectives.
              </motion.p>
              <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2 mt-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Corporate Conferences</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Product Launches & Trade Shows</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Birthdays, Graduations & Weddings</span>
                </li>
              </ul>
            </div>
            <Link href="/events">
              <motion.button
                className="mt-auto text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
                whileHover={{ x: 4 }}
              >
                Learn More →
              </motion.button>
            </Link>
          </motion.div>

          {/* Service 3: Audio & Video Production */}
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
              <Zap size={24} />
            </motion.div>
            <div className="flex flex-col gap-3">
              <motion.h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Audio & Video Production
              </motion.h4>
              <motion.p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                From cinematic brand stories to broadcast-quality event coverage, we engineer visual and auditory experiences that command attention with state-of-the-art equipment and professional expertise.
              </motion.p>
              <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2 mt-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>High Quality Studio Space</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Film & Music Productions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Live Event Documentation & Streaming</span>
                </li>
              </ul>
            </div>
            <Link href="/solutions">
              <motion.button
                className="mt-auto text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
                whileHover={{ x: 4 }}
              >
                Learn More →
              </motion.button>
            </Link>
          </motion.div>

          {/* Service 4: IT Solutions */}
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
              <motion.h4 className="text-xl font-bold text-slate-900 dark:text-white">
                IT Solutions
              </motion.h4>
              <motion.p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Technology that integrates, not just operates. We provide custom software development, POS systems, and infrastructure solutions that turn technical infrastructure into a powerful growth engine.
              </motion.p>
              <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2 mt-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Human Capital Management (HR Systems)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Interactive Kiosk & Event Management Systems</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Point of Sale (POS) Ecosystems</span>
                </li>
              </ul>
            </div>
            <Link href="/solutions">
              <motion.button
                className="mt-auto text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
                whileHover={{ x: 4 }}
              >
                Learn More →
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/contact">
            <motion.button
              className="flex min-w-40 cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 mx-auto"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(194, 10, 10, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
