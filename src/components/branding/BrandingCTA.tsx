export default function BrandingCTA() {
  return (
    <section className="px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-primary rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 size-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 size-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 leading-tight">
            Ready to take your brand
            <br />
            to the next level?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
            Stop blending in. Start standing out with Kwings Media's tailored branding and
            advertising solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="h-16 px-10 bg-white text-primary font-black text-xl rounded-lg hover:bg-slate-100 transition-colors shadow-xl">
              Let's Build Your Brand
            </button>
            <button className="h-16 px-10 bg-transparent border-2 border-white/30 text-white font-bold text-xl rounded-lg hover:bg-white/10 transition-colors">
              Book a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
