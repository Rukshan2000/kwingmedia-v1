import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Management Services | Kwings Media",
  description: "Professional event management services by Kwings Media. From corporate events to large-scale productions, we bring your vision to life.",
  keywords: "event management, corporate events, event planning, event production, event coordination",
  openGraph: {
    title: "Event Management Services | Kwings Media",
    description: "Professional event management services by Kwings Media. From corporate events to large-scale productions, we bring your vision to life.",
    type: "website",
    url: "https://kwingsmedia.com/events",
  },
  alternates: {
    canonical: "https://kwingsmedia.com/events",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
