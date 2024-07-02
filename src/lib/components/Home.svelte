<script>
	import { getUserContext } from '$lib/index.svelte';
	import HomeSvg from '$lib/svgs/HomeSvg.svelte';

	let userData = getUserContext();

	/** @type {HTMLDialogElement|null} */
	let inputDialog;

	/** @type {string} */
	let existingData = $state('');

	/**
	 * Import existing goal data
	 * @param {string} jsonString
	 * @returns void
	 */
	function importData(jsonString) {
		const data = JSON.parse(jsonString);
		userData = data;
	}
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
			<a href="/details" id="create-a-goal" class="btn cta next">Create a goal </a>
			<button id="import-a-goal" class="btn cta" onclick={() => inputDialog?.showModal()}
				>Import a goal</button
			>
		</div>
	</div>
	<!-- Modal for importing existing goal -->
	<dialog bind:this={inputDialog}>
		<h3 class="modal-title">Add your goal's JSON data</h3>
		<form id="import-form" method="dialog">
			<textarea placeholder="Paste your goal's JSON data here">{existingData}</textarea>
			<button class="btn close">X</button>
			<button class="btn">Show me my goal!</button>
		</form>
	</dialog>
</section>

<style>
	@font-face {
		font-family: 'Lobster Two';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/Lobster_Two/LobsterTwo-Bold.ttf') format('truetype');
	}

	/* Landing section */
	#landing-page {
		text-align: center;
	}

	h1 {
		font-size: 3rem;
		margin: auto 0;
		color: #4a9cbf;
	}

	#landing-heading {
		font-family: 'Lobster Two', sans-serif;
	}

	#landing-page .btn {
		width: 100%;
	}

	#landing-page dialog {
		height: 75%;
		text-align: left;
		overflow: hidden;
		opacity: 0;
		transition-property: overlay display opacity;
		transition-duration: 0.5s;
		transition-behavior: allow-discrete;
	}

	#landing-page dialog[open] {
		display: block;
		opacity: 1;

		@starting-style {
			opacity: 0;
		}
	}

	#landing-page dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
		transition:
			display 0.7s allow-discrete,
			overlay 0.7s allow-discrete,
			background-color 0.7s;
	}

	@starting-style {
		#landing-page dialog[open]::backdrop {
			background-color: rgba(0, 0, 0, 0.3);
		}
	}

	#landing-page dialog h3 {
		font-size: 1rem;
		margin-top: 2em;
	}

	#landing-page dialog form {
		height: 90%;
	}

	#landing-page dialog textarea {
		font-family: 'Catamaran', sans-serif;
		width: 100%;
		height: 50%;
	}

	#landing-page dialog .close {
		width: initial;
		border: none;
		box-shadow: none;
		background: transparent;
		position: absolute;
		top: 0.5em;
		right: 0.5em;
		color: #4a9cbf;
	}

	@media screen and (min-width: 900px) {
		/* Landing */
		#landing-page {
			text-align: initial;
		}

		#landing-page .btn.cta {
			display: inline-block;
			width: 48%;
		}

		#import-a-goal {
			margin-left: 0.5em;
		}

		#landing-page dialog {
			height: 50%;
			width: 75%;
		}

		#landing-page dialog form {
			height: 80%;
		}

		#landing-page dialog textarea {
			height: 60%;
		}
	}
</style>
