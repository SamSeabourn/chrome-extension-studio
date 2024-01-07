<section>
	<slot />
</section>

<style>
	section {
		background-color: #170d1e;
		width: 100%;
		clip-path: polygon(21rem 0, 100% 9rem, 100% 100%, 0 100%, 0 4rem);
		padding-top: 4rem;
	}

	@media (max-width: 500px) {
		section {
			z-index: 20;
			position: absolute;
		}
	}
</style>
