<script>
	import VideoCard from "$lib/VideoCard.svelte";

	let { data } = $props();
</script>

<div class="fixed w-full top-18 h-16 z-1  px-2">
	<div class="bg-base-200/30 backdrop-blur-xl rounded-xl shadow-xl flex py-3 px-3">
		<div class="w-full">
			<div class="join w-full">
				<input class="input join-item !outline-0 w-[50%] focus:w-[400%] transition-all" placeholder="Search" />
				<select class="select join-item !outline-0 w-[30%]" >
					<option disabled selected>Tags</option>
					<option>Sci-fi</option>
					<option>Drama</option>
					<option>Action</option>
				</select>
				<select class="select join-item !outline-0 w-[30%]">
					<option disabled selected>Order</option>
					<option>Sci-fi</option>
					<option>Drama</option>
					<option>Action</option>
				</select>
				<button class="join-item btn bg-base-300 transition-colors hover:bg-radial hover:from-primary/20 border-1 border-white/20 ">Search</button>
			</div>
		</div>
	</div>
</div>

<div class="w-full flex flex-wrap gap-4 justify-center p-4 mt-18">
{#each data.summaries as summary}
	<VideoCard {...summary} />
{/each}
</div>