export default function SolutionsConsultation() {
  return (
    <section className="px-6 md:px-20 py-24 bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          Ready to Transform Your IT Infrastructure?
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Our IT consultants are ready to assess your current infrastructure and design
          a tailored solution that aligns with your business goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg shadow-primary/20">
            Start Free Assessment
          </button>
          <button className="border border-slate-600 text-white font-bold py-4 px-10 rounded-lg hover:border-slate-400 transition-colors">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
