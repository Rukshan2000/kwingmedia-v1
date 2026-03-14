'use client';

import { ArrowRight } from 'lucide-react';

export default function StudioPortfolio() {
  const portfolio = [
    {
      title: 'Corporate Conference Documentation',
      category: 'Live Streaming',
      description: 'Full 4K documentation and live streaming of multi-day corporate conference with 2000+ attendees.',
    },
    {
      title: 'Music Album Production',
      category: 'Music Production',
      description: 'Complete recording, mixing, and mastering of debut album from emerging artist across 12 tracks.',
    },
    {
      title: 'Wedding Pre-Shoot Campaign',
      category: 'Event Documentation',
      description: 'Cinematic pre-wedding shoot with drone footage, multi-location shooting, and same-day edit.',
    },
    {
      title: 'Product Launch Live Stream',
      category: 'Live Production',
      description: 'End-to-end production of product launch with multi-camera setup, graphics overlay, and audience interaction.',
    },
    {
      title: 'Podcast Series Production',
      category: 'Audio Production',
      description: 'Series of 20+ podcast episodes with professional recording, editing, and distribution across platforms.',
    },
    {
      title: 'Keynote Conference Recording',
      category: 'Video Production',
      description: 'Professional recording and editing of keynote speeches with slide capture and presentation graphics.',
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-6">
            Featured Productions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Explore our portfolio of professional productions across music, video, events, and live streaming projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer bg-gradient-to-br from-white/10 via-white/5 to-white/0 dark:from-white/5 dark:via-white/2 dark:to-transparent backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20 hover:bg-gradient-to-br hover:from-white/20 hover:via-white/10 hover:to-white/0 dark:hover:from-white/10 dark:hover:via-white/5 dark:hover:to-transparent transition-all duration-300"
            >
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest mb-3 border border-white/20">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-3 group-hover:translate-y-0 translate-y-2 transition-transform">
                  <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm text-slate-100 line-clamp-2">{item.description}</p>
                </div>

                <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-bold">View Project</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
