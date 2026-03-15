'use client';

import { VIDEOS, VIDEO_POSTERS } from '@/constants/videos';

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black min-h-96 mb-12">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEOS.BG2}
        poster={VIDEO_POSTERS.BG2}
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 py-20">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4">
          Get in Touch
        </span>
        <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight max-w-3xl mb-6 text-white">
          Let's Create Something <span className="text-primary">Extraordinary</span>
        </h1>
        <p className="text-lg font-normal leading-relaxed text-slate-100 max-w-2xl">
          Whether it's a digital strategy, IT infrastructure, or a flagship event, our experts are ready to partner with you. Connect with us today.
        </p>
      </div>
    </section>
  );
}
