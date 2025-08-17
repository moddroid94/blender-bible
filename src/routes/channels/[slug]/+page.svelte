<script>
	import VideoCard from "$lib/VideoCard.svelte";
	import { page } from '$app/state';
	let { data } = $props();

</script>

<div class="flex bg-base-200 h-54 p-4  justify-center">
  <div class="flex flex-row items-center ">
    
    <div>
      <h1 class="text-5xl font-bold pt-2 mb-6">{page.params.slug} Tutorials</h1>
      Channel Link: <a href={"https://www.youtube.com/@" + page.params.slug}>{page.params.slug}</a>
    </div>
  </div>
</div>
<div class="will-change transition-all w-full flex flex-wrap gap-4 justify-center p-4">
{#if data.data.length > 0}
	{#each data.data as summary}
		<VideoCard {...summary} />
	{/each}	
{:else}
	No Result
{/if}
</div>