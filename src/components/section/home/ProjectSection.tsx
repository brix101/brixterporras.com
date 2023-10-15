import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { graphQuery } from "@/lib/graphQuery";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PinnedData {
  id: string;
  name: string;
  url: string;
  description: string;
  homepageUrl: string;
  object: {
    text: string;
  };
  languages: {
    edges: LanguageEdge[];
  };
  repositoryTopics: {
    edges: TopicEdge[];
  };
}

interface LanguageEdge {
  size: number;
  node: {
    color: string;
    name: string;
  };
}

interface TopicEdge {
  node: {
    topic: {
      name: string;
    };
  };
}

interface PinnedResponse {
  data: {
    user: {
      pinnedItems: {
        nodes: PinnedData[];
      };
    };
  };
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
          object(expression: "master:README.md") {
            ... on Blob {
              text
            }
          }
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
`;

async function getPinnedProjects() {
  const res = await graphQuery<PinnedResponse>(query, {
    login: "brix101",
  });

  return res.data.user.pinnedItems.nodes;
}

async function ProjectSection() {
  const pinnedProjects = await getPinnedProjects();

  return (
    <section id="section-project" className="bg-background pt-20 pb-10">
      <div className="container min-h-screen space-y-8 ">
        <div className="w-full">
          <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
          <p className="mt-4 text-zinc-400">
            Check out my highlighted GitHub projects below.
          </p>
        </div>
        <Separator className="bg-primary" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pinnedProjects.map(item => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
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
                {item.repositoryTopics.edges.map((topic, index) => {
                  return <p key={index}>{topic.node.topic.name}</p>;
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
