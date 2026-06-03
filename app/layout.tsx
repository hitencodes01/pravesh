import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { keywords } from "./BTECH/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VSGOI Pravesh",
  description: "Transforming passion into careers",
  keywords : keywords,
  icons : "/images/vsgoi.jpg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      name: "Virendra Swarup Group of Institutions",
      alternateName: "VSGOI",
      url: "https://praveshvsgoi.in",
      sameAs: [
        "https://vsgoi.in"
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Unnao",
        addressRegion: "Uttar Pradesh",
        addressCountry: "India"
      }
    })
  }}
/>