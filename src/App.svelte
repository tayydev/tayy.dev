<script lang="ts">
    import kittyIcon from './assets/kitty.svg'
    import {untrack} from "svelte";

    let title = $state("about")
    let timing = $state(0)

    $effect(() => {
        const clear = setInterval(() => {
            //because our code is sad and uses state in an effect we put this in an "untrack" block which
            // prevents us from triggering an infinite loop of effects https://svelte.dev/docs/svelte/$effect
            untrack(() => {
                timing++;
                if(timing >= 10) clearInterval(clear)
            });
        }, 500);

        return () => { clearInterval(clear) };
    });

</script>

<main>
    <div class="bound-box">
        <div class="terminal top">
            taylor@tayy.dev - {title}
        </div>
        <div class="terminal bottom">
            taylor@tayy.dev:~$: whoami
            <div class="right">
                <div class="bubble">
                    {"_____________________________________________        "}<br>
                    {"| heyy, i'm tay                               |       "}<br>
                    {"|                                             |       "}<br>
                    {"| looking for ethan?"}
                    <a href="https://esouth.dev">check out my other site</a> {" |       "}<br>
                    {"|___________________________________________  |       "}<br>
                    {"\\|       "}<br>
                    <img src={kittyIcon} class="logo svelte" alt="taylor circa 2025" />
                    {" "}
                </div>
            </div>
            taylor@tayy.dev:~$: now-playing
        </div>
    </div>
</main>

<style>
    .logo {
        height: 7em;
        will-change: filter;
        transition: filter 300ms;
    }

    .terminal {
        background: #e5fbe5;
        min-width: 40rem;
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
    }

    .right {
        display: flex;
        justify-content: flex-end;
    }

    .bubble {
        text-align: right;
        display: block;
        white-space: pre
    }
</style>
