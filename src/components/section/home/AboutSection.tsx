import { Shell } from "@/components/shells/shell"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { graphQuery } from "@/lib/graphQuery"
import { Tool } from "@/types"
import Image from "next/image"
import { Balancer } from "react-wrap-balancer"

interface RepoNode {
  name: string
  languages: {
    edges: {
      node: {
        name: string
        color: string
      }
      size: number
    }[]
  }
}

interface GraphQLResponse {
  data: {
    user: {
      repositories: {
        nodes: RepoNode[]
      }
    }
  }
}

interface Language {
  name: string
  color: string
  size: number
  count: number
  percent?: number
}

const query = `
query userInfo($login: String!) {
  user(login: $login) {
    repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
      nodes {
        name
        languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
          edges {
            size
            node {
              color
              name
            }
          }
        }
      }
    }
  }
}
`

async function getTopLanguages() {
  const res = await graphQuery<GraphQLResponse>(query, {
    login: "brix101",
  })

  const repoNodes = res.data.user.repositories.nodes

  const excludedLangSet = new Set(["HTML", "CSS", "SCSS", "Scheme"])

  const topLangs = repoNodes
    .filter(node => node.languages.edges.length > 0)
    .flatMap(node => node.languages.edges)
    .reduce((acc, curr) => {
      const name = curr.node.name
      if (!excludedLangSet.has(name)) {
        const langSize = curr.size
        const existingLang = acc.find(item => item.name === name)
        if (existingLang) {
          existingLang.size += langSize
          existingLang.count += 1
        } else {
          acc.push({
            ...curr.node,
            size: langSize,
            count: 1,
          })
        }
      }
      return acc
    }, new Array<Language>())
    .sort((a, b) => b.size - a.size)

  const totalLanguageSize = topLangs.reduce((acc, curr) => acc + curr.size, 0)

  const langs = topLangs.map(lang => ({
    ...lang,
    percent: parseFloat(((lang.size / totalLanguageSize) * 100).toFixed(2)),
  }))

  return langs
}

const languageLogo = {
  TypeScript: "https://img.icons8.com/color/480/000000/typescript.png",
  JavaScript: "https://img.icons8.com/color/480/000000/javascript.png",
  Java: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
  "C#": "https://img.icons8.com/color/48/c-sharp-logo.png",
  Go: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
  Rust: "https://www.rust-lang.org/logos/rust-logo-64x64.png",
}

const tools: Tool[] = [
  {
    label: "Linux (Arch)",
    description: "Operating System",
    logo: "https://img.icons8.com/color/480/linux--v1.png",
  },
  {
    label: "Vs code",
    description: "Text Editor",
    logo: "https://img.icons8.com/color/480/visual-studio-code-2019.png",
  },
  {
    label: "Vim/Neovim",
    description: "Text Editor",
    logo: "https://www.vim.org/images/vimlogo.svg",
  },
  {
    label: "Git/Github",
    description: "Version Control",
    logo: "https://img.icons8.com/color/480/git.png",
  },
]

async function AboutSection() {
  const data = await getTopLanguages()

  return (
    <Shell id="section-about" variant={"sidebar"} className="bg-background-2">
      <div className="container space-y-8">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            About me
          </h2>
          <Balancer className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Here are some interesting facts about me.
          </Balancer>
        </div>
        <Separator className="bg-primary" />
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="min h-[calc(100vh-40vh)]">
            <CardHeader></CardHeader>
            <CardContent>
              Hello, I'm
              <h1 className="text-2xl text-primary">Brixter Porras</h1> a
              Sortware developer from bukidnon 🇵🇭
            </CardContent>
          </Card>
          <div>
            <Card className="border-none bg-transparent shadow-none">
              <CardHeader className="pt-0">
                <CardTitle>Tools I use.</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
                  >
                    <CardHeader className="col-span-2 w-36 p-0">
                      <CardTitle>{tool.label}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <div className="col-span-1 flex items-center justify-center">
                      <Image
                        src={tool.logo}
                        width={50}
                        height={50}
                        alt={tool.label}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-none bg-transparent shadow-none">
              <CardHeader className="pt-0">
                <CardTitle>
                  Top language I use based on my github stats.
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                {data.slice(0, 6).map((item, index) => (
                  <Card
                    key={index}
                    className="flex h-24 w-24 flex-col items-center justify-center space-y-2 text-center"
                    style={{
                      borderColor: item.color,
                    }}
                  >
                    <Image
                      src={languageLogo[item.name as keyof typeof languageLogo]}
                      width={50}
                      height={50}
                      alt={item.name}
                    />
                    <CardDescription className="text-bold">
                      {item.name}
                    </CardDescription>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Shell>
  )
}

export default AboutSection
