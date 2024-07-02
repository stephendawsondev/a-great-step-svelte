<script>
	import WalkingGoalSvg from '$lib/svgs/WalkingGoalSvg.svelte';
</script>

<!-- Goal results page -->
<section id="goal-results" aria-labelledby="goal-results-heading">
	<div class="container">
		<div class="image-container">
			<WalkingGoalSvg />
		</div>
		<div class="content-container">
			<h1 id="goal-results-heading">Your walking plan</h1>
			<p class="date-range">
				<span class="date-start">Today</span> to
				<span class="date-end">31/12/2023</span>
			</p>
			<div class="goal-details">
				<p class="goal-details-text">
					You have
					<span class="time-remaining-days">122 days</span>
					<span class="time-remaining-weeks">(17 weeks)</span> to lose
					<span class="weight-to-lose">10kg</span>.
				</p>
				<p class="goal-details-text">
					You can hit your goal by walking
					<span class="steps-per-day">10,000 steps</span> per day on your available days
					<span class="available-days">(3 days per week)</span>, at a pace of
					<span class="pace-per-hour">3km</span> per hour.
				</p>
				<p class="increase-pace">
					Increase your pace to <span class="pace-per-hour">5km</span> per hour to reduce the number
					of steps required to
					<span class="steps-per-day">8,000 steps</span> per day.
				</p>
			</div>

			<a href="/A-Great-Step/index.html" class="btn cta back-home" aria-label="Return to home page"
				>Return home</a
			>
			<button id="export-goal" class="btn cta" aria-label="Export goal JSON"> Export Goal </button>
		</div>
	</div>
</section>
