import { browser } from '$app/environment';
import { setContext, getContext } from 'svelte';

/**
 * Local storage class
 * @class LocalStorage
 */
export class LocalStorage {
	value = $state();
	key = '';

	/**
	 * Creates an instance of LocalStorage.
	 * @param {string} key
	 * @param {Object} value
	 * @memberof LocalStorage
	 */
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

const USER_DATA = 'USER_DATA';

export function setUserContext(value) {
	const userData = new LocalStorage('userData', value);
	setContext(USER_DATA, userData.value);
	return userData.value;
}

export function getUserContext() {
	return getContext(USER_DATA);
}
