import { readable } from 'svelte/store';
import { onMount } from "svelte";

interface Card {
    id?: number;
    title: string;
    price: number;
    desciption: string;
    image: string;
    amount: number;
  }

export let cards:Readable<Card[]> = readable([])


  onMount(async () => {
    try {
      const url = "http://localhost:5000/api/cards";
      const res = await fetch(url);
      const data = await res.json();
      cards = data;
    } catch (error) {
        if (error) {
            console.log(error);
        }
    }
  });