import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navigation from "@/components/shared/Navigation";
import LayoutClient from "./layout-client";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kwings Media | Integrated Business Growth",
  description: "Partner with Kwings Media for cutting-edge digital marketing, robust IT solutions, and seamless event management. We bridge the gap between technology and brand experience.",
  keywords: "digital marketing, IT solutions, event management, branding, web development, business growth",
  authors: [{ name: "Kwings Media" }],
  creator: "Kwings Media",
  publisher: "Kwings Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Kwings Media | Integrated Business Growth",
    description: "Partner with Kwings Media for cutting-edge digital marketing, robust IT solutions, and seamless event management. We bridge the gap between technology and brand experience.",
    url: "https://kwingsmedia.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://kwingsmedia.com/assets/logoWh.png",
        width: 1200,
        height: 630,
        alt: "Kwings Media Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwings Media | Integrated Business Growth",
    description: "Integrated digital marketing, IT solutions, and event management services",
    images: ["https://kwingsmedia.com/assets/logoWh.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kwings Media",
              "url": "https://kwingsmedia.com",
              "description": "Integrated Business Growth Through Digital Marketing, IT Solutions, and Event Management",
              "sameAs": [
                "https://www.facebook.com/kwingsmedia",
                "https://www.twitter.com/kwingsmedia",
                "https://www.linkedin.com/company/kwingsmedia",
                "https://www.instagram.com/kwingsmedia"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Business Services",
                "availableLanguage": "en"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-display`}
        suppressHydrationWarning
      >
        <LayoutClient>
          <Navigation />
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
