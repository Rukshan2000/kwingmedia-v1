'use client';

import { Navigation, Footer } from '@/components/shared';
import {
  ServicesHero,
  DigitalMarketingSection,
  ITSolutionsSection,
  EventManagementSection,
  ServicesCTA,
} from '@/components/services';

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navigation />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-12">
        <ServicesHero />
        <DigitalMarketingSection />
        <ITSolutionsSection />
        <EventManagementSection />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
}
