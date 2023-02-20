"use client";
import Navlink from "./button/Navlink";
import ThemeSwitch from "./button/ThemeSwitch";

function Header() {
  return (
    <nav className="my-2 mx-5">
      <header className="flex h-20 w-full items-center justify-between rounded-xl border-2 border-transparent px-5">
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
