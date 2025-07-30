<script>
	let { data } = $props();
</script>

<h1>blog</h1>


<div class="w-full grid grid-cols-auto lg:grid-flow-col gap-4 justify-center p-4">
{#each data.summaries as { slug, title }}
	<div class="card bg-base-100 w-96 shadow-sm">
		<figure>
			<img
			src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
			alt="Shoes" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">
			Card Title
			<div class="badge badge-secondary">NEW</div>
			</h2>
			<p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
			<div class="card-actions justify-end">
			<div class="badge badge-outline">Fashion</div>
			<div class="badge badge-outline">Products</div>
			</div>
		</div>
	</div>
{/each}
</div>