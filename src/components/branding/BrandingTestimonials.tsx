import { Quote, User } from 'lucide-react';

export default function BrandingTestimonials() {
  const testimonials = [
    {
      quote:
        'Kwings Media transformed our brand identity from generic to iconic. Their strategic approach to our visual guidelines gave us the edge we needed in a crowded tech market.',
      author: 'Sarah Chen',
      role: 'CEO of Nexus Tech',
      hasIcon: true,
    },
    {
      quote:
        'The ROI we\'ve seen through their social advertising campaigns has been staggering. They don\'t just run ads; they build conversion engines that actually scale.',
      author: 'Marcus Johnson',
      role: 'Operations Manager at Global Events Co.',
    },
    {
      quote:
        'Working with Kwings was a game-changer. Their creative process is incredibly thorough, and the results speak for themselves. Highly recommended for growth-focused brands.',
      author: 'Elena Rodriguez',
      role: 'CEO of Visionary Apps',
      hasIcon: true,
    },
  ];

  return (
    <section className="px-6 md:px-20 py-20 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            Success Stories
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            What Our Clients Say
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-primary/5 relative"
            >
              {testimonial.hasIcon && (
                <Quote size={64} className="text-primary/20 absolute top-4 right-4" />
              )}
              <p className="text-slate-600 dark:text-slate-300 mb-8 italic relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`size-12 rounded-full flex items-center justify-center text-white ${
                    testimonial.hasIcon ? 'bg-primary' : 'bg-slate-900 dark:bg-slate-700'
                  }`}
                >
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
