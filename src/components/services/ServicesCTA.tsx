export default function ServicesCTA() {
  return (
    <section className="mt-24 p-12 rounded-3xl bg-primary text-white text-center">
      <h2 className="text-3xl font-black mb-4 text-white">Ready to transform your business?</h2>
      <p className="text-white/80 max-w-xl mx-auto mb-8 text-slate-400">
        Our team of experts is ready to help you navigate the complexities of digital growth
        and IT infrastructure.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-primary font-bold py-3 px-8 rounded-xl hover:bg-slate-100 transition-colors">
          Talk to an Expert
        </button>
        <button className="bg-primary border border-white/30 text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors">
          View Our Portfolio
        </button>
      </div>
    </section>
  );
}
