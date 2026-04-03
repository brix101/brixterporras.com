<script lang="ts">
	import { siteConfig, siteLinks } from '$lib/config';
	import { cn, handleScroll } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import BrixLogo from './brix-logo.svelte';
	import { buttonVariants } from './ui/button';

	let {
		isOffset = false,
		class: className,
		...restProps
	}: {
		class?: string;
		isOffset?: boolean;
	} & HTMLAttributes<HTMLElement> = $props();
</script>

<nav class={cn('items-center justify-between', className)} {...restProps}>
	<div class="pr-2">
		<a
			href="#section-hero"
			class={cn('group flex items-center space-x-2', isOffset ? 'visible' : 'hidden')}
			aria-label="Go to Hero section"
			onclick={handleScroll}
		>
			<BrixLogo class="h-6 w-6" />
			<p class="hidden font-bold break-normal group-hover:text-primary sm:inline-block">
				{siteConfig.name}
			</p>
		</a>
	</div>
	<div class="space-x-2">
		{#each siteLinks as link (link.name)}
			<a
				href={link.href}
				class={buttonVariants({ variant: 'ghost', size: 'sm' })}
				onclick={link.isSection ? handleScroll : undefined}
			>
				{link.name}
			</a>
		{/each}
	</div>
</nav>
