<script>
	import ContentPadding from '../components/ContentPadding.svelte';
	import ContentPanel from '../components/ContentPanel.svelte';
	import HeroPanel from '../components/HeroPanel.svelte';
	import HeroText from '../components/HeroText.svelte';
	import NavBar from '../components/NavBar.svelte';
	import Paragraph from '../components/Paragraph.svelte';
	import Title from '../components/Title.svelte';
</script>

<NavBar title={'Chrome Extension Studio'} logoSrc="CES-Logo.svg" />
<HeroPanel>
	<HeroText />
</HeroPanel>
<ContentPanel>
	<ContentPadding>
		<Title>About us</Title>
		<Paragraph>
			Chrome Extension Studio is a team of passionate software engineers committed to creating streamlined, secure Chrome extensions. Our apps are designed to be lightweight, free of bloat, trackers, and ads, ensuring a smooth and trustworthy user experience.
		</Paragraph>
	</ContentPadding>
</ContentPanel>
