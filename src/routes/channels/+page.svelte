<script>
	import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import { onMount } from 'svelte';

    import ChannelCard from '$lib/ChannelCard.svelte';

    let { data } = $props();
    let channels = $state([]);


    const getChannels = () => {
		for (let videoObj of data.summaries) {
            if (!channels.includes(videoObj.author.toLowerCase())) {
                channels.push(videoObj.author.toLowerCase())
            }
		}
	    channels = channels.sort();

	}	
	onMount(() => getChannels());
</script>

<div class="flex bg-base-200 h-54 p-4  justify-center">
    <div class="flex flex-row items-center ">
        <div>
            <h1 class="text-5xl font-bold pt-2 mb-6">Channels</h1>
        </div>
    </div>
</div>

<div class="p-4">
    <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Channel</th>
                </tr>
            </thead>
            <tbody>
            {#each channels as channel}
                <tr  class="transition hover:bg-cyan-400/20 cursor-pointer">
                    <th class="hover:bg-cyan-500/30" onclick={() => {goto("channels/" + channel)}}>{channel} Tutorials</th>
                    <td class="hover:bg-cyan-500/30" onclick={() => {window.location = "https://youtube.com/" + channel}}>Profile Page</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>