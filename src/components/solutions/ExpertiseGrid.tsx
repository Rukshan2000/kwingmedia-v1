import { Cloud, Shield, Database, Lightbulb, Zap, Activity } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import React from 'react';

const IconMap: Record<string, LucideIcon> = {
  cloud_done: Cloud,
  security: Shield,
  database: Database,
  psychology: Lightbulb,
  integration_instructions: Zap,
  monitoring: Activity,
} as const;

export default function ExpertiseGrid() {
  const expertise = [
    {
      icon: 'cloud_done',
      title: 'Cloud Infrastructure',
      description: 'AWS, Azure, and Google Cloud migration with zero-downtime deployments.',
      features: ['Multi-cloud strategy', 'Cost optimization', 'Auto-scaling'],
    },
    {
      icon: 'security',
      title: 'Cybersecurity',
      description: 'End-to-end security from network to application layer protection.',
      features: ['Threat detection', 'Compliance audits', 'Incident response'],
    },
    {
      icon: 'database',
      title: 'Data Management',
      description: 'Robust database solutions with backup and disaster recovery.',
      features: ['Database design', 'Replication', 'Disaster recovery'],
    },
    {
      icon: 'psychology',
      title: 'IT Consulting',
      description: 'Strategic guidance on technology roadmap and digital transformation.',
      features: ['Tech assessment', 'Roadmap planning', 'Change management'],
    },
    {
      icon: 'integration_instructions',
      title: 'System Integration',
      description: 'Seamless integration of legacy and modern systems.',
      features: ['API development', 'Middleware setup', 'Data migration'],
    },
    {
      icon: 'monitoring',
      title: 'Infrastructure Monitoring',
      description: 'Real-time monitoring and proactive performance optimization.',
      features: ['24/7 monitoring', 'Performance tuning', 'Alert management'],
    },
  ];

  return (
    <section className="px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our Core Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive IT solutions covering every aspect of your infrastructure needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-xl border border-white/10 hover:border-primary/30 bg-slate-900/50 hover:bg-slate-900 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {IconMap[item.icon] && React.createElement(IconMap[item.icon], {size: 24})}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature, j) => (
                  <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="text-primary">→</span>
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
