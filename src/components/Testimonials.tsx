import Testimonials from '@/components/shared/Testimonials';

const testimonials = [
  {
    quote:
      'Kwings Media transformed our digital presence. Their integrated approach helped us unify our branding across all platforms, resulting in a 40% increase in lead generation within the first quarter.',
    author: 'Alex Chen',
    role: 'CEO, Nexus Tech',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsxvhuJSggzvjcERxFwfHtqrsGRs8_hFuxQ5ULTeG-0I_0sEHnvkgeQsmNzM-yOpvGXKNhhxMgFVQa24eBONdq9gGLqiYwwvoLBrWZu6K1uA23HfYr2FF_IhNcVTJRTmW9hXG78gMFOUS2AWXP4e9KVgDuOtdq6vN1nifuxJ8JVheeRsFm8hDXrNpqbVrWKGYu1-oM4Y8GmGf37s_vJXQjk5oug6ov59ryiCD6k38tMOMmEPHpMZTF5bvcgahpWQnFa4u_0OmjcKo',
  },
  {
    quote:
      'The event management team is simply world-class. Our annual summit was flawlessly executed, and the custom event app they built for us was a huge hit with all the attendees.',
    author: 'Sarah Jenkins',
    role: 'Marketing Director, Global Retail',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHv8_QO-ShD5HLuxDy9AIWH6nqhs-Uy4zB5BmRjG25UaK7b85mflDtztBuauaiT0w3mG43-QX0E6RdLJ_biI6mFAzWqgvy6HC0bFElYjehzOud-n2pK2LhSmzpbzFdoarHDbzl1uXiOL9ZPcY8eh43wC4QX9xUeOhrWV2tnbE3xoqZ08gtXryz3VqHr_CY91IK1m41tLg5tgPNH22w20BS1mLXfHPItu2UFgXyz1kunWiljGpml3EaFFeaK0l3bxUX8c0kE_RYUgE',
  },
  {
    quote:
      'Working with Kwings was a game-changer. Their creative process is incredibly thorough, and the results speak for themselves.',
    author: 'Elena Rodriguez',
    role: 'CEO, Visionary Apps',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsxvhuJSggzvjcERxFwfHtqrsGRs8_hFuxQ5ULTeG-0I_0sEHnvkgeQsmNzM-yOpvGXKNhhxMgFVQa24eBONdq9gGLqiYwwvoLBrWZu6K1uA23HfYr2FF_IhNcVTJRTmW9hXG78gMFOUS2AWXP4e9KVgDuOtdq6vN1nifuxJ8JVheeRsFm8hDXrNpqbVrWKGYu1-oM4Y8GmGf37s_vJXQjk5oug6ov59ryiCD6k38tMOMmEPHpMZTF5bvcgahpWQnFa4u_0OmjcKo',
  },
];

export default function HomeTestimonials() {
  return (
    <>
      {/* Default Grid Layout */}
      <Testimonials
        title="What Our Clients Say"
        subtitle=""
        testimonials={testimonials}
        variant="default"
        columns={2}
        sectionId="testimonials"
      />
      
      {/* Scrolling Carousel */}
      <Testimonials
        title="Trusted by Industry Leaders"
        subtitle="Continuous testimonials from companies that have transformed with Kwings Media"
        testimonials={testimonials}
        variant="scroll"
        autoScroll={true}
        scrollSpeed={25}
        backgroundColor="bg-gradient-to-br from-slate-900 via-primary/10 to-slate-900"
        sectionId="testimonials-scroll"
      />
    </>
  );
}
