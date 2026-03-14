export default function BrandingHero() {
  return (
    <section className="relative px-6 md:px-20 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-slate-900 min-h-125 flex flex-col items-center justify-center text-center p-8 md:p-16">
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvK6-S3_RKH-HW2u-yX9MHG-KqaM8wTBYzXNCnFQWI54jmDL8zLdPsceWgZbssrrJx5WZz_SjF8l5ARl7cj75Jd-aUgWsb9pdA8z0g9BmIrGEvEh_7jlWjKewdeLXY-AlHouWSqC7tkM-MvygQ4NW_A86DzqvGrNjkBEFCYkrHDKYoya2EyWfUh2N03dovNqB1PR87CLdRKXDcjRuwuuqdaDUTjDt7mP0OR2H-mfqLZlz6bLOSruuVjLThlA9X-4MNrp1v4pYy2yg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary text-white rounded-full">
              Award Winning Agency
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
              Elevate Your Identity.{' '}
              <br />
              <span className="text-primary">Ignite Your Growth.</span>
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10">
              Strategic branding and data-driven advertising to scale your digital presence in
              an evolving market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-14 px-8 bg-primary text-white rounded-lg font-bold text-lg hover:scale-105 transition-transform">
                Get Started Today
              </button>
              <button className="h-14 px-8 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
