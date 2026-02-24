import { GITHUB_TOKEN } from '$env/static/private';

export const TOP_LANGUAGE_QUERY = `
query userInfo($login: String!) {
  user(login: $login) {
    repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
      nodes {
        name
        languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
          edges {
            size
            node {
              id
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

export const PINNED_ITEMS_QUERY = `
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
          stargazers {
            totalCount
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

export async function gqlQuery<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${GITHUB_TOKEN}`,
			Accept: 'application/vnd.github+json',
			'User-Agent': 'sveltekit-cloudflare-app'
		},
		body: JSON.stringify({
			query,
			variables
		})
	});

	if (!response.ok) {
		const body = await response.text();
		console.error('GraphQL query failed:', {
			status: response.status,
			statusText: response.statusText,
			query,
			variables,
			body
		});

		return {
			data: {
				user: {
					repositories: {
						nodes: []
					},
					pinnedItems: {
						nodes: []
					}
				}
			}
		} as T;
	}

	const res: T = await response.json();
	return res;
}
