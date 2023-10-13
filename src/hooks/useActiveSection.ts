import { useEffect, useRef, useState } from "react";

function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  const handleIntersection: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const sectionIds = [
      "section-hero",
      "section-about",
      "section-project",
      "section-experience",
    ];

    sectionIds.forEach(sectionId => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
        sectionRefs.current.push(sectionElement);
      }
    });

    // return () => {
    //   sectionRefs?.current?.forEach(sectionElement => {
    //     if (sectionElement) {
    //       observer.unobserve(sectionElement);
    //     }
    //   });
    // };
  }, []);

  return activeSection;
}

export default useActiveSection;
