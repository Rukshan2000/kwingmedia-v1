import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Services | Kwings Media",
  description: "State-of-the-art studio facilities and production services. Professional video production, photography, and multimedia content creation.",
  keywords: "studio services, video production, photography, content creation, multimedia production",
  openGraph: {
    title: "Studio Services | Kwings Media",
    description: "State-of-the-art studio facilities and production services. Professional video production, photography, and multimedia content creation.",
    type: "website",
    url: "https://kwingsmedia.com/studio",
  },
  alternates: {
    canonical: "https://kwingsmedia.com/studio",
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
