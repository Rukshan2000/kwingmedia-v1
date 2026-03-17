import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POS Systems | Kwings Media",
  description: "Complete retail and hospitality Point of Sale solutions with inventory management, real-time analytics, and multi-location support.",
  openGraph: {
    title: "POS Systems | Kwings Media",
    description: "Complete retail and hospitality Point of Sale solutions with inventory management, real-time analytics, and multi-location support.",
    url: "https://kwingsmedia.com/solutions/pos-systems",
    type: "website",
  },
};

export default function POSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
