'use client';

import Link from 'next/link';
import { ShoppingCart, ArrowLeft, CheckCircle2, Cloud, WifiOff, UtensilsCrossed, Settings } from 'lucide-react';
import { Footer } from '@/components/shared';

export default function POSSystemsPage() {
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
              <ShoppingCart className="text-primary" size={32} />
            </div>
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">IT Solutions</span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">
                Point of Sale (POS) Systems
              </h1>
            </div>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mt-8">
            We offer flexible POS solutions tailored to your business needs—whether you need cloud-based systems for seamless connectivity, offline POS for uninterrupted operations, specialized restaurant POS with table management, or fully customized solutions designed to perfectly align with your unique business processes.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Our POS Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-primary/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <Cloud size={24} className="text-primary" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Cloud-Based POS</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Access your business from anywhere with real-time synchronization across all devices and locations.</p>
            <ul className="space-y-2">
              {['Real-time data sync', 'Multi-location management', 'Automatic backups', 'Remote access'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-primary/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <WifiOff size={24} className="text-primary" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Offline POS</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Works seamlessly without internet connection—perfect for reliability and uninterrupted sales.</p>
            <ul className="space-y-2">
              {['Offline functionality', 'Auto-sync when online', 'Fast transactions', 'Zero downtime'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-primary/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed size={24} className="text-primary" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Restaurant POS</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Specialized for restaurants with table management, kitchen ordering, and dining experience optimization.</p>
            <ul className="space-y-2">
              {['Table management', 'Kitchen display system', 'Split billing', 'Reservation system'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-primary/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <Settings size={24} className="text-primary" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Customized POS</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Tailor-made solutions designed to perfectly align with your unique business workflows and requirements.</p>
            <ul className="space-y-2">
              {['Custom features', 'Industry-specific tools', 'Scalable design', 'Integration ready'].map((item, i) => (
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
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Operations</h3>
              <ul className="space-y-3">
                {['Real-time inventory tracking', 'Multi-device support', 'Payment integration', 'Receipt customization'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Intelligence</h3>
              <ul className="space-y-3">
                {['Analytics dashboard', 'Customer management', 'Sales reporting', 'Trend analysis'].map((feature, i) => (
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
            {['Retail Stores', 'Restaurants', 'Cafes', 'Supermarkets', 'Hotels', 'Gas Stations'].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <p className="font-semibold text-slate-900 dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Retail Operations?</h2>
          <p className="mb-8 text-lg opacity-90">
            Let's discuss how our POS system can streamline your business and increase profitability.
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
