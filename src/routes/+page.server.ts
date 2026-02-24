import { gqlQuery, PINNED_ITEMS_QUERY, TOP_LANGUAGE_QUERY } from '$lib/gql';
import type { Info } from '$lib/types';
import type { Language, LanguageResponse, PinnedResponse } from '$lib/types/github';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		tools: Promise.resolve<Info[]>([
			{
				label: 'Linux (Arch / Nix)',
				description: 'Operating System',
				logo: 'linux.png'
			},
			{
				label: 'Vs code',
				description: 'Text Editor',
				logo: 'vscode.png'
			},
			{
				label: 'Vim / Neovim',
				description: 'Text Editor',
				logo: 'vim.svg'
			},
			{
				label: 'Git / Github',
				description: 'Version Control',
				logo: 'git.png'
			}
		]),
		languages: gqlQuery<LanguageResponse>(TOP_LANGUAGE_QUERY, { login: 'brix101' }).then((res) => {
			const edges = res.data.user.repositories.nodes.flatMap((repo) => repo.languages.edges);
			const excludedLangSet = new Set(['HTML', 'CSS', 'SCSS', 'Scheme', 'Lua', 'Shell']);

			const { langMap, totalSize } = edges.reduce(
				(acc, edge) => {
					const { id, name } = edge.node;

					if (excludedLangSet.has(name)) return acc;

					const langSize = edge.size;
					acc.totalSize += langSize;

					if (acc.langMap.has(id)) {
						const lang = acc.langMap.get(id)!;
						lang.size += langSize;
						lang.count += 1;
					} else {
						acc.langMap.set(id, {
							node: edge.node,
							size: langSize,
							count: 1,
							percent: 0
						});
					}
					return acc;
				},
				{ langMap: new Map<string, Language>(), totalSize: 0 }
			);

			const topLangs = Array.from(langMap.values())
				.sort((a, b) => b.size - a.size)
				.map((lang) => ({
					...lang,
					percent: parseFloat(((lang.size / totalSize) * 100).toFixed(2))
				}))
				.filter((lang) => lang.percent > 1);

			return topLangs;
		}),
		pinnedItems: gqlQuery<PinnedResponse>(PINNED_ITEMS_QUERY, { login: 'brix101' }).then(
			(res) => res.data.user.pinnedItems.nodes
		)
	};
};
