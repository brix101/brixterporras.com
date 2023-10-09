"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import * as React from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-9 w-[51px] shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-foreground border-foreground",
      )}
      defaultChecked={isDark}
      onCheckedChange={(e) => (e ? setTheme("dark") : setTheme("light"))}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-7 w-7 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
          "items-center justify-center flex",
        )}
      >
        {isDark ? (
          <Icons.moon className="h-6 w-6 rotate-90 transition-all dark:rotate-0" />
        ) : (
          <Icons.sun className="h-6 w-6 rotate-90 transition-all" />
        )}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
}
