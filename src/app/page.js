import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import SkillCategory from "@/components/SkillCategory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <SkillCategory />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  );
}
