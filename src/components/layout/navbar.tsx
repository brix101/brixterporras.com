"use client";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import useActiveSection from "@/hooks/useActiveSection";
import useScrollOffset from "@/hooks/useScrollOffset";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

function Navbar() {
  const isOffset = useScrollOffset(80);
  const activeSection = useActiveSection();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const buttonClasses = cn(
    "outline outline-1 outline-primary uppercase bg-background",
    "disabled:text-background disabled:bg-primary disabled:text-opacity-100",
  );

  function isActiveSection(section: string) {
    return section === activeSection;
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all",
        isOffset
          ? "pointer-events-auto border-primary bg-background p-3"
          : "pointer-events-none border-transparent p-4",
      )}
    >
      <div className={cn("container flex items-center justify-between")}>
        <Link
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
            }),
          )}
          href="#section-hero"
          onClick={handleScroll}
        >
          <Icons.mainLogo
            className={cn("h-11 w-11", !isOffset ? "hidden" : "visible")}
          />
        </Link>
        <div className="pointer-events-auto flex items-center gap-2 ">
          <Link
            className={cn(
              buttonClasses,
              buttonVariants({
                variant: isActiveSection("section-about") ? "default" : "ghost",
                size: "sm",
              }),
            )}
            href={"#section-about"}
            onClick={handleScroll}
          >
            About Me
          </Link>
          <Link
            className={cn(
              buttonClasses,
              buttonVariants({
                variant: isActiveSection("section-project") ? "default" : "ghost",
                size: "sm",
              }),
            )}
            href={"#section-project"}
            onClick={handleScroll}
          >
            Project
          </Link>
          <Link
            className={cn(
              buttonClasses,
              buttonVariants({
                variant: isActiveSection("section-experience") ? "default" : "ghost",
                size: "sm",
              }),
            )}
            href={"#section-experience"}
            onClick={handleScroll}
          >
            Experiece
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
