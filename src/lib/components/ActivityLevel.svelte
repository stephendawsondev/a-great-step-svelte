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
					<button class="btn back">
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
					</button>
					<button class="btn next">
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
					</button>
				</div>
			</form>
		</div>
	</div>
</section>
