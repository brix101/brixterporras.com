import GithubBtn from "@/components/GithubBtn";
import { Icons } from "@/components/icons";
import { SectionProps } from "@/types";

function HeroSection({ id }: SectionProps) {
  return (
    <section id={id} className="hero-section">
      <div className="z-10 w-full flex justify-center">
        <GithubBtn />
        <Icons.mainLogo className="main-logo h-80 w-80" />
      </div>
      <div className="rectangle-1" />
      <div className="rectangle-2" />
      <div className="rectangle-transparent-1 border-muted-foreground border-opacity-5" />
      <div className="rectangle-transparent-2 border-muted-foreground border-opacity-5" />
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
  );
}

export default HeroSection;
