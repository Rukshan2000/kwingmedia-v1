import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analytics & Business Intelligence | Kwings Media",
  description: "Transform data into actionable insights with custom dashboards, real-time reporting, and predictive analytics.",
  openGraph: {
    title: "Data Analytics & Business Intelligence | Kwings Media",
    description: "Transform data into actionable insights with custom dashboards and real-time reporting.",
    url: "https://kwingsmedia.com/solutions/analytics",
    type: "website",
  },
};

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
