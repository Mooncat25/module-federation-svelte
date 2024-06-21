<script>let count = 0;
function increment() {
  count++;
}
</script>

<button type="button" on:click={increment}>Count: {count}</button>