<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";
  import { each } from "svelte/internal";

  let eliza = new ElizaBot();

  let chat = [{ user: "eliza", text: eliza.getInitial() }];

  async function write(message) {
    // TODO: yeet in the new message
    chat.push({user:"me", text: message})
    chat = chat
    var element = document.getElementById("visible");
    element.style.display = "flex"; 

    // random delay for writing
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    element.style.display = "none"; 

    // TODO: write the text

    chat = chat.concat({
              user: 'eliza',
              text: eliza.transform(message)
            })


 
   } 
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


<div class="container">
  <h1>TODO: Complete assignment</h1>
  <div class="scrollable">
    <!-- TODO: loop over the messages and display them -->
    {#each chat as message}
     <article class={message.user}>
      <span>
        {message.text}
      </span>
    </article>
    {/each}
    <article id="visible">
      <span class= "circle"></span>
      <span class= "circle"></span>
      <span class= "circle"></span>
    </article>

  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);

      // TODO: reset the form using form.reset()
      form.reset()
    }}
  >
    <input type="text" name="text" />
  </form>
  
     
</div>
<style>
#visible {
  height:60px;
  width:100px;
  display:none;
  justify-content: center;
  align-items: center;
  padding: 0%;
}
.eliza{
  border-width: 5px;
  border-style:solid;
  border-color: rgba(87, 190, 254, 0.666);
  border-radius: 50%;

}

.me{
  height: 20px;
  border-width: 5px;
  border-style:groove;
  border-color: rgba(255, 74, 74, 0.633);
  border-radius: 5%;

}
.circle {
  height:10px;
  width:10px;
  border-radius: 50%;
  background-color: black;
  margin-left: 5px;
  
  animation-name: typing;
  animation-duration: 1000ms; 
  animation-timing-function: ease; 
  animation-iteration-count: infinite;

}

@keyframes typing{
  0% {transform: scale(1);}
  50% {transform: scale(1.4);}
  100% {transform: scale(1);}
}
/* CSS-stilar för .circle med index 1 (den första cirkeln) */
.circle:nth-child(1) {
animation-delay: 0ms; /* Ingen fördröjning */
}
/* CSS-stilar för .circle med index 2 (den andra cirkeln) */
.circle:nth-child(2) {
animation-delay: 333ms; /* Starta animationen efter 333 millisekunder
(ms) */
}
/* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
.circle:nth-child(3) {
animation-delay: 666ms; /* Starta animationen efter 666 ms */
}
</style>