import { writable } from "svelte/store";

export let itemsInCart = writable(0);

//Maybe map through the amounts and add them
