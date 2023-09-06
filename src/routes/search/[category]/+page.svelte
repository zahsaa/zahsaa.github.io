<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<main>
  <h2>Show results for: {data.params.category}</h2>
  <hr />

  <div>
    {#each data.response as item}
      <article>
        {#each Object.entries(item) as [key, value]}
          <p class={key}>
            <strong>{key}: </strong> 
            {#if typeof value === 'object'}
              <!-- Value is an object, display its properties -->
              <ul>
                {#each Object.entries(value) as [subKey, subValue]}
                  <li>{subKey}: {subValue}</li>
                {/each}
              </ul>
            {:else}
              <!-- Value is a string -->
              {value}
            {/if}
          </p>
        {/each}
      </article>
    {/each}
  </div>
</main>

<style> 


.id{
    color:green
  }
  </style>

 
