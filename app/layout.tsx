import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "VSGOI Pravesh | Best College in Unnao & Kanpur for BTech, MBA, BBA, BCA, Polytechnic & ITI",
  description: "Apply for admission at Dr. Virendra Swarup Group of Institutions (VSGOI). Offering BTech, MBA, BBA, BCA, Polytechnic and ITI programs affiliated with AKTU, CSJMU and BTEUP. Explore courses, facilities, placements and career opportunities.",
  keywords: [
    // Brand
    "VSGOI",
    "VSGOI Pravesh",
    "Dr Virendra Swarup Group of Institutions",
    "Virendra Swarup Group",
    "VSGOI Unnao",
    "VSGOI Kanpur",
    "CMS Unnao",
    "College of Management Studies",

    // Location
    "best college in unnao",
    "top college in unnao",
    "best private college in unnao",
    "best college near kanpur",
    "top college near kanpur",
    "best college in kanpur",
    "top college in kanpur",
    "college admission in unnao",
    "college admission in kanpur",
    "best institute in uttar pradesh",

    // BTech
    "btech admission",
    "engineering college",
    "best engineering college in unnao",
    "best engineering college near kanpur",
    "computer science engineering",
    "mechanical engineering",
    "civil engineering",
    "electrical engineering",
    "aktu college",
    "aktu admission",

    // BCA
    "bca admission",
    "best bca college in unnao",
    "best bca college in kanpur",
    "computer applications degree",

    // BBA
    "bba admission",
    "best bba college in unnao",
    "best bba college in kanpur",
    "management studies college",

    // MBA
    "mba admission",
    "best mba college in unnao",
    "best mba college in kanpur",
    "management college",
    "business administration college",

    // Polytechnic
    "polytechnic admission",
    "best polytechnic college in unnao",
    "polytechnic college near kanpur",
    "diploma engineering college",
    "bteup college",

    // ITI
    "iti admission",
    "best iti in unnao",
    "best iti near kanpur",
    "industrial training institute",
    "ncvt approved iti",

    // General Admission
    "admission open",
    "college admission 2026",
    "undergraduate courses",
    "postgraduate courses",
    "higher education",
    "career oriented education",
    "placement assistance",
    "campus recruitment",
    "industry oriented education",
    "skill development",

    // Search Intent
    "best college for placement",
    "college with hostel facility",
    "college with library",
    "college with computer labs",
    "college with sports facilities",
    "top ranked college in unnao",
    "private college in unnao",
    "private college near kanpur"
  ],
  icons: "/pravesh/images/vsgoi.jpg",
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://vsgoi.in",
  },
  applicationName: "Dr. Virendra Swarup Group of Institutions",
  authors: { name: "VSGOI", url: "https://vsgoi.in" },
  openGraph: {
    type: "website",
    countryName: "India",
    siteName: "VSGOI Pravesh",
    url: "https://vsgoi.in/pravesh",
    description: "Apply for admission at Dr. Virendra Swarup Group of Institutions (VSGOI). Offering BTech, MBA, BBA, BCA, Polytechnic and ITI programs affiliated with AKTU, CSJMU and BTEUP. Explore courses, facilities, placements and career opportunities.",
    images: ["https://vsgoi.in/pravesh/images/vsgoi.jpg"]
  }
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