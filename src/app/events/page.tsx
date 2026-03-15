'use client';

import { Navigation, Footer } from '@/components/shared';
import { EventsHero, EventsServices, EventsPortfolio, EventsCTA } from '@/components/events';

export default function EventsPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-white dark:bg-black">

      <main className="grow w-full">
        <EventsHero />
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-20 py-12">
          <EventsServices />
        </div>
        
        {/* <EventsPortfolio /> */}
      </main>

      <div className="w-full py-12">
        <EventsCTA />
      </div>

      <Footer />
    </div>
  );
}
