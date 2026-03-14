'use client';

import { motion } from 'framer-motion';

export default function GetQuoteCTA() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="px-6 lg:px-20 py-24">
      <motion.div
        className="max-w-5xl mx-auto rounded-3xl bg-slate-900 dark:bg-slate-800 overflow-hidden relative shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 translate-x-1/2"></div>
        <div className="p-10 lg:p-20 relative z-10 text-center flex flex-col items-center gap-8">
          <motion.h3
            className="text-3xl lg:text-5xl font-black text-white tracking-tight"
            variants={itemVariants}
          >
            Ready to Scale Your Brand?
          </motion.h3>
          <motion.p
            className="text-slate-400 text-lg max-w-2xl"
            variants={itemVariants}
          >
            Whether you need a full digital transformation or a specific campaign, our team is
            ready to deliver exceptional results.
          </motion.p>
          <motion.button
            className="flex min-w-50 cursor-pointer items-center justify-center rounded-lg h-16 px-8 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/20"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 25px -5px rgba(194, 10, 10, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            Get Your Free Quote
          </motion.button>
          <motion.p
            className="text-slate-500 text-sm font-medium"
            variants={itemVariants}
          >
            No obligation. Response within 24 hours.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
