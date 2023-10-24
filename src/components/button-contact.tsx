"use client"

import useScrollOffset from "@/hooks/useScrollOffset"
import { Icons } from "./icons"
import { Button } from "./ui/button"

export default function ContactButton() {
  const isOffset = useScrollOffset(20)
  return (
    <div className="fixed bottom-0 z-20 w-full">
      <div className="fab-container mb-4 px-4 transition-all md:container md:mb-10">
        <Button
          className="fab-btn flex h-14 w-14 items-center justify-center rounded-full"
          variant={isOffset ? "default" : "outline"}
          style={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.75)",
          }}
        >
          <Icons.contact className="h-16 w-16" />
        </Button>
      </div>
    </div>
  )
}
