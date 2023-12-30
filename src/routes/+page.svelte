<script>
	import ContentPadding from '../components/ContentPadding.svelte';
	import ContentPanel from '../components/ContentPanel.svelte';
	import HeroPanel from '../components/HeroPanel.svelte';
	import HeroText from '../components/HeroText.svelte';
	import NavBar from '../components/NavBar.svelte';
</script>

<NavBar title={'Chrome Extension Studio'} logoSrc="CES-Logo.svg" />
<HeroPanel>
	<HeroText />
</HeroPanel>
<ContentPanel>
	<ContentPadding>
		<h1>Hi Im the content panel</h1>
	</ContentPadding>
</ContentPanel>
