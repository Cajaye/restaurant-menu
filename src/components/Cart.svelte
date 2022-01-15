<script lang="ts">
  import Button from "./Button.svelte";
  import OperationButton from "./OperationButton.svelte";
  import { token } from "../stores/token";
  import Loader from "./Loader.svelte";

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
        console.log(data.card);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getCart();

  import { itemsInCart } from "../stores/cartstore";
</script>

<h1 class="mainText my-3">Your Items</h1>
<section class="grid lg:grid-cols-3 pt-8">
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
        <Button
          value="Purchase Item"
          on:click={async () => {
            try {
              const res = await fetch(url, {
                method: "DELETE",
                body: JSON.stringify({ itemId: item._id }), //data will be the id of the item
                headers: {
                  Authorization: BearerToken,
                  "Content-type": "application/json",
                  charset: "utf-8",
                },
              });
              const dataError = await res.json();
              if (res.ok) {
                getCart();
                error = "";
              } else {
                error = dataError.msg;
              }
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </div>
    </div>
  {/each}
</section>
