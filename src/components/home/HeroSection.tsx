"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const HERO_SLIDES = [
  {
    badge: 'Your Growth Partner',
    title: 'Integrated Solutions for',
    highlight: 'Accelerated',
    suffix: 'Business Growth',
    description:
      'Partner with Kwings Media for cutting-edge digital marketing, robust IT solutions, and seamless event management.',
    imageAlt: 'Digital strategy team working in a modern office',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBck-Vy1RWdjdgHEZkeYKx2_Gtgqu5891J7v2-1gMNYEfNXjB6nz4wJAoOqXnvFgVobVCk0yetgW6Lez-3ZxYd4GDYxhUWUnR779d0YzVRcXa9N2hHccbajf1yRys26-M-8-u2BgipKnv6t8pSld355FZ6Lis5W0fiSIGqnai-N2UsFtxbcMufeA71qMfrex7wTjzvVDMPYawh9JKTbzkGZVSWul2CXldH68OWZoMfDwkpWjNOwUMjt7jxYkx_9ToOEcJJobXHgI88',
  },
  {
    badge: 'Event Excellence',
    title: 'Experiences That Turn',
    highlight: 'Attention',
    suffix: 'Into Momentum',
    description:
      'From product launches to corporate summits, we design unforgettable events that amplify your brand in real time.',
    imageAlt: 'Crowd at a premium brand event with stage lighting',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4lM0INhtcCCWrdRkCdztG1PYg2ZdTfZpb01NFoCbB5AYtzcIxFyxdJma-ytzVzKLniD-1lJSvo8ficDoBwBV9hqZEXsuomjrJatN4f1iIACJrfuVROcw3uLAZV8z1zUjxErwYPYl3O46fxpUbNyImGmXQvAruoJTaNEdIq2wSPwomnkaamXfFVBcl8LMSFkA__ML0r7DCQvZv3suZhXYT-TKZITU9b4-xSLYP-oC1ZxEVFrvL-l2N5glSmdfeKS-BuFMJ4qsmo7E',
  },
  {
    badge: 'Built for Scale',
    title: 'Future-Ready',
    highlight: 'IT Systems',
    suffix: 'for Confident Teams',
    description:
      'We build secure, scalable IT infrastructure and software that keeps your business fast, stable, and always connected.',
    imageAlt: 'Engineers collaborating on cloud architecture and software systems',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8UyHhMzYradfEKD5M4vfqATF5IicbbigHoGAFPaNVjS6ETGGv5vhZJNzIyV37qV5tExjdX-yI5Yn-aOc1g0RUPDL1nWddpegBvHx4ZCZ1gfPgbtuOr50QJ0ZDxMN64W9khy08p5rZer1XDChMnbQWBu_Kwd2Rjte06zva6UU0GBg91EW52GkB1J6KbLR7UNo47P7pj2GBbkTVNmVZM_640zRTSgmU9wMVCJccDWuBiHqbOfcL7_phRtPhDZIx0tS2YIJ8Qu0LgP8',
  },
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
      {/* Animated Background Images with Framer Motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          className="absolute inset-0"
          initial={{ scale: 1.14, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5.2, ease: 'easeOut' }}
        >
          <img
            alt={currentSlide.imageAlt}
            className="w-full h-full object-cover"
            src={currentSlide.imageSrc}
          />
        </motion.div>
      </AnimatePresence>

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
