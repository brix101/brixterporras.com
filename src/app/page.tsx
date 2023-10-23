import ContactButton from "@/components/button-contact"
import GithubBtn from "@/components/button-github"
import SiteHeader from "@/components/layouts/site-header"
import AboutSection from "@/components/section/home/AboutSection"
import ExperienceSection from "@/components/section/home/ExperienceSection"
import HeroSection from "@/components/section/home/HeroSection"
import ProjectSection from "@/components/section/home/ProjectSection"

export default function Home() {
  return (
    <main className="">
      <SiteHeader />
      <GithubBtn />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactButton />
    </main>
  )
}
