import { HeroLogo } from "@/components/hero-logo"
import { Icons } from "@/components/icons"
import "@/styles/hero-style.css"

function HeroSection() {
  return (
    <section id="section-hero" className="hero-section">
      <div className="z-10 flex w-full justify-center">
        <HeroLogo />
      </div>
      <div className="rectangle-1" />
      <div className="rectangle-2" />
      <div className="rectangle-transparent-1" />
      <div className="rectangle-transparent-2" />
      <div className="circle-1" />
      <div className="circle-2" />
      <div className="circle-3" />
      <div className="triangle triangle-1">
        <Icons.heroTriangle />
      </div>
      <div className="triangle triangle-2">
        <Icons.heroTriangle />
      </div>
      <div className="triangle triangle-3 ">
        <Icons.heroTriangle />
      </div>
      <div className="triangle triangle-4 ">
        <Icons.heroTriangle />
      </div>
    </section>
  )
}

export default HeroSection
