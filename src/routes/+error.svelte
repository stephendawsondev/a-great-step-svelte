<script>
	import { page } from '$app/stores';
	import ErrorPageSvg from '$lib/components/svgs/ErrorPageSvg.svelte';
</script>

<!-- Page not found page -->
<section id="page-not-found-content" aria-labelledby="page-not-found-heading">
	<div class="container">
		<div class="image-container">
			<ErrorPageSvg />
		</div>
		<div class="content-container">
			<h1 id="page-not-found-heading">{$page.status}: {$page.error.message}</h1>
			<a href="/" class="btn cta back-home" aria-label="Return to home page">Return home</a>
		</div>
	</div>
</section>
