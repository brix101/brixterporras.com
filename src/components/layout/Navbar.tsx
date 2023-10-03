import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import useGetScrollOffset from "@/hooks/useGetScrollOffset";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

function Navbar() {
  const { scrollY } = useGetScrollOffset();
  const isOffset = scrollY > 413;

  return (
    <header
      className={cn(
        "z-50 top-0 fixed w-full transition-all border-b",
        isOffset
          ? "bg-background p-5 border-primary pointer-events-auto"
          : "p-3 border-transparent pointer-events-none"
      )}
    >
      <div className={cn("container flex justify-between items-center")}>
        <div>
          <Icons.mainLogo
            className={cn(
              "h-11 w-11 transition-all",
              !isOffset ? "hidden" : ""
            )}
          />
        </div>
        <div className="flex gap-4 items-center pointer-events-auto">
          <Button
            className="outline outline-1 outline-primary bg-transparent uppercase"
            variant="ghost"
            size="sm"
          >
            About
          </Button>
          <Button
            className="outline outline-1 outline-primary bg-transparent uppercase"
            variant="ghost"
            size="sm"
          >
            Project
          </Button>
          <Button
            className="outline outline-1 outline-primary bg-transparent uppercase"
            variant="ghost"
            size="sm"
          >
            Experience
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
