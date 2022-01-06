import { writable } from "svelte/store"

export const fullname = writable(localStorage.getItem('fullname'))
export const email = writable(localStorage.getItem('email'))
export const userId = writable(localStorage.getItem('userId'))