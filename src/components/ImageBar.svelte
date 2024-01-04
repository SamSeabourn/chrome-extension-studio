<script lang="ts">
	export let imageSource: string;
	export let imageAlt: string;
</script>

<img src={imageSource} alt={imageAlt} />

<style>
	img {
		width: 35rem;
		height: 8.75rem;
		margin-top: 2rem;
		border-radius: 1.5rem;
		margin-bottom: 1rem;
		display: block;
		transform: translateZ(0);
	}
</style>
