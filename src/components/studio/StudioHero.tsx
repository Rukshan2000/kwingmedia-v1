'use client';

import { motion } from 'framer-motion';
import { VIDEOS } from '@/constants/videos';

export default function StudioHero() {
  return (
    <section className="relative w-full min-h-96 overflow-hidden bg-black flex items-center justify-center">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEOS.BG4}
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
            Professional Audio & Video Production
          </motion.span>

          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            World-Class Studio & <span className="text-primary">Production Facilities</span>
          </motion.h1>
          
          <motion.p
            className="text-slate-100 text-lg md:text-xl leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            State-of-the-art facilities for music production, film & video creation, live streaming, and professional event documentation.
          </motion.p>

          <motion.button
            className="w-fit px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Book Studio Time
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
