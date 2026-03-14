'use client';

import { ShoppingCart, Users, Globe, Code, Zap, BarChart3 } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import React from 'react';

const IconMap: Record<string, LucideIcon> = {
  pos: ShoppingCart,
  hr: Users,
  website: Globe,
  software: Code,
  integration: Zap,
  analytics: BarChart3,
} as const;

export default function ExpertiseGrid() {
  const expertise = [
    {
      icon: 'pos',
      title: 'Point of Sale (POS) Systems',
      description: 'Complete retail and hospitality POS solutions with inventory management, real-time analytics, and multi-location support.',
      features: ['Real-time inventory', 'Multi-device support', 'Payment integration', 'Analytics dashboard'],
    },
    {
      icon: 'hr',
      title: 'HR & Human Capital Management',
      description: 'Enterprise HR systems for payroll, employee management, attendance, and workforce analytics.',
      features: ['Payroll automation', 'Attendance tracking', 'Performance management', 'Team collaboration'],
    },
    {
      icon: 'website',
      title: 'Website & Web Applications',
      description: 'Responsive, scalable websites and progressive web apps built with modern technology stacks.',
      features: ['Responsive design', 'SEO optimized', 'Fast loading', 'Secure hosting'],
    },
    {
      icon: 'software',
      title: 'Custom Software Development',
      description: 'Tailored business software solutions designed specifically for your unique operational needs.',
      features: ['Custom features', 'Scalable architecture', 'User-friendly interface', 'Technical support'],
    },
    {
      icon: 'integration',
      title: 'Mobile Apps & IoT Solutions',
      description: 'Native and cross-platform mobile applications including IoT integration for smart operations.',
      features: ['iOS & Android', 'Real-time sync', 'Offline functionality', 'Push notifications'],
    },
    {
      icon: 'analytics',
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform data into actionable insights with custom dashboards and real-time reporting.',
      features: ['Custom dashboards', 'Real-time reports', 'Predictive analytics', 'Data visualization'],
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Our IT Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-6">
            Technology That Integrates, Not Just Operates
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            We understand that IT is the backbone of modern business operations. Our solutions connect your entire tech ecosystem—POS, HR, websites, and custom platforms—to give you <span className="font-semibold text-primary">real-time insights and seamless operations</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/40 bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg dark:hover:shadow-primary/20 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {IconMap[item.icon] && React.createElement(IconMap[item.icon], {size: 24})}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature, j) => (
                  <li key={j} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
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
