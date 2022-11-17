import { writable } from "svelte/store";

/* initialize the story_id to '1' if the story_id has not already been stored */
const story_id =  window.localStorage.getItem('story_id') ?? "1"
/* https://svelte.dev/tutorial/writable-stores */
export const story_id_store=writable(story_id)

/* https://svelte.dev/tutorial/auto-subscriptions */
story_id_store.subscribe((value) => {
        /* on changes to the story_id_store, update the localStorage in the browser. */
        window.localStorage.setItem('story_id', value);
        console.log(value)
})

