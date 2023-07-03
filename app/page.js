"use client"
import AboutThapathaliComponent from "@/components/AboutThapathaliComponent";
import CampusChiefComponent from "@/components/CampusChiefComponent";
import CampusImageGallery from "@/components/CampusImageGallery";
import HeroComponent from "@/components/HeroComponent";
import OurDepartmentsSection from "@/components/OurDepartmentsSection";
import StudentTestimonials from "@/components/StudentTestimonials";
export default function Home() {
  return (
    <div>
      <HeroComponent />
      <CampusChiefComponent />
      <AboutThapathaliComponent />
      <OurDepartmentsSection />
      <CampusImageGallery />
      <StudentTestimonials />
    </div>
  )
}
