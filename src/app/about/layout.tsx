import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kwings Media | Our Services & Expertise",
  description: "Learn about Kwings Media - a full-service agency specializing in digital marketing, IT solutions, and event management. Discover how we help brands grow.",
  keywords: "about us, digital marketing agency, IT solutions, event management, branding services",
  openGraph: {
    title: "About Kwings Media | Our Services & Expertise",
    description: "Learn about Kwings Media - a full-service agency specializing in digital marketing, IT solutions, and event management.",
    type: "website",
    url: "https://kwingsmedia.com/about",
  },
  alternates: {
    canonical: "https://kwingsmedia.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
