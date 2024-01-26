<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>


<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <!-- TODO: Style the results -->
  <div>
    {#each data.response as item}
    {#each Object.entries(item) as [key,value]}
      <article class={key}><p>{key}: {value}</p></article>
    {/each}
    {/each}
  </div>
</main>

 
<style>

.id{
    background-color: aquamarine;  
  }
  
.uid{
    background-color: rgb(141, 213, 255);  
  }
  
.type{
    background-color: rgb(226, 66, 66);  
    height: 10px;
    border-width: 5px;
    border-style:ridge;
    border-color: rgb(127, 42, 42);
    border-radius: 3%;
  }
  .credit_card_type{
    background-color: antiquewhite;
    border-width: 5px;
    border-style:ridge;
    border-color: black;
    border-radius: 3%;

  }
</style>