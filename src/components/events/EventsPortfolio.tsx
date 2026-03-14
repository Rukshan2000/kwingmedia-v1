import { ArrowRight } from 'lucide-react';

export default function EventsPortfolio() {
  const portfolioItems = [
    {
      category: 'Corporate',
      title: 'Tech Innovators Summit',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcdsYx4fshks5jJORKMMN-R91CWG0GF_6qv2nRpcRRMc2G7HVDKo_SVBiHK_ohvKnf2xbWeFnC4tRqcHWkjfwvAQFLZtlCf9JihMcp8bjGjdWPWjnEzUeUhAqNg-ABqjXm1Q_t2LahfwpPAdQXSmvgxClS4VZrGHZP49bdZOfrTrYjZS7PFGMIEoODldRhzT4k_EgYSGxcU9UtuoqniOKlUo8MVRhCH4x14SZcfjiIRJ2jKCMB_EXMcRn8qH2A_qbuS0KVfVRgzYU',
      isWide: false,
    },
    {
      category: 'Branding',
      title: 'Luxe Automotive Launch',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdarrVbYjaiBAMG0LL9ZRn10wTnL90T3qMrzeyFnCl2G1Mg9p2Xmhmc3kM20x-MUQJy_lRBc0gbvpN5uFAp8ZYR3H89OuL8T0ov5WNI4I6xZjfuMJIdeNd8i_zS1uIVlJW9Dcjzjv22lNbSA4oZXxv3DUlqe31r6xIb1mEzhczTANy2O1cQTSo4EBiuGn3UHJEqRxSiX2xmqPt8ZGb7M2zx_0yiVlwyDrMifEawPCz38ukPwP-tnU-WSyT7f-ovoucpIZKtKecnxM',
      isWide: false,
    },
    {
      category: 'Fashion',
      title: 'Urban Style Week',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfxGffoMPRqahwWs_9jqEKEf6JpVsjTIrf_V4FJD6GbwyA5mA86e3P1QpJ9-AT-j5F40KjAA8q-1tww9YSmH8Cm9dusvSa0P4sYk_Nysoc9XJiqJ51BU_Vs99dqYQ3Q-Q7RfWYEi8SIANdrK-NdXlXGW3aCvyGF8jOeRIx4esVPVcz5U1VfD9CogkqNeG2pAP_1vQ9kTyYL3YXnmOOdrsknukp_FAT13e9Jtg13L_jJP-dhxPqqYCQivLmf81CafQ3zPmQxuTq38Y',
      isWide: false,
    },
    {
      category: 'Grand Finale',
      title: 'City Heritage Festival',
      description: 'A three-day cultural extravaganza for 50,000 attendees.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5X2uMKSeTqjATpJstFbV28_oa5bKBX_mbwJsswnke-DfCLFVGsKm3-s_3uLXpuqQYv1fC3DuvSPEl2_9HXNGsrZ9paJBI6AHT3JluU6DnaWDDN7eG-qd-wfE9wsHEdIDamptcOxdwUrx3cE0aZWVW_6BEhw8r6VRo6YRzIETJyhVsvpNrjvapXXEp15EO2rjkCKbz6YX4Ziix6en2ZOcwEenwbbzJCr6wTVrIPVsSZ5Gw34f67SAirkvmmTZZfqJdp8PcI_czXYQ',
      isWide: true,
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black tracking-tight text-white">Iconic Moments.</h2>
            <p className="mt-4 text-lg text-slate-400">
              Browse through our curated collection of successful brand activations and corporate gatherings.
            </p>
          </div>
          <a className="flex items-center gap-2 font-bold text-primary hover:underline transition-colors">
            View Full Gallery <ArrowRight size={20} />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl bg-slate-200 ${
                item.isWide ? 'aspect-video sm:col-span-2 lg:col-span-3' : 'aspect-[4/5]'
              }`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
                  item.isWide ? 'group-hover:scale-105' : 'group-hover:scale-110'
                }`}
                style={{
                  backgroundImage: `url("${item.image}")`,
                }}
              ></div>
              <div
                className={`absolute inset-0 bg-gradient-to-t to-transparent ${
                  item.isWide
                    ? 'from-black/60 opacity-100'
                    : 'from-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                }`}
              ></div>
              <div
                className={`absolute bottom-0 p-${item.isWide ? '8' : '6'} text-white ${
                  !item.isWide && 'opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                }`}
              >
                <p className={`font-bold uppercase tracking-widest text-slate-400 ${item.isWide ? 'text-sm' : 'text-xs'}`}>
                  {item.category}
                </p>
                <h4 className={`font-black ${item.isWide ? 'text-3xl' : 'text-xl'}`}>
                  {item.title}
                </h4>
                {item.description && (
                  <p className={`mt-2 ${item.isWide ? 'max-w-md text-slate-300' : ''}`}>
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
