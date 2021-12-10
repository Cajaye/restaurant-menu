import { writable } from 'svelte/store';


interface Card {
    id?: number;
    title: string;
    price: number;
    desciption: string;
    image: string;
    amount: number;
  }


