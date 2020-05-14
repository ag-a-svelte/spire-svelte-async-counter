<script>
  // spinner component using CSS animations
  // CSS variables:
  // --color-spinner-border
  // --color-spinner-border-loading
  // --color-spinner-bg
  // --color-spinner-bg-loading
  export let loading = 0; // spinner is activate when this number is non-zero
</script>

<style>
  .spinner {
    display: inline-block;
    border: 0.3em solid var(--color-spinner-border, lightgray);
    background-color: var(--color-spinner-bg, transparent);
    border-radius: 50%;
    width: 0.4em;
    height: 0.4em;
  }

  .spinner.loading {
    border-top-color: var(--color-spinner-border-loading, rgb(27, 209, 255));
    background-color: var(
      --color-spinner-bg-loading,
      var(--color-spinner-bg, transparent)
    );
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="spinner" class:loading={!!loading} />