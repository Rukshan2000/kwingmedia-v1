import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Kwings Media transformed our digital presence completely. Their team understood our vision and delivered results that exceeded expectations.",
      author: "Alex Chen",
      role: "CEO, Nexus Tech",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV1qJv2nJL9rK8mP2qN4rS5tU6vW7xY8zA1bC2dE3fG4hI5jK6lM7nO8p",
    },
    {
      quote:
        "The team's attention to detail and creative approach made our retail brand stand out in a crowded market. Highly recommended!",
      author: "Sarah Jenkins",
      role: "Founder, Global Retail Co.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV1qJv2nJL9rK8mP2qN4rS5tU6vW7xY8zA1bC2dE3fG4hI5jK6lM7nO8p",
    },
  ];

  return (
    <section className="px-6 lg:px-20 py-24 bg-slate-50 dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real stories from companies we've partnered with to achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                <img
                  alt={t.author}
                  className="h-12 w-12 rounded-full object-cover"
                  src={t.image}
                />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{t.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
