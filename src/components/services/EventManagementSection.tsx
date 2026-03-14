import { Users, Truck, Megaphone, Calendar } from 'lucide-react';

const IconMap = {
  event_seat: Users,
  local_shipping: Truck,
  campaign: Megaphone,
};

export default function EventManagementSection() {
  const events = [
    {
      title: 'Corporate Events',
      description:
        'From executive retreats to annual conferences, we handle logistics, branding, and execution.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD4lM0INhtcCCWrdRkCdztG1PYg2ZdTfZpb01NFoCbB5AYtzcIxFyxdJma-ytzVzKLniD-1lJSvo8ficDoBwBV9hqZEXsuomjrJatN4f1iIACJrfuVROcw3uLAZV8z1zUjxErwYPYl3O46fxpUbNyImGmXQvAruoJTaNEdIq2wSPwomnkaamXfFVBcl8LMSFkA__ML0r7DCQvZv3suZhXYT-TKZITU9b4-xSLYP-oC1ZxEVFrvL-l2N5glSmdfeKS-BuFMJ4qsmo7E',
    },
    {
      title: 'Product Launches',
      description:
        'Create unforgettable moments and massive hype for your next big product release.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAwaAWOs9dgNbbVPCQSIvkLMUDEpzBQrUHECe0tDQEQYqDtQfRhbXZl-lX4HClQraG2IcATAZuAEpqfy-QEuQF0V-NQny_u988me8SrPwHEtWe306bxmkQEpTuE4bZHOxZ8719EKf03KNrXuPBY7216qja7wg_3Sbe4pnwTQBB9329QXsQm9LkRa5platHb1Y2dU0W0o5EprpSFmb00G-kvhx8ZiiNx1iSn_J6X8wR06TYZ3zCPnFkqPDpQYkiXgcfXMGU0IVytoqA',
    },
  ];

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-8">
        <Calendar size={24} className="text-primary" />
        <h2 className="dark:text-slate-100 text-3xl font-bold leading-tight text-white">
          Event Management
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl aspect-[16/9] group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${event.image}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-white text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-white/80 text-sm max-w-sm mb-4 text-slate-400">
                {event.description}
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2 px-6 rounded-lg transition-colors">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
