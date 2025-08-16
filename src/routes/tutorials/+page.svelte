<script>
	
	import { onMount } from 'svelte';

	import Menu from "$lib/Menu.svelte"
	import Search from '$lib/Search.svelte';

	import VideoCard from "$lib/VideoCard.svelte";
	import Select from '$lib/Select.svelte';

	let { data } = $props();

	let tags = $state([]); // menu built from data
	let selectedTags = $state([]); //  menu selection	

	let vers = $state([]);
	let selectedVer = $state("all vers");

	let filteredVideos = $state([]);
	let searchTerm = $state("");


	$effect(() => {
		searchVideo();
		$inspect(filteredVideos, selectedTags)
	});

	const getTags = () => {
		for (let videoObj of data.summaries) {
			for (let tag of videoObj.tags) {
				if (!tags.includes(tag.toLowerCase())) {
					tags = [...tags, tag.toLowerCase()]
				}
			}
			if (!vers.includes(videoObj.version)) {
				vers.push(videoObj.version)
			}
		}
		tags = tags.sort();
		vers = vers.sort();
	}	
	onMount(() => getTags());
	
	const searchVideo = () => {	
		return filteredVideos = data.summaries.filter(video => {
				let VideoTitle = video.title.toLowerCase();
				let VideoTags = [];
				let VideoVers = video.version;
				let pass = true;
				for (let tag of video.tags) {
					VideoTags.push(tag.toLowerCase())
				}
				if (selectedTags.length > 0) {
					for (let tag of selectedTags) {
						if (VideoTags.includes(tag)) {
							pass = true;
						} else {
							pass = false;
							break
						}
					}
				}
				if (searchTerm && pass) {
					if (VideoTitle.includes(searchTerm)) {
						pass = true;
					} else {
						pass = false;
					}
				}
				if (selectedVer != "all vers" && pass) {
					if (VideoVers <= selectedVer) {
						pass = true;
					} else { 
						pass = false;
					}
				}
				return pass
			});
		}

</script>

<div class="fixed w-full top-18 h-16 z-1  px-2">
	<div class="bg-base-200/30 backdrop-blur-xl rounded-xl shadow-xl flex py-3 px-3">
		<div class="w-full">
			<div class="join w-full">
				<Search bind:searchTerm on:input={searchVideo} />
				<Menu {tags} bind:selectedTags />
				<Select {vers} bind:selectedVer />
				<button class="join-item btn bg-base-300 transition-colors hover:bg-radial hover:from-primary/20 border-1 border-white/20 ">Search</button>
			</div>
		</div>
	</div>
</div>

<div class="will-change transition-all w-full flex flex-wrap gap-4 justify-center p-4 mt-18">

{#if filteredVideos.length > 0}
	{#each filteredVideos as summary}
		<VideoCard {...summary} />
	{/each}	
{:else}
	No Result
{/if}
</div>