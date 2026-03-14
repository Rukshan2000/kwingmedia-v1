import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="px-6 py-12 lg:px-20 lg:py-20 flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">
            Your Growth Partner
          </span>
          <h1 className="text-slate-900 dark:text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight">
            Integrated Solutions for <span className="text-primary">Accelerated</span> Business
            Growth
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
            Partner with Kwings Media for cutting-edge digital marketing, robust IT solutions,
            and seamless event management. We bridge the gap between technology and brand
            experience.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services">
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold hover:shadow-xl hover:shadow-primary/30 transition-all">
              Explore Services
            </button>
          </Link>
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex-1 w-full relative">
        <div className="aspect-video w-full rounded-2xl bg-slate-200 overflow-hidden shadow-2xl relative">
          <img
            alt="Team working in a modern office"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBck-Vy1RWdjdgHEZkeYKx2_Gtgqu5891J7v2-1gMNYEfNXjB6nz4wJAoOqXnvFgVobVCk0yetgW6Lez-3ZxYd4GDYxhUWUnR779d0YzVRcXa9N2hHccbajf1yRys26-M-8-u2BgipKnv6t8pSld355FZ6Lis5W0fiSIGqnai-N2UsFtxbcMufeA71qMfrex7wTjzvVDMPYawh9JKTbzkGZVSWul2CXldH68OWZoMfDwkpWjNOwUMjt7jxYkx_9ToOEcJJobXHgI88"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl hidden lg:block border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Rocket size={24} />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 dark:text-white">500+</p>
              <p className="text-xs text-slate-500 font-medium">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
