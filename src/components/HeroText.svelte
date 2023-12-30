<script lang="ts">
	// export let
</script>

<div>
	<p>
		<span>Trackers, Bloat,<br>Ads<br /> </span>
		<span class="bold-focused">Just <span class="underline">nice</span><br/> extensions</span>
	</p>
</div>

<style>
	@font-face {
		font-family: 'GeneralSans-Variable';
		src: url('$lib/assets/fonts/GeneralSans-Variable.woff2');
		font-display: swap;
	}

	p {
		font-family: 'GeneralSans-Variable';
		font-size: 3.75rem;
        font-weight: 500;
	}

	div {
		height: 100%;
		margin-left: 9.5rem;
		display: flex;
		align-items: center;
	}

    .bold-focused {
        font-weight: 600;
    }

    .underline {
    position: relative;
    padding-bottom: 0; /* Control the distance from the text */
    cursor: pointer; /* Optional, for a pointer cursor on hover */
}

.underline::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1.5rem; /* Adjust the thickness of the underline */
    background-color:#E8FF7C;
    transition: width 0.5s ease;
    mix-blend-mode: multiply;
}

.underline::after {
    animation: underline-slide 2s forwards;
}

@keyframes underline-slide {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
</style>
