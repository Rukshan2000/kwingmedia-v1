import { Palette, Zap, TrendingUp } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import React from 'react';

const IconMap: Record<string, LucideIcon> = {
  palette: Palette,
  token: Zap,
  ads_click: TrendingUp,
  search_insights: TrendingUp,
} as const;

export default function BrandingExpertise() {
  const services = [
    {
      icon: 'palette',
      title: 'Brand Strategy',
      description: 'Defining your core values, voice, and market positioning to stand out in the noise.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyRsJP2Q2LrhX5xoU5DKh7azdGsplntNQppRqDpRzJnZs4NUJXunLF7AQhieCQFGDdGOq7LO4VVRIKv_oTfGwpMFB1ZJ-feuYEHjyReS2y8ziYFLiCnBEZ4fuCFWR7T2UskinVGDiXK3ETyBjFSXA5tT4aKQVbd9dxJhsZQxv0GK5aOB3McRcGIOQQx8XaJiwbTZAYhli1zPG7vd21nkGAaY6D2IE6Gy2n4tjKAZJugCdcA_r8_u41jxpGEMR_YC8Bf9Nf9mIJjdg',
    },
    {
      icon: 'token',
      title: 'Visual Identity',
      description: 'Crafting memorable logos, typography, and visual guidelines that resonate with users.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD9iYIO_PgDGkPnD_uoGg2kMe8ROxAY4Nqtn8LWI5xTYRPS7q8qaRgOH2AK4GP6Fpr4WAoH8XU3ULRBmJoNCVJz0QWrleX2g9xMq7EeWjYWD_SgceI71cR5qpXHyyXhBEraeRGI8zzIsBdd_23WBk1sr8zF2TWf-UIT0f6SKbIzwFHjGdjUMwRDEiXY9vzxwD85jJ0uEiDq3MslBgQZt8PjjNiiJ4LsfooYS8XXAgtPmFu3vnkG83Jq4mQLPT9HH9vsjDlDyCTyG8',
    },
    {
      icon: 'ads_click',
      title: 'Social Advertising',
      description: 'High-impact multi-channel campaigns tailored to your target demographic.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB618Ct6I5gbJ3V5LwKsh5aFjUsXnpBavqI71yMw73Or2MKBUdS-W16SafaIZZ_iYF8FmFC77QBZxYtQaTb3N5ex9bEgWXQwBcczUwRLYej-7hBZSQv7Y9jmPXgkX6WDY59Tmz0mOcUV1-GPqIU2shRzu_domynF0B0iabkMpr22hFvjr-Dz_kp1NG5P-FM11AUuC7fdltBb-vDeOCtuTxgg3E56hfyUckCj3m18JfFVmnU_tqGdxi-gCr8vwTL0aPvC58TJdRdGNE',
    },
    {
      icon: 'search_insights',
      title: 'SEM & SEO',
      description: 'Optimizing your digital visibility where it matters most, driving organic and paid traffic.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8UyHhMzYradfEKD5M4vfqATF5IicbbigHoGAFPaNVjS6ETGGv5vhZJNzIyV37qV5tExjdX-yI5Yn-aOc1g0RUPDL1nWddpegBvHx4ZCZ1gfPgbtuOr50QJ0ZDxMN64W9khy08p5rZer1XDChMnbQWBu_Kwd2Rjte06zva6UU0GBg91EW52GkB1J6KbLR7UNo47P7pj2GBbkTVNmVZM_640zRTSgmU9wMVCJccDWuBiHqbOfcL7_phRtPhDZIx0tS2YIJ8Qu0LgP8',
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              Core Capabilities
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">Our Expertise</h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-md">
            We blend creative excellence with analytical precision to deliver results that matter.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-primary/40 transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {IconMap[service.icon] && React.createElement(IconMap[service.icon], {size: 24})}
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
              <img
                className="w-full h-32 object-cover rounded-lg"
                src={service.image}
                alt={service.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
