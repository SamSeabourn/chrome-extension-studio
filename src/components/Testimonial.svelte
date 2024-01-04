<script lang="ts">
	import { generateGUID } from '../helpers/generate-guid';
	import FadeInOnScroll from './FadeInOnScroll.svelte';
	import ImageCircle from './ImageCircle.svelte';

	import Paragraph from './Paragraph.svelte';
	export let userName: string;
	export let imageSource: string;
</script>

<FadeInOnScroll id={generateGUID()}>
	<div class="testimonal">
		<ImageCircle {imageSource} imageAlt={`Image of user ${userName}`} />
		<div class="writeup">
			<Paragraph>
				<slot />
				<span>{userName}</span>
			</Paragraph>
		</div>
	</div>
</FadeInOnScroll>

<style>
	span {
		color: #e8ff7c;
	}

	.testimonal {
		align-items: center;
		display: inline-flex;
		margin-bottom: 3.5rem;
		margin-top: 1rem;
	}

	.writeup {
		margin-left: 1.5rem;
	}
</style>
