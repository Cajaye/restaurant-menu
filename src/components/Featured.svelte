<script lang="ts">
  import { itemsInCart } from "../stores/cartstore";
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import OperationButton from "./OperationButton.svelte";
  import Card from "./Card.svelte";

  interface Card {
    id?: number;
    title: string;
    price: number;
    description: string;
    image: string;
    amount: number;
  }

  export let cards: Card[] = [];

  onMount(async () => {
    try {
      const url = "http://localhost:5000/api/v1/cards?featured=true";
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) {
        cards = data.card;
      } else {
        throw new Error(data);
      }
    } catch (error) {
      console.log(error);
    }
  });
</script>

<article class="mt-14 h-full">
  <div>
    <h1 class="mainText mb-3">Popular meals</h1>
  </div>
  <section class="grid md:grid-cols-3 mt-8 space-y-4 md:space-y-0">
    {#each cards as card}
      <Card
        image={card.image}
        title={card.title}
        description={card.description}
        price={card.price}
        amount={card.amount}
      />
    {:else}
      <p>Loading...</p>
    {/each}
  </section>
</article>
