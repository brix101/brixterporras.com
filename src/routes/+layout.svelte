<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import TailwindIndicator from '$lib/components/tailwind-indicator.svelte';
	import './custom.css';
	import './layout.css';

	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<TailwindIndicator />
{@render children()}
