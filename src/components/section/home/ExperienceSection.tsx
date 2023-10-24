import { Shell } from "@/components/shells/shell"
import { Separator } from "@/components/ui/separator"
import Balancer from "react-wrap-balancer"

function ExperienceSection() {
  return (
    <Shell
      id="section-experience"
      variant={"sidebar"}
      className="bg-background-2"
    >
      <div className="container space-y-8">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Experience
          </h2>
          <Balancer className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Here are some of my experience
          </Balancer>
        </div>
        <Separator className="bg-primary" />
        <div className="h-screen"></div>
      </div>
    </Shell>
  )
}

export default ExperienceSection
