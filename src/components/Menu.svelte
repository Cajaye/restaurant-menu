<script lang="ts">
  import type { Card } from "./Featured.svelte";
  import { fade } from "svelte/transition";
  import Header from "./Header.svelte";
  import Skeleton from "./Skeleton.svelte";
  import OperationButton from "./OperationButton.svelte";
  import Button from "./Button.svelte";
  import { token } from "../stores/token";
  import { useNavigate } from "svelte-navigator";
  const navigate = useNavigate();
  let y: number;
  type toggle = true | false;

  let uporDown: toggle = false;

  const toggle = (state: boolean) => {
    uporDown = state;
  };

  let menuCards: Card[] = [];
  let defaultItems: Card[] = [];

  const url = `https://restaurant-01api.herokuapp.com/api/v1/cards`;

  const getFilteredData = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) {
        menuCards = data.card;
        defaultItems = data.card;
      } else {
        throw new Error(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getFilteredData(url);

  $: isAuthenticated = $token;
  const BearerToken = `Bearer ${$token}`;
  let successOrErrorMessage = "";

  const addItem = async ({ added, amount }) => {
    try {
      const res = await fetch(
        "https://restaurant-01api.herokuapp.com/api/v1/cart",
        {
          method: "POST",
          body: JSON.stringify({ added, amount }), //data will be the id of the item
          headers: {
            Authorization: BearerToken,
            "Content-type": "application/json",
            charset: "utf-8",
          },
        }
      );
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

  let search: string = "";
  $: {
    if (search && search.replace(/\s/g, "").length) {
      menuCards = menuCards.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase().trim())
      );
    } else {
      menuCards = [...defaultItems];
    }
  }
</script>

<header class={y >= 167 ? "invisible" : "block"}>
  <Header />
</header>
<section class="h-screen p-2 relative">
  <div
    class="w-full select-none {y >= 167
      ? 'top-0 transition-all fixed z-10 p-4 bg-white'
      : ''}"
  >
    <div class="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 cursor-pointer mr-[-35px] z-30"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        bind:value={search}
        autocomplete="off"
        class="bg-gray-100 rounded-md py-2 md:pl-16 mr-4 pl-12 min-w-[70%]"
        type="search"
        name="search"
        id="search"
        placeholder="Search for an item..."
      />
      <div class="flex items-center cursor-pointer relative">
        <div
          on:click={() => {
            if (uporDown == false) {
              toggle(true);
            } else {
              toggle(false);
            }
          }}
        >
          <p class="mr-2 text-JetBlack inline">Sort by</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 inline w-5 {uporDown === true
              ? 'rotate-180 transition-all'
              : 'transition-all'}"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {#if uporDown === true}
          <div
            transition:fade={{ delay: 50, duration: 140 }}
            class="absolute bottom-0 mt-2 h-40 border border-gray-200 font-semibold leading-8 w-40 p-4 right-0 top-7 bg-white rounded-md z-10"
          >
            <ul class="text-JetBlack">
              <li on:click={() => getFilteredData(url + "?sort=price")}>
                Price low-high
              </li>
              <li on:click={() => getFilteredData(url + "?sort=-price")}>
                Price high-low
              </li>
              <li on:click={() => getFilteredData(url + "?sort=rating")}>
                Rating low-high
              </li>
              <li on:click={() => getFilteredData(url + "?sort=-rating")}>
                Rating high-low
              </li>
            </ul>
          </div>
        {/if}
      </div>
    </div>
  </div>
  <section class="grid md:grid-cols-3 mt-20 space-y-5 md:space-y-0">
    {#each menuCards as card}
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
        <div class="flex items-center justify-end">
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
    {:else}
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    {/each}
  </section>
</section>

<svelte:window bind:scrollY={y} />
