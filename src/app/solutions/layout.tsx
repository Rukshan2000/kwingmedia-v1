import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Solutions & Services | Kwings Media",
  description: "Comprehensive IT solutions and services for your business. From cloud infrastructure to custom development, we deliver enterprise-grade technology.",
  keywords: "IT solutions, software development, cloud services, web development, technology services",
  openGraph: {
    title: "IT Solutions & Services | Kwings Media",
    description: "Comprehensive IT solutions and services for your business. From cloud infrastructure to custom development, we deliver enterprise-grade technology.",
    type: "website",
    url: "https://kwingsmedia.com/solutions",
  },
  alternates: {
    canonical: "https://kwingsmedia.com/solutions",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
