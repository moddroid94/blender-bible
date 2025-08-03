<script>
	import VideoCard from "$lib/VideoCard.svelte";

	let { data } = $props();
</script>


<div class="w-full flex flex-wrap gap-4 justify-center p-4">
{#each data.summaries as summary}
	<VideoCard {...summary} />
{/each}
</div>