'use client';

import { Quote, User } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
  hasIcon?: boolean;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  variant?: 'default' | 'scroll';
  columns?: number;
  autoScroll?: boolean;
  scrollSpeed?: number;
  backgroundColor?: string;
  sectionId?: string;
}

export default function Testimonials({
  title,
  subtitle,
  testimonials,
  variant = 'default',
  columns = 3,
  autoScroll = false,
  scrollSpeed = 25,
  backgroundColor = 'bg-white dark:bg-background-dark',
  sectionId = 'testimonials',
}: TestimonialsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== 'scroll' || !autoScroll || !scrollRef.current) return;

    let scrollPos = 0;
    let animationFrameId: number;

    const scroll = () => {
      if (scrollRef.current) {
        scrollPos += Math.max(0.5, (scrollSpeed || 25) / 50);
        scrollRef.current.scrollLeft = scrollPos;

        // Reset scroll position for continuous loop
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollPos = 0;
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [variant, autoScroll, scrollSpeed]);

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns] || 'md:grid-cols-3';

  const renderTestimonialCard = (testimonial: Testimonial, i: number) => (
    <div
      key={i}
      className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-primary/5 relative shrink-0"
      style={variant === 'scroll' ? { width: '300px' } : {}}
    >
      {testimonial.hasIcon && (
        <Quote size={64} className="text-primary/20 absolute top-4 right-4" />
      )}
      <p className="text-slate-600 dark:text-slate-300 mb-8 italic relative z-10">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-4">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            width={48}
            height={48}
            className="size-12 rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <div
            className={`size-12 rounded-full flex items-center justify-center text-white ${
              testimonial.hasIcon ? 'bg-primary' : 'bg-slate-900 dark:bg-slate-700'
            }`}
          >
            <User size={24} />
          </div>
        )}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.author}</h4>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id={sectionId} className={`px-6 md:px-20 py-20 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
                {title.length > 30 ? subtitle || 'Success Stories' : 'Success Stories'}
              </h2>
            )}
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
              {title}
            </h3>
            {subtitle && <p className="text-slate-600 dark:text-slate-400 mt-4">{subtitle}</p>}
          </div>
        )}

        {variant === 'scroll' ? (
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {testimonials.map((testimonial, i) => renderTestimonialCard(testimonial, i))}
          </div>
        ) : (
          <div className={`grid grid-cols-1 ${gridColsClass} gap-8`}>
            {testimonials.map((testimonial, i) => renderTestimonialCard(testimonial, i))}
          </div>
        )}
      </div>
    </section>
  );
}
