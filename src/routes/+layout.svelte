<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import { siteConfig } from '$lib/siteConfig';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{siteConfig.name}</title>
	<meta name="description" content={siteConfig.description} />
	<meta name="keywords" content="Brixter Porras, Portfolio, Software Developer, Philippines" />
	<meta name="author" content="brix101" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content={siteConfig.url} />
	<meta property="og:title" content={siteConfig.name} />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:image" content={siteConfig.ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={siteConfig.name} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteConfig.name} />
	<meta name="twitter:description" content={siteConfig.description} />
	<meta name="twitter:image" content={siteConfig.ogImage} />
	<meta name="twitter:creator" content="@Brixyz101" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="shortcut icon" href="/favicon-16x16.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>
{@render children()}
