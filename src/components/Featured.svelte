<script lang="ts">
  import { itemsInCart } from "../stores/cartstore";
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import OperationButton from "./OperationButton.svelte";

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
      <div class="shadow p-4 rounded-md mx-2">
        <div>
          <img
            class="w-full object-cover rounded-md mb-3"
            src={card.image}
            alt=""
          />
        </div>
        <div class=" flex justify-between font-semibold mb-4">
          <p class="text-lg">{card.title}</p>
          <p>${card.price}.00</p>
        </div>
        <div class="flex justify-between">
          <div>
            <p class="text-gray-900">{card.description}</p>
          </div>
          <div class="inline-flex">
            <OperationButton
              operation="-"
              on:click={() => {
                card.amount === 1 ? (card.amount = 1) : card.amount--;
              }}
            />
            <p class="mx-3">{card.amount}</p>
            <OperationButton
              operation="+"
              on:click={() => {
                card.amount >= 30 ? (card.amount = 30) : card.amount++;
              }}
            />
          </div>
        </div>
        <div class="text-center">
          <Button
            on:click={() => {
              itemsInCart.update((n) => (n += card.amount)); // on click take card.amount and add it to itemsInCard
              card.amount = 1;
            }}
          />
        </div>
      </div>
    {:else}
      <p>Loading...</p>
    {/each}
  </section>
</article>
