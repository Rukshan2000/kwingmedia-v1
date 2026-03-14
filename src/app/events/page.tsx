'use client';

import { Navigation, Footer } from '@/components/shared';
import { EventsHero, EventsServices, EventsPortfolio, EventsCTA } from '@/components/events';

export default function EventsPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden dark:bg-background-dark bg-slate-950">

      <main className="grow">
        <EventsHero />
        <EventsServices />
        <EventsPortfolio />
        <EventsCTA />
      </main>

      <Footer />
    </div>
  );
}
