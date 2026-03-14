import { Check } from 'lucide-react';

export default function EventsServices() {
  const services = [
    {
      title: 'Corporate Conferences & Seminars',
      description: 'End-to-end orchestration of professional gatherings with seamless logistics and world-class production.',
      features: ['Full event management', 'AV production', 'Venue coordination', 'Live streaming'],
    },
    {
      title: 'Product Launches & Brand Activations',
      description: 'Create buzz-worthy launch events that captivate audiences and elevate your brand story.',
      features: ['Strategic planning', 'Creative direction', 'Multi-channel coverage', 'Real-time analytics'],
    },
    {
      title: 'Audio & Video Production',
      description: 'High-quality studio space and broadcast-quality production for every event moment.',
      features: ['Cinema-quality footage', 'Live documentation', 'Professional editing', 'Streaming services'],
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Our Services
          </span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mt-4 mb-4">Corporate, Commercial & Private Event Management</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            We manage every logistical detail — from venue procurement to on-site coordination — ensuring seamless execution that aligns perfectly with your corporate objectives.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 p-8 bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-primary/20 transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span>{feature}</span>
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
