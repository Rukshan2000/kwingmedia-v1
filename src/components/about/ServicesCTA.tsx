'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { VIDEOS } from '@/constants/videos';
import { Zap, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ServicesCTA() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Creative Excellence',
      description: 'We push boundaries to deliver unique, memorable concepts that stand out.',
    },
    {
      icon: Zap,
      title: 'Technical Precision',
      description: 'State-of-the-art equipment and flawless execution for every project.',
    },
    {
      icon: CheckCircle2,
      title: 'End-to-End Solutions',
      description: 'Comprehensive services from initial strategy to final delivery.',
    },
    {
      icon: Shield,
      title: 'Reliable Execution',
      description: 'Trusted by industry leaders to deliver on time and beyond expectations.',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black min-h-[500px] flex items-center justify-center">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEOS.BG4}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20 py-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
          Why Choose <span className="text-primary">KWINGS MEDIA</span>?
        </h2>
        <p className="text-white/85 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          We combine creative excellence with technical precision to deliver comprehensive
          solutions that drive business growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                className="flex flex-col gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 hover:border-white/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Icon size={28} className="text-primary" />
                <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <motion.button
              className="bg-white text-primary font-bold py-4 px-10 rounded-xl hover:bg-slate-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </Link>
          <Link href="/solutions">
            <motion.button
              className="border border-white/30 text-white font-bold py-4 px-10 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Solutions
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
