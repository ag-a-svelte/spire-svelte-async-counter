<script>
  import Spinner from "./Spinner.svelte";
  import { writable } from "svelte/store";
  let loading = writable(0);
  let delay = 1000;
  const url = "http://api.icndb.com/jokes/random";
  $: delayed_url = `http://slowwly.robertomurray.co.uk/delay/${delay}/url/${url}`;
  let joke = "";

  async function fetch_joke() {
    const response = await fetch(delayed_url);
    const json = await response.json();
    joke = json.value.joke;
  }

  /* returns a wrapper function that increments counter before calling
     the wrapped function and decrements it after. */
  function wrap(f) {
    return async (...a) => {
      loading.update(n => n + 1);
      // pass the same args
      const result = await f(...a);
      loading.update(n => n - 1);
      return result;
    };
  }
</script>

<style>
  /* styles here */
</style>

<main>
  <div class="center">
    <img src="favicon.png" alt="favicon" />
    <h1>Svelte App</h1>

    <!-- to get a bigger spinner, increase the font size -->
    <div style="font-size: 300%">
      <Spinner loading={$loading} />
    </div>
    <input bind:value={delay} type="number" step={1000} min={0} />
    <button on:click={wrap(fetch_joke)} disabled={$loading}>
      Fetch Joke
    </button>
    <h2>The Amazing Chuck Norris!</h2>
    <p>
      {#if joke}{joke}{:else}...{/if}
    </p>
  </div>
</main>
