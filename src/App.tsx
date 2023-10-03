import "@/App.css";
import { FabButton } from "@/components/fab-button";
import FooterBar from "@/components/layout/FooterBar";
import Navbar from "@/components/layout/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import useSectionStore from "@/hooks/useSectionStore";
import { useEffect, useRef, useState } from "react";

function App() {
  const [offsetTop, setOffsetTop] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const { sections, scrollLocation, setActiveSection, setScrollLocation } =
    useSectionStore();

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setOffsetTop(scrollTop);
    sections.forEach((section) => {
      if (isSectionActive(`#${section.id}`)) {
        setActiveSection(section);
      }
    });
  };

  useEffect(() => {
    if (scrollLocation) {
      const sectionElement = document.getElementById(scrollLocation.id);

      if (sectionElement) {
        const top = sectionElement.getBoundingClientRect().top + offsetTop; //- 80;
        const newTop = top > 0 ? top : 0;

        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({
            top: newTop,
            // behavior: "smooth",
          });
        }
      }
      setScrollLocation(undefined);
    }
  }, [scrollLocation, setScrollLocation, offsetTop]);

  return (
    <ScrollArea
      ref={scrollContainerRef}
      className="main-container"
      onScroll={handleScroll}
    >
      <Navbar offsetTop={offsetTop} />
      {sections.map(({ View, id }) => {
        return <View key={id} id={id} />;
      })}
      <FooterBar />
      <FabButton />
    </ScrollArea>
  );
}

function isSectionActive(sectionId: string): boolean {
  const section = document.querySelector(sectionId);

  if (section) {
    const rect = section.getBoundingClientRect();
    return rect.top <= 250 && rect.bottom >= 0;
  }

  return false;
}

export default App;
