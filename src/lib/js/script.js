/**
 * Handles the validation of the form inputs - text, date, number,
 * radio buttons, checkboxes, etc. It should be run before updating
 * the object in LocalStorage.
 */
export const handleFormValidation = (e) => {
	// select the current section
	const currentSection = document.getElementsByTagName('section')[0];

	// select form elements in the current section
	const sectionFormElements = [...currentSection.querySelectorAll('input')];

	let containsErrors = false;
	// loop through the form elements and validate them
	for (const element of sectionFormElements) {
		// check if the input is required
		if (element.required) {
			// check if the input is valid using
			// the method here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
			if (!element.validity.valid) {
				// check if an error message already exists
				if (
					!element.nextElementSibling?.classList.contains('error') &&
					!element.parentElement.parentElement.nextElementSibling?.classList.contains('error')
				) {
					const errorElement = document.createElement('p');
					errorElement.classList.add('error');
					errorElement.textContent = element.validationMessage;
					if (element.type === 'radio' && currentSection.id === 'activity-level-form') {
						errorElement.style.textAlign = 'center';
						element.parentElement.parentElement.parentElement.after(errorElement);
					} else if (element.type === 'radio') {
						element.parentElement.parentElement.after(errorElement);
					} else {
						element.after(errorElement);
					}

					// add event listeners to the input elements to remove the error
					if (element.type === 'text' || element.type === 'date' || element.type === 'number') {
						element.addEventListener('input', () => {
							if (element.validity.valid) {
								errorElement.remove();
							}
						});
					} else {
						element.addEventListener('change', () => {
							if (element.validity.valid) {
								errorElement.remove();
							}
						});
					}
				}
			} else {
				// check if an error message already exists
				if (
					element.type === 'radio' &&
					element.parentElement.parentElement.nextElementSibling?.classList.contains('error')
				) {
					const errorElement = element.parentElement.parentElement.nextElementSibling;
					errorElement.remove();
				} else if (element.nextElementSibling?.classList.contains('error')) {
					const errorElement = element.nextElementSibling;
					errorElement.remove();
				}
			}
		}
	}

	// check if any errors exist
	const errors = [...currentSection.querySelectorAll('.error')];
	if (errors.length > 0) {
		containsErrors = true;
	}

	if (containsErrors) {
		e.preventDefault();
		return false;
	}

	return true;
};
