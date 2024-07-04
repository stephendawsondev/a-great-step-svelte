<script>
	import { onNavigate } from '$app/navigation';
	import { setUserContext } from '$lib/index.svelte';

	let { children } = $props();

	let userData = setUserContext({
		firstName: '',
		lastName: '',
		email: '',
		gender: 'male',
		age: '',
		height: '',
		weight: '',
		daysAvailable: [],
		walkingFrequency: '',
		targetWeight: '',
		targetDate: ''
	});

	onNavigate(() => {
		if (!document.startViewTransition) return;

		return new Promise((fulfil) => {
			document.startViewTransition(() => new Promise(fulfil));
		});
	});
</script>

<main>
	{@render children()}
</main>

<style>
	@media (prefers-reduced-motion) {
		::view-transition-group(*),
		::view-transition-old(*),
		::view-transition-new(*) {
			animation: none !important;
		}
	}
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-bottom {
		from {
			transform: translateY(200%);
		}
	}

	@keyframes slide-to-top {
		to {
			transform: translateY(-100%);
		}
	}

	:root::view-transition-old(root) {
		animation: 0.5s cubic-bezier(0.4, 0, 1, 1) both fade-out;
		/* 1s cubic-bezier(0.4, 0, 0.2, 1) both slide-to-top; */
	}

	:root::view-transition-new(root) {
		animation: 0.5s cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in;
		/* 1s cubic-bezier(0.4, 0, 0.2, 1) both slide-from-bottom; */
	}
</style>
