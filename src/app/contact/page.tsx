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
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-white dark:bg-black">

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-8 md:py-12">
          <ContactHero />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactForm />

            <div className="flex flex-col gap-8">
              <ContactInfo />
              <ContactLocation />
              <ContactSocial />
            </div>
          </div>
        </div>

        <div className="w-full py-12">
          <ContactTestimonials />
        </div>
      </main>

      <Footer />
    </div>
  );
}
