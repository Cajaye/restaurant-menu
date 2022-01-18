<script lang="ts">
  import { itemsInCart } from "../stores/cartstore";
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import Skeleton from "./Skeleton.svelte";
  import OperationButton from "./OperationButton.svelte";
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();

  interface Card {
    _id: number | string;
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

  import { token } from "../stores/token";
  import Success from "./Success.svelte";
  $: isAuthenticated = $token;

  const BearerToken = `Bearer ${$token}`;
  const url: string = "http://localhost:5000/api/v1/cart";

  let successOrErrorMessage = "";

  const addItem = async ({ added, amount }) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ added, amount }), //data will be the id of the item
        headers: {
          Authorization: BearerToken,
          "Content-type": "application/json",
          charset: "utf-8",
        },
      });
      const message = await res.json();
      if (res.ok) {
        successOrErrorMessage = message.msg;
      } else {
        successOrErrorMessage = message.msg;
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<article class="mt-14 h-full">
  <div>
    <h1 class="mainText mb-3">Popular meals</h1>
  </div>
  <section class="grid lg:grid-cols-3 mt-8">
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
            value="Add to cart"
            on:click={() => {
              if (!isAuthenticated) {
                navigate("/register");
              } else {
                addItem({ added: card._id, amount: card.amount });
              }
            }}
          />
        </div>
      </div>
    {:else}
      <Skeleton />
      <Skeleton />
      <Skeleton />
    {/each}
    <p
      class="{successOrErrorMessage.startsWith('D')
        ? 'text-red-500'
        : 'text-green-500'} text-center"
    >
      {successOrErrorMessage}
    </p>
  </section>
</article>
