<script lang="ts">
    import { onMount } from "svelte";

    export let text: string = "";
    export let speed: number = 50; // ms per character

    let displayedText: string = "";

    onMount(() => {
        let i = 0;
        const interval = setInterval(() => {
            displayedText = text.substring(0, i);
            i++;

            if (i > text.length) {
                clearInterval(interval);
            }
        }, speed);
    });
</script>

<span>
  {displayedText}
</span>
