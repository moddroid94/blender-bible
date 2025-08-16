<script>
    let {vers, selectedVer = $bindable() } = $props();

</script>


<select class="menu select join-item !outline-0 w-[20%]" bind:value={selectedVer}>
	<option selected value="all vers">All vers</option>
	{#each vers as ver}
		<option value={ver}>{"≤"}{ver}</option>
	{/each}
</select>