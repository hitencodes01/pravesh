import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import Secretary from "@/components/ui/Secretary"

export default async function page() {
  return (
    <div>
        <Navbar/>
        <Secretary/>
        <Footer/>
    </div>
  )
};
