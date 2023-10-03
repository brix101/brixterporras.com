import AboutSection from "@/components/sections/home/AboutSection";
import ExperienceSection from "@/components/sections/home/ExperienceSection";
import HeroSection from "@/components/sections/home/HeroSection";
import ProjectSection from "@/components/sections/home/ProjectSection";
import { Section } from "@/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const sections = [
  {
    id: "section-hero",
    title: "Home",
    isActive: false,
    View: HeroSection,
  },
  {
    id: "section-about",
    title: "About me",
    isActive: false,
    View: AboutSection,
  },
  {
    id: "section-project",
    title: "Project",
    isActive: false,
    View: ProjectSection,
  },
  {
    id: "section-experience",
    title: "Experience",
    isActive: false,
    View: ExperienceSection,
  },
];

interface SectionState {
  sections: Section[];
  scrollLocation?: Section;
  setActiveSection: (section: Section) => void;
  setScrollLocation: (section?: Section) => void;
}

export default create<SectionState>()(
  devtools((set) => ({
    sections,
    scrollLocation: undefined,
    setActiveSection: (section) =>
      set((state) => ({
        ...state,
        sections: state.sections.map((item) => {
          if (item.id === section.id) {
            return { ...item, isActive: true };
          }
          return { ...item, isActive: false };
        }),
      })),
    setScrollLocation: (section) =>
      set((state) => ({ ...state, scrollLocation: section })),
  })),
);
