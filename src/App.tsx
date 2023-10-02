import FooterBar from "@/components/layout/FooterBar";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/home/AboutSection";
import ExperienceSection from "@/components/sections/home/ExperienceSection";
import HeroSection from "@/components/sections/home/HeroSection";
import ProjectSection from "@/components/sections/home/ProjectSection";
import { ThemeProvider } from "@/components/theme-provider";
import { APP_THEME_KEY } from "@/constant";
import "@/App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey={APP_THEME_KEY}>
      <>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ExperienceSection />
        <FooterBar />
      </>
    </ThemeProvider>
  );
}

export default App;
