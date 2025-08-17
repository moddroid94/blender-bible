<script>

	let { vid, title, author, description, version, renderer, tags } = $props();
</script>


<div href="/" class="card bg-base-300 w-96 shadow-sm transition duration-500 outline-1 outline-primary/0 hover:outline-primary/20 ">
	<figure class="group cursor-pointer">
		<a href={'https://www.youtube.com/watch?v=' + vid}>
			<img class="object-cover w-full"
		src={'https://i.ytimg.com/vi/'+ vid + '/hqdefault.jpg'}
		alt="Shoes" />
		</a>
		<div class="absolute !pointer-events-none"> 
			<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 256 256" class="fill-white/80 group-hover:scale-110 group-active:scale-98 transition pointer-events-none"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path></svg>
		</div>
	</figure>
	<div class="card-body">
		<h2 class="card-title">
		{title}
		<div class="badge badge-primary text-primary-content">NEW</div>
		</h2>
		<h3 class="text-md text-neutral-400 font-medium">
			By: <a href={"/channels/" + author}>{author}</a>
		</h3>
		<p class="py-2">{description}</p>
		<div class="flex gap-2">
			<button class="btn btn-sm btn-soft btn-warning text-base-content rounded-md hover:text-warning-content">Blender {version}</button>
			{#if renderer}
				<button class="btn btn-sm btn-soft btn-warning text-base-content rounded-md hover:text-warning-content">{renderer}</button>
			{/if}
		</div>
		<div class="card-actions justify-start mt-2">
			{#each tags as tag, index}
				{#if index < 3}
					<button class="btn btn-soft btn-primary btn-xs rounded-md">
						#{tag}
					</button>
				{:else if index == 3}
					<button class="btn btn-soft btn-accent btn-xs rounded-md">
						Show more
					</button>
				{/if}
				
			{/each}
			
		</div>
	</div>
</div>

