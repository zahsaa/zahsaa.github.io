<script>
  import { onMount } from "svelte";
  import toast, { Toaster } from "svelte-french-toast";

  let items = [];
  let count = 0;
  let lives = 10;

  for (let index = 0; index < 60; index++) {
    items.push({ active: false });
  }

  console.log(items);

  onMount(() => {
    let controller = setInterval(() => {
      if (lives > 0) {
        let index = Math.floor(Math.random() * 60);
        items[index].active = true;
        setTimeout(() => {
          if (items[index].active == true && lives > 0) {
            items[index].active = false;
            lives--;
          }
        }, 1000);
      } else {
        clearInterval(controller);
      }
    }, 1000);
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="/pico.min.css" />
  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>

<article>
  <h1>Lives: {lives}</h1>
</article>
<hr />
{#if lives <= 0}
  <main class="container">
    <header>
      <h1>YOU LOOSE</h1>
    </header>
    <button
      on:click={() => {
        location.reload();
      }}>RESET</button
    >
  </main>
{:else}
  <main class="container">
    <div class="mygrid">
      {#each items as item}
        <div
          class:active={item.active == true}
          on:click={() => {
            if (item.active) {
              item.active = false;
              count++;
              toast.success(count.toString());
            } else {
              count = 0;
              lives--;
              toast.error("RESET!");
            }
          }}
          class="button"
        />
      {/each}
    </div>
  </main>
  <Toaster />
{/if}

<style>
  .mygrid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 10px;
    height: 100%;
    width: 100%;
  }

  .button {
    width: 80px;
    height: 80px;
    background-color: red;
    padding: 10px;
  }

  main {
    height: 90vh;
  }

  .active {
    background-color: green;
  }

  article {
    position: fixed;
    width: 50px;
  }
</style>
