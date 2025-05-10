<script lang="ts">
    import {type Results} from "./client";
    import {onMount} from "svelte";
    let { listening }: {listening: Results | null} = $props()

    const frames = "▁▂▃▄▅▆▇█▇▆▅▄▃▂▁";
    let currentFrame = $state(0);

    onMount(() => {
        let interval = setInterval(() => {
            currentFrame = (currentFrame + 1) % frames.length;
        }, 75);

        return () => clearInterval(interval);
    });

</script>

<main>
    {#if listening}
        ♪ Listening to {listening.title} - {listening.artist}
        {frames[(currentFrame + 20) % frames.length]}{frames[currentFrame]}{frames[(currentFrame + 2) % frames.length]}
    {/if}
</main>
