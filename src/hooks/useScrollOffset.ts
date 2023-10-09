import { useState, useEffect } from "react";

function useScrollOffset(scrollThreshold = 80) {
  const [isOffset, setIsOffset] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position as a percentage of the window height
      const scrollPosition = (window.scrollY / window.innerHeight) * 100;

      // Check if the scroll position is greater than the threshold
      setIsOffset(scrollPosition > scrollThreshold);
    };

    // Add a scroll event listener to track the scroll position
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return isOffset;
}

export default useScrollOffset;
