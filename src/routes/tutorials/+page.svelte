<script>
	import { onMount } from 'svelte';

	import Menu from "$lib/Menu.svelte"
	import Search from '$lib/Search.svelte';

	import VideoCard from "$lib/VideoCard.svelte";

	let { data } = $props();

	let tags = $state([]); // menu built from data
	let selectedTag = $state(""); //  menu selection	
	let filteredVideos = $state([]);
	let searchTerm = $state("");


	$effect(() => {
		getVideoByTag()
	});

	const getTags = () => {
		for (let videoObj of data.summaries) {
			for (let tag of videoObj.tags)
				if (!tags.includes(tag.toLowerCase())) {
					tags = [...tags, tag.toLowerCase()]
				}
		}
		tags = tags.sort();
	}	
	onMount(() => getTags());

	const getVideoByTag = () => {
		// resets search input if menu is being used
		searchTerm = "";

		if (selectedTag === "all") {
			return filteredVideos = [];
		}
		return filteredVideos = data.summaries.filter(video => {for (let tag of video.tags) return tag === selectedTag});
	}	
	
	const searchVideo = () => {	
		return filteredVideos = data.summaries.filter(video => {
			let VideoTitle = video.title.toLowerCase();
			return VideoTitle.includes(searchTerm.toLowerCase())
		});
	}

	
</script>

<div class="fixed w-full top-18 h-16 z-1  px-2">
	<div class="bg-base-200/30 backdrop-blur-xl rounded-xl shadow-xl flex py-3 px-3">
		<div class="w-full">
			<div class="join w-full">
				<Search bind:searchTerm on:input={searchVideo} />
				<Menu {tags} bind:selectedTag />
				<button class="join-item btn bg-base-300 transition-colors hover:bg-radial hover:from-primary/20 border-1 border-white/20 ">Search</button>
			</div>
		</div>
	</div>
</div>

<div class="w-full flex flex-wrap gap-4 justify-center p-4 mt-18">
{#if searchTerm && filteredVideos.length === 0}
	<p>No Result</p>
{:else if filteredVideos.length > 0}
	{#each filteredVideos as summary}
		<VideoCard {...summary} />
	{/each}	
{:else}
	{#each data.summaries as summary}
		<VideoCard {...summary} />
	{/each}
{/if}
</div>