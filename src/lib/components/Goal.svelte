<script>
	import { getUserContext } from '$lib/index.svelte';
	import { handleFormValidation } from '$lib/js/script.js';
	import GoalSvg from '$lib/svgs/GoalSvg.svelte';

	let userData = getUserContext();

	function updateDaysArray(event) {
		const { value, checked } = event.target;
		if (checked) {
			userData.daysAvailable = [...userData.daysAvailable, value];
		} else {
			userData.daysAvailable = userData.daysAvailable.filter((day) => day !== value);
		}
	}

	const displayErrorMessage = (error, element) => {
		if (document.querySelector('.error')) {
			const errorElement = document?.querySelector('.error');
			errorElement.textContent = error;
			return;
		}

		const errorElement = document.createElement('p');
		errorElement.classList.add('error');
		errorElement.style.textAlign = 'right';
		errorElement.textContent = error;
		document.querySelector('.form-buttons').after(errorElement);

		if (element.parent) {
			element.parent.append(errorElement);
		}
		return [false, error];
	};

	const validateWeight = (weightField) => {
		if (Number(weightField.value) < Number(weightField.min)) {
			displayErrorMessage(`Your weight must be greater than ${weightField.min}kg.`, weightField);
			return [false, ''];
		} else {
			if (document.querySelector('.error')) {
				const errorElement = document.querySelector('.error');
				errorElement.remove();
			}
		}
		if (Number(weightField.value) >= Number(userData.weight)) {
			displayErrorMessage('Your target weight must be less than your current weight.', weightField);
			return [false, ''];
		} else {
			if (document.querySelector('.error')) {
				const errorElement = document.querySelector('.error');
				errorElement.remove();
			}
		}

		userData.targetWeight = weightField.value;
		return [true, ''];
	};

	const validateDate = (dateField) => {
		if (dateField.value < new Date().toISOString().split('T')[0]) {
			displayErrorMessage('Your target date must be in the future.', dateField);
			return [false, ''];
		}
		return [true, ''];
	};

	/**
	 * Checks the goal object in LocalStorage to ensure all required
	 * fields are complete. If not, it returns an array with 'false'
	 * and an error message.
	 */
	const checkGoalRequiredFields = (goalObj, requiredFieldsArr) => {
		const goalKeys = Object.keys(goalObj);
		const missingFields = [];

		for (const field of requiredFieldsArr) {
			if (!goalKeys.includes(field)) {
				missingFields.push(field);
			}
		}

		if (missingFields.length > 0) {
			const missingFieldsString = missingFields.join(', ');
			return [false, `You are missing the following fields: ${missingFieldsString}.`];
		}

		return [true, goalObj];
	};

	/**
	 * Handles the 'next' button click.
	 */
	const handleNextButtonClick = (event) => {
		let requiredFields = [
			'firstName',
			'lastName',
			'email',
			'age',
			'height',
			'weight',
			'targetWeight',
			'targetDate',
			'daysAvailable'
		];

		// validate the form inputs
		const fieldsValid = handleFormValidation(event);

		if (!fieldsValid) {
			return;
		}

		const [isValid, error] = checkGoalRequiredFields(userData, requiredFields);
		if (!isValid) {
			// check if an error message already exists
			if (document.querySelector('.error')) {
				const errorElement = document?.querySelector('.error');
				if (errorElement) errorElement.textContent = error;
				return;
			}
			// display error message
			const errorElement = document.createElement('p');
			errorElement.classList.add('error');
			errorElement.style.textAlign = 'right';
			errorElement.textContent = error;
			document.querySelector('.form-buttons')?.after(errorElement);
			return;
		} else {
			// redirect the user to the goal page
			event.target.click();
		}
	};
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
					bind:value={userData.targetWeight}
					oninput={(e) => validateWeight(e.target)}
					required
				/>
				<label for="target-date">When do you want to achieve your goal by?</label>
				<input
					type="date"
					name="target-date"
					id="target-date"
					bind:value={userData.targetDate}
					required
				/>
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
								checked={userData.daysAvailable.includes('monday')}
								onclick={(e) => updateDaysArray(e)}
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
								checked={userData.daysAvailable.includes('tuesday')}
								onclick={(e) => updateDaysArray(e)}
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
								checked={userData.daysAvailable.includes('wednesday')}
								onclick={(e) => updateDaysArray(e)}
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
								checked={userData.daysAvailable.includes('thursday')}
								onclick={(e) => updateDaysArray(e)}
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
								checked={userData.daysAvailable.includes('friday')}
								onclick={(e) => updateDaysArray(e)}
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
								checked={userData.daysAvailable.includes('saturday')}
								onclick={(e) => updateDaysArray(e)}
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
								checked={userData.daysAvailable.includes('sunday')}
								onclick={(e) => updateDaysArray(e)}
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
					<a href="/walking-goal" class="btn next" onclick={(e) => handleNextButtonClick(e)}
						>Generate plan</a
					>
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
	}
</style>
