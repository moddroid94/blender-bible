<script>
  	export let tags;
	export let selectedTag;
	// $:console.log(languages)
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select class="menu select join-item !outline-0 w-[50%]" bind:value={selectedTag}>
	<option disabled selected value="">Tags</option>
	<option value="all">All tags</option>
	{#each tags as tag}
		<option value={tag}>{tag}</option>
	{/each}
</select>