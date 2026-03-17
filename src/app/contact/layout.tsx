import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kwings Media",
  description: "Get in touch with Kwings Media. We're here to discuss your project, answer questions, and help you achieve your business goals.",
  keywords: "contact, get in touch, support, inquiries, business contact",
  openGraph: {
    title: "Contact Us | Kwings Media",
    description: "Get in touch with Kwings Media. We're here to discuss your project, answer questions, and help you achieve your business goals.",
    type: "website",
    url: "https://kwingsmedia.com/contact",
  },
  alternates: {
    canonical: "https://kwingsmedia.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
