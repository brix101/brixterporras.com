import { Separator } from "@/components/ui/separator";
import { env } from "@/env.mjs";

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
`;

interface LanguageNode {
  node: {
    name: string;
    color: string;
  };
  size: number;
}

interface RepoNode {
  name: string;
  languages: {
    edges: LanguageNode[];
  };
}

interface ReducedRepoNodes {
  [key: string]: {
    name: string;
    color: string;
    size: number;
    count: number;
  };
}

interface GraphQLResponse {
  data: {
    user: {
      repositories: {
        nodes: RepoNode[];
      };
    };
  };
}

interface Language {
  name: string;
  color: string;
  size: number;
  count: number;
  percent?: number;
}

async function getTopLanguages() {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: { login: "brix101" },
    }),
  });

  const res: GraphQLResponse = await response.json();
  const repoNodes = res.data.user.repositories.nodes;
  let repoCount = 0;

  const reducedRepoNodes = repoNodes
    .filter((node: RepoNode) => node.languages.edges.length > 0)
    .flatMap(node => node.languages.edges)
    .reduce((acc: ReducedRepoNodes, curr: LanguageNode) => {
      let langSize = curr.size;
      if (acc[curr.node.name] && curr.node.name === acc[curr.node.name].name) {
        langSize = curr.size + acc[curr.node.name].size;
        repoCount += 1;
      } else {
        repoCount = 1;
      }
      return {
        ...acc,
        [curr.node.name]: {
          name: curr.node.name,
          color: curr.node.color,
          size: langSize,
          count: repoCount,
        },
      };
    }, {});

  const exLangsSet = new Set(["HTML", "CSS", "SCSS", "Scheme"]);
  const topLangs = Object.keys(reducedRepoNodes)
    .reduce((prev: Language[], key) => {
      if (!exLangsSet.has(reducedRepoNodes[key].name)) {
        prev.push(reducedRepoNodes[key]);
      }
      return prev;
    }, [])
    .sort((a, b) => b.size - a.size);

  const totalLanguageSize = topLangs.reduce((acc, curr) => acc + curr.size, 0);

  const langs = topLangs.map(lang => ({
    ...lang,
    percent: parseFloat(((lang.size / totalLanguageSize) * 100).toFixed(2)),
  }));

  return langs;
}

async function AboutSection() {
  const data = await getTopLanguages();

  return (
    <section id="section-about" className="bg-background-2 pt-20">
      <div className="container h-screen space-y-8 ">
        <div className="w-full">
          <h2 className="text-3xl font-bold sm:text-4xl">About me</h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <Separator className="bg-primary" />
        {data.slice(0, 6).map((item, index) => (
          <div
            key={index}
            style={{
              color: item.color,
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
