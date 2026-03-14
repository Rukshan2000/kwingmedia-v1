export default function BrandingResults() {
  const stats = [
    { value: '150%', label: 'Avg. ROI Increase' },
    { value: '2.4M', label: 'Impressions Monthly' },
    { value: '85%', label: 'Brand Awareness Growth' },
    { value: '12+', label: 'Industry Awards' },
  ];

  return (
    <section className="px-6 md:px-20 py-20 bg-[#161616]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            Proven Success
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white">
            We Deliver Results-Driven Marketing
          </h3>
          <p className="text-slate-400 text-lg mb-8">
            Our campaigns aren't just pretty faces. We track every metric to ensure your
            brand is growing where it counts.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-0"></div>
            <img
              className="rounded-xl shadow-2xl relative z-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx6TBYjOSSQJ-2rC55x0VmVifTP7ajOSvLdoGNVSK4YByPssH25NsFxZ2jyFq9zrPQhV-nDtdfD9oq03ylG73kLUJV25Z78BxVLSyr_zWevs7jAkvE_dNjPyIlpBkbAW92DY1yJrVYKdQLPKUVBb40Iqb1OuiSkHu7rZQd2H3kREW8Wkhk5oG8w_KMuFupTMtHDysIbxFuLTIvra6uc6zc0jk1HkTfgOMmeJNc_WU7S6yL_RfSsFHDlVj0TYlNfEP-a-5vSsdxpqs"
              alt="Growth metrics and analytics"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
