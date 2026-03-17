import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding Services | Kwings Media",
  description: "Transform your brand identity with Kwings Media's expert branding services. From strategy to design, we create meaningful brand experiences.",
  keywords: "branding, brand identity, logo design, brand strategy, visual design",
  openGraph: {
    title: "Branding Services | Kwings Media",
    description: "Transform your brand identity with Kwings Media's expert branding services. From strategy to design, we create meaningful brand experiences.",
    type: "website",
    url: "https://kwingsmedia.com/branding",
  },
  alternates: {
    canonical: "https://kwingsmedia.com/branding",
  },
};

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
