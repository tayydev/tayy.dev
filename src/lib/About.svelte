<script>
import kittyIcon from "../assets/kitty.svg";
</script>

<main>
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

</main>

<style>
    .logo {
        height: 7em;
        will-change: filter;
        transition: filter 300ms;
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
