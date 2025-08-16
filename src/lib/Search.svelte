<script>
	export let searchTerm;
</script>


<input type="text" class="input join-item !outline-0 w-[40%] focus:w-[400%] transition-all" 
            id="search-field" 
            placeholder="Search" 
            autocomplete="off"
            bind:value={searchTerm}
            on:input />

