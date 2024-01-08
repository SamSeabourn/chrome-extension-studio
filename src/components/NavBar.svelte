<script lang="ts">
	import { base } from '$app/paths';
	export let title: string;
	export let logoSrc: string;
</script>

<nav>
	<a href="{base}/" aria-label="Home page">
		<img src={logoSrc} alt="Chrome Extension Studio Logo" />
	</a>
	<h1>{title}</h1>
</nav>

<style>
	@font-face {
		font-family: 'Satoshi-Variable';
		src: url('$lib/assets/fonts/Satoshi-Variable.woff2');
		font-display: swap;
	}
	nav {
		height: 6rem;
		width: 100%;
		box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
		display: flex;
		align-items: center;
		position: fixed;
		background-color: #fff;
		z-index: 30;
	}
	h1 {
		font-family: 'Satoshi-Variable', sans-serif;
		margin-left: 3rem;
		font-size: 2rem;
		font-weight: 900;
		letter-spacing: -0.03rem;
	}
	img {
		margin-left: 2rem;
		height: 4rem;
	}
</style>
