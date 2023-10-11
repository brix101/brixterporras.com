"use client";

import { Icons } from "@/components/icons";
import { useTheme } from "next-themes";
import * as React from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="relative inline-flex h-9 w-9 shrink-0 cursor-pointer items-center overflow-hidden rounded-md border-2 border-background bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
      onClick={() => (isDark ? setTheme("light") : setTheme("dark"))}
    >
      <div className="flex w-16 -translate-x-8 items-center justify-center transition-transform dark:translate-x-0">
        <div className="flex w-9 items-center justify-center transition-all ">
          <Icons.moon className="h-6 w-6 rotate-90 transition-all dark:rotate-0" />
        </div>
        <div className="flex w-9 items-center justify-center transition-all ">
          <Icons.sun className="h-6 w-6 rotate-0 transition-all dark:-rotate-90" />
        </div>
      </div>
    </div>
  );
}
