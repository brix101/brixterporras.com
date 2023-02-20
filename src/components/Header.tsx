"use client";
import { useEffect, useRef } from "react";
import Navlink from "./button/Navlink";
import ThemeSwitch from "./button/ThemeSwitch";

function Header() {
  const headerRef = useRef<HTMLHeadElement>(null);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      //   headerRef.current?.classList.replace(
      //     "border-transparent",
      //     "border-black"
      //   );
      headerRef.current?.classList.replace("bg-transparent", "bg-white/80");
    } else {
      //   headerRef.current?.classList.replace(
      //     "border-black",
      //     "border-transparent"
      //   );
      headerRef.current?.classList.replace("bg-white/80", "bg-transparent");
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className="fixed top-2 z-30 my-2 mx-5 w-screen pr-10">
      <header
        ref={headerRef}
        className="flex h-20 w-full items-center justify-between rounded-2xl border-2 border-transparent bg-transparent px-5 transition delay-100"
      >
        <div></div>
        <div className="flex gap-2">
          <Navlink>About Me</Navlink>
          <Navlink>Project</Navlink>
          <Navlink>Experience</Navlink>
          <ThemeSwitch />
        </div>
      </header>
    </nav>
  );
}

export default Header;
