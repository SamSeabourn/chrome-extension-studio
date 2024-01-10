<script lang="ts">
	import { onMount } from 'svelte';

	const yellowBlobStartPosition = 32; //vh
	const yellowBlobSendPosition = 105; //vh

	const leftBlobStartPosition = -114;
	const leftBlobEndPosition = -42;

	const rightBlobStartPosition = -70;
	const rightBlobEndPosition = -50;

	onMount(() => {
		document.addEventListener('scroll', () => {
			const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
			const scrollPercentage = window.scrollY / maxScroll;

			const yellowBlob = document.getElementById('yellowBlob');
			if (yellowBlob) {
				const currentYellowBlobPosition =
					yellowBlobStartPosition +
					(yellowBlobSendPosition - yellowBlobStartPosition) * scrollPercentage;
				yellowBlob.style.transform = `translateY(${currentYellowBlobPosition}vh)`;
			}
			const leftBlob = document.getElementById('leftBlob');
			if (leftBlob) {
				const currentLeftBlobPosition =
					leftBlobStartPosition +
					(leftBlobEndPosition - leftBlobStartPosition) * scrollPercentage;
				leftBlob.style.transform = `translateY(${currentLeftBlobPosition}vh)`;
			}
			const rightBlob = document.getElementById('rightBlob');
			if (rightBlob) {
				const currentRightBlobPosition =
					rightBlobStartPosition +
					(rightBlobEndPosition - rightBlobStartPosition) * scrollPercentage;
				rightBlob.style.transform = `translateY(${currentRightBlobPosition}vh)`;
			}
		});
	});
</script>

<div id="leftBlob" class="left-blob" />
<div id="rightBlob" class="right-blob" />
<div id="yellowBlob" class="yellow-blob" />

<style>
	div {
		position: fixed;
		width: 9rem;
	}

	.left-blob {
		width: 9rem;
		height: 130vh;
		background-color: #e6e7ed;
		border-radius: 9rem;
		right: 2rem;
		z-index: 10;
		transform: translateY(-114vh);
	}

	.right-blob {
		width: 16rem;
		height: 120vh;
		background-color: #e6e7ed;
		border-radius: 16rem;
		right: 13rem;
		z-index: 120;
		transform: translateY(-70vh);
	}

	.yellow-blob {
		width: 9rem;
		height: 9rem;
		background-color: #e8ff7c;
		border-radius: 9rem;
		right: 16.5rem;
		z-index: 123;
		transform: translateY(32vh);
		filter: drop-shadow(0px 3px 9px rgba(0, 0, 0, 0.1));
	}

	@media (max-width: 1280px) {
		.right-blob,
		.left-blob,
		.yellow-blob {
			z-index: 5;
		}
	}
</style>
