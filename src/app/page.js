import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      
      <Projects />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  );
}
