<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { backIn } from 'svelte/easing';

	const popInDelay = 800;
	const justNiceDuration = 2300;
	let loaded = false;
	let curr = 0;
	let interval: number;
	let timeout: number;
	const words = ['Trackers, ', 'Ads, ', 'Bloat'];

	onMount(() => {
		loaded = true;
		interval = setInterval(() => {
			const element = document.getElementById(`word-${words[curr]}`);
			if (element) {
				element.style.opacity = '1';
			}
			if (curr > words.length) {
				clearInterval(interval);
			} else {
				curr++;
			}
		}, popInDelay);

		timeout = setTimeout(
			() => {
				const element = document.getElementById(`underline`);
				if (element) {
					element.style.width = '8rem';
				}
				clearTimeout(timeout);
			},
			popInDelay * (words.length + 1) + justNiceDuration
		);
	});
</script>

<div class="container">
	{#if loaded}
		<p>
			{#each words as word, i}
				{#if word}
					<span class="bad-stuff" id={`word-${word}`} style="opacity: 0">{word}</span>
				{/if}
			{/each}
			<br />
			<span
				transition:fade={{
					delay: popInDelay * words.length,
					duration: justNiceDuration,
					easing: backIn
				}}
				class="bold-focused"
				>Just <div id="underline" />
				<span id="nice" class="nice">nice</span><br /> extensions</span
			>
		</p>
	{/if}
</div>

<style>
	@font-face {
		font-family: 'GeneralSans-Variable';
		src: url('$lib/assets/fonts/GeneralSans-Variable.woff2');
		font-display: swap;
	}

	p {
		font-family: 'GeneralSans-Variable';
		font-size: 3.75rem;
		font-weight: 500;
		color: #170d1e;
	}

	span {
		transition: opacity 500ms ease-in;
	}

	.bad-stuff {
		padding: 0.25rem;
		color: rgba(0, 0, 0, 0.33);
		text-decoration: line-through grey;
	}

	.container {
		height: 100%;
		margin-left: 9.5rem;
		display: flex;
		align-items: center;
	}

	.bold-focused {
		font-weight: 600;
	}

	.nice {
		position: relative;
	}

	#underline {
		position: absolute;
		display: inline;
		width: 0rem;
		height: 2rem;
		background-color: #e8ff7c;
		transform: translateY(2rem);
		transition: width 500ms ease-in;
	}
</style>
