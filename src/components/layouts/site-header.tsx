"use client"

import { ModeToggle } from "@/components/mode-toggle"
import useActiveSection from "@/hooks/useActiveSection"
import useScrollOffset from "@/hooks/useScrollOffset"
import { cn } from "@/lib/utils"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"

function SiteHeader() {
  const isOffset = useScrollOffset(20)
  const activeSection = useActiveSection()

  return (
    <header className="hero-header pointer-events-none fixed top-0 z-50 w-full">
      <div className="md:container">
        <div
          className={cn(
            "flex items-center space-x-2 border-b p-4 transition-all md:rounded-xl md:border md:px-8 md:py-4",
            isOffset
              ? "border-primary bg-background/95 backdrop-blur-sm md:mt-2"
              : "border-transparent",
          )}
        >
          <MainNav isOffset={isOffset} activeSection={activeSection} />
          <MobileNav isOffset={isOffset} activeSection={activeSection} />
          <div className="pointer-events-auto flex flex-1 items-center justify-between md:justify-end ">
            <ModeToggle isOffset={isOffset} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
