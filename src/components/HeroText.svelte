<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { backIn } from 'svelte/easing';

	const popInDelay = 800;
	const justNiceDuration = 800 * 3 + 200;
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
				const badStuff = document.getElementsByClassName(`bad-stuff`);
				[...badStuff].forEach((el) => {
					(el as HTMLSpanElement).style.opacity = '0.33';
				});
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
			popInDelay * words.length + justNiceDuration + 1000
		);
	});
</script>

<div class="container">
	{#if loaded}
		<p>
			{#each words as word}
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

	@media (max-width: 1280px) {
		p {
			z-index: 10;
		}

		div {
			max-width: 59vw;
		}
	}

	span {
		transition: opacity 450ms ease-in;
	}

	.bad-stuff {
		opacity: 1;
		padding: 0.25rem;
		color: #929292;
		text-decoration: line-through #170d1e;
	}

	.container {
		height: 100%;
		margin-left: 9.5rem;
		display: flex;
		align-items: center;
	}

	@media (max-width: 500px) {
		.container {
			margin-left: 4.25rem;
		}
	}

	.bold-focused {
		font-weight: 600;
		filter: drop-shadow(0px 3px 9px rgba(0, 0, 0, 0.1));
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
		transition: width 333ms ease-in;
		clip-path: polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%);
	}
</style>
