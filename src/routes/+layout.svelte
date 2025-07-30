<script>
	import '../app.css';

	let { children } = $props();
</script>

<nav class="pb-15">
	<div class="navbar bg-base-100 shadow-sm fixed z-99">
		<div class="navbar-start">
			<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
			</div>
			<ul
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
				<li><a href="/">Home</a></li>
				<li>
				<a href="/#">Resources</a>
				<ul class="p-2">
					<li><a href="/tutorials">Tutorials</a></li>
					<li><a href="/channels">Channels</a></li>
					<li><a href="/tools">Tools</a></li>
				</ul>
				</li>
				<li><a href="/contribute">Contribute</a></li>
			</ul>
			</div>
			<a href="/" class="btn btn-ghost text-xl">daisyUI</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
			<li><a href="/">Home</a></li>
			<li>
				<div class="dropdown dropdown-center">
				<div tabindex="0" role="button" class="">Resources</div>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
					<li><a href="/tutorials">Tutorials</a></li>
					<li><a href="/channels">Channels</a></li>
					<li><a href="/tools">Tools</a></li>
				</ul>
				</div>
			</li>
			<li><a href="/contribute">Contribute</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			<a class="btn">Button</a>
		</div>
	</div>
</nav>

{@render children()}
