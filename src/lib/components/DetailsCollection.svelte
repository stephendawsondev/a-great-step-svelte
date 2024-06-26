<script>
	import DetailsCollectionSvg from './svgs/DetailsCollectionSvg.svelte';
</script>

<!-- Details form - collection user's personal details -->
<section id="details-form" aria-labelledby="your-details-heading">
	<div class="container">
		<div class="image-container">
			<DetailsCollectionSvg />
		</div>
		<div class="content-container">
			<h2 id="your-details-heading" class="section-title">Your details</h2>
			<form action="#" method="post">
				<div class="two-fields">
					<div class="field-container">
						<label for="first-name">First name</label>
						<input id="first-name" name="first-name" placeholder="John" type="text" required />
					</div>
					<div class="field-container">
						<label for="last-name">Last name</label>
						<input id="last-name" name="last-name" placeholder="Smith" type="text" />
					</div>
				</div>
				<label for="email">Email</label>
				<input id="email" name="email" placeholder="john_smith@gmail.com" type="email" />
				<div class="radio-buttons">
					<fieldset>
						<legend>Gender</legend>
						<label>
							<input type="radio" id="male" value="male" name="gender" required />
							Male
						</label>
						<label>
							<input type="radio" id="female" value="female" name="gender" />
							Female
						</label>
					</fieldset>
				</div>
				<div class="three-fields">
					<div class="field-container">
						<label for="age">Age</label>
						<input id="age" name="age" type="number" min="12" max="100" required />
					</div>
					<div class="field-container">
						<label for="height">Height (cm)</label>
						<input id="height" name="height" type="number" min="50" max="250" required />
					</div>
					<div class="field-container">
						<label for="weight">Weight (kg)</label>
						<input id="weight" name="weight" type="number" min="50" max="600" required />
					</div>
				</div>
				<div class="form-buttons">
					<a href="/" class="btn back">
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
					<a href="/activity-level" class="btn next">
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
	/* Your details section */
	#details-form fieldset label {
		display: inline;
		margin-right: 1em;
	}

	.three-fields {
		margin-top: 0.5em;
	}

	@media screen and (min-width: 900px) {
		/* Your details */
		.two-fields {
			display: flex;
			justify-content: space-between;
		}

		.two-fields .field-container {
			width: 48%;
		}

		.three-fields {
			display: flex;
			justify-content: space-between;
		}

		.three-fields .field-container {
			width: 30%;
		}
	}
</style>
