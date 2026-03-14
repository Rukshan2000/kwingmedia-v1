'use client';

import { Navigation, Footer } from '@/components/shared';
import {
  StudioHero,
  StudioServices,
  StudioFacilities,
  StudioPortfolio,
  StudioCTA,
} from '@/components/studio';

export default function StudioPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white dark:bg-black">

      <main className="flex-1 w-full">
        <StudioHero />
        <StudioServices />
        <StudioFacilities />
        <StudioPortfolio />
      </main>

      <div className="w-full">
        <StudioCTA />
      </div>

      <Footer />
    </div>
  );
}
