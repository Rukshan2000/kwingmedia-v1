import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Apps & IoT Solutions | Kwings Media",
  description: "Native and cross-platform mobile applications including IoT integration for smart operations and real-time synchronization.",
  openGraph: {
    title: "Mobile Apps & IoT Solutions | Kwings Media",
    description: "Native and cross-platform mobile applications including IoT integration for smart operations.",
    url: "https://kwingsmedia.com/solutions/mobile-iot",
    type: "website",
  },
};

export default function MobileIoTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
