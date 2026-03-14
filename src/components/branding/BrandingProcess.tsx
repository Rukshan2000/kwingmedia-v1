export default function BrandingProcess() {
  const steps = [
    {
      number: '1',
      title: 'Discovery',
      description: 'In-depth research into your business, competitors, and target audience.',
      isPrimary: true,
    },
    {
      number: '2',
      title: 'Strategy',
      description: 'Building a roadmap and defining the unique value proposition.',
    },
    {
      number: '3',
      title: 'Creative',
      description: 'Execution of high-fidelity designs and compelling ad copy.',
    },
    {
      number: '4',
      title: 'Launch',
      description: 'Deploying campaigns and ongoing optimization for ROI.',
    },
  ];

  return (
    <section className="px-6 md:px-20 py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            How We Work
          </h2>
          <h3 className="text-3xl md:text-5xl font-black mb-6">Our Creative Process</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div
                className={`size-16 rounded-full flex items-center justify-center text-2xl font-black mb-6 border-4 z-10 ${
                  step.isPrimary
                    ? 'bg-primary border-slate-800'
                    : 'bg-slate-800 border-slate-700 group-hover:bg-primary transition-colors'
                }`}
              >
                {step.number}
              </div>
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-slate-400 text-sm px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
