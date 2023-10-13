"use client";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import useActiveSection from "@/hooks/useActiveSection";
import useScrollOffset from "@/hooks/useScrollOffset";
import { cn } from "@/lib/utils";
import { INavButton } from "@/types";
import Link from "next/link";
import * as React from "react";


const navButtons: Array<INavButton> = [
  {
    sectionId: "section-hero",
    label: "Home",
    isHidden: true,
  },
  {
    sectionId: "section-about",
    label: "About me",
  },
  {
    sectionId: "section-project",
    label: "Project",
  },
  {
    sectionId: "section-experience",
    label: "Experiece",
  },
];

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

  const secNavButtons = navButtons.map((item, index) => {
    const isActive = item.sectionId === activeSection;
    if (item.isHidden) {
      return;
    }

    return (
      <Link
        key={index}
        className={cn(
          buttonClasses,
          buttonVariants({
            variant: isActive ? "default" : "ghost",
            size: "sm",
          }),
        )}
        href={"#" + item.sectionId}
        onClick={handleScroll}
      >
        {item.label}
      </Link>
    );
  });

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
          {secNavButtons} <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
