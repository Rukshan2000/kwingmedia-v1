import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development | Kwings Media",
  description: "Tailored business software solutions designed specifically for your unique operational needs with scalable architecture.",
  openGraph: {
    title: "Custom Software Development | Kwings Media",
    description: "Tailored business software solutions designed specifically for your unique operational needs.",
    url: "https://kwingsmedia.com/solutions/custom-software",
    type: "website",
  },
};

export default function CustomSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
