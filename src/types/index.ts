import { Icons } from "@/components/icons"

export interface Info {
  label: string
  description: string
  logo: string
}

export interface LinkItem {
  href: string
  icon: keyof typeof Icons
}
