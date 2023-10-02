import { useEffect, useState } from "react";

function useScrollOffset(value: number) {
  const [isOffsetGreaterThanValue, setIsOffsetGreaterThanValue] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOffsetGreaterThanValue(window.scrollY > value);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [value]);

  return isOffsetGreaterThanValue;
}

export default useScrollOffset;
