export const siteConfig = {
	name: 'Brixter Porras',
	url: 'https://brixterporras.com',
	ogImage: { url: 'https://brixterporras.com/og.png', width: '1200', height: '630' },
	description: 'Software Developer from 🇵🇭',
	keywords: [
		'Brixter Porras',
		'Software Developer',
		'Web Developer',
		'Full Stack Developer',
		'SvelteKit',
		'TypeScript',
		'Philippines'
	],
	author: 'Brixter Porras',
	twitter: {
		creator: '@Brixyz101'
	},
	links: {
		x: 'https://twitter.com/Brixyz101',
		linkedin: 'https://www.linkedin.com/in/brixter-porras',
		github: 'https://github.com/Brix101'
	}
};

export const siteLinks = [
	{
		name: 'About Me',
		href: '#section-about',
		isSection: true
	},
	{
		name: 'Projects',
		href: '#section-projects',
		isSection: true
	},
	{
		name: 'Contact',
		href: '/contact',
		isSection: false
	}
];

export type SiteConfig = typeof siteConfig;
export type SiteLink = (typeof siteLinks)[number];
