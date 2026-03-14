'use client';

import { Navigation, Footer } from '@/components/shared';
import {
  BrandingHero,
  BrandingExpertise,
  BrandingProcess,
  BrandingResults,
  BrandingPortfolio,
  BrandingCTA,
  BrandingTestimonials,
} from '@/components/branding';

export default function BrandingPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden dark:bg-background-dark bg-[#111111]">
      <Navigation />

      <main className="flex flex-col">
        <BrandingHero />
        <BrandingExpertise />
        <BrandingProcess />
        <BrandingResults />
        <BrandingPortfolio />
        <BrandingCTA />
        <BrandingTestimonials />
      </main>

      <Footer />
    </div>
  );
}
