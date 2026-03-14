'use client';

import { Navigation, Footer } from '@/components/shared';
import {
  SolutionsHero,
  SolutionsStats,
  ExpertiseGrid,
  SolutionsConsultation,
} from '@/components/solutions';

export default function SolutionsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#0a0a0a]">
      <Navigation />

      <main className="flex-1" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(194, 10, 10, 0.05) 1px, transparent 0)',
        backgroundSize: '24px 24px',
      }}>
        <SolutionsHero />
        <SolutionsStats />
        <ExpertiseGrid />
        <SolutionsConsultation />
      </main>

      <Footer />
    </div>
  );
}
