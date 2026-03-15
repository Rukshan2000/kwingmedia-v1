'use client';

import { motion } from 'framer-motion';
import { VIDEOS, VIDEO_POSTERS } from '@/constants/videos';
import Link from 'next/link';

export default function SolutionsHero() {
  return (
    <section className="relative w-full min-h-96 overflow-hidden bg-black flex items-center justify-center">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEOS.BG3}
        poster={VIDEO_POSTERS.BG3}
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20 py-24">
        <motion.div
          className="flex flex-col gap-8 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="text-primary font-bold uppercase tracking-widest text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            IT Solutions & Custom Software
          </motion.span>

          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Smart Digital Systems That <span className="text-primary">Empower Your Business</span>
          </motion.h1>
          
          <motion.p
            className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We build POS systems, HR management platforms, websites, mobile apps, and custom enterprise software that integrate seamlessly with your business. From concept to deployment, our technology transforms your operations into a growth engine.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/contact">
              <button className="h-14 px-8 bg-primary text-white rounded-lg font-bold text-base hover:bg-primary/90 transition-bg transform hover:scale-105 shadow-lg shadow-primary/30">
                Get Your Solution Built
              </button>
            </Link>
            <button className="h-14 px-8 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-lg font-bold text-base hover:bg-white/20 transition-all">
              Explore Our Technology
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
