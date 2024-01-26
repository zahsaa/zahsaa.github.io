<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";

  let eliza = new ElizaBot();

  let chat = [{ user: "eliza", text: eliza.getInitial() }];

  async function write(message) {
    // TODO: yeet in the new message

    var element = document.getElementById("visible");
    element.style.display = "flex"; 

    // random delay for writing
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    element.style.display = "none"; 

    // TODO: write the text
  
  
 
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
    <article>
      <span>
        {chat[0].text}
      </span>
    </article>
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