'use client';

import { motion } from 'framer-motion';
import { VIDEOS } from '@/constants/videos';
import { ChevronDown } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-black flex items-center">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEOS.BG1}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20 py-24">
        <motion.div
          className="flex flex-col gap-6 max-w-3xl"
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
            Who Are We?
          </motion.span>

          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            About <span className="text-primary">KWINGS MEDIA</span>
          </motion.h1>

          <motion.p
            className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A premium agency dedicated to excellence in{' '}
            <span className="font-semibold text-white">
              Event Management, Audio & Video Production, IT Solutions, and Advertising
            </span>
            . We merge creativity with advanced technology to deliver high-end corporate solutions.
          </motion.p>
        </motion.div>

        {/* Vision / Mission / Approach cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              To be the global benchmark in creating seamless, unforgettable experiences through{' '}
              <span className="font-semibold text-white">
                cutting-edge technology and creative brilliance
              </span>
              .
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Delivering{' '}
              <span className="font-semibold text-white">
                end-to-end media, event, and IT solutions
              </span>{' '}
              that empower brands to connect, inspire, and grow in a dynamic world.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs">
                Our Approach
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We blend{' '}
              <span className="font-semibold text-white">
                artistic vision with technical precision
              </span>
              , ensuring every project is executed flawlessly from concept to completion.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} className="text-white/60" />
      </motion.div>
    </section>
  );
}
