import { cn } from "@/lib/utils"
import Link from "next/link"
import { Icons } from "../icons"
import { buttonVariants } from "../ui/button"

interface LinkItem {
  href: string
  icon: keyof typeof Icons
}

const links: LinkItem[] = [
  { href: "https://www.facebook.com/brix.porras/", icon: "facebook" },
  {
    href: "https://www.linkedin.com/in/brixter-porras-7bbaa91bb/",
    icon: "linked",
  },
  { href: "https://github.com/Brix101/", icon: "github" },
]

function Footer() {
  return (
    <footer className="w-full border border-t-primary bg-background pb-10 pt-5">
      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <div className="flex gap-1">
          {links.map((link, index) => {
            const Icon = Icons[link.icon]
            return (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                className={cn(
                  buttonVariants({
                    size: "icon",
                  }),
                  "h-6 w-6 p-1",
                )}
              >
                <Icon aria-hidden="true" />{" "}
              </Link>
            )
          })}
        </div>
        <div>
          <p className="text-xl font-bold leading-[1.1]">
            Brixter Porras {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
