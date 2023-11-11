"use client"

import { handleScroll } from "@/lib/utils"
import Link from "next/link"
import { Icons } from "@/components/icons"

export function HeroLogo() {
  return (
    <Link
      className="main-logo pointer-events-none"
      href={"#section-about"}
      onClick={handleScroll}
    >
      <div className="flex flex-col items-center space-y-4">
        <Icons.mainLogo className="pointer-events-auto h-60 w-60 md:h-80 md:w-80" />
        <h1 className="pointer-events-auto text-3xl font-bold text-foreground hover:text-primary md:text-5xl">
          BRIXTER PORRAS
        </h1>
      </div>
    </Link>
  )
}
