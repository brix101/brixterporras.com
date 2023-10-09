"use client";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Navbar() {
  const isOffset = false;
  return (
    <header
      className={cn(
        "z-50 top-0 fixed w-full transition-all border-b",
        isOffset
          ? "bg-background p-5 border-primary pointer-events-auto"
          : "p-3 border-transparent pointer-events-none",
      )}
    >
      <div className={cn("container flex justify-between items-center")}>
        <Button variant={"ghost"} size={"icon"}>
          <Icons.mainLogo
            className={cn(
              "h-11 w-11 transition-all",
              !isOffset ? "hidden" : "visible",
            )}
          />
        </Button>
        <div className="flex gap-4 items-center pointer-events-auto">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
