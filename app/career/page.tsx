"use server"

import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import PlacementCarousel from "@/components/ui/PlacementSlider"

export default async function Career() {
  return (
    <div>
        <Navbar/>
        <PlacementCarousel placements={[{ id: 1, company: "TCS", role: "Software Engineer", package: "7 LPA", location: "Noida", image: "/images/placements/tcs.jpg", alt: "TCS Placement", }, { id: 2, company: "Infosys", role: "System Engineer", package: "6.5 LPA", location: "Bangalore", image: "/images/placements/infosys.jpg", alt: "Infosys Placement", }, { id: 3, company: "Wipro", role: "Full Stack Developer", package: "8 LPA", location: "Hyderabad", image: "/images/placements/wipro.jpg", alt: "Wipro Placement", },]} />
        <Footer/>
    </div>
  )
};
