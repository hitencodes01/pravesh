"use server"

import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import PlacementCarousel from "@/components/ui/PlacementSlider"

export default async function Career() {
  return (
    <div>
        <Navbar/>
        <PlacementCarousel  />
        <Footer/>
    </div>
  )
};
