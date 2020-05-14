<script>
  import Spinner from "./Spinner.svelte";
  let loading = 1;
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

    <h2>SpinSpire</h2>
    <p>High performance, Open Source Web &amp; Mobile!</p>
    <p>
      <a href="https://spinspire.com/">spinspire.com</a>
      |
      <a href="https://youtube.com/spinspire">youtube.com/spinspire</a>
    </p>
  </div>
</main>
