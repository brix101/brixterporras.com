"use client";

import { Icons } from "@/components/icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      className="w-9 border-primary hover:bg-background hover:text-primary"
      variant="outline"
      size="sm"
      onClick={() => (isDark ? setTheme("light") : setTheme("dark"))}
    >
      <Icons.sun className="absolute h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
