'use client';

import { Navigation, Footer } from '@/components/shared';
import {
  ContactHero,
  ContactForm,
  ContactInfo,
  ContactLocation,
  ContactSocial,
  ContactTestimonials,
} from '@/components/contact';

export default function ContactPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col dark:bg-background-dark overflow-x-hidden bg-slate-950">
      <Navigation />

      <main className="flex-1">
        <ContactHero />

        <div className="px-6 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm />

          <div className="flex flex-col gap-10">
            <ContactInfo />
            <ContactLocation />
            <ContactSocial />
          </div>
        </div>

        <ContactTestimonials />
      </main>

      <Footer />
    </div>
  );
}
