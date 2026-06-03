import CoursePage, { CourseData } from '@/components/ui/Coursepage';
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'


const iti: CourseData = {
    name: "Industrial Training Institute Certificate",
    acronym: "ITI",
    affiliation: "Dr. Virendra Swarup Private ITI (VSPITI) · NCVT / SCVT Affiliated",
    duration: "1 – 2 Years · Annual System",
    accent: "rose",
    description:
        "Dr. Virendra Swarup Private ITI (VSPITI) offers certificates in Electrician, Fitter & Welder to meet the growing needs of skilled manpower in diverse industries. Tremendous job opportunities in government and private sectors are available. Certificate holders can also gain lateral entry into the Polytechnic program.",
    examination:
        "The ITI program follows an Annual System of examination as prescribed by NCVT / SCVT. Students are assessed through theory and practical examinations conducted at the end of each year. Trade theory, trade practical, engineering drawing, and workshop calculation & science are the core components of evaluation. A minimum pass percentage is required in both theory and practical separately to receive the National / State Trade Certificate.",
    branches: [
        {
            name: "Electrician",
            code: "ELEC",
            duration: "2 Years",
            seats: 40,
            description:
                "The Electrician trade trains students in wiring, installation, and maintenance of electrical systems in domestic, commercial and industrial settings. Strong emphasis is placed on safety standards and hands-on lab practice.",
            highlights: [
                "Domestic & industrial wiring installation",
                "Motor, transformer & panel board maintenance",
                "Electrical safety standards & regulations",
                "Lateral entry pathway into Polytechnic (EE branch)",
            ],
        },
        {
            name: "Fitter",
            code: "FITR",
            duration: "2 Years",
            seats: 40,
            description:
                "The Fitter trade covers fitting, assembly and maintenance of mechanical components and machinery. Students develop precision skills in bench work, machine fitting and use of measuring instruments.",
            highlights: [
                "Bench work — filing, chiseling, sawing & drilling",
                "Precision measuring instruments & gauges",
                "Assembly & overhauling of mechanical parts",
                "Pipe fitting, welding basics & surface finishing",
            ],
        },
        {
            name: "Welder",
            code: "WELD",
            duration: "1 Year",
            seats: 40,
            description:
                "The Welder trade equips students with skills in gas welding, arc welding, and cutting operations used across manufacturing, construction and repair industries.",
            highlights: [
                "Gas welding & oxy-acetylene cutting",
                "Arc welding — SMAW & MIG/TIG basics",
                "Welding joints, defects & inspection",
                "Safety practices & workshop discipline",
            ],
        },
    ],
    fees: {
        tuition: "₹20,000 / year",
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
        { label: "Course Pattern", value: "Annual System" },
        { label: "Certification", value: "NCVT / SCVT National Certificate" },
        { label: "Attendance", value: "Minimum 80% Mandatory" },
        { label: "Hostel Facility", value: "Fooding, Lodging, Gym & Wi-Fi" },
        { label: "AC Hostel", value: "₹75,000 / year" },
        { label: "Non-AC Hostel", value: "₹65,000 / year" },
        { label: "Bus Charges", value: "₹25,000 / year (location-based)" },
        { label: "Lateral Entry", value: "Polytechnic after ITI certificate" },
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



export default function ITI() {
    return (
        <div>
            <Navbar />
            <CoursePage course={iti} />
            <Footer />
        </div>
    )
}
