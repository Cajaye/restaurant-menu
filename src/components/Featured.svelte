<script lang="ts" context="module">
  export interface Card {
    _id: number | string;
    title: string;
    price: number;
    description: string;
    image: string;
    amount: number;
    rating: number;
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import Skeleton from "./Skeleton.svelte";
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();

  let cards: Card[] = [];

  onMount(async () => {
    try {
      const url = "https://restaurant-01api.herokuapp.com/api/v1/cards?featured=true";
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
            class="w-full object-cover rounded-md mb-3 max-h-64"
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
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="#FBBF24"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <p>{card.rating}</p>
          </div>
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
