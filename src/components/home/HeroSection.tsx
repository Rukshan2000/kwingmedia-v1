"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { VIDEOS, VIDEO_POSTERS } from '@/constants/videos';

const HERO_SLIDES = [
  {
    badge: 'Your Strategic Growth Partner',
    title: 'Creative Solutions for',
    highlight: 'Powerful',
    suffix: 'Brand Experiences',
    description:
      'Kwings Media delivers impactful branding, advertising, and event experiences that elevate your brand and connect you with the right audience.',
    videoSrc: VIDEOS.BG1,
    posterSrc: VIDEO_POSTERS.BG1,
  },
  {
    badge: 'Event Management Experts',
    title: 'Events That Inspire',
    highlight: 'Engagement',
    suffix: 'and Impact',
    description:
      'From corporate events and product launches to large-scale brand activations, Kwings Media creates memorable experiences powered by world-class production and planning.',
    videoSrc: VIDEOS.BG2,
    posterSrc: VIDEO_POSTERS.BG2,
  },
  {
    badge: 'Technology & Innovation',
    title: 'Reliable',
    highlight: 'IT Solutions',
    suffix: 'for Modern Businesses',
    description:
      'We build scalable IT systems, digital platforms, and smart infrastructure that help businesses operate faster, smarter, and more securely.',
    videoSrc: VIDEOS.BG3,
    posterSrc: VIDEO_POSTERS.BG3,
  },
  {
    badge: 'Professional Production',
    title: 'Advanced',
    highlight: 'Audio Visual',
    suffix: 'Production Services',
    description:
      'Kwings Media provides professional audio, lighting, LED displays, and visual production solutions to make every event immersive and unforgettable.',
    videoSrc: VIDEOS.BG4,
    posterSrc: VIDEO_POSTERS.BG4,
  }
];


export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Videos — all mounted, continuously playing */}
      {HERO_SLIDES.map((slide, index) => (
        <motion.div
          key={slide.videoSrc}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: index === activeSlide ? 1 : 0,
            scale: index === activeSlide ? 1 : 1.14,
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <video
            className="w-full h-full object-cover"
            src={slide.videoSrc}
            poster={slide.posterSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Enhanced shadow layer with gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black/70"></div>
      <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent"></div>

      {/* Content Overlay with Smooth Transitions */}
      <div className="relative z-10 px-6 py-12 lg:px-20 lg:py-20 flex flex-col lg:flex-row gap-12 items-center justify-center min-h-screen max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            className="flex flex-col gap-8 flex-1 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              <motion.span
                className="text-primary font-bold tracking-widest text-xs uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {currentSlide.badge}
              </motion.span>
              <motion.h1
                className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {currentSlide.title} <span className="text-primary">{currentSlide.highlight}</span>{' '}
                {currentSlide.suffix}
              </motion.h1>
              <motion.p
                className="text-gray-100 text-lg leading-relaxed max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {currentSlide.description}
              </motion.p>
            </div>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link href="/services">
                <motion.button
                  className="flex min-w-40 cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold transition-all"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(var(--color-primary), 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                </motion.button>
              </Link>
              <motion.button
                className="flex min-w-40 cursor-pointer items-center justify-center rounded-lg h-14 px-6 border-2 border-white text-white text-base font-bold transition-all"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Controls with Animation */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 flex items-center gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <motion.button
            key={slide.badge}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`${
              index === activeSlide ? 'bg-white' : 'bg-white/60 hover:bg-white/85'
            } rounded-full transition-colors`}
            animate={{
              width: index === activeSlide ? 28 : 10,
              height: 10,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </section>
  );
}
