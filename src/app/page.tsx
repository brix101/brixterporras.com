import ContactButton from "@/components/button-contact"
import GithubBtn from "@/components/button-github"
import Footer from "@/components/layouts/site-footer"
import SiteHeader from "@/components/layouts/site-header"
import AboutSection from "@/components/section/home/AboutSection"
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
      <ContactButton />
      <Footer />
    </main>
  )
}
