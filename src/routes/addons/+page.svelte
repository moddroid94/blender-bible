<script>
    let { data } = $props()

</script>

<div class="flex bg-base-200 h-54 p-4  justify-center">
    <div class="flex flex-row items-center ">
        <div>
            <h1 class="text-5xl font-bold pt-2 mb-6">Addons</h1>
        </div>
    </div>
</div>

<div class="p-4">
    <div class="overflow-scroll rounded-box border border-base-content/5 bg-base-100">
        <table class="table table-fixed min-w-200">
            <thead>
                <tr>
                    <th class="min-w-40" >Name</th>
                    <th class="min-w-64 ">Function</th>
                    <th class="min-w-64">Link</th>
                </tr>
            </thead>
            <tbody>
            {#each data.sites as site}
                <tr  class="transition hover:bg-primary/20 cursor-pointer">
                    
                    <th class="hover:bg-primary/40 hover:rounded-full" onclick={() => {window.location = site.url}}>{site.name}</th>
                    <td class="text-wrap overflow-clip">
                        <span class="btn btn-xs btn-secondary m-1 contain-content h-auto py-1">{site.categories}</span>
                    </td>
                    <td> {site.notes}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>