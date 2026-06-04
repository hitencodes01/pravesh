import AdmissionProcess from '@/components/ui/AdmissionProcess';
import CoursePage, { CourseData } from '@/components/ui/Coursepage';
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'


const polytechnic: CourseData = {
    name: "Diploma in Engineering (Polytechnic)",
    acronym: "POLYTECHNIC",
    affiliation: "Dr. Virendra Swarup Polytechnic (VSP) · Affiliated to BTEUP",
    duration: "3 Years · 6 Semesters",
    accent: "amber",
    description:
        "Dr. Virendra Swarup Polytechnic (VSP) offers diploma in Mechanical, Civil & Electrical Engineering to meet the growing needs of skilled manpower in diverse industries. The polytechnic complements the Engineering College of VSGOI and lays emphasis on a blend of learning with extensive practice.",
    examination:
        "The Polytechnic examination follows the semester pattern prescribed by the Board of Technical Education, Uttar Pradesh (BTEUP). Each theory subject is evaluated for 100 marks — 70 marks for end-semester exams and 30 marks for internal assessment. Practical subjects require a minimum of 50% to pass. Performance is assessed through a grade-based credit system across all semesters.",
    branches: [
        {
            name: "Civil Engineering",
            code: "CE",
            duration: "3 Years",
            seats: 60,
            description:
                "The 3-year program leads to a diploma in Civil Engineering. Workshops and laboratories are equipped with the latest equipment for all segments of study. High-end facilities are provided to students.",
            highlights: [
                "Survey Lab, Soil Lab & Material Testing Lab",
                "Applied Mechanics, Hydraulics & Concrete Labs",
                "Levelling Lab with modern instruments",
                "Field visits and live civil project exposure",
            ],
        },
        {
            name: "Mechanical Engineering (Production)",
            code: "ME",
            duration: "3 Years",
            seats: 60,
            description:
                "The Mechanical Engineering department imparts training and knowledge in the field of Mechanical technology to match Industry Expectations. The department is well equipped with a heat engine lab covering a wide range of engine types.",
            highlights: [
                "Heat Engine Lab — diesel, 2-stroke & 4-stroke engines",
                "Air Compressor, Viscometer & Ruston engine setups",
                "Servicing & Maintenance Lab for gearbox, clutches & brakes",
                "Differential and reciprocating pump training",
            ],
        },
        {
            name: "Electrical Engineering",
            code: "EE",
            duration: "3 Years",
            seats: 60,
            description:
                "The diploma course prepares students to deal with the application of electricity, electronics and electromagnetism. The syllabus covers power electronics, control systems, signal processing and tele communications.",
            highlights: [
                "Power Electronics & Control Systems",
                "Signal Processing & Tele Communications",
                "All labs equipped with latest instruments",
                "Special focus on practical exposure for students",
            ],
        },
    ],
    fees: {
        tuition: "₹40,000 / year",
        ecc: "₹4,500 / year",
    },
    facilities: [
        "Field Visits",
        "Live Projects",
        "Industrial Tour",
        "Service & Maintenance Labs",
        "Personality Development",
        "On-the-Job Training",
        "Placement Drives",
        "Training & Placement Cell",
        "Language Lab",
        "Multi-Stationed Gym",
        "Bus Service",
        "Hostel for Boys & Girls",
        "World Class 18-Acre Sports Complex",
        "Extensive Lab Practice",
    ],
    campusLife: [
        { label: "College Timings", value: "9:30 AM – 4:00 PM" },
        { label: "Attendance", value: "Minimum 80% Mandatory" },
        { label: "Hostel Facility", value: "Fooding, Lodging, Gym & Wi-Fi" },
        { label: "AC Hostel", value: "₹75,000 / year" },
        { label: "Non-AC Hostel", value: "₹65,000 / year" },
        { label: "Bus Charges", value: "₹25,000 / year (location-based)" },
    ],
    placements: [
        {
            id: 1,
            company: "TCS",
            role: "Software Engineer",
            package: "7 LPA",
            location: "Noida",
            image: "/images/placements/tcs.jpg",
            alt: "TCS Placement",
        },
        {
            id: 2,
            company: "Infosys",
            role: "System Engineer",
            package: "6.5 LPA",
            location: "Bangalore",
            image: "/images/placements/infosys.jpg",
            alt: "Infosys Placement",
        },
        {
            id: 3,
            company: "Wipro",
            role: "Full Stack Developer",
            package: "8 LPA",
            location: "Hyderabad",
            image: "/images/placements/wipro.jpg",
            alt: "Wipro Placement",
        },
    ],
};


export default function POLYTECHNIC() {
    return (
        <div>
            <Navbar />
            <CoursePage course={polytechnic} />
            <AdmissionProcess fromCourse={"polytechnic"} />
            <Footer />
        </div>
    )
}
