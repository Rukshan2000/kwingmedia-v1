'use client';

import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function StudioServices() {
  const services = [
    {
      title: 'High-Quality Studio Space',
      description: 'Professionally designed recording studios with acoustic treatment, multiple rooms for different uses, and 24/7 access for clients.',
      features: ['Acoustically treated rooms', '24/7 facility access', 'Climate controlled', 'Equipment included'],
    },
    {
      title: 'Film & Music Production',
      description: 'Complete audio and video production from concept to final master. Expert engineers and state-of-the-art equipment for professional-grade output.',
      features: ['Recording engineering', 'Music mixing & mastering', 'Film production', 'Post-production services'],
    },
    {
      title: 'Wedding & Event Pre-Shoots',
      description: 'Capture special moments with cinematic quality photography and videography. Professional team with years of experience in capturing emotions.',
      features: ['Pre-wedding shoots', 'Engagement coverage', 'Cinematic editing', 'Same-day edits available'],
    },
    {
      title: 'Live Event Documentation & Streaming',
      description: 'Professional documentation and real-time streaming of corporate events, conferences, product launches, and celebrations.',
      features: ['Multi-camera coverage', 'Live streaming setup', '4K video capture', 'Professional editing'],
    },
    {
      title: 'Real-Time Webcasting Solutions',
      description: 'High-quality live streaming infrastructure for corporate events, seminars, product launches, and online broadcasts with interactive features.',
      features: ['HD/4K streaming', 'Multi-platform delivery', 'Interactive overlays', 'Audience analytics'],
    },
    {
      title: 'Keynote & Conference Recording',
      description: 'Professional recording and production of keynote speeches, seminars, and conference presentations with full post-production editing.',
      features: ['Audio recording', 'Video documentation', 'Presentation slides capture', 'Subtitle & transcription'],
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Our Studio Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-6">
            Premium Production Services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            From intimate studio sessions to large-scale live productions, we provide comprehensive audio and video services with professional expertise and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/40 bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg dark:hover:shadow-primary/20 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
