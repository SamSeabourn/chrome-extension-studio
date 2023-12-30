<script lang="ts">
	export let title: string;
	export let logoSrc: string;
</script>

<nav>
	<a href="/" aria-label="Homepage">
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
		height: 80px;
		width: 100%;
		box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
		display: flex;
		align-items: center;
		position: fixed;
        background-color: #fff;
	}
	h1 {
		font-family: 'Satoshi-Variable', sans-serif;
		margin-left: 2.75rem;
		font-size: 2rem;
		font-weight: 900;
		letter-spacing: -0.03rem;
	}
	img {
		margin-left: 2rem;
		height: 4rem;
	}
</style>
