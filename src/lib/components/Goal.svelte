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
					<button class="btn back">
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
					</button>
					<button class="btn next">Generate plan</button>
				</div>
			</form>
		</div>
	</div>
</section>
