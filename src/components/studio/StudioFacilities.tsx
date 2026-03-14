'use client';

import { Zap, Radio, Music, Video, Wifi, Headphones } from 'lucide-react';
import React from 'react';

export default function StudioFacilities() {
  const facilities = [
    {
      icon: Music,
      title: 'Music Recording Studios',
      description: 'Professional recording studios equipped with industry-standard microphones, soundboards, and acoustic treatment for pristine audio capture.',
    },
    {
      icon: Video,
      title: 'Video Production Suite',
      description: 'Green screen studios, lighting rigs, and 4K camera equipment for broadcast-quality video production and post-production editing.',
    },
    {
      icon: Radio,
      title: 'Podcast Broadcasting Studio',
      description: 'Dedicated podcast studio with noise cancellation, professional microphone arrays, and soundproofing for crystal-clear audio.',
    },
    {
      icon: Headphones,
      title: 'Audio Mixing & Mastering Lab',
      description: 'State-of-the-art mixing suite with reference monitors, analog and digital equipment for professional-grade mixing and mastering.',
    },
    {
      icon: Wifi,
      title: 'Live Streaming Control Room',
      description: 'Multi-camera switching, live graphics overlay, real-time audio control, and broadcast-quality internet connectivity for seamless streaming.',
    },
    {
      icon: Zap,
      title: 'Post-Production & Editing Suite',
      description: 'High-performance editing workstations, color grading stations, and visual effects labs for comprehensive post-production work.',
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-black border-y border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Facility Highlights
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-6">
            World-Class Recording & Production Spaces
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Our studios feature the latest technology and equipment, combined with decades of industry expertise to deliver world-class production results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/40 bg-white dark:bg-slate-800/50 hover:shadow-lg dark:hover:shadow-primary/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{facility.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{facility.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/20 dark:to-primary/10 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Equipment & Technology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> 4K & UHD Camera Systems</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Professional Microphone Arrays</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Analog & Digital Mixing Consoles</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Complete Lighting Rigs</li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Green Screen & Chroma Key Setup</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Multi-Camera Switching Matrix</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Color Grading & VFX Stations</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Broadcast-Quality Internet</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
