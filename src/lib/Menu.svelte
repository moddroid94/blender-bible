<script>
	let {tags, selectedTags = $bindable()} = $props();

	const setTag = (tag, v) => {
		if (!selectedTags.includes(tag)) {
			if (v) {
				selectedTags.push(tag)
			} 
		} else {
			const index = selectedTags.indexOf(tag);
			if (index > -1) { // only splice array when item is found
				selectedTags.splice(index, 1); // 2nd parameter means remove one item only
			}
		}
	}
	
	const closeDrop = (event) => {
		if (event.target.id != "drop-controller") {
			let element = document.getElementById("drop-controller")
			element.checked = false;
		}
		
	}

	window.addEventListener("click", closeDrop)
</script>


<label class="menu input join-item will-change transition-all duration-500 !outline-0 w-[30%] cursor-pointer content-clip">
	<input id="drop-controller" type="checkbox" class="hidden peer" />
	<span class="truncate text-ellipsis">{selectedTags.length > 0 ? selectedTags : "all tags"}</span>
	<div id="drop-controller" class="hidden peer-checked:flex transition-all will-change absolute bg-base-200 border rounded-md w-full mt-8">
		<ul id="drop-controller" class="bg-base w-full will-change transition-all duration-500">
			{#each tags as tag }
			<li>
				<label id="drop-controller" class="flex cursor-pointer px-2 py-1 transition-colors hover:bg-base-400 rounded-md [&:has(input:checked)]:bg-blue-200 [&:has(input:checked)]:text-primary-content">
					<input class="cursor-pointer w-0"
					id="drop-controller"
					type="checkbox"
					name={tag}
					value={tag}
					bind:checked={
						(v) => v,
						(v) => setTag(tag, v)
					}
					/>
					<span id="drop-controller" class="">{tag}</span>
				</label>
			</li>
			{/each}
		</ul>
	</div>
</label>
