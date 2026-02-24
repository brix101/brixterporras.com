<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SVGAttributes } from 'svelte/elements';

	let {
		class: className,
		...restProps
	}: {
		class?: string;
	} & SVGAttributes<SVGSVGElement> = $props();
</script>

<svg
	viewBox="0 0 100 100"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={cn(`group `, className)}
	{...restProps}
>
	<rect width="100" height="100" class="fill-foreground transition-all group-hover:fill-primary" />
	<path
		class="fill-background"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M40 20V0H20V80H80V20H40ZM40 60V40H60V60H40Z"
	/>
</svg>
