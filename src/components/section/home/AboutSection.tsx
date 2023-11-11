import wave from "@/assets/wave.gif"
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
import { Info } from "@/types"
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

  const excludedLangSet = new Set([
    "HTML",
    "CSS",
    "SCSS",
    "Scheme",
    "Lua",
    "Shell",
  ])

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

  const langs = topLangs
    .map(lang => ({
      ...lang,
      percent: parseFloat(((lang.size / totalLanguageSize) * 100).toFixed(2)),
    }))
    .filter(lang => lang.percent > 1)

  return langs
}

const languageLogo = {
  TypeScript: "https://img.icons8.com/color/480/000000/typescript.png",
  JavaScript: "https://img.icons8.com/color/480/000000/javascript.png",
  Java: "https://img.icons8.com/color/480/java-coffee-cup-logo--v1.png",
  "C#": "https://img.icons8.com/color/480/c-sharp-logo.png",
  Go: "https://img.icons8.com/color/480/golang.png",
  Rust: "https://www.rust-lang.org/logos/rust-logo-64x64.png",
  Python: "https://img.icons8.com/color/480/python--v1.png",
  Kotlin: "https://img.icons8.com/color/480/kotlin.png",
}

const tools: Info[] = [
  {
    label: "Linux (Arch / Nix)",
    description: "Operating System",
    logo: "https://img.icons8.com/color/480/linux--v1.png",
  },
  {
    label: "Vs code",
    description: "Text Editor",
    logo: "https://img.icons8.com/color/480/visual-studio-code-2019.png",
  },
  {
    label: "Vim / Neovim",
    description: "Text Editor",
    logo: "https://www.vim.org/images/vimlogo.svg",
  },
  {
    label: "Git / Github",
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
            Here are some information about myself.
          </Balancer>
        </div>
        <Separator className="bg-primary" />
        <div className="flex justify-center">
          <div className="flex max-w-4xl flex-col space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex gap-2 text-lg font-bold tracking-tighter sm:text-2xl">
                  <span>Hello, I&rsquo;m Brixter Porras</span>
                  <Image
                    src={wave}
                    height={0}
                    width={0}
                    className="h-5 w-5 md:h-8 md:w-8"
                    alt="hi"
                  />
                  {/* 👋 */}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Balancer className="max-w-3xl leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                  A software developer and musician based in the Philippines.
                  Over the last four years, I&rsquo;ve enthusiastically delved
                  into the world of sacred runes and mysterious rituals, driven
                  by my genuine love for the craft and the digital realm.
                  <br />
                  <br />
                  Balancing my deep affection for both technology and music, I
                  approach my work with an unwavering commitment, dedicating my
                  efforts to infuse every project with a touch of artistry and
                  technical finesse. Being largely self-taught, I bring a unique
                  perspective to my endeavors. My aspiration is to continue
                  creating meaningful experiences that resonate with audiences,
                  while consistently seeking new opportunities to learn and
                  expand my expertise.
                </Balancer>
              </CardContent>
            </Card>
            <Card className="border-none bg-transparent shadow-none">
              <CardHeader className="pt-0">
                <CardTitle>Tools I use.</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 px-0 sm:grid-cols-2 sm:px-2">
                {tools.map((tool, index) => (
                  <Card
                    key={index}
                    className="grid w-full grid-cols-3 items-center p-4  transition-all hover:scale-105 md:w-auto"
                  >
                    <CardHeader className="col-span-2 p-0">
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
                  </Card>
                ))}
              </CardContent>
            </Card>
            <Card className="border-none bg-transparent shadow-none">
              <CardHeader className="pt-0">
                <CardTitle>
                  <Balancer>
                    Languages I use based on my github stats.{" "}
                  </Balancer>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-center gap-2 px-0 sm:px-2 md:gap-4">
                {data.map((item, index) => (
                  <Card
                    key={index}
                    className="flex h-20 w-20 flex-col items-center justify-center space-y-2 text-center transition-all hover:scale-105 sm:h-24 sm:w-24"
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
