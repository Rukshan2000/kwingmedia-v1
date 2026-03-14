'use client';

import { motion } from 'framer-motion';
import { Code, Cloud, Shield, Zap, Users, BarChart3 } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import React from 'react';

const IconMap: Record<string, LucideIcon> = {
  code: Code,
  users: Users,
  cloud: Cloud,
  barChart: BarChart3,
  shield: Shield,
  zap: Zap,
} as const;

export default function ITSolutionsSection() {
  const solutions = [
    {
      icon: 'users',
      title: 'Human Capital Management',
      description: 'Comprehensive HR systems and workforce management solutions.',
    },
    {
      icon: 'zap',
      title: 'Interactive Kiosk Systems',
      description: 'Smart, user-friendly kiosk platforms for customer engagement.',
    },
    {
      icon: 'barChart',
      title: 'Event Management Software',
      description: 'End-to-end event management platforms with real-time analytics.',
    },
    {
      icon: 'code',
      title: 'Point of Sale (POS) Ecosystems',
      description: 'Integrated POS systems designed for retail and hospitality.',
    },
    {
      icon: 'cloud',
      title: 'Custom Software Development',
      description: 'Bespoke business software tailored to your unique needs.',
    },
    {
      icon: 'shield',
      title: 'Web & Mobile Applications',
      description: 'Scalable applications built with modern technology stacks.',
    },
  ];

  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Code size={24} className="text-primary" />
          <h2 className="dark:text-slate-100 text-3xl md:text-4xl font-bold leading-tight text-slate-900">
            IT Solutions
          </h2>
        </div>

        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            Technology That Integrates, Not Just Operates
          </h3>
          <p className="dark:text-slate-400 text-base leading-relaxed text-slate-600 mb-4">
            At <span className="font-semibold">KWINGS MEDIA</span>, we understand that IT is the
            backbone of modern marketing and business operations. Our IT division focuses on{' '}
            <span className="font-semibold">
              building smart digital systems that integrate seamlessly with your business workflows
            </span>
            .
          </p>
          <p className="dark:text-slate-400 text-base leading-relaxed text-slate-600">
            By connecting platforms like POS, Kiosk systems, Event Management tools, and HR systems
            with your marketing strategies, we help you gain{' '}
            <span className="font-semibold">
              real-time insights into customer behavior and operational performance
            </span>
            .
          </p>
        </div>
      </motion.div>

      <div>
        <h3 className="font-bold uppercase tracking-widest text-sm mb-8 text-primary">
          Our IT Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-4 p-6 rounded-xl dark:hover:bg-slate-800 transition-all hover:bg-slate-50 border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {IconMap[solution.icon] &&
                  React.createElement(IconMap[solution.icon], { size: 24 })}
              </div>
              <h3 className="dark:text-slate-100 text-lg font-bold text-slate-900">
                {solution.title}
              </h3>
              <p className="dark:text-slate-400 text-sm text-slate-600">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <a
          href="/solutions"
          className="inline-flex items-center gap-2 text-primary font-bold text-base hover:gap-3 transition-all"
        >
          Learn More about IT Solutions →
        </a>
      </motion.div>
    </section>
  );
}
