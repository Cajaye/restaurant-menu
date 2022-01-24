<script lang="ts">
  import Button from "./Button.svelte";
  import { token } from "../stores/token";
  import Skeleton from "./Skeleton.svelte";
  import Header from "./Header.svelte";

  const BearerToken = `Bearer ${$token}`;
  const url: string = "https://restaurant-01api.herokuapp.com/api/v1/cart";

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
      }
    } catch (error) {
      console.log(error);
    }
  };

  getCart();
</script>

<Header />
<h1 class="mainText my-3 mt-16">Your Items</h1>
<section class="grid lg:grid-cols-3 pt-8">
  {#each cartItems as item}
    <div class="shadow p-4 rounded-md mx-2">
      <div>
        <img
          class="w-full object-cover rounded-md mb-3 max-h-64"
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
  {:else}
    <Skeleton />
    <Skeleton />
    <Skeleton />
  {/each}
</section>
