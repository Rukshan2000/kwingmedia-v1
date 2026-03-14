import { TrendingUp, ArrowRight } from 'lucide-react';

export default function DigitalMarketingSection() {
  const services = [
    {
      title: 'SEO Optimization',
      description:
        'Master search rankings with data-driven keywords and technical excellence to ensure your brand is always found first.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCxhCq-_BcHUp-3gdqhcDnjCCeJSIT714Z3uba7Id8Ymqecvhwsg_mZI6IhdMezGu88sKZD-X1zgq_JReOWTd7y68tn9RQj924yPehb44dYjYFa4w-RdfIzk8abSympsGJLUYZpsCcQcjtMkufH2GyytRqDxUsdZGzoGF-ql1minsqyqxaoXlWGvQFVEszMptwm8f2nkORRyQSf9QWj2qZ-YVPLpT-yC07cqcmuVnW-Vw4Mw3MjuCcgDjc_ircnsmGhezpv8z0cZOE',
    },
    {
      title: 'Social Media Marketing',
      description:
        'Build vibrant communities and viral engagement across Instagram, LinkedIn, and TikTok with creative storytelling.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAlKl-ixlvyBimaCSCuRENX7MOCdm4p6MJO4IIIrCQFmzzfjP7LyuIXlt5R_R1eAmKZZXdkJKbxNkoglFIuzt5iphhtAWntbYj7o7c2b59htreek6kF1kOgsXUzMCFfh6Dk0WXeJLd4pb35LH85tzrpPuFBH0jxZDfx5ILminzPPQLY3EA4U1agJ1AIBxkknH6cPpYHh1vMT1ec0-JLiSz_e8EIuJRIJdpTUJuVngzKVO13E9X5ZsNNybRgBp8fAsjGTEVC4I8FfrI',
    },
    {
      title: 'PPC Advertising',
      description:
        'High-ROI targeted campaigns on Google and Meta that convert browsers into buyers with precision targeting.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCocTTpZF-M0924ELReHF601jZA1J3Gm15kJwiCn1VW6ec2kGqJ5bCgO-b-O4L8AUxubWm_LunzM8_eB90VVmu0ia5rohECtYz2Gm73ZELfXhF6XSXS5OXM0Mfm-zkKbrlkXYOqZjAh5Xdajh66pa_rYkYIPSknbOkZvCyguRqE5qrUAX30ok_KD3u4yXmWNa1d2ogBdMevWRVEcMpquE_55aAAYJQdJL3CEHm-utv_PTsIrVHkIlDgpX3OjZdnB_4rRkIzAVyc5GU',
    },
  ];

  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp size={24} className="text-primary" />
        <h2 className="dark:text-slate-100 text-3xl font-bold leading-tight text-white">
          Digital Marketing
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="group dark:bg-slate-800/50 p-6 rounded-xl border border-primary/5 hover:border-primary/30 transition-all shadow-sm bg-slate-900/50"
          >
            <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 rounded-lg mb-6 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${service.image}')`,
                }}
              />
            </div>
            <h3 className="dark:text-slate-100 text-xl font-bold mb-2 text-white">
              {service.title}
            </h3>
            <p className="dark:text-slate-400 text-sm leading-relaxed mb-4 text-slate-400">
              {service.description}
            </p>
            <a
              className="text-primary text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              href="#"
            >
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
