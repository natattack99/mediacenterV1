<script lang="ts">
    import Card from './card.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
    const src: string | null = data.src;
</script>

<main class="container">
    <h1>Test</h1>
    <p>
        This is a test.
    </p>
    <a href="/"><button>Back</button></a>
</main>

<Card {src} />