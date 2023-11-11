"use client"

import useScrollOffset from "@/hooks/useScrollOffset"
import * as React from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value)
}

export default function ContactButton() {
  const isOffset = useScrollOffset(20)
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <div className="fixed bottom-0 z-20 w-full">
      <div className="fab-container mb-4 px-4 transition-all md:container md:mb-10">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="fab-btn flex h-14 w-14 items-center justify-center rounded-full"
              variant={isOffset ? "default" : "outline"}
              style={{
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.75)",
              }}
            >
              <Icons.contact className="h-16 w-16" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact Information</DialogTitle>
            </DialogHeader>
            <div className="flex w-full items-center justify-between rounded-md border px-4 py-1">
              <span>brixterporras@gmail.com</span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  copyToClipboardWithMeta("brixterporras@gmail.com")
                  setHasCopied(true)
                }}
              >
                <span className="sr-only">Copy</span>
                {hasCopied ? (
                  <Icons.check className="h-3 w-3" />
                ) : (
                  <Icons.copy className="h-3 w-3" />
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
