<script>
	import ActivityLevel from '$lib/components/ActivityLevel.svelte';
	import DetailsCollection from '$lib/components/DetailsCollection.svelte';
	import Goal from '$lib/components/Goal.svelte';
	import Home from '$lib/components/Home.svelte';
</script>

<!-- The static outer part of the app -->
<div class="app-container">
	<Home />
	<DetailsCollection />
	<ActivityLevel />
	<Goal />
</div>
