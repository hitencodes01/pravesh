import Navbar from "@/components/ui/Navbar";
import CoursePage, { CourseData } from "@/components/ui/Coursepage";
import Footer from "@/components/ui/Footer";

const bba: CourseData = {
  name: "Bachelor of Business Administrator",
  acronym: "BBA",
  affiliation: "Affiliated by CSJMU · Approved by AICTE",
  duration: "3 Years · 6 Semesters",
  accent: "violet",
  description:
    "The program aims at giving a broad knowledge of the functional areas of management in an organization. It develops practical managerial skills, communication skills and business decision-making capability. It incorporates training and practical experience in the form of case studies, projects, presentations, internships, industrial visits and interaction with experts from the industry.",
  examination:
    "Each paper is of one-and-a-half hours duration carrying a maximum of 75 marks, with 25 marks for internal assessment. The minimum pass marks in each theory subject (including internal assessment) is 35%. The minimum pass marks in practical, project, seminar, or practical training subjects is 50%. Candidates must also secure 45% in the aggregate of each academic year and in each semester.",
  fees: {
    tuition: "₹45,000 / year",
    ecc: "₹4,500 / year",
  },
  placements : [ { id: 1, company: "TCS", role: "Software Engineer", package: "7 LPA", location: "Noida", image: "/images/placements/tcs.jpg", alt: "TCS Placement", }, { id: 2, company: "Infosys", role: "System Engineer", package: "6.5 LPA", location: "Bangalore", image: "/images/placements/infosys.jpg", alt: "Infosys Placement", }, { id: 3, company: "Wipro", role: "Full Stack Developer", package: "8 LPA", location: "Hyderabad", image: "/images/placements/wipro.jpg", alt: "Wipro Placement", }, ],
  facilities: [
    "Library",
    "Seminars",
    "Workshop / Labs",
    "Industrial Visits",
    "Guest Lectures",
    "AC Classrooms",
    "Full-Time Power Supply",
    "In-House Trainings",
    "Personality Development",
    "Sports",
    "Annual Functions",
    "Sports Events",
  ],
  campusLife: [
    { label: "College Timings",  value: "9:30 AM – 4:00 PM" },
    { label: "Attendance",       value: "Minimum 80% Mandatory" },
    { label: "Hostel Facility",  value: "Fooding, Lodging, Gym & Wi-Fi" },
    { label: "AC Hostel",        value: "₹75,000 / year" },
    { label: "Non-AC Hostel",    value: "₹65,000 / year" },
    { label: "Bus Charges",      value: "₹25,000 / year (location-based)" },
  ],
};

export default function BCA() {
  return (
    <>
      <Navbar />
      <CoursePage course={bba} />
      <Footer/>
    </>
  );
}