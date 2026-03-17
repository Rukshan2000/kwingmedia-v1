import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website & Web Applications | Kwings Media",
  description: "Responsive, scalable websites and progressive web apps built with modern technology stacks for optimal performance and SEO.",
  openGraph: {
    title: "Website & Web Applications | Kwings Media",
    description: "Responsive, scalable websites and progressive web apps built with modern technology stacks.",
    url: "https://kwingsmedia.com/solutions/web-apps",
    type: "website",
  },
};

export default function WebAppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
