<script lang="ts">
  import kittyIcon from './assets/kitty.svg'
</script>

<main>
  <div class="bound-box">
    <div class="terminal top">
      tayy@dev - about
    </div>
    <div class="terminal bottom">
      tayy@dev~: whoami <br/>
      <img src={kittyIcon} class="logo svelte" style="fill: #e5fbe5; stroke: #e5fbe5" alt="Svelte Logo" />
    </div>
  </div>

<!--  <p>-->
<!--    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the-->
<!--    official Svelte app framework powered by Vite!-->
<!--  </p>-->

<!--  <p class="read-the-docs">-->
<!--    Click on the Vite and Svelte logos to learn more-->
<!--  </p>-->
</main>

<style>
  .logo {
    height: 10em;
    padding: 1.5em;
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
</style>
