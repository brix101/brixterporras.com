import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-8 w-[56px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
      )}
      defaultChecked={isDark}
      onCheckedChange={(e) => (e ? setTheme("dark") : setTheme("light"))}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-8 w-8 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
          "items-center justify-center flex"
        )}
      >
        {isDark ? (
          <Moon className="h-6 w-6 rotate-90 transition-all dark:rotate-0" />
        ) : (
          <Sun className="h-6 w-6 rotate-90 transition-all" />
        )}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
}
