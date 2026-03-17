'use client';

import Link from 'next/link';
import { Code, ArrowLeft, CheckCircle2, Zap, Target, Users, Wrench } from 'lucide-react';
import { Footer } from '@/components/shared';

export default function CustomSoftwarePage() {
  return (
    <main className="bg-white dark:bg-black">
      <div className="px-6 md:px-20 py-12">
        <Link href="/solutions" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
          <ArrowLeft size={18} />
          Back to Solutions
        </Link>
      </div>

      <section className="px-6 md:px-20 py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code className="text-primary" size={32} />
            </div>
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">IT Solutions</span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">
                Custom Software Development
              </h1>
            </div>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mt-8">
            Our talented development team delivers fast, high-quality customized software solutions tailored to your unique business needs. We combine expertise, innovation, and agility to build software that exceeds expectations and drives real business impact.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Why Choose Our Development Team</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-primary/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={24} className="text-primary" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Fast Delivery</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">We deliver without compromising quality. Our agile methodology ensures rapid iterations and quick time-to-market.</p>
            <ul className="space-y-2">
              {['Agile development', 'Rapid prototyping', 'Quick iterations', 'On-time delivery'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-primary/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <Target size={24} className="text-primary" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Quality Assured</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Rigorous testing and code standards ensure your software is robust, secure, and production-ready.</p>
            <ul className="space-y-2">
              {['Comprehensive testing', 'Code reviews', 'Security audits', 'Performance optimization'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-primary/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <Users size={24} className="text-primary" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Talented Team</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Expert developers with years of experience across various technologies and industries.</p>
            <ul className="space-y-2">
              {['Senior developers', 'Full-stack expertise', 'Industry knowledge', 'Problem solvers'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-primary/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <Wrench size={24} className="text-primary" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Fully Customized</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">No off-the-shelf solutions—every line of code is written for your specific business requirements.</p>
            <ul className="space-y-2">
              {['Built to your specs', 'Custom workflows', 'Unique features', 'Your vision realized'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 bg-slate-50 dark:bg-slate-800/30 -mx-6 md:-mx-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Core Development Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Technology Stack</h3>
              <ul className="space-y-3">
                {['Scalable architecture', 'Cloud-ready solutions', 'API development', 'Database design'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quality & Support</h3>
              <ul className="space-y-3">
                {['Security focused', 'Technical support', 'Maintenance included', 'Continuous improvement'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Fast-Moving Startups', 'Enterprise Innovation', 'Digital Transformation', 'Complex Requirements', 'Time-Critical Projects', 'Industry-Specific Solutions'].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <p className="font-semibold text-slate-900 dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Your Custom Solution</h2>
          <p className="mb-8 text-lg opacity-90">
            Tell us about your specific needs and let's create software that transforms your business.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
