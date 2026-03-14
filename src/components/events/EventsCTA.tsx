export default function EventsCTA() {
  return (
    <section className="bg-primary py-20 px-6 lg:px-12">
      <div className="mx-auto max-w-4xl text-center text-white">
        <h2 className="text-4xl font-black">Ready to make your next event legendary?</h2>
        <p className="mt-6 text-lg text-white/80">
          Our team is ready to transform your ideas into unforgettable experiences. Let's discuss your project.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-white px-8 py-3 font-bold text-primary transition-colors hover:bg-slate-100">
            Start Planning
          </button>
          <button className="rounded-full border-2 border-white px-8 py-3 font-bold text-white transition-colors hover:bg-white/10">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
