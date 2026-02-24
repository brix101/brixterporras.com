export type RepositoriesNode = {
	name: string;
	languages: {
		edges: LanguageEdge[];
	};
};

export type LanguageResponse = {
	data: {
		user: {
			repositories: {
				nodes: RepositoriesNode[];
			};
		};
	};
};

export type Language = LanguageEdge & {
	percent: number;
	count: number;
};

export type PinnedItemsNode = {
	id: string;
	name: string;
	url: string;
	description: string;
	homepageUrl: string;
	stargazers: {
		totalCount: number;
	};
	object: {
		text: string;
	};
	languages: {
		edges: LanguageEdge[];
	};
	repositoryTopics: {
		edges: TopicEdge[];
	};
};

export type LanguageEdge = {
	size: number;
	node: {
		id: string;
		color: string;
		name: string;
	};
};

export type TopicEdge = {
	node: {
		topic: {
			name: string;
		};
	};
};

export type PinnedResponse = {
	data: {
		user: {
			pinnedItems: {
				nodes: PinnedItemsNode[];
			};
		};
	};
};
