import CoursePage, { CourseData } from '@/components/ui/Coursepage';
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'

const btech: CourseData = {
    name: "Bachelor of Technology",
    acronym: "BTECH",
    affiliation: "Affiliated by AKTU · Approved by AICTE",
    duration: "4 Years · 8 Semesters",
    accent: "amber",
    description:
        "The B.Tech program at VSGOI prepares engineers for a rapidly evolving technological landscape. Offered across four specializations — Computer Science (CS), Mechanical Engineering (ME), Computer Science & Engineering (CSE), and Electrical Engineering (EE) — the program blends rigorous theoretical foundations with hands-on practical training. Students engage in laboratory work, industrial visits, live projects, and internships that bridge the gap between academia and industry..",
    examination:
        "The B.Tech. examination system follows the semester pattern prescribed by Dr. A.P.J. Abdul Kalam Technical University. Each theory subject carries 100 marks, including 75 marks for the end-semester examination and 25 marks for internal assessment. The minimum passing marks in theory subjects are 35%, while practical, project, seminar, and training subjects require a minimum of 50% marks to pass. Student performance is evaluated through a credit-based grading system using SGPA and CGPA.",
    fees: {
        tuition: "₹75,000 / year",
        ecc: "₹4,500 / year",
    },
    branches: [
        {
            name: "Computer Science & Engineering",
            code: "CSE",
            seats: 150,
            duration: "4 Years",
            description:
                "Focuses on software development, data structures, algorithms, databases, networking, cloud computing, and artificial intelligence.",
            highlights: [
                "Programming & DSA",
                "Web Development",
                "Artificial Intelligence",
                "Cloud Computing",
                "Industry Projects",
            ],
        },
        {
            name: "Computer Science",
            code: "CS",
            seats: 30,
            duration: "4 Years",
            description:
                "Provides a strong foundation in computing, software systems, problem-solving, and emerging technologies.",
            highlights: [
                "Software Engineering",
                "Data Science",
                "Cyber Security",
                "Research Opportunities",
                "Industry Exposure",
            ],
        },
        {
            name: "Electrical Engineering",
            code: "EE",
            seats: 30,
            duration: "4 Years",
            description:
                "Covers electrical systems, power generation, transmission, control systems, and renewable energy technologies.",
            highlights: [
                "Power Systems",
                "Electrical Machines",
                "Control Systems",
                "Renewable Energy",
                "Industrial Training",
            ],
        },
        {
            name: "Mechanical Engineering",
            code: "ME",
            seats: 30,
            duration: "4 Years",
            description:
                "Focuses on machine design, manufacturing processes, thermal engineering, robotics, and industrial automation.",
            highlights: [
                "CAD/CAM",
                "Manufacturing Technology",
                "Robotics",
                "Industrial Automation",
                "Workshop Training",
            ],
        },
    ],
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
        "Alakriti (Annual Function)",
        "VSGOI Khelo (Annual Sport Event)",
    ],
    campusLife: [
        { label: "College Timings", value: "9:30 AM – 4:00 PM" },
        { label: "Attendance", value: "Minimum 80% Mandatory" },
        { label: "Hostel Facility", value: "Fooding, Lodging, Gym & Wi-Fi" },
        { label: "AC Hostel", value: "₹75,000 / year" },
        { label: "Non-AC Hostel", value: "₹65,000 / year" },
        { label: "Bus Charges", value: "₹25,000 / year (location-based)" },
    ],
    placements: [{ id: 1, company: "TCS", role: "Software Engineer", package: "7 LPA", location: "Noida", image: "/images/placements/tcs.jpg", alt: "TCS Placement", }, { id: 2, company: "Infosys", role: "System Engineer", package: "6.5 LPA", location: "Bangalore", image: "/images/placements/infosys.jpg", alt: "Infosys Placement", }, { id: 3, company: "Wipro", role: "Full Stack Developer", package: "8 LPA", location: "Hyderabad", image: "/images/placements/wipro.jpg", alt: "Wipro Placement", },]
};

export default function BTECH() {
    return (
        <div>
            <Navbar />
            <CoursePage course={btech} />
            <Footer />
        </div>
    )
}

// keywords
export const keywords = [
    "VSGOI",
    "VSGOI Kanpur",
    "VSGOI Group of Institutions",
    "Vikramajit Singh Sanatan Dharma Group of Institutions",
    "best college in Kanpur",
    "engineering college in Kanpur",
    "management college in Kanpur",
    "polytechnic college in Kanpur",
    "ITI college in Kanpur",
    "AKTU affiliated college",
    "BTEUP affiliated college",
    "NCVT approved ITI",
    "private college in Uttar Pradesh",
    "college admissions 2026",
    "placement focused college",
    "higher education Kanpur",
    "CMS Kanpur",
    "College of Management Studies",
    "CMS VSGOI",
    "BCA college in Kanpur",
    "BBA college in Kanpur",
    "MBA college in Kanpur",
    "best management college in Kanpur",
    "best BCA college in Kanpur",
    "best MBA college in Kanpur",
    "AKTU affiliated management college",
    "business administration college",
    "computer applications college",
    "management education Uttar Pradesh",
    "college admissions Kanpur",
    "professional courses Kanpur",
    "BTech",
    "B.Tech admission",
    "B.Tech college in Kanpur",
    "Computer Science Engineering",
    "Artificial Intelligence Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "engineering admission 2026",
    "AKTU BTech",
    "JEE Main admission",
    "engineering placements",
    "engineering degree Uttar Pradesh",
    "Polytechnic",
    "Diploma Engineering",
    "Polytechnic admission",
    "Diploma college Kanpur",
    "Mechanical Diploma",
    "Civil Diploma",
    "Electrical Diploma",
    "Computer Science Diploma",
    "BTEUP Polytechnic",
    "JEECUP admission",
    "Diploma engineering Uttar Pradesh",
    "BCA",
    "Bachelor of Computer Applications",
    "BCA admission",
    "best BCA college in Kanpur",
    "computer applications degree",
    "software development course",
    "IT degree Kanpur",
    "computer science after 12th",
    "BCA placements",
    "BCA AKTU",
    "BBA",
    "Bachelor of Business Administration",
    "BBA admission",
    "business management course",
    "best BBA college in Kanpur",
    "management studies",
    "business administration degree",
    "BBA placements",
    "management education",
    "MBA",
    "Master of Business Administration",
    "MBA admission",
    "best MBA college in Kanpur",
    "MBA AKTU",
    "finance specialization",
    "marketing specialization",
    "human resource management",
    "business leadership",
    "management placements",
    "postgraduate management degree"
];

