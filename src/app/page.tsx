'use client';

import { Navigation, Footer, Testimonials } from '@/components/shared';
import { HeroSection, ServicesPreview, GetQuoteCTA } from '@/components/home';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

      <main className="flex-1">
        <HeroSection />
        <ServicesPreview />
        <Testimonials testimonials={[]} />
        <GetQuoteCTA />
      </main>

      <Footer />
    </div>
  );
}
