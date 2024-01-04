<script lang="ts">
	import { onMount } from 'svelte';

	export let id: string;

	onMount(() => {
		const divEl = document.getElementById(id);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						(entry.target as HTMLElement).style.opacity = '1';
					}
				});
			},
			{
				threshold: 1
			}
		);

		if (divEl) {
			observer.observe(divEl);
		}
	});
</script>

<div {id}>
	<slot />
</div>

<style>
	div {
		opacity: 0;
		transition: opacity 750ms ease-in;
	}
</style>
