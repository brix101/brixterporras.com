import { useEffect, useState } from "react";

function useScrollOffset(scrollThreshold = 80) {
  const [isOffset, setIsOffset] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPosition = (scrollY / windowHeight) * 100;

      // Check if the scroll position is greater than the threshold or 80 percent of the window
      if (!isOffset && scrollPosition > scrollThreshold) {
        setIsOffset(true);
      } else if (isOffset && scrollPosition <= scrollThreshold) {
        setIsOffset(false);
      }
    };

    // Add a scroll event listener to track the scroll position
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll initially to set the initial state
    handleScroll();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold, isOffset]);

  return isOffset;
}

export default useScrollOffset;
