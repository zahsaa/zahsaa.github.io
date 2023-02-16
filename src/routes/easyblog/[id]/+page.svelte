<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>yo</h1>

<svelte:component this={data.markdown} />

{#await  new Promise(r => setTimeout(r, 5000))}
  <h1>logging in...</h1>
{:then e} 
  <h1>signed in :-)</h1>
{/await}