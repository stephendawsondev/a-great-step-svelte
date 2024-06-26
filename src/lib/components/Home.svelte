<script>
	import HomeSvg from '$lib/components/svgs/HomeSvg.svelte';
</script>

<!-- Landing page - the first view for the user -->
<section id="landing-page" aria-labelledby="landing-heading">
	<div class="container">
		<div class="image-container">
			<HomeSvg />
		</div>
		<div class="content-container">
			<h1 id="landing-heading">A Great Step</h1>
			<h2 class="subheading1">Walk your way to your fitness goals</h2>
			<button id="create-a-goal" class="btn cta next">Create a goal </button>
			<button id="import-a-goal" class="btn cta">Import a goal</button>
		</div>
	</div>
	<!-- Modal for importing existing goal -->
	<dialog>
		<h3 class="modal-title">Add your goal's JSON data</h3>
		<form id="import-form" method="dialog">
			<textarea placeholder="Paste your goal's JSON data here"></textarea>
			<button class="btn close">X</button>
			<button class="btn">Show me my goal!</button>
		</form>
	</dialog>
</section>
