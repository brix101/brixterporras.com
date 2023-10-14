import { Separator } from "@/components/ui/separator";
import { graphQuery } from "@/lib/graphQuery";

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
}

interface LanguageEdge {
  node: {
    color: string;
    name: string;
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
    <section id="section-project" className="bg-background pt-20">
      <div className="container h-[100vh] space-y-8 ">
        <div className="w-full">
          <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <Separator className="bg-primary" />
        {pinnedProjects.map(item => (
          <div key={item.id}>
            {item.id}==={item.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
