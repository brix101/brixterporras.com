import { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeSwitch() {
  const [isDarkmode, setIsDarkMode] = useState(false);

  const toggleCircle = useRef<HTMLDivElement>(null);
  const buttonToggle = useRef<HTMLButtonElement>(null);
  const { icon } = useGetIcon({ isDarkmode });

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  useEffect(() => {
    if (isDarkmode) {
      toggleCircle?.current?.classList.replace("bg-white", "bg-black");
      toggleCircle?.current?.classList.replace("text-black", "text-white");
      toggleCircle.current?.classList.replace("translate-x-0", "translate-x-6");
      buttonToggle.current?.classList.replace("bg-black", "bg-white");
    } else {
      toggleCircle?.current?.classList.replace("bg-black", "bg-white");
      toggleCircle?.current?.classList.replace("text-white", "text-black");
      toggleCircle.current?.classList.replace("translate-x-6", "translate-x-0");
      buttonToggle.current?.classList.replace("bg-white", "bg-black");
    }
  }, [isDarkmode]);

  return (
    <button
      ref={buttonToggle}
      className="relative flex h-10 w-16 items-center  rounded-full bg-black px-1 shadow transition duration-300 focus:outline-none"
      onClick={toggleTheme}
    >
      <div
        ref={toggleCircle}
        className="relative h-8 w-8 translate-x-0 rounded-full bg-white p-1 text-black transition duration-500"
      >
        {icon}
      </div>
    </button>
  );
}

function useGetIcon({ isDarkmode }: { isDarkmode: boolean }) {
  const [icon, setIcon] = useState<JSX.Element>(<FaMoon size={24} />);
  setTimeout(() => {
    if (isDarkmode) {
      setIcon(<FaSun size={24} />);
    } else {
      setIcon(<FaMoon size={24} />);
    }
  }, 250);

  return { icon };
}

export default ThemeSwitch;
