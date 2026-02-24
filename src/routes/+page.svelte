<script lang="ts">
	import GithubButton from '$lib/components/github-button.svelte';
	import Metadata from '$lib/components/metadata.svelte';
	import Hero from '$lib/components/section/hero.svelte';
	import SiteHeader from '$lib/components/site-header.svelte';
	import { siteConfig } from '$lib/config';
</script>

<Metadata title="Home" />

<GithubButton link={siteConfig.links.github} />
<SiteHeader />
<Hero />
<section id="section-about" class="min-h-screen bg-background">
	<div class="container mx-auto space-y-8">
		<h2 class="mb-4 text-2xl font-bold">About Me</h2>
		<p class="text-lg text-foreground/80">
			Hello! I'm Brixter Porras, a passionate software developer with a knack for creating
			innovative solutions. With a strong background in web development, I specialize in building
			responsive and user-friendly applications. I enjoy collaborating on open-source projects and
			continuously learning new technologies to enhance my skills.
		</p>
	</div>
</section>
<section id="section-projects" class="min-h-screen bg-slate-950">
	<h2 class="mb-4 text-2xl font-bold">Projects</h2>
	<p class="text-lg text-foreground/80">
		I've worked on a variety of projects, ranging from small personal websites to large-scale
		applications. Some of my notable projects include:
	</p>
	<ul class="list-disc pl-5 text-lg text-foreground/80">
		<li>
			<a href="#" class="text-primary hover:underline"> Project 1 </a>
		</li>
		<li>
			<a href="#" class="text-primary hover:underline"> Project 2 </a>
		</li>
	</ul>
</section>
