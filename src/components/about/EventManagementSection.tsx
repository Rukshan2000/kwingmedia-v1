'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function EventManagementSection() {
  const events = [
    {
      title: 'Corporate, Commercial & Private Events',
      description:
        'We specialize in end-to-end orchestration of events. Our team manages every logistical detail\u2014from venue procurement to on-site coordination\u2014ensuring seamless execution aligned with your objectives.',
      services: [
        'Corporate Conferences',
        'Product Launches',
        'Trade Shows',
        'Birthdays, Graduations & Wedding Coverage',
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD4lM0INhtcCCWrdRkCdztG1PYg2ZdTfZpb01NFoCbB5AYtzcIxFyxdJma-ytzVzKLniD-1lJSvo8ficDoBwBV9hqZEXsuomjrJatN4f1iIACJrfuVROcw3uLAZV8z1zUjxErwYPYl3O46fxpUbNyImGmXQvAruoJTaNEdIq2wSPwomnkaamXfFVBcl8LMSFkA__ML0r7DCQvZv3suZhXYT-TKZITU9b4-xSLYP-oC1ZxEVFrvL-l2N5glSmdfeKS-BuFMJ4qsmo7E',
    },
    {
      title: 'Audio & Video Production',
      description:
        'From cinematic brand stories to broadcast-quality event coverage, we engineer visual and auditory experiences that command attention with state-of-the-art equipment.',
      services: [
        'High-Quality Studio Space',
        'Film & Music Productions',
        'Wedding Pre-Shoots',
        'Live Event Documentation & Streaming',
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAwaAWOs9dgNbbVPCQSIvkLMUDEpzBQrUHECe0tDQEQYqDtQfRhbXZl-lX4HClQraG2IcATAZuAEpqfy-QEuQF0V-NQny_u988me8SrPwHEtWe306bxmkQEpTuE4bZHOxZ8719EKf03KNrXuPBY7216qja7wg_3Sbe4pnwTQBB9329QXsQm9LkRa5platHb1Y2dU0W0o5EprpSFmb00G-kvhx8ZiiNx1iSn_J6X8wR06TYZ3zCPnFkqPDpQYkiXgcfXMGU0IVytoqA',
    },
  ];

  return (
    <section className="mb-8">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="dark:text-slate-100 text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-4">
          Events & Audio-Visual Services
        </h2>
        <p className="dark:text-slate-400 text-base leading-relaxed text-slate-600 max-w-3xl">
          Experience immersive, professionally executed events with state-of-the-art production
          quality. From concept to execution, we handle every detail with precision and creativity.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <motion.div
            key={i}
            className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/30 transition-all min-h-[380px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-45 transition-opacity duration-500 group-hover:scale-105 transition-transform"
              style={{
                backgroundImage: `url('${event.image}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="relative p-8 h-full flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-3">{event.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">{event.description}</p>
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
                  Services Include
                </p>
                <ul className="space-y-2">
                  {event.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-slate-300 text-sm"
                    >
                      <Check size={16} className="text-primary flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
