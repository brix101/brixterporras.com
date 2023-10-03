import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function FabButton() {
  return (
    <>
      <Button
        size={"icon"}
        className="fixed bottom-10 right-10 z-20 rounded-full h-16 w-16 fab-btn"
      >
        <Icons.messageSquare className="h-10 w-10 text-foreground" />
      </Button>
    </>
  );
}
