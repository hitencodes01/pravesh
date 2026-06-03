import AdmissionProcess from '@/components/ui/AdmissionProcess'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import React from 'react'

export default function Prodedure() {
  return (
    <div>
        <Navbar/>
        <AdmissionProcess fromCourse={null}/>
        <Footer/>
    </div>
  )
}
