<script>
	let { vid, image, title, author, description, version, renderer, tags } = $props();

	let otherTags = tags.slice(3);

</script>

<div
	href="/"
	class="card bg-base-300 w-96 shadow-sm transition outline-1 outline-primary/0 hover:outline-primary/20 hover:bg-base-200 hover:scale-102"
>
	<figure class="group cursor-pointer">
		<a href={vid}>
			<img class="object-cover w-full rounded-xl group-hover:scale-95 transition-transform" src={image} alt="tutorial" />
		</a>
		<div class="absolute !pointer-events-none">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 256 256"
				class="fill-white/95 group-hover:scale-110 group-active:scale-97 transition pointer-events-none"
				><path
					d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
				></path></svg
			>
		</div>
	</figure>
	<div class="card-body">
		<h2 class="card-title line-clamp-2 text-ellipsis">
			{title}
		</h2>
		<h3 class="text-md text-neutral-400 font-medium">
			By: <a href={'/channels/' + author}>{author}</a>
		</h3>
		<div class="flex gap-2 mt-4 mb-4">
			<button
				class="btn btn-sm btn-soft btn-primary rounded-md"
				>Blender {version}</button
			>
			{#if renderer}
				<button
					class="btn btn-sm btn-soft btn-info text-base-content rounded-md hover:text-warning-content"
					>{renderer}</button
				>
			{/if}
		</div>
		<div class="card-actions justify-start mt-2">
			{#each tags as tag, index}
				{#if index < 3}
					<button class="btn btn-soft btn-neutral text-base-content btn-xs rounded-md mr-1">
						#{tag}
					</button>
				{:else if index == 3}
					<div class="tooltip tooltip-bottom" data-tip={otherTags}>
						<button class="btn btn-soft btn-warning btn-xs rounded-md"> Show more </button>
					</div>
				{/if}
			{/each}
			
		</div>
	</div>
</div>
