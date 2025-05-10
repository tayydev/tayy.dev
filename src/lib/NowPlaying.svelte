<script lang="ts">
    import {type Results} from "./client";
    import {onMount} from "svelte";
    let { listening }: {listening: Results | null} = $props()

    const frames = "▁▂▃▄▅▆▇█▇▆▅▄▃▂▁";
    const failed = "--\\\\||/   /";
    let currentFrame = $state(0);

    onMount(() => {
        let interval = setInterval(() => {
            currentFrame = (currentFrame + 1) % frames.length;
        }, 75);

        return () => clearInterval(interval);
    });

</script>

<main>
    {#if listening && listening.playing}
        ♪ Listening to {listening.title} - {listening.artist}
        {frames[(currentFrame + 20) % frames.length]}{frames[currentFrame]}{frames[(currentFrame + 2) % frames.length]}
    {:else}
        ...tayy doesn't seem to be listening to music right now {failed[currentFrame % 8 ]}
    {/if}
</main>
