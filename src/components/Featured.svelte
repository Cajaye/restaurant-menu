<script lang="ts">
  import supabase from "../lib/db";
  import { onMount } from "svelte";
  import cardburger from "../assets/cardburger.jpg";
  import friedChicken from "../assets/friedchicken.jpg";
  import curry from "../assets/curry.jpg";
  import steak from "../assets/steak.jpg";
  //step 1 - design and code the cards
  //step 2 - figure out the thing with supabase
  //finally - you did it!
  let numberForCart = 0;
  const increment = () => {
    if (numberForCart >= 20) {
      numberForCart = 20;
      alert("Clear cart");
    } else {
      numberForCart++;
    }
  };
  const decrement = () => {
    if (numberForCart <= 0) {
      numberForCart = 0;
    } else {
      numberForCart--;
    }
  };

  interface Card {
    id?: number;
    title: string;
    price: number;
    desciption: string;
    image: string;
  }

  let cards: Card[] = [
    {
      id: 1,
      title: "Fried Chicken",
      price: 15.0,
      desciption: "Lorem ipsum dolor sit amet consectetur",
      image: friedChicken,
    },
    {
      id: 0,
      title: "Burger",
      price: 20.0,
      desciption: "Lorem ipsum dolor sit amet consectetur",
      image: cardburger,
    },
    {
      id: 2,
      title: "Curry",
      price: 28,
      desciption: "Lorem ipsum dolor sit amet consectetur",
      image: steak,
    },
  ];
</script>

<article class="mt-14 h-screen">
  <div>
    <h1 class="text-4xl text-center">Meals of the month</h1>
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
            <p class="text-gray-700">{card.desciption}</p>
          </div>
          <div class="inline-flex">
            <button
              id="btnOne"
              on:click={decrement}
              class="bg-JetBlack text-white font-semibold w-6 h-6 rounded-md {numberForCart ===
              0
                ? 'cursor-not-allowed'
                : ''}">-</button
            >
            <p class="mx-3">{numberForCart}</p>
            <button
              id="btnTwo"
              on:click={increment}
              class="bg-JetBlack text-white font-semibold w-6 h-6 rounded-md"
              >+</button
            >
          </div>
        </div>
        <div class="text-center">
          <button
            class="bg-JetBlack text-white font-semibold rounded-2xl px-8 py-1 mt-7"
            >Add to cart</button
          >
        </div>
      </div>
    {/each}
  </section>
</article>
