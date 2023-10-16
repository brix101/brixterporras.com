import { Shell } from "@/components/shells/shell"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { graphQuery } from "@/lib/graphQuery"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Balancer from "react-wrap-balancer"

interface PinnedData {
  id: string
  name: string
  url: string
  description: string
  homepageUrl: string
  object: {
    text: string
  }
  languages: {
    edges: LanguageEdge[]
  }
  repositoryTopics: {
    edges: TopicEdge[]
  }
}

interface LanguageEdge {
  size: number
  node: {
    color: string
    name: string
  }
}

interface TopicEdge {
  node: {
    topic: {
      name: string
    }
  }
}

interface PinnedResponse {
  data: {
    user: {
      pinnedItems: {
        nodes: PinnedData[]
      }
    }
  }
}

const query = `
query userInfo($login: String!) {
  user(login: $login) {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          name
          url
          description
          homepageUrl
          languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
            edges {
              size
              node {
                color
                name
              }
            }
          }
          repositoryTopics(first: 10) {
            edges {
              node {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
`

async function getPinnedProjects() {
  const res = await graphQuery<PinnedResponse>(query, {
    login: "brix101",
  })

  return res.data.user.pinnedItems.nodes
}

async function ProjectSection() {
  const pinnedProjects = await getPinnedProjects()
  return (
    <Shell id="section-project" variant={"sidebar"}>
      <div className="container space-y-8">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Projects
          </h2>
          <Balancer className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Check out my highlighted GitHub projects below.
          </Balancer>
        </div>
        <Separator className="bg-primary" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pinnedProjects.map(item => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>Topics</div>
                <div className="flex flex-wrap gap-1">
                  {item.repositoryTopics.edges.map((topic, index) => {
                    return (
                      <Badge className="cursor-default" key={index}>
                        {topic.node.topic.name}
                      </Badge>
                    )
                  })}
                </div>
              </CardContent>
              <CardFooter className="">
                <div className="flex space-x-2">
                  {item.homepageUrl != "" ? (
                    <Link
                      href={item.homepageUrl}
                      className={cn(
                        buttonVariants({
                          variant: "link",
                          size: "sm",
                        }),
                      )}
                      target="_blank"
                    >
                      View
                    </Link>
                  ) : undefined}
                  <Link
                    href={item.url}
                    className={cn(
                      buttonVariants({
                        variant: "link",
                        size: "sm",
                      }),
                    )}
                    target="_blank"
                  >
                    Github
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Shell>
  )
}

export default ProjectSection
