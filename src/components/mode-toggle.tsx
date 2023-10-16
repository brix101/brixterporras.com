"use client"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface Props {
  isOffset?: boolean
}

export function ModeToggle({ isOffset }: Props) {
  const { setTheme, theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Button
      className={cn(isOffset ? "" : "outline outline-1 outline-primary")}
      variant="outline"
      size="icon"
      onClick={() => (isDark ? setTheme("light") : setTheme("dark"))}
    >
      <Icons.sun className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
