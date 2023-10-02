import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import useGetScrollOffset from "@/hooks/useGetScrollOffset";
import { cn } from "@/lib/utils";

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
          <svg
            width="45"
            height="45"
            className={cn("transition-all", !isOffset ? "hidden" : "")}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100" height="100" className="fill-foreground" />
            <path
              className="fill-background"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40 20V0H20V80H80V20H40ZM40 60V40H60V60H40Z"
            />
          </svg>
        </div>
        <div className="flex gap-4 items-center pointer-events-auto">
          <Button
            className="outline outline-1 outline-primary bg-transparent uppercase"
            variant="destructive"
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
