import { Users, Truck, Megaphone } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import React from 'react';

const IconMap: Record<string, LucideIcon> = {
  event_seat: Users,
  local_shipping: Truck,
  campaign: Megaphone,
} as const;

export default function EventsServices() {
  const services = [
    {
      icon: 'event_seat',
      title: 'Strategic Planning',
      description: 'Masterminding every detail, from venue sourcing to comprehensive timeline management.',
    },
    {
      icon: 'local_shipping',
      title: 'Logistics & Tech',
      description: 'Seamless coordination of suppliers, audiovisual systems, and onsite operations.',
    },
    {
      icon: 'campaign',
      title: 'Event Branding',
      description: 'Creative design, signage, and digital experiences that resonate with your audience.',
    },
  ];

  return (
    <section className="dark:bg-slate-900/50 py-24 px-6 lg:px-12 bg-slate-900/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black text-white lg:text-5xl">Our Specialties</h2>
          <div className="mx-auto mt-4 h-1.5 w-24 bg-primary"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 p-8 dark:bg-background-dark/50 bg-slate-900 text-white"
            >
              {IconMap[service.icon] && React.createElement(IconMap[service.icon], {size: 32, className: 'text-primary'})}
              <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
              <p className="mt-4 text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
