<script>
	import GoalSvg from './svgs/GoalSvg.svelte';
</script>

<section id="goal-form" aria-labelledby="goal-details-heading">
	<div class="container">
		<div class="image-container">
			<GoalSvg />
		</div>
		<div class="content-container">
			<h2 id="goal-details-heading">Your goal</h2>
			<form action="#" method="post">
				<label for="target-weight">What is your target weight? (kg)</label>
				<input
					type="number"
					id="target-weight"
					name="target-weight"
					min="50"
					max="550"
					placeholder=" 75"
					required
				/>
				<label for="target-date">When do you want to achieve your goal by?</label>
				<input type="date" name="target-date" id="target-date" required />
				<div class="days-of-the-week">
					<p>Select the days you can exercise</p>
					<div class="days-container">
						<div class="day-available-container">
							<input
								type="checkbox"
								value="monday"
								id="monday"
								name="days-available"
								title="Monday"
							/>
							<label for="monday">M</label>
						</div>
						<div class="day-available-container">
							<input
								type="checkbox"
								value="tuesday"
								id="tuesday"
								name="days-available"
								title="Tuesday"
							/>
							<label for="tuesday">T</label>
						</div>
						<div class="day-available-container">
							<input
								type="checkbox"
								value="wednesday"
								id="wednesday"
								name="days-available"
								title="Wednesday"
							/>
							<label for="wednesday">W</label>
						</div>
						<div class="day-available-container">
							<input
								type="checkbox"
								value="thursday"
								id="thursday"
								name="days-available"
								title="Thursday"
							/>
							<label for="thursday">T</label>
						</div>
						<div class="day-available-container">
							<input
								type="checkbox"
								value="friday"
								id="friday"
								name="days-available"
								title="Friday"
							/>
							<label for="friday">F</label>
						</div>
						<div class="day-available-container">
							<input
								type="checkbox"
								value="saturday"
								id="saturday"
								name="days-available"
								title="Saturday"
							/>
							<label for="saturday">S</label>
						</div>
						<div class="day-available-container">
							<input
								type="checkbox"
								value="sunday"
								id="sunday"
								name="days-available"
								title="Sunday"
							/>
							<label for="sunday">S</label>
						</div>
					</div>
				</div>
				<div class="form-buttons">
					<a href="/activity-level" class="btn back">
						<span aria-hidden="true" class="chevron chevron-left">
							<svg fill="none" xmlns="http://www.w3.org/2000/svg">
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
					<a href="/walking-goal" class="btn next">Generate plan</a>
				</div>
			</form>
		</div>
	</div>
</section>

<style>
	/* Goal details section */
	.days-container {
		display: flex;
		justify-content: space-between;
	}

	.days-container label {
		border-radius: 50%;
		position: relative;
		border: 1px solid #36454f;
		width: 30px;
		height: 30px;
		text-align: center;
	}

	.day-available-container {
		position: relative;
	}

	.days-container input {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
		margin: 0;
	}

	.days-container input[type='checkbox']:focus + label {
		outline: 2px solid #4a9cbf;
		outline-offset: 0.15em;
	}

	.days-container input[type='checkbox']:checked + label {
		background-color: #4a9cbf;
		border-color: #4a9cbf;
		color: white;
	}

	@media screen and (min-width: 749px) {
		/* Goal details */
		.days-container {
			width: 60%;
		}
	}

	@media screen and (min-width: 900px) {
		/* Goal details */
		.days-container {
			width: 70%;
		}

		/* 404 page */
		#page-not-found-content container {
			max-width: 600px;
		}

		#page-not-found-content .image-container {
			width: 55%;
		}

		#page-not-found-content .content-container {
			width: 45%;
		}
	}
</style>
