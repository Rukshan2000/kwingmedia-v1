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
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white dark:bg-black">

      <main className="flex-1 w-full">
        <SolutionsHero />
        <SolutionsStats />
        
        <div className="w-full">
          <ExpertiseGrid />
        </div>
      </main>

      <div className="w-full py-12">
        <SolutionsConsultation />
      </div>

      <Footer />
    </div>
  );
}
