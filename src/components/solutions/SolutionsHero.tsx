export default function SolutionsHero() {
  return (
    <section className="relative px-6 md:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Enterprise-Grade IT Solutions
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            From cloud infrastructure to cybersecurity, we deliver comprehensive IT solutions
            that scale with your business and protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg shadow-primary/20">
              Schedule Consultation
            </button>
            <button className="border border-white/20 text-white font-bold py-4 px-8 rounded-lg hover:bg-white/5 transition-all">
              Download Solution Brief
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
