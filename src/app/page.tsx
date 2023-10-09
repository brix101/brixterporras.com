import Navbar from "@/components/layout/navbar";
import AboutSection from "@/components/section/home/AboutSection";
import ExperienceSection from "@/components/section/home/ExperienceSection";
import HeroSection from "@/components/section/home/HeroSection";
import ProjectSection from "@/components/section/home/ProjectSection";
import "@/styles/App.css";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
    </main>
  );
}
