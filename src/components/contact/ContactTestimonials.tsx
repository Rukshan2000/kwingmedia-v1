import Testimonials from '@/components/shared/Testimonials';

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

export default function ContactTestimonials() {
  return (
    <Testimonials
      title="What Our Clients Say"
      subtitle="We pride ourselves on delivering excellence. Hear from the partners who have grown their brands with Kwings Media."
      testimonials={testimonials}
      variant="contact"
      columns={3}
      backgroundColor="bg-slate-900/50"
      showQuoteIcon={true}
    />
  );
}
