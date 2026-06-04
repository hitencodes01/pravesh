import TopBar from "@/components/ui/TopBar";
import Navbar from "@/components/ui/Navbar";
import HeroSlider from "@/components/ui/HeroSlider";
import PlacementMarquee from "@/components/ui/PlacementMarquee";
import type { Metadata } from "next";
import CourseSection from "@/components/ui/CourseSection";
import RSKC from "@/components/ui/RSKC";
import Banner from "@/components/ui/Banner";
import Footer from "@/components/ui/Footer";
import Secretary from "@/components/ui/Secretary";
import PlacementCarousel from "@/components/ui/PlacementSlider";
import AdmissionProcess from "@/components/ui/AdmissionProcess";
import Summer from "@/components/ui/Summer";

export default function Home() {
  return (
    <>
      <Summer/>
      <TopBar />
      <Navbar />
      <Banner />
      <HeroSlider />
      <RSKC />
      <PlacementMarquee />
      <CourseSection />
      <Secretary />
      <PlacementCarousel />
      <AdmissionProcess fromCourse={null}/>
      <Footer />
    </>
  );
}



export const metadata: Metadata = {
  title:
    "VSGOI Pravesh 2026 | Admission Open | BCA, BBA, B.Tech, MBA | Virendra Swarup Group of Institutions",

  description:
    "Apply online for admission at VSGOI Pravesh. Explore BCA, BBA, B.Tech, MBA, Polytechnic and professional courses at Virendra Swarup Group of Institutions. CSJMU affiliated, placement assistance, scholarships and industry-oriented education.",

  keywords: [
    // Brand Keywords
    "VSGOI",
    "VSGOI Pravesh",
    "vsgoi",
    "vsgoi.in",
    "Virendra Swarup Group of Institutions",
    "Dr Virendra Swarup Group of Institutions",
    "Virendra Swarup College",

    // Admission Keywords
    "VSGOI Admission",
    "VSGOI Admission 2026",
    "Admission Open 2026",
    "Online Admission",
    "College Admission Kanpur",
    "College Admission Unnao",
    "Apply Online VSGOI",
    "Pravesh VSGOI",
    "pravesh.vsgoi.in",

    // Course Keywords
    "BCA Admission",
    "BBA Admission",
    "BTech Admission",
    "MBA Admission",
    "Polytechnic Admission",
    "Computer Science Engineering",
    "Information Technology Course",
    "Engineering College Kanpur",
    "Engineering College Unnao",

    // Location Keywords
    "Best College in Kanpur",
    "Best College in Unnao",
    "College near Kanpur",
    "College near Lucknow",
    "Kanpur Lucknow Highway College",
    "Ragendra Swarup Knowledge City",

    // Placement Keywords
    "Best Placement College",
    "Campus Placement",
    "Internship Opportunities",
    "Industry Oriented Education",
    "Career Focused College",

    // BCA Focus
    "Best BCA College in Kanpur",
    "Best BCA College in Unnao",
    "BCA with Placement",
    "CSJMU BCA College",

    // BBA Focus
    "Best BBA College in Kanpur",
    "Best BBA College in Unnao",
    "BBA with Placement",

    // Engineering Focus
    "Best Engineering College in Kanpur",
    "Best Engineering College in Unnao",
    "BTech CSE Admission",
    "Computer Science Engineering Admission",

    // CMS Related Searches
    "CMS CSJMU",
    "cmscsjm.org",
    "College of Management Studies Unnao",
    "CMS Admission",
    "CMS BCA Admission",
    "CMS BBA Admission",

    // Authority Keywords
    "CSJMU Affiliated College",
    "AICTE Approved College",
    "Scholarship Available",
    "Professional Education",
    "Technical Education"
  ],

  alternates: {
    canonical: "https://praveshvsgoi.in",
  },

  openGraph: {
    title:
      "VSGOI Pravesh 2026 | Admissions Open",
    description:
      "Apply for BCA, BBA, B.Tech, MBA and other professional courses at Virendra Swarup Group of Institutions.",
    url: "https://praveshvsgoi.in",
    siteName: "VSGOI Pravesh",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};