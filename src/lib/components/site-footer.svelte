<script lang="ts">
	import { siteConfig } from '$lib/config';
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import { buttonVariants } from './ui/button';

	const links = Object.keys(siteConfig.links)
		.map((key) => ({
			name: key,
			url: siteConfig.links[key as keyof typeof siteConfig.links].replace(/\/+$/, ''),
			Icon: key === 'github' ? Github : key === 'linkedin' ? Linkedin : null
		}))
		.filter((link) => link.name !== 'x');
</script>

<footer class="w-full border border-t-primary bg-background pt-5 pb-10">
	<div class="flex h-full w-full flex-col items-center justify-center gap-2">
		<div class="flex gap-1">
			{#each links as link (link.name)}
				<a
					aria-label={`Visit ${siteConfig.name}'s ${link.name} profile`}
					href={link.url}
					target="_blank"
					rel="external noopener noreferrer"
					class={buttonVariants({ size: 'icon', variant: 'ghost' })}
				>
					{#if link.Icon}
						<link.Icon aria-hidden="true" />
					{:else}
						{link.name}
					{/if}
				</a>
			{/each}
		</div>
		<p class="text-xl leading-[1.1] font-bold">
			{siteConfig.name}
			{new Date().getFullYear()}.
		</p>
	</div>
</footer>
