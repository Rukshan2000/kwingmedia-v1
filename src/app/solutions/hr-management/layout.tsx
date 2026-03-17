import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR & Human Capital Management | Kwings Media",
  description: "Enterprise HR systems for payroll automation, employee management, attendance tracking, and workforce analytics.",
  openGraph: {
    title: "HR & Human Capital Management | Kwings Media",
    description: "Enterprise HR systems for payroll automation, employee management, attendance tracking, and workforce analytics.",
    url: "https://kwingsmedia.com/solutions/hr-management",
    type: "website",
  },
};

export default function HRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
