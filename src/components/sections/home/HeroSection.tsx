import triangle_black from "@/assets/triangle_black.png";
import triangle_white from "@/assets/triangle_white.png";
import GithubBtn from "@/components/GithubBtn";
import { useTheme } from "@/components/theme-provider";

function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="hero-section">
      <GithubBtn />
      <div className="rectangle-1" />
      <div className="rectangle-2" />
      <div className="rectangle-transparent-1 border-[15px] border-foreground[08]" />
      <div className="rectangle-transparent-2 border-[15px] border-foreground[08]" />
      <div className="circle-1" />
      <div className="circle-2" />
      <div className="circle-3" />
      <div className="triangle triangle-1 transition-all">
        <img src={isDark ? triangle_black : triangle_white} alt="" />
      </div>
      <div className="triangle triangle-2 transition-all">
        <img src={isDark ? triangle_black : triangle_white} alt="" />
      </div>
      <div className="triangle triangle-3 transition-all">
        <img src={isDark ? triangle_black : triangle_white} alt="" />
      </div>
      <div className="triangle triangle-4 transition-all">
        <img src={isDark ? triangle_black : triangle_white} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
