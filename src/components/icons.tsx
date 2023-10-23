import { cn } from "@/lib/utils"
import { Columns, Contact, MessageSquare, Moon, Sun } from "lucide-react"

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  moon: Moon,
  sun: Sun,
  columns: Columns,
  messageSquare: MessageSquare,
  contact: Contact,
  mainLogo: ({ className, ...props }: IconProps) => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("group", className)}
      {...props}
    >
      <rect
        width="100"
        height="100"
        className="fill-foreground transition-all group-hover:fill-primary"
      />
      <path
        className="fill-background"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 20V0H20V80H80V20H40ZM40 60V40H60V60H40Z"
      />
    </svg>
  ),
  heroTriangle: (props: IconProps) => (
    <svg
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="stroke-foreground"
        d="M73.2528 46.8363L73.2554 46.8416L99.138 99H2.36515L27.2947 48.9031L27.2966 48.8991L50.7833 2.2239L73.2528 46.8363Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
}
