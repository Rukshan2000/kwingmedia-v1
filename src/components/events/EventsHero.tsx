export default function EventsHero() {
  return (
    <section className="relative px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="group relative h-[500px] w-full overflow-hidden rounded-xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuU2FSH77P-7vK_FSJnaqOMMJV8QzcxbTAZPPsyFYeWmscwyrGJ-gdofiOI4GvX3fqnNuJ3vs2aZoWXTPb6PjQ4REDd9A93gUVAYCPAkNjE9AwHJGC4CtfVLCZaLqL89H4lOotxHOBSh9Hz2-Egf9LMA3TPQ6s0gDdj-NDlir-cVcbCiP32-LodO9DneTNjpXPqejs2NTDXVjcKDP1JDDxM7ISxbQE1F-JbOlqhYtTMtdG6EzMYRVv-1ljG0pUISVQxir8PoSQf0s")`
            }}
          ></div>
          <div className="absolute bottom-0 left-0 z-20 p-8 lg:p-16">
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md">
              Featured Project
            </span>
            <h1 className="max-w-2xl text-4xl font-black leading-tight text-white lg:text-6xl">
              Elevating Events to Art Forms.
            </h1>
            <p className="mt-4 max-w-lg text-lg text-slate-200">
              From concept to execution, we bring your brand's vision to life through immersive experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
