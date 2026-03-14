import Link from 'next/link';
import { TrendingUp, Terminal, PartyPopper } from 'lucide-react';

export default function ServicesPreview() {
  return (
    <section className="bg-white dark:bg-background-dark/50 py-24 px-6 lg:px-20" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <h2 className="text-primary font-bold tracking-widest text-xs uppercase">Expertise</h2>
          <h3 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-black tracking-tight">
            Our Core Services
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl">
            We provide a holistic approach to business expansion through specialized divisions
            that work in synergy to elevate your brand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Service 1: Marketing */}
          <div className="group p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col gap-6">
            <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <TrendingUp size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Digital Marketing
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Data-driven strategies including SEO, PPC, and social media management to boost
                your online presence and conversion rates.
              </p>
            </div>
          </div>

          {/* Service 2: IT Solutions */}
          <div className="group p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col gap-6">
            <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Terminal size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">IT Solutions</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Custom software development, cloud infrastructure, and cybersecurity solutions
                designed to power your daily operations efficiently.
              </p>
            </div>
          </div>

          {/* Service 3: Events */}
          <div className="group p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col gap-6">
            <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <PartyPopper size={24} />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Event Management
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Memorable corporate events, product launches, and brand activations executed
                to perfection from concept to completion.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link href="/services">
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold hover:shadow-xl hover:shadow-primary/30 transition-all mx-auto">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
