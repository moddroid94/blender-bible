<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	import ChannelCard from '$lib/ChannelCard.svelte';

	let { data } = $props();
</script>

<div class="flex bg-base-200 h-54 p-4 justify-center">
	<div class="flex flex-row items-center">
		<div>
			<h1 class="text-5xl font-bold pt-2 mb-6">Channels</h1>
		</div>
	</div>
</div>

<div class="p-4">
	<div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
		<table class="table table-fixed min-w-200">
			<thead>
				<tr>
					<th class="w-54">Name</th>
					<th>Category</th>
				</tr>
			</thead>
			<tbody>
				{#each data.channels as channel}
					<tr class=" cursor-pointer">
						<th
							class="transition hover:bg-primary/30"
							onclick={() => {
								window.location = channel.url;
							}}>{channel.name}</th
						>
						<td class="text-wrap overflow-clip">
							{#each channel.categories as category}
								<span class="btn btn-xs btn-soft btn-warning m-1 contain-content h-auto py-1 pointer-events-none"
									>{category}</span
								>
							{/each}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
