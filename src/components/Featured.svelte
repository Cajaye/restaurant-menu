<script lang="ts">
  import cardburger from "../assets/cardburger.jpg";
  import friedChicken from "../assets/friedchicken.jpg";
  import steak from "../assets/steak.jpg";
  import { itemsInCart } from "../stores/cartstore";
  //step 1 - design and code the cards
  //step 2 - figure out the thing with supabase
  //finally - you did it!
  interface Card {
    id?: number;
    title: string;
    price: number;
    desciption: string;
    image: string;
    amount: number;
  }
  //array of objects to create the cards
  let cards: Card[] = [
    {
      id: 1,
      title: "Fried Chicken",
      price: 15,
      desciption: "Crispy chicken with sweet jerk sauce.",
      image: friedChicken,
      amount: 1,
    },

    {
      id: 0,
      title: "The Perfect Burger",
      price: 26,
      desciption: "Juicy patty, the bun is soft but sturdy.",
      image: cardburger,
      amount: 1,
    },
    {
      id: 2,
      title: "Steak and Fries",
      price: 38,
      desciption: "Tender and loaded with flavor.",
      image: steak,
      amount: 1,
    },
  ];
  //text-white font-semibold rounded-2xl px-8 py-1 mt-7
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
            <p class="text-gray-900">{card.desciption}</p>
          </div>
          <div class="inline-flex">
            <button
              on:click={() => {
                card.amount === 1 ? (card.amount = 1) : card.amount--;
              }}
              id="btnOne"
              class="bg-JetBlack text-white font-semibold w-6 h-6 rounded-md {card.amount ===
              1
                ? 'cursor-not-allowed'
                : ''}">-</button
            >
            <p class="mx-3">{card.amount}</p>
            <button
              on:click={() => {
                card.amount >= 30 ? (card.amount = 30) : card.amount++;
              }}
              id="btnTwo"
              class="bg-JetBlack text-white font-semibold w-6 h-6 rounded-md"
              >+</button
            >
          </div>
        </div>
        <div class="text-center">
          <button
            on:click={() => {
              itemsInCart.update((n) => (n += card.amount)); // on click take card.amount and add it to itemsInCard
              card.amount = 1;
            }}
            class="bg-JetBlack h-10 px-6 font-semibold rounded-md text-white mt-5"
            >Add to cart</button
          >
        </div>
      </div>
    {/each}
  </section>
</article>
