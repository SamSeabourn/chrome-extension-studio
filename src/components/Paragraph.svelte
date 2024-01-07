<p>
	<slot />
</p>

<style>
	@font-face {
		font-family: 'Inter';
		src: url('$lib/assets/fonts/Inter-Regular.ttf');
		font-display: swap;
	}
	p {
		font-family: 'Inter', sans-serif;
		width: 35rem;
		color: white;
		line-height: 1.3rem;
		font-size: 1.25rem;
	}

	@media (max-width: 500px) {
		div {
			max-width: 30rem;;
		}
	}
</style>
