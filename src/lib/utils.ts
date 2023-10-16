import { env } from "@/env.mjs"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export function handleScroll(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
  e.preventDefault()
  const href = e.currentTarget.href
  const targetId = href.replace(/.*\#/, "")
  const elem = document.getElementById(targetId)
  elem?.scrollIntoView({
    behavior: "smooth",
  })
}
