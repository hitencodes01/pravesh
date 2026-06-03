import Navbar from "@/components/ui/Navbar";
import CoursePage, { CourseData } from "@/components/ui/Coursepage";

const mba: CourseData = {
  name: "Master of Business Administration",
  acronym: "MBA",
  affiliation: "Affiliated by AKTU (Code: 050, 990) · Approved by AICTE",
  duration: "2 Years · 4 Semesters",
  accent: "amber",
  description:
    "VSGOI offers a 2-year full-time MBA program from its city campus in posh McRobertganj locality of Kanpur Metropolis. Endearingly known as College of Management Studies (CMS), the campus is rated as an apex center of quality management education, training and research. The institute has consistently ranked among the top 20 B-Schools of India since its inception in 1999 and is at par with IIM-A in governance and IIM-C in Industry Interface in the latest AIMA survey of B-Schools. Housed in an aesthetically built educational complex, the institute strives to equip its students with vision to foresee market trends, creativity in decision making and innovations in developing business plans. Students receive a multi-disciplinary theoretical perspective on management through classroom teaching, public lectures, training programs, workshops and guest lectures. CMS also enjoys academic collaboration with a host of institutes and organizations including Micro, Small and Medium Enterprises Development Institute (Govt. of India), Institute of Chartered Accountants of India (ICAI), Japan International Cooperation Agency (JICA), National Institute of Applied Management, ICFAI Hyderabad, National Institute of Personnel Management, HBTI, AIMA, Central Board for Workers' Education, Indian Railways, and Kanpur Productivity Council (KPC).",
  examination:
    "Eligibility as per AKTU norms. Total intake of 60 seats. The program follows AKTU examination guidelines with internal assessments and semester-end examinations. Students are evaluated through a blend of classroom participation, case studies, presentations, project work and written examinations.",
  fees: {
    tuition: "60000 + Exam Fees",
    ecc: "₹4,500 / year (Kit, Uniform, Books)",
  },
  facilities: [
    "AC Classrooms",
    "Library",
    "Seminars & Workshops",
    "Guest Lectures",
    "Industrial Visits",
    "In-House Trainings",
    "Personality Development",
    "Full-Time Power Supply",
    "Sports",
    "Annual Functions",
    "Public Lectures",
    "Research Center",
  ],
  campusLife: [
    { label: "College Timings",    value: "9:30 AM – 4:00 PM" },
    { label: "Attendance",         value: "Minimum 80% Mandatory" },
    { label: "Total Seats",        value: "60 Seats" },
    { label: "Affiliation",        value: "A.K.T.U., Lucknow" },
    { label: "AKTU Code",          value: "050, 990" },
    { label: "Hostel Facility",    value: "Fooding, Lodging, Gym & Wi-Fi" },
    { label: "AC Hostel",          value: "₹75,000 / year" },
    { label: "Non-AC Hostel",      value: "₹65,000 / year" },
    { label: "Bus Charges",        value: "₹25,000 / year (location-based)" },
  ],
};

export default function MBA() {
  return (
    <>
      <Navbar />
      <CoursePage course={mba} />
    </>
  );
}