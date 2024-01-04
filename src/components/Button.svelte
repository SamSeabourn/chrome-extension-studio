<script lang="ts">
	export let btnFunc: () => object;
</script>

<button on:click={() => btnFunc()}>
	<slot />
</button>

<style>
	button {
		width: 13rem;
		height: 3.5rem;
		background-color: #e8ff7c;
		border: none;
		font-size: 1rem;
		border-radius: 2rem;
	}

	button:hover {
		background-color: transparent;
		border: 3px solid #e8ff7c;
		color: white;
		font-size: 1rem;
		border-radius: 2rem;
		cursor: pointer;
	}
</style>
