<script>
	import { getUserContext } from '$lib/index.svelte';
	import DetailsCollectionSvg from '$lib/svgs/DetailsCollectionSvg.svelte';

	const userData = getUserContext();
	$inspect(userData);
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
						<input
							id="first-name"
							name="first-name"
							type="text"
							bind:value={userData.firstName}
							required
						/>
					</div>
					<div class="field-container">
						<label for="last-name">Last name</label>
						<input
							id="last-name"
							name="last-name"
							type="text"
							bind:value={userData.lastName}
							required
						/>
					</div>
				</div>
				<div>
					<label for="email">Email</label>
					<input
						id="email"
						name="email"
						placeholder="john_smith@gmail.com"
						type="email"
						bind:group={userData.gender}
						bind:value={userData.email}
						required
					/>
				</div>
				<fieldset>
					<legend>Gender</legend>
					<label>
						<input type="radio" value="male" name="gender" checked={userData.gender === 'male'} />
						Male
					</label>
					<label>
						<input
							type="radio"
							value="female"
							name="gender"
							bind:group={userData.gender}
							checked={userData.gender === 'female'}
						/>
						Female
					</label>
				</fieldset>
				<div class="three-fields">
					<div class="field-container">
						<label for="age">Age</label>
						<input
							bind:value={userData.age}
							id="age"
							name="age"
							type="number"
							min="12"
							max="100"
							required
						/>
					</div>
					<div class="field-container">
						<label for="height">Height (cm)</label>
						<input
							bind:value={userData.height}
							id="height"
							name="height"
							type="number"
							min="50"
							max="250"
							required
						/>
					</div>
					<div class="field-container">
						<label for="weight">Weight (kg)</label>
						<input
							bind:value={userData.weight}
							id="weight"
							name="weight"
							type="number"
							min="50"
							max="600"
							required
						/>
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
