"use client"

import useScrollOffset from "@/hooks/useScrollOffset"
import { Icons } from "./icons"
import { Button } from "./ui/button"

export default function ContactButton() {
  const isOffset = useScrollOffset(20)
  return (
    <div className="fab-container fixed bottom-10 right-10 z-20">
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
  )
}
