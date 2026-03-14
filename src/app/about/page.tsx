'use client';

import { Navigation, Footer } from '@/components/shared';
import {
  ServicesHero,
  DigitalMarketingSection,
  ITSolutionsSection,
  EventManagementSection,
  ServicesCTA,
} from '@/components/about';

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

      {/* Full-width hero with background video */}
      <ServicesHero />

      {/* Constrained content sections */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-16">
        <DigitalMarketingSection />
        <ITSolutionsSection />
        <EventManagementSection />
      </main>

      {/* Full-width CTA with video background */}
      <ServicesCTA />

      <Footer />
    </div>
  );
}
