<script lang="ts">
	import { siteConfig } from '$lib/config';
	import { handleScroll } from '$lib/utils';
	import BrixLogo from '../brix-logo.svelte';
</script>

<section id="section-hero" class="hero-section max-h-screen">
	<div class="z-10 flex w-full justify-center">
		<a
			href="#section-about"
			class="main-logo"
			aria-label="Go to About section"
			onclick={handleScroll}
		>
			<div class="flex flex-col items-center space-y-4">
				<BrixLogo class=" h-40 w-40 md:h-60 md:w-60" />
				<h3 class="text-xl text-foreground hover:text-primary md:text-3xl">Software Developer</h3>
				<h1 class="text-3xl font-bold text-foreground uppercase hover:text-primary md:text-5xl">
					{siteConfig.name}
				</h1>
			</div>
		</a>
	</div>
	<div class="rectangle-1"></div>
	<div class="rectangle-2"></div>
	<div class="rectangle-transparent-1"></div>
	<div class="rectangle-transparent-2"></div>
	<div class="circle-1"></div>
	<div class="circle-2"></div>
	<div class="circle-3"></div>
	<div class="triangle triangle-1">
		<svg viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				class="stroke-foreground"
				d="M73.2528 46.8363L73.2554 46.8416L99.138 99H2.36515L27.2947 48.9031L27.2966 48.8991L50.7833 2.2239L73.2528 46.8363Z"
				stroke="currentColor"
				stroke-width="2"
			/>
		</svg>
	</div>
	<div class="triangle triangle-2">
		<svg viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				class="stroke-foreground"
				d="M73.2528 46.8363L73.2554 46.8416L99.138 99H2.36515L27.2947 48.9031L27.2966 48.8991L50.7833 2.2239L73.2528 46.8363Z"
				stroke="currentColor"
				stroke-width="2"
			/>
		</svg>
	</div>
	<div class="triangle triangle-3">
		<svg viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				class="stroke-foreground"
				d="M73.2528 46.8363L73.2554 46.8416L99.138 99H2.36515L27.2947 48.9031L27.2966 48.8991L50.7833 2.2239L73.2528 46.8363Z"
				stroke="currentColor"
				stroke-width="2"
			/>
		</svg>
	</div>
	<div class="triangle triangle-4">
		<svg viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				class="stroke-foreground"
				d="M73.2528 46.8363L73.2554 46.8416L99.138 99H2.36515L27.2947 48.9031L27.2966 48.8991L50.7833 2.2239L73.2528 46.8363Z"
				stroke="currentColor"
				stroke-width="2"
			/>
		</svg>
	</div>
</section>
