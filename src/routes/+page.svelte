<script lang="ts">
	import wave from '$lib/assets/wave.gif';
	import GithubButton from '$lib/components/github-button.svelte';
	import Metadata from '$lib/components/metadata.svelte';
	import HeroSection from '$lib/components/section/hero-section.svelte';
	import SiteHeader from '$lib/components/site-header.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { buttonVariants } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { siteConfig } from '$lib/config';
	import { cn } from '$lib/utils';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Metadata title="Home" />

<GithubButton link={siteConfig.links.github} />
<SiteHeader />
<HeroSection />

<section id="section-about" class="bg-background pt-10">
	<div class="container mx-auto space-y-8">
		<div class="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center">
			<h2 class="text-3xl leading-[1.1] font-bold sm:text-3xl md:text-5xl">About me</h2>
			<p class="max-w-184 leading-normal text-muted-foreground sm:text-lg sm:leading-7">
				Here are some information about myself.
			</p>
		</div>
		<Separator class="bg-primary" />

		<div class="mx-auto flex max-w-4xl flex-col space-y-8">
			<Card class="border-none bg-transparent text-balance shadow-none">
				<CardHeader>
					<CardTitle class="flex gap-2 text-lg font-bold tracking-tighter sm:text-2xl">
						<span>Hello, I&rsquo;m Brixter Porras</span>
						<img src={wave} class="h-5 w-5 md:h-8 md:w-8" alt="hi" />
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p
						class="max-w-3xl leading-normal text-balance text-muted-foreground sm:text-lg sm:leading-7"
					>
						I am software developer and musician based in the Philippines.
						<br />
						Over the last four years, I&rsquo;ve enthusiastically delved into the world of sacred runes
						and mysterious rituals, driven by my genuine love for the craft and the digital realm.
						<br />
						<br />I balance my deep affection for both technology and music by approaching my work
						with an unwavering commitment, dedicating my efforts to infuse every project with a
						touch of artistry and technical finesse. Being largely self-taught, I bring a unique
						perspective to my endeavors. My aspiration is to continue creating meaningful
						experiences that resonate with audiences, while consistently seeking new opportunities
						to learn and expand my expertise.
					</p>
				</CardContent>
			</Card>

			<Card class="border-none bg-transparent shadow-none">
				<CardHeader class="pt-0">
					<CardTitle>Tools I use.</CardTitle>
				</CardHeader>
				<CardContent class="grid gap-4 px-0 sm:grid-cols-2 sm:px-2">
					{#await data.tools}
						{#each Array.from({ length: 4 }) as _}
							<Card
								class="grid w-full grid-cols-3 items-center p-4  transition-all hover:scale-105 md:w-auto"
							>
								<CardHeader class="col-span-2 p-0">
									<Skeleton class="col-span-2 h-6 w-full animate-pulse rounded-md" />
									<Skeleton class="col-span-2 h-4 w-2/3 animate-pulse rounded-md" />
								</CardHeader>
								<Skeleton class="col-span-1 mx-auto h-12 w-12 animate-pulse rounded-md" />
							</Card>
						{/each}
					{:then tools}
						{#each tools as tool}
							<Card
								class="grid w-full grid-cols-3 items-center p-4  transition-all hover:scale-105 md:w-auto"
							>
								<CardHeader class="col-span-2 p-0">
									<CardTitle>{tool.label}</CardTitle>
									<CardDescription>{tool.description}</CardDescription>
								</CardHeader>
								<div class="col-span-1 flex items-center justify-center">
									<img
										src={`/logos/${tool.logo}`}
										alt={tool.label}
										class="mx-auto size-12 object-contain"
										height={50}
										width={50}
									/>
								</div>
							</Card>
						{/each}
					{/await}
				</CardContent>
			</Card>

			<Card class="border-none bg-transparent shadow-none">
				<CardHeader class="pt-0">
					<CardTitle>
						Languages I use based on my
						<a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">GitHub</a> stats.
					</CardTitle>
				</CardHeader>
				<CardContent class="grid gap-4 px-0 sm:grid-cols-2 sm:px-2 md:grid-cols-4">
					{#await data.languages}
						{#each Array.from({ length: 4 }) as _}
							<Card
								class="grid w-full grid-cols-3 items-center p-4 transition-all hover:scale-105 md:w-auto"
							>
								<CardHeader class="col-span-2 p-0">
									<Skeleton class="col-span-2 h-6 w-full animate-pulse rounded-md" />
									<Skeleton class="col-span-2 h-4 w-2/3 animate-pulse rounded-md" />
								</CardHeader>
								<Skeleton class="col-span-1 mx-auto h-12 w-12 animate-pulse rounded-md" />
							</Card>
						{/each}
					{:then languages}
						{#each languages as { node: { name, color }, percent }}
							<Card
								class="grid w-full grid-cols-3 items-center p-4 transition-all hover:scale-105 md:w-auto"
								style={`border-color: ${color}`}
							>
								<CardHeader class="col-span-2 p-0">
									<CardTitle>{name}</CardTitle>
									<CardDescription>{percent}%</CardDescription>
								</CardHeader>
								<div class="col-span-1 flex items-center justify-center">
									<img
										src={`/logos/${name.replace('#', '-sharp').toLowerCase()}.png`}
										alt={`${name}`}
										class="mx-auto size-12 object-contain"
										height={50}
										width={50}
									/>
								</div>
							</Card>
						{/each}
					{/await}
				</CardContent>
			</Card>
		</div>
	</div>
</section>

<section id="section-projects" class="min-h-screen bg-slate-50 pt-10 dark:bg-slate-950">
	<div class="container mx-auto space-y-8">
		<div class="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center">
			<h2 class="text-3xl leading-[1.1] font-bold sm:text-3xl md:text-5xl">Projects</h2>
			<p class="max-w-184 leading-normal text-muted-foreground sm:text-lg sm:leading-7">
				Here are the pinned projects from my Github. <br />
				I&rsquo;m currently actively working on some of these projects.
			</p>
		</div>
		<Separator class="bg-primary" />

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#await data.pinnedItems}
				{#each Array.from({ length: 4 }) as _}
					<Card>
						<CardHeader>
							<Skeleton class="h-6 w-1/2 animate-pulse rounded-md" />
							<Skeleton class="h-4 w-1/3 animate-pulse rounded-md" />
						</CardHeader>
						<CardContent>
							<Skeleton class="mb-2 h-4 w-full animate-pulse rounded-md" />
							<Skeleton class="mb-2 h-4 w-5/6 animate-pulse rounded-md" />
							<Skeleton class="mb-2 h-4 w-3/4 animate-pulse rounded-md" />
						</CardContent>
						<CardFooter>
							<div class="flex space-x-2">
								<Skeleton class="h-8 w-20 animate-pulse rounded-md" />
								<Skeleton class="h-8 w-20 animate-pulse rounded-md" />
							</div>
						</CardFooter>
					</Card>
				{/each}
			{:then pinnedItems}
				{#each pinnedItems as { id, name, description, url, homepageUrl, repositoryTopics }}
					<Card class="justify-between">
						<div class="space-y-4">
							<CardHeader>
								<CardTitle>{name}</CardTitle>
								<CardDescription>{description}</CardDescription>
							</CardHeader>

							<CardContent>
								<div>Topics</div>

								<div class="flex flex-wrap gap-1">
									{#each repositoryTopics.edges as { node: { topic: { name } } }, index}
										<Badge class="cursor-default uppercase" variant="secondary">
											{name}
										</Badge>
									{/each}
								</div>
							</CardContent>
						</div>

						<CardFooter class="">
							<div class="flex space-x-2">
								{#if homepageUrl}
									<a
										href={homepageUrl}
										class={cn(
											buttonVariants({
												variant: 'link',
												size: 'sm'
											})
										)}
										target="_blank"
									>
										Live Demo
									</a>
								{/if}

								<a
									href={url}
									class={cn(
										buttonVariants({
											variant: 'link',
											size: 'sm'
										})
									)}
									target="_blank"
								>
									Github
								</a>
							</div>
						</CardFooter>
					</Card>
				{/each}
			{/await}
		</div>
	</div>
</section>
