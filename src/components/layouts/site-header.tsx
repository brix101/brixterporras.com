"use client";

import { ModeToggle } from "@/components/mode-toggle";
import useActiveSection from "@/hooks/useActiveSection";
import useScrollOffset from "@/hooks/useScrollOffset";
import { cn } from "@/lib/utils";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

function SiteHeader() {
  const isOffset = useScrollOffset(20);
  const activeSection = useActiveSection();

  return (
    <header className="pointer-events-none fixed top-0 z-50 w-full">
      <div className="container">
        <div
          className={cn(
            "flex items-center space-x-2 rounded-xl border px-8 py-4 transition-all",
            isOffset
              ? "mt-2 border-primary bg-background/95 backdrop-blur-sm"
              : "border-transparent",
          )}
        >
          <MainNav isOffset={isOffset} activeSection={activeSection} />
          <MobileNav isOffset={isOffset} activeSection={activeSection} />
          <div className="pointer-events-auto flex flex-1 items-center justify-between md:justify-end ">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
