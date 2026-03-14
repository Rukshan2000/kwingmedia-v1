'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';

export default function DigitalMarketingSection() {
  const services = [
    {
      title: 'Branding Materials',
      description:
        'Comprehensive brand identity solutions including logos, guidelines, and collateral that define your brand presence.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCxhCq-_BcHUp-3gdqhcDnjCCeJSIT714Z3uba7Id8Ymqecvhwsg_mZI6IhdMezGu88sKZD-X1zgq_JReOWTd7y68tn9RQj924yPehb44dYjYFa4w-RdfIzk8abSympsGJLUYZpsCcQcjtMkufH2GyytRqDxUsdZGzoGF-ql1minsqyqxaoXlWGvQFVEszMptwm8f2nkORRyQSf9QWj2qZ-YVPLpT-yC07cqcmuVnW-Vw4Mw3MjuCcgDjc_ircnsmGhezpv8z0cZOE',
    },
    {
      title: 'Digital Marketing',
      description:
        'Data-driven strategies across SEO, PPC, and social media management to boost your online presence and conversions.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAlKl-ixlvyBimaCSCuRENX7MOCdm4p6MJO4IIIrCQFmzzfjP7LyuIXlt5R_R1eAmKZZXdkJKbxNkoglFIuzt5iphhtAWntbYj7o7c2b59htreek6kF1kOgsXUzMCFfh6Dk0WXeJLd4pb35LH85tzrpPuFBH0jxZDfx5ILminzPPQLY3EA4U1agJ1AIBxkknH6cPpYHh1vMT1ec0-JLiSz_e8EIuJRIJdpTUJuVngzKVO13E9X5ZsNNybRgBp8fAsjGTEVC4I8FfrI',
    },
    {
      title: 'Creative Media Direction',
      description:
        'Strategic creative direction that captures your brand narrative and resonates with your target demographic.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCocTTpZF-M0924ELReHF601jZA1J3Gm15kJwiCn1VW6ec2kGqJ5bCgO-b-O4L8AUxubWm_LunzM8_eB90VVmu0ia5rohECtYz2Gm73ZELfXhF6XSXS5OXM0Mfm-zkKbrlkXYOqZjAh5Xdajh66pa_rYkYIPSknbOkZvCyguRqE5qrUAX30ok_KD3u4yXmWNa1d2ogBdMevWRVEcMpquE_55aAAYJQdJL3CEHm-utv_PTsIrVHkIlDgpX3OjZdnB_4rRkIzAVyc5GU',
    },
  ];

  return (
    <section className="mb-24">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp size={24} className="text-primary" />
          <h2 className="dark:text-slate-100 text-3xl md:text-4xl font-bold leading-tight text-slate-900">
            Strategic Advertising & Branding
          </h2>
        </div>
        <p className="dark:text-slate-400 text-base leading-relaxed text-slate-600 max-w-3xl">
          We craft{' '}
          <span className="font-semibold text-primary">
            data-driven campaigns and visual identities
          </span>{' '}
          that resonate with your target demographic. From brand positioning to multi-channel
          digital marketing, we create narratives that capture market share and build long-term
          brand equity.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="group rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${service.image}')`,
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="dark:text-slate-100 text-xl font-bold mb-2 text-slate-900">
                {service.title}
              </h3>
              <p className="dark:text-slate-400 text-sm leading-relaxed mb-4 text-slate-600">
                {service.description}
              </p>
              <a
                className="text-primary text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                href="/branding"
              >
                Learn More <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
