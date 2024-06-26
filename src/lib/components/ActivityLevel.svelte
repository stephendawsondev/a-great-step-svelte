<script>
	import ActivityLevelSvg from './svgs/ActivityLevelSvg.svelte';
	import ManySteps from './svgs/ManySteps.svelte';
	import MediumSteps from './svgs/MediumSteps.svelte';
	import SmallSteps from './svgs/SmallSteps.svelte';
</script>

<!-- Activity level - Gauge user's fitness level -->
<section id="activity-level-form" aria-labelledby="activity-level-heading">
	<div class="container">
		<div class="image-container">
			<ActivityLevelSvg />
		</div>
		<div class="content-container">
			<h2 id="activity-level-heading" class="section-title">Your activity level</h2>
			<form action="#" method="post">
				<fieldset>
					<legend>Walking frequency</legend>
					<div class="walking-level-cards">
						<div class="card">
							<div class="image-container">
								<SmallSteps />
							</div>
							<div class="content-container">
								<input
									id="walk-a-little"
									value="walk-a-little"
									type="radio"
									name="walking-frequency"
									required
								/>
								<label for="walk-a-little">I walk a little</label>
								<p>(1-2 times a week)</p>
							</div>
						</div>
						<div class="card">
							<div class="image-container">
								<MediumSteps />
							</div>
							<div class="content-container">
								<input id="walk-often" value="walk-often" type="radio" name="walking-frequency" />
								<label for="walk-often">I walk often</label>
								<p>(3-4 times a week)</p>
							</div>
						</div>
						<div class="card">
							<div class="image-container">
								<ManySteps />
							</div>
							<div class="content-container">
								<input id="walk-a-lot" value="walk-a-lot" type="radio" name="walking-frequency" />
								<label for="walk-a-lot">I walk a lot</label>
								<p>(5+ times per week)</p>
							</div>
						</div>
					</div>
				</fieldset>
				<div class="form-buttons">
					<a href="/details" class="btn back">
						<span aria-hidden="true" class="chevron chevron-left"
							><svg fill="none" xmlns="http://www.w3.org/2000/svg">
								<g>
									<path
										d="M14 16L10 12L14 8"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g>
							</svg>
						</span>
						Back
					</a>
					<a href="/goal" class="btn next">
						Next<span aria-hidden="true" class="chevron chevron-right">
							<svg fill="none" xmlns="http://www.w3.org/2000/svg">
								<g>
									<path
										d="M10 8L14 12L10 16"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g>
							</svg>
						</span>
					</a>
				</div>
			</form>
		</div>
	</div>
</section>

<style>
	/* Your activity levels section */
	.walking-level-cards {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-top: 1em;
	}

	.walking-level-cards .card + .card {
		margin-top: 1em;
	}

	.walking-level-cards label {
		font-size: 1rem;
	}

	:global(.walking-level-cards .image-container svg) {
		width: 75%;
		padding: 0.5em;
		border: 2px solid #36454f;
		border-radius: 50%;
	}

	.walking-level-cards input[type='radio'] {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	.walking-level-cards .card input:checked + label::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 90%;
		left: 50%;
		transform: translateX(-50%);
		height: 100%;
		outline: 0.25em solid #4a9cbf;
		outline-offset: 0.25em;
		border-radius: 20px;
	}

	#activity-level-form .walking-level-cards .card {
		position: relative;
	}

	#activity-level-form .walking-level-cards .card input:checked {
		border: 0.25em solid #4a9cbf;
	}

	#activity-level-form .walking-level-cards .card input:checked::after {
		content: 'HELLO';
		opacity: 100%;
		font-size: 10px;
	}

	#activity-level-form .walking-level-cards .card p {
		font-size: 0.75rem;
		margin-top: 0.5em;
		font-style: italic;
	}
	/* Media queries */
	@media screen and (min-width: 749px) {
		/* Activity level */
		.walking-level-cards {
			flex-direction: row;
		}

		.walking-level-cards .card + .card {
			margin-top: 0;
		}

		:global(.walking-level-cards label svg) {
			width: 80%;
		}
	}

	@media screen and (min-width: 900px) {
		/* Activity level */
		.walking-level-cards .image-container {
			width: 75%;
		}

		.walking-level-cards label {
			font-size: 0.8rem;
		}
	}
</style>
