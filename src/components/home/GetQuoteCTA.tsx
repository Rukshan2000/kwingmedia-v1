export default function GetQuoteCTA() {
  return (
    <section className="px-6 lg:px-20 py-24">
      <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900 dark:bg-slate-800 overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 translate-x-1/2"></div>
        <div className="p-10 lg:p-20 relative z-10 text-center flex flex-col items-center gap-8">
          <h3 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
            Ready to Scale Your Brand?
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl">
            Whether you need a full digital transformation or a specific campaign, our team is
            ready to deliver exceptional results.
          </p>
          <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-16 px-8 bg-primary text-white text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20">
            Get Your Free Quote
          </button>
          <p className="text-slate-500 text-sm font-medium">
            No obligation. Response within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
