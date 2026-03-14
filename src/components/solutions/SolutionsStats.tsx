export default function SolutionsStats() {
  const stats = [
    { value: '100+', label: 'Custom Solutions Deployed' },
    { value: '500+', label: 'Active Business Users' },
    { value: '200%', label: 'Avg. Efficiency Gain' },
    { value: '24/7', label: 'Technical Support' },
  ];

  return (
    <section className="px-6 md:px-20 py-12 border-y border-slate-200 dark:border-slate-700 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
