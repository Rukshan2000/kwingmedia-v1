import { Quote } from 'lucide-react';

export default function ContactTestimonials() {
  const testimonials = [
    {
      quote:
        'Kwings Media transformed our digital presence. Their strategic approach to marketing led to a 40% increase in our online conversions within just six months.',
      author: 'Sarah Chen',
      role: 'Marketing Director, TechFlow',
      initials: 'SC',
    },
    {
      quote:
        'The IT infrastructure they built for our flagship event was flawless. Their team is professional, responsive, and truly understands enterprise-level needs.',
      author: 'Marcus Johnson',
      role: 'Operations Manager, Global Events Co.',
      initials: 'MJ',
    },
    {
      quote:
        "A partner in every sense of the word. They don't just execute tasks; they provide strategic insights that have been vital to our company's growth strategy.",
      author: 'Elena Rodriguez',
      role: 'CEO, Visionary Apps',
      initials: 'EL',
    },
  ];

  return (
    <div className="px-6 md:px-20 py-16 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">What Our Clients Say</h2>
          <p className="dark:text-slate-400 mt-4 max-w-2xl mx-auto text-slate-400">
            We pride ourselves on delivering excellence. Hear from the partners who have grown
            their brands with Kwings Media.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-slate-800 p-8 rounded-xl shadow-sm border border-white/5 flex flex-col justify-between"
            >
              <div>
                <Quote size={48} className="text-primary mb-4" />
                <p className="text-slate-300 italic mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
