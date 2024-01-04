<script lang="ts">
	export let imageSource: string;
	export let imageAlt: string;
</script>

<img src={imageSource} alt={imageAlt} />

<style>
	img {
		height: 7rem;
		width: 7rem;
		border-radius: 3.5rem;
		transform: translateZ(0);
	}
</style>
