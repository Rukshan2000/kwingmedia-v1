'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, CheckCircle2, Shield } from 'lucide-react';
import { VIDEOS } from '@/constants/videos';
import Link from 'next/link';

export default function StudioCTA() {
  const benefits = [
    {
      icon: Code2,
      title: 'Professional Equipment',
      description: 'State-of-the-art gear and technology for studio-quality results every time.',
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick booking, fast production schedules, and expedited post-production timelines.',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Assurance',
      description: 'Expert team with years of experience ensuring professional-grade output quality.',
    },
    {
      icon: Shield,
      title: '24/7 Studio Access',
      description: 'Flexible booking schedules with round-the-clock facility access for your projects.',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black flex items-center justify-center py-24">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEOS.BG2}
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Create Something <span className="text-primary">Amazing?</span>
          </h2>
          <p className="text-xl text-slate-100 max-w-2xl">
            Book your studio time, schedule your production, or discuss your project with our expert team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                className="p-6 rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:border-primary/40 hover:bg-white/20 transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-100 text-sm">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Studio Now
          </motion.button>
          <Link href="/contact">
            <motion.button
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
