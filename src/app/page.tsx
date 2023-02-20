import Header from "@/components/Header";
import AboutSection from "@/components/section/AboutSection";
import ExperienceSection from "@/components/section/ExperienceSection";
import HomeSection from "@/components/section/HomeSection";
import ProjectSection from "@/components/section/ProjectSection";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
    </main>
  );
}
