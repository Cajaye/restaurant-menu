import {readable } from "svelte/store"
import type { Readable } from "svelte/store"
interface Card {
    id?: number;
    title: string;
    price: number;
    desciption: string;
    image: string;
    amount: number;
  }

  export let cards: Readable<Card[]> = readable([]);

  const fetchData = async () => {
    try {
      const url = "http://localhost:5000/api/cards/3";
      const res = await fetch(url);
      const data = await res.json();
      cards = data;
    } catch (error) {
      console.log(error);
    }
};
