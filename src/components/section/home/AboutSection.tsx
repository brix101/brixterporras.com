import { Separator } from "@/components/ui/separator";
import { graphQuery } from "@/lib/graphQuery";

interface RepoNode {
  name: string;
  languages: {
    edges: {
      node: {
        name: string;
        color: string;
      };
      size: number;
    }[];
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

async function getTopLanguages() {
  const res = await graphQuery<GraphQLResponse>(query, {
    login: "brix101",
  });

  const repoNodes = res.data.user.repositories.nodes;

  const excludedLangSet = new Set(["HTML", "CSS", "SCSS", "Scheme"]);

  const topLangs = repoNodes
    .filter(node => node.languages.edges.length > 0)
    .flatMap(node => node.languages.edges)
    .reduce((acc, curr) => {
      const name = curr.node.name;
      if (!excludedLangSet.has(name)) {
        const langSize = curr.size;
        const existingLang = acc.find(item => item.name === name);
        if (existingLang) {
          existingLang.size += langSize;
          existingLang.count += 1;
        } else {
          acc.push({
            ...curr.node,
            size: langSize,
            count: 1,
          });
        }
      }
      return acc;
    }, new Array<Language>())
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
        <div className="flex gap-2">
          {data.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="h-24 w-24 border text-center"
              style={{
                borderColor: item.color,
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
