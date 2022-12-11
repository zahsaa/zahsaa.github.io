<script>
  import { enhance } from "$app/forms";
  import { beforeNavigate, invalidate } from "$app/navigation";
  import "@picocss/pico";
  import "elizabot";
  import ElizaBot from "elizabot";

  beforeNavigate(() => {
    invalidate(); // force csr to "unload" the imported css on this page
    // try commenting this out and navigate using href links and see how the
    // picocss is carried with us to other pages. its an ugly hack.
  });

  let eliza = new ElizaBot();

  let chat = [{ user: "eliza", text: eliza.getInitial() }];

  async function write(message) {
    // TODO: yeet in the new message

    // random delay for writing
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

    // TODO: write the text
  }
</script>

<div class="container">
  <h1>TODO: Complete assignment</h1>
  <div class="scrollable">
    <!-- TODO: loop over the messages and display them -->
    <article>
      <span>
        {chat[0].text}
      </span>
    </article>
  </div>
  <form
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
