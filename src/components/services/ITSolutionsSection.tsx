import { Code, Cloud, Shield } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import React from 'react';

const IconMap: Record<string, LucideIcon> = {
  code: Code,
  cloud_done: Cloud,
  security: Shield,
} as const;

export default function ITSolutionsSection() {
  const solutions = [
    {
      icon: 'code',
      title: 'Software Development',
      description:
        'Custom web and mobile applications built with scalable architectures and modern tech stacks.',
    },
    {
      icon: 'cloud_done',
      title: 'Cloud Infrastructure',
      description:
        'Seamless migration and management of AWS/Azure environments for maximum uptime and security.',
    },
    {
      icon: 'security',
      title: 'Cybersecurity',
      description:
        'Proactive threat detection and end-to-end encryption to safeguard your company\'s most valuable assets.',
    },
  ];

  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <Code size={24} className="text-primary" />
        <h2 className="dark:text-slate-100 text-3xl font-bold leading-tight text-white">
          IT Solutions
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-4 rounded-xl dark:hover:bg-slate-800 transition-colors hover:bg-slate-900/50"
          >
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              {IconMap[solution.icon] && React.createElement(IconMap[solution.icon], {size: 24})}
            </div>
            <h3 className="dark:text-slate-100 text-lg font-bold text-white">
              {solution.title}
            </h3>
            <p className="dark:text-slate-400 text-sm text-slate-400">
              {solution.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
