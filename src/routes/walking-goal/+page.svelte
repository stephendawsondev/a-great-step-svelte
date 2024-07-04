<script>
	import WalkingGoalSvg from '$lib/svgs/WalkingGoalSvg.svelte';
	import { getUserContext } from '$lib/index.svelte';

	let userData = getUserContext();

	let timeInDays;
	let timeInWeeks;

	let walkingPace;

	switch (walkingPace) {
		case userData.walkingPace:
			walkingPace = 3;
			break;
		case userData.walkingPace:
			walkingPace = 5;
			break;
		case userData.walkingPace:
			walkingPace = 7;
			break;
		default:
			walkingPace = 3;
	}

	timeInDays = calcTimeBetweenDates().timeInDays;
	timeInWeeks = calcTimeBetweenDates().timeInWeeks;

	let heightInMeters = userData.height / 100;
	let weightToLose = userData.weight - userData.targetWeight;
	let numDaysToBurn = userData.daysAvailable.length * timeInWeeks;
	let caloriesToBurn = weightToLose * 7700;

	/**
	 * Calculates the time between the current date and the target date
	 * and returns the number of days and weeks remaining/
	 * @returns {Object} - Object containing the number of days and weeks remaining.
	 */
	function calcTimeBetweenDates() {
		const today = new Date();
		const goal = new Date(userData.targetDate);

		timeInDays = Math.floor((goal - today) / (1000 * 60 * 60 * 24));
		timeInWeeks = Math.floor(timeInDays / 7);

		return { timeInDays, timeInWeeks };
	}

	/**
	 * Calculates the number of calories burned per minute based on the user's pace.
	 * @param {number} pace - The pace in km/h.
	 * @returns {number} - The number of calories burned per minute.
	 */
	const caloriesBurnedPerMinute = (pace) => {
		const paceInMetersPerSecond = pace / 3.6;
		const caloriesBurned =
			0.035 * userData.weight +
			(paceInMetersPerSecond ** 2 / heightInMeters) * 0.029 * userData.weight;

		return caloriesBurned;
	};

	/**
	 * Handles the "Export goal" button click. The contents are copied
	 * to the clipboard and a success message is displayed.
	 */
	export const handleExportGoal = (event, goalObjString) => {
		// get the goal object from LocalStorage
		const goalData = localStorage.getItem(goalObjString);
		const goal = JSON.parse(goalData);

		// convert the goal object to a string
		const goalString = JSON.stringify(goal);

		// copy the string to the clipboard
		navigator.clipboard.writeText(goalString);

		// display a copied message
		const copiedMessage = document.createElement('p');
		copiedMessage.classList.add('copied');
		copiedMessage.textContent = 'Goal copied to clipboard!';
		copiedMessage.setAttribute('aria-live', 'polite');
		event.target.appendChild(copiedMessage);

		setTimeout(() => {
			copiedMessage.style.opacity = 0;
		}, 1500);

		// remove the copied message after 2 seconds
		setTimeout(() => {
			copiedMessage.remove();
		}, 3000);
	};

	const calculateStepsPerDay = (pace) => {
		let caloriesToBurnPerDay = Number(caloriesToBurn / numDaysToBurn);
		const caloriesBurned = Number(caloriesBurnedPerMinute(pace));
		const timeRequiredPerDayInMinutes = Number(caloriesToBurnPerDay / caloriesBurned);
		const paceInMetersPerSecond = pace / 3.6;
		// use average stride length
		const strideLength = 0.74;
		// Calculate steps per minute based on pace and stride length
		const stepsPerMinute = Number(paceInMetersPerSecond / strideLength);
		// Calculate steps required per day
		const stepsRequiredPerDay = Number(timeRequiredPerDayInMinutes / stepsPerMinute);

		return stepsRequiredPerDay.toFixed(0);
	};

	let stepsRequiredPerDay = calculateStepsPerDay(walkingPace);
	let increasedPace = calculateStepsPerDay(walkingPace + 2);
</script>

<!-- Goal results page -->
<section id="goal-results" aria-labelledby="goal-results-heading">
	<div class="container">
		<div class="image-container">
			<WalkingGoalSvg />
		</div>
		<div class="content-container">
			<h1 id="goal-results-heading">
				{userData.firstName ? userData.firstName + "'s" : 'Your'} walking plan
			</h1>
			<p class="date-range">
				<span class="date-start">Today</span> to
				<span class="date-end">{userData.targetDate}</span>
			</p>
			<div class="goal-details">
				<p class="goal-details-text">
					You have
					<span class="time-remaining-days">{timeInDays} days</span>
					<span class="time-remaining-weeks"
						>({timeInWeeks > 1 ? `${timeInWeeks} weeks` : `${timeInWeeks} week`})</span
					>
					to lose
					<span class="weight-to-lose">{userData.weight - userData.targetWeight}kg</span>.
				</p>
				<p class="goal-details-text">
					You can hit your goal by walking
					<span class="steps-per-day">{stepsRequiredPerDay * 10} steps</span> per day on your
					available days
					<span class="available-days">({userData.daysAvailable.length || 2} days per week)</span>,
					at a pace of
					<span class="pace-per-hour">3km</span> per hour.
				</p>
				<p class="increase-pace">
					Increase your pace to <span class="pace-per-hour">{walkingPace + 2}km</span> per hour to
					reduce the number of steps required to
					<span class="steps-per-day">{increasedPace * 10} steps</span> per day.
				</p>
			</div>

			<a href="/" class="btn cta back-home" aria-label="Return to home page">Return home</a>
			<button
				id="export-goal"
				class="btn cta"
				aria-label="Export goal JSON"
				onclick={(e) => handleExportGoal(e, 'userData')}
			>
				Export Goal
			</button>
		</div>
	</div>
</section>
