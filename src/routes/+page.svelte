<script>
	import { base } from '$app/paths'
	// export const prerender = true;
	import AirGap from '../components/AirGap.svelte';
	import Blobs from '../components/Blobs.svelte';
	import Button from '../components/Button.svelte';
	// import CTA from '../components/CTA.svelte';
	import ContentPadding from '../components/ContentPadding.svelte';
	import ContentPanel from '../components/ContentPanel.svelte';
	import FadeInOnScroll from '../components/FadeInOnScroll.svelte';
	import Footer from '../components/Footer.svelte';
	import HeroPanel from '../components/HeroPanel.svelte';
	import HeroText from '../components/HeroText.svelte';
	import ImageBar from '../components/ImageBar.svelte';
	import NavBar from '../components/NavBar.svelte';
	import Paragraph from '../components/Paragraph.svelte';
	import Testimonial from '../components/Testimonial.svelte';
	import Title from '../components/Title.svelte';
</script>

<NavBar title={'Chrome Extension Studio'} logoSrc="{base}/CES-Logo.svg" />
<Blobs />
<HeroPanel>
	<HeroText />
</HeroPanel>
<ContentPanel>
	<ContentPadding>
		<Title>About us</Title>
		<Paragraph>
			Chrome Extension Studio is a team of passionate software engineers committed to creating
			streamlined, secure Chrome extensions. Our apps are designed to be lightweight, free of
			bloat, trackers, and ads, ensuring a smooth and trustworthy user experience.
		</Paragraph>
		<AirGap />
		<Title>Our extensions</Title>
		<FadeInOnScroll id={'test0'}>
			<ImageBar imageSource='{base}/placeholder.png' imageAlt="placeholder" />
			<Button
				btnFunc={() => {
					return {};
				}}>Placeholder one</Button
			>
		</FadeInOnScroll>
		<FadeInOnScroll id={'test1'}>
			<ImageBar imageSource='{base}/placeholder.png' imageAlt="placeholder" />
			<Button
				btnFunc={() => {
					return {};
				}}>Placeholder one</Button
			>
		</FadeInOnScroll>
		<FadeInOnScroll id={'test3'}>
			<ImageBar imageSource='{base}/placeholder.png' imageAlt="placeholder" />
			<Button
				btnFunc={() => {
					return {};
				}}>Placeholder one</Button
			>
		</FadeInOnScroll>
		<AirGap />
		<Title>Testimonials</Title>
		<Testimonial imageSource='{base}/persona.webp' userName={'Zark Muckerberg'}>
			I've been Slinky for a year, and they're fantastic. They're user-friendly, efficient,
			and ad-free, significantly improving my browsing experience. It's great to find
			extensions that are both powerful and simple to use. Highly recommend them for an
			enhanced and hassle-free online experience!
		</Testimonial>
		<Testimonial imageSource='{base}/persona.webp' userName={'Jeave Stobs'}>
			I've been Slinky for a year, and they're fantastic. They're user-friendly, efficient,
			and ad-free, significantly improving my browsing experience. It's great to find
			extensions that are both powerful and simple to use. Highly recommend them for an
			enhanced and hassle-free online experience!
		</Testimonial>
		<Testimonial imageSource='{base}/persona.webp' userName={'Melon Zusk'}>
			I've been Slinky for a year, and they're fantastic. They're user-friendly, efficient,
			and ad-free, significantly improving my browsing experience. It's great to find
			extensions that are both powerful and simple to use. Highly recommend them for an
			enhanced and hassle-free online experience!
		</Testimonial>
		<AirGap />
		<!-- <CTA href={'www.google.com'}>
			Want to make something together? <br /> See what we can do at
		</CTA> -->
		<AirGap />
		<AirGap />
	</ContentPadding>
	<Footer />
</ContentPanel>
