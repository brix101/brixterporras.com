<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import MainNav from './main-nav.svelte';
	import ModeSwitcher from './mode-switcher.svelte';

	let isOffset = false;

	function handleScroll() {
		isOffset = window.scrollY > 20;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header class="site-header fixed top-0 z-50 w-full">
	<div
		class={cn(
			'mx-auto flex items-center justify-between border-b p-4 transition-all md:container md:rounded-xl md:border md:px-8 md:py-4',
			isOffset ? 'border-primary bg-background/85 backdrop-blur-md md:mt-2' : 'border-transparent'
		)}
	>
		<div class="pointer-events-auto w-full">
			<MainNav class="hidden md:flex" {isOffset} />
		</div>
		<div class="pointer-events-auto pl-2">
			<ModeSwitcher />
		</div>
	</div>
</header>
