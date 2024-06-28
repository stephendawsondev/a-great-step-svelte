import { browser } from '$app/environment';

/**
 * Local storage class
 * @class LocalStorage
 */
export class LocalStorage {
	value = $state();
	key = '';

	constructor(key, value) {
		this.key = key;
		this.value = value;

		if (browser) {
			const data = localStorage.getItem(key);
			if (data) this.value = this.deserialise(data);
		}

		$effect(() => {
			localStorage.setItem(this.key, this.serialise(this.value));
		});
	}

	/**
	 * Serialise the value
	 * @param {Object} value
	 * @returns {string}
	 * @memberof LocalStorage
	 */
	serialise(value) {
		return JSON.stringify(value);
	}

	/**
	 * Deserialise the value
	 * @param {string} value
	 * @returns {Object}
	 * @memberof LocalStorage
	 */
	deserialise(value) {
		return JSON.parse(value);
	}
}
