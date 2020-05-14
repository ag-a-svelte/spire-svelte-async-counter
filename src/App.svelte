<script>
  import Spinner from "./Spinner.svelte";
  import {
    create_counter_wrapper,
    get_counter_wrapper
  } from "./func_counter_wrapper";
  import { derived } from "svelte/store";

  let delay = 1000;
  const url = "http://api.icndb.com/jokes/random";
  $: delayed_url = `http://slowwly.robertomurray.co.uk/delay/${delay}/url/${url}`;
  let joke = "";

  const [loading, fetch] = create_counter_wrapper(window.fetch);
  const [fjc1, fjw1] = get_counter_wrapper(fetch_joke);
  const [fjc2, fjw2] = get_counter_wrapper(fetch_joke);
  const [fjc3, fjw3] = create_counter_wrapper(fetch_joke);
  const [fjc4, fjw4] = get_counter_wrapper(fetch_joke);
  const counter = derived([fjc1, fjc3], () => $fjc1 + $fjc3);

  async function fetch_joke() {
    const response = await fetch(delayed_url);
    const json = await response.json();
    joke = json.value.joke;
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
    <p>fetch_ajax combined count: {$counter}</p>
    <p>fetch count: {$loading}</p>
    <input bind:value={delay} type="number" step={1000} min={0} />

    <button on:click={fjw1} disabled={$fjc1}>
      <Spinner loading={$fjc1} />
      Fetch Joke
    </button>

    <button on:click={fjw2} disabled={$fjc2}>
      <Spinner loading={$fjc2} />
      Fetch Joke
    </button>

    <button on:click={fjw3} disabled={$fjc3}>
      <Spinner loading={$fjc3} />
      Fetch Joke
    </button>

    <button on:click={fjw4} disabled={0}>
      <Spinner loading={$fjc4} />
      Fetch Joke
    </button>

    <h2>The Amazing Chuck Norris!</h2>
    <p>
      {#if joke}{joke}{:else}...{/if}
    </p>
  </div>
</main>
