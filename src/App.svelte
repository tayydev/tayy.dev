<script lang="ts">
    import {onMount, untrack} from "svelte";
    import About from "./lib/About.svelte";
    import Keyboard from "./lib/Keyboard.svelte";
    import {apiClient, type Results} from "./lib/client";
    import NowPlaying from "./lib/NowPlaying.svelte";

    let timing = $state(0)
    let title = $derived(
        timing < 7 ? "~" :
            "now-playing"
    )
    let listening: Results | null = $state(null)

    onMount(() => {
        const clear = setInterval(() => {
            timing++;
            if(timing >= 10) clearInterval(clear)
        }, 250);

        return () => { clearInterval(clear) };
    });
    //initial load
    onMount(async () => {
        listening = await apiClient.getServerStatus()
    })
    //refresh load
    onMount(() => {
        const refreshInterval = setInterval(async () => {
            listening = await apiClient.getServerStatus()
        }, 30000);

        return () => { clearInterval(refreshInterval) };
    })
</script>

<main>
    <div class="bound-box">
        <div class="terminal top">
            taylor@tayy.dev: {title}
        </div>
        <div class="terminal bottom">
            <noscript> <!--TODO: confirm Javascript free loads -->
                taylor@tayy.dev:~$: whoami
                <About/>
                taylor@tayy.dev:~$: now-playing
                &lt;ERROR&gt; js is disabled
                taylor@tayy.dev:~$: {"█"}
            </noscript>

            taylor@tayy.dev:~$:&nbsp;<Keyboard
                text="whoami"
                speed={50}
        />{#if timing >= 2}
            <About/>{/if}{#if timing >= 3}
            taylor@tayy.dev:~$:&nbsp;
        {/if}{#if timing >= 4}<Keyboard
                text="now-playing"
                speed={50}
        />{/if}{#if timing >= 7}
            <div></div>
        {/if}{#if timing <= 8}
            {"█"}
        {:else}
            <NowPlaying {listening}></NowPlaying>
        {/if}
        </div>
    </div>
</main>

<style>
    .terminal {
        background: #e5fbe5;
        min-width: 40rem;
        width: 40rem;
        box-sizing: border-box;
    }

    .terminal.top {
        border: solid 1px black;
        border-bottom: none;
    }

    .terminal.bottom {
        border: solid 1px black;

        color: #e5fbe5;
        background: #151915;
        text-align: left;
        padding: 0.5rem;

        min-height: 22rem;
    }

    @media screen and (max-width: 768px) {
        .bound-box {
            transform-origin: top center;
            transform: scale(0.8);
            width: 100%;
            overflow-x: hidden;
            margin: 0 auto;
        }

        .terminal {
            width: 40rem;
            min-width: 40rem;
            margin: 0 auto;
        }
    }
</style>
