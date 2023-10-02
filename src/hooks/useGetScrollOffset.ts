import { useEffect, useMemo, useState } from "react";

type WindowKeys = keyof Window;

function useGetScrollOffset<T extends WindowKeys>(
  ...props: T[]
): Record<T, number> {
  const scrollProps = useMemo(() => ["scrollY" as T, ...props], [props]);

  const [scrollOffsets, setScrollOffsets] = useState<Record<T, number>>(
    {} as Record<T, number>
  );

  useEffect(() => {
    const handleScroll = () => {
      const newScrollOffsets = {} as Record<T, number>;
      scrollProps.forEach((prop) => {
        newScrollOffsets[prop] = window[prop] || 0;
      });
      setScrollOffsets(newScrollOffsets);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollProps]);

  return scrollOffsets;
}

export default useGetScrollOffset;
