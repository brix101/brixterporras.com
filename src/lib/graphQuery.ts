import { env } from "@/env.mjs"

export async function graphQuery<T>(
  query: string,
  variables: Record<string, any>,
): Promise<T> {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const res: T = await response.json()
  return res
}
