<script lang="ts">
	export let href: string;
</script>

<p>
	<slot />
	<a {href}>{href}</a>
</p>

<style>
	@font-face {
		font-family: 'GeneralSans-Variable';
		src: url('$lib/assets/fonts/GeneralSans-Variable.woff2');
		font-display: swap;
	}

	p {
		color: #f2f3f6;
		font-family: 'GeneralSans-Variable', sans-serif;
		font-size: 3rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.85rem;
	}

	a {
		color: #e8ff7c;
		font-family: 'GeneralSans-Variable', sans-serif;
		text-decoration: none;
	}

	a:hover {
		color: #170d1e;
		font-weight: 600;
		text-shadow:
			-1px -1px 0 #e8ff7c,
			1px -1px 0 #e8ff7c,
			-1px 1px 0 #e8ff7c,
			1px 1px 0 #e8ff7c;
		text-decoration: none;
	}
</style>
