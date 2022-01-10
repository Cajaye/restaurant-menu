<script lang="ts">
  import Button from "./Button.svelte";
  import OperationButton from "./OperationButton.svelte";
  import { token } from "../stores/token";

  const BearerToken = `Bearer ${$token}`;
  const url: string = "http://localhost:5000/api/v1/cart";

  let error = "";
  let cartItems = [];

  const getCart = async () => {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: BearerToken,
        },
      });
      const data = await res.json();
      if (res.ok) {
        cartItems = data.card;
        console.log(data.amount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getCart();

  let itemId: string | number = 0;

  const purcaseItem = async () => {
    try {
      const res = await fetch(url, {
        method: "DELETE",
        body: JSON.stringify(itemId), //data will be the id of the item
        headers: {
          Authorization: BearerToken,
          "Content-type": "application/json",
          charset: "utf-8",
        },
      });
      const dataError = await res.json();
      if (res.ok) {
        error = "";
      } else {
        error = dataError.msg;
      }
    } catch (error) {
      console.log(error);
    }
  };

  import { itemsInCart } from "../stores/cartstore";
</script>

<h1 class="mainText my-3">Your Items</h1>
<section class="grid grid-cols-3 pt-8 px-8">
  {#each cartItems as item}
    <div class="shadow p-4 rounded-md mx-2">
      <div>
        <img
          class="w-full object-cover rounded-md mb-3"
          src={item.image}
          alt=""
        />
      </div>
      <div class=" flex justify-between font-semibold mb-4">
        <p class="text-lg">{item.title}</p>
        <p>${item.price}.00</p>
      </div>
      <div class="flex justify-between">
        <div>
          <p class="text-gray-900">{item.description}</p>
        </div>
        <div class="inline-flex">
          <OperationButton
            operation="-"
            on:click={() => {
              item.amount === 1 ? (item.amount = 1) : item.amount--;
            }}
          />
          <p class="mx-3">{item.amount}</p>
          <OperationButton
            operation="+"
            on:click={() => {
              item.amount >= 30 ? (item.amount = 30) : item.amount++;
            }}
          />
        </div>
      </div>
      <div class="text-center">
        <Button value="Purchase Item" on:click={() => {}} />
      </div>
    </div>
  {:else}
    <div class="mt-40 ml-80">
      <svg
        class="animate-spin h-16 w-16 text-JetBlack"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  {/each}
</section>
