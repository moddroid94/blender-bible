<script>

	let { data } = $props();
</script>


<div class="w-full flex flex-wrap gap-4 justify-center p-4">
{#each data.summaries as { vid, title, author, description, version, renderer, tags }}
	<div href="/" class="card bg-base-300 w-96 shadow-sm transition duration-500 outline-1 outline-primary/0 hover:outline-primary/20 ">
		<figure>
			<a href={'https://www.youtube.com/watch?v=' + vid}>
				<img class="object-cover w-full"
			src={'https://i.ytimg.com/vi/'+ vid + '/hqdefault.jpg'}
			alt="Shoes" />
			</a>
		</figure>
		<div class="card-body">
			<h2 class="card-title">
			{title}
			<div class="badge badge-primary text-primary-content">NEW</div>
			</h2>
			<h3 class="text-md text-neutral-400 font-medium">
				By: {author}
			</h3>
			<p class="py-2">{description}</p>
			<div class="flex gap-2">
				<button class="btn btn-sm btn-warning text-accent-content">Blender {version}</button>
				{#if renderer}
					<button class="btn btn-sm btn-warning text-accent-content">{renderer}</button>
				{/if}
			</div>
			<div class="card-actions justify-end">
				{#each tags as tag, index}
					{#if index < 3}
						<button class="btn btn-soft btn-primary btn-xs">
							#{tag}
						</button>
					{:else if index == 3}
						<button class="btn btn-soft btn-accent btn-xs">
							more
						</button>
					{/if}
					
				{/each}
				
			</div>
		</div>
	</div>
{/each}
</div>