import AicteCertificate from "@/components/ui/AICTECertificate";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function AICTE() {
  return (
    <div>
        <Navbar/>
        <div className="flex justify-center items-center py-5">
            <img src="/images/aicte.png"  alt="" />
        </div>
        <Footer/>
    </div>
  )
}
