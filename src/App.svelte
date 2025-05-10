<script lang="ts">
  import kittyIcon from './assets/kitty.svg'
</script>

<main>
  <div class="bound-box">
    <div class="terminal top">
      tayy@dev - about
    </div>
    <div class="terminal bottom">
      tayy@dev:~$: whoami
      <div class="right">
        <div class="bubble">
          {"_____________________________________________        "}<br>
          {"| heyy, i'm tay                               |       "}<br>
          {"|                                             |       "}<br>
          {"| looking for ethan?"} <a href="https://esouth.dev">check out my other site</a> {" |       "}<br>
          {"|___________________________________________  |       "}<br>
          {"\\|       "}<br>
          <img src={kittyIcon} class="logo svelte" alt="taylor circa 2025" />
        </div>
      </div>
      tayy@dev:~$: now-playing
    </div>
  </div>
</main>

<style>
  .logo {
    height: 10em;
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
