'use client';

import Link from 'next/link';
import { BarChart3, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Footer } from '@/components/shared';

export default function AnalyticsPage() {
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
              <BarChart3 className="text-primary" size={32} />
            </div>
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">IT Solutions</span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">
                Data Analytics & Business Intelligence
              </h1>
            </div>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mt-8">
            Transform your raw data into actionable intelligence with custom dashboards, real-time reporting, and predictive analytics to fuel data-driven decision-making.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Key Features</h2>
            <ul className="space-y-4">
              {['Custom dashboards', 'Real-time reports', 'Predictive analytics', 'Data visualization', 'Data integration', 'Performance metrics', 'Trend analysis', 'Export functionality'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Benefits</h3>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm">
              <p>
                <strong>Data-Driven Decisions:</strong> Make informed business decisions backed by real data and insights.
              </p>
              <p>
                <strong>Identify Opportunities:</strong> Discover trends and patterns that drive growth.
              </p>
              <p>
                <strong>Risk Management:</strong> Detect anomalies and potential issues before they escalate.
              </p>
              <p>
                <strong>Competitive Edge:</strong> Gain insights faster than your competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Financial Services', 'E-commerce', 'Healthcare', 'Technology', 'Retail', 'Manufacturing'].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <p className="font-semibold text-slate-900 dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Unlock the Power of Your Data</h2>
          <p className="mb-8 text-lg opacity-90">
            Turn your data into strategic insights that drive business growth and innovation.
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
