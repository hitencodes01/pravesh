"use client"

import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import { Download } from "lucide-react"

export default  function Brochure() {
    const handleDownload = async () => {
        const response = await fetch("/images/Brochure.png");
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "Brochure.png";
        a.click();

        URL.revokeObjectURL(url);
    };
    return (
        <div>
            <Navbar />
            <img src="/images/Brochure.png" className="relative w-full" alt="" />
            <button onClick={handleDownload} className="cursor-pointer fixed top-20 right-5 bg-white/60 text-black p-2 py-3 rounded-2xl"><Download className="inline" />{"   "}Download</button>
            <Footer/>
        </div>
    )
};
