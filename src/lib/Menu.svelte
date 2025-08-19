<script>
	import { onDestroy } from "svelte";

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

	const toggleDrop = (element, state) => {
		if (state) {
			 let newclass = element.className.replace("opacity-0 scale-y-0", "opacity-100");
			 element.className = newclass;
		} else {
			let newclass = element.className.replace("opacity-100", "opacity-0 scale-y-0");
			element.className = newclass;
		}
		
	}

	const handleclick = (event) => {
		let element = document.getElementById("drop-controlled")
		if (event.target.id == "drop-controller") {
			toggleDrop(element, element.classList.contains("opacity-0"))
		} else if (tags.includes(event.target.id)) {
			return;
		} else {
			toggleDrop(element,false)
		}
	}

	window.addEventListener("click", handleclick)

	onDestroy(() => {
		window.removeEventListener('click', handleclick)
	})
</script>


<div id="drop-controller" class="menu input join-item will-change transition-all duration-500 !outline-0 w-[50%] lg:w-[20%] cursor-pointer content-clip">
	<span id="drop-controller" class="truncate text-ellipsis w-full">{selectedTags.length > 0 ? selectedTags : "All tags"}</span>
	<div id="drop-controlled" class="flex transition-all will-change absolute bg-base-200 border rounded-md w-full mt-8 origin-top opacity-0 scale-y-0 overflow-y-scroll overflow-x-auto h-78">
		<ul class="bg-base will-change transition-all duration-500">
			{#each tags as tag }
			<li>
				<label id={tag} class={" rounded-md min-w-full " + (selectedTags.includes(tag) ? "bg-secondary text-secondary-content" : "") }>{tag}
					<input class="cursor-pointer w-0"
					id={tag}
					type="checkbox"
					name={tag}
					value={tag}
					bind:checked={
						(v) => v,
						(v) => setTag(tag, v)
					}
					/>
				</label>
				
			</li>
			{/each}
		</ul>
	</div>
</div>
