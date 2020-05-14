<script>
  import Spinner from "./Spinner.svelte";
  let loading = 1;
  let delay = 1000;
  const url = "http://api.icndb.com/jokes/random";
  $: delayed_url = `http://slowwly.robertomurray.co.uk/delay/${delay}/url/${url}`;
  let joke = "";
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

    <div>
      <input type="checkbox" bind:checked={loading} />
      loading?
      <Spinner {loading} />
    </div>
    <!-- to get a bigger spinner, increase the font size -->
    <div style="font-size: 300%">
      <Spinner {loading} />
    </div>
    <input bind:value={delay} type="number" step={1000} min={0}>
    <button on:click={fetch_joke}>Fetch Joke</button>
    <h2>The Amazing Chuck Norris!</h2>
    <p>
      {#if joke}{joke}{:else}...{/if}
    </p>
  </div>
</main>
