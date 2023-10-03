import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import useSectionStore from "@/hooks/useSectionStore";

interface Props {
  offsetTop: number;
}

function Navbar({ offsetTop: offSetTop }: Props) {
  const { sections, setScrollLocation } = useSectionStore();
  const windowHeight = window.innerHeight;
  const offset = (windowHeight * 60) / 100;
  const isOffset = offSetTop > offset;

  const navButtons = sections.map((section) => {
    // if (!isOffset && section.title.includes("Home")) {
    if (section.title.includes("Home")) {
      return null; // Skip rendering Home section button if isOffset is false
    }

    const buttonClasses = cn(
      "outline outline-1 outline-primary uppercase",
      "disabled:text-background disabled:bg-primary disabled:text-opacity-100",
      isOffset ? "" : "bg-transparent hover:bg-background",
    );

    function handleClick() {
      setScrollLocation(section);
    }

    return (
      <Button
        key={section.id}
        className={buttonClasses}
        variant="ghost"
        size="sm"
        disabled={section.isActive}
        onClick={handleClick}
      >
        {section.title}
      </Button>
    );
  });

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
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setScrollLocation(sections[0])}
        >
          <Icons.mainLogo
            className={cn(
              "h-11 w-11 transition-all",
              !isOffset ? "hidden" : "visible",
            )}
          />
        </Button>
        <div className="flex gap-4 items-center pointer-events-auto">
          {navButtons}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
