export default function SolutionsStats() {
  const stats = [
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '500+', label: 'Successful Deployments' },
    { value: '24/7', label: 'Expert Support' },
    { value: '150%', label: 'Avg. ROI Improvement' },
  ];

  return (
    <section className="px-6 md:px-20 py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-slate-400 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
