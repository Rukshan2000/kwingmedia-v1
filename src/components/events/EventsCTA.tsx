'use client';

import Link from 'next/link';
import { VIDEOS } from '@/constants/videos';
import { Sparkles, Zap, CheckCircle2, Shield } from 'lucide-react';

export default function EventsCTA() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'End-to-End Service',
      description: 'Complete event management from concept through flawless execution.',
    },
    {
      icon: Zap,
      title: 'Technical Excellence',
      description: 'State-of-the-art AV, lighting, and production equipment.',
    },
    {
      icon: CheckCircle2,
      title: 'Professional Team',
      description: 'Experienced coordinators and production specialists.',
    },
    {
      icon: Shield,
      title: 'Seamless Execution',
      description: 'On-time delivery with precision and attention to detail.',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black min-h-[550px] flex items-center justify-center">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20 py-20 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white leading-tight">
            Ready to Make Your Event Legendary?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Our team specializes in transforming visions into unforgettable experiences that resonate long after the event ends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div key={i} className="flex flex-col gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-white/40 transition-all">
                <Icon size={28} className="text-primary" />
                <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <button className="h-14 px-10 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all shadow-lg transform hover:scale-105 duration-200">
              Let's Plan Your Event
            </button>
          </Link>
          <Link href="/contact">
            <button className="h-14 px-10 bg-primary/20 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-sm transform hover:scale-105 duration-200">
              Get More Information
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
