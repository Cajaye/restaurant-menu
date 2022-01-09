<script lang="ts">
  import Button from "./Button.svelte";
  import OperationButton from "./OperationButton.svelte";

  export let image: string;
  export let title: string;
  export let description: string;
  export let price: number;
  export let amount: number;
</script>

<div class="shadow p-4 rounded-md mx-2">
  <div>
    <img class="w-full object-cover rounded-md mb-3" src={image} alt="" />
  </div>
  <div class=" flex justify-between font-semibold mb-4">
    <p class="text-lg">{title}</p>
    <p>${price}.00</p>
  </div>
  <div class="flex justify-between">
    <div>
      <p class="text-gray-900">{description}</p>
    </div>
    <div class="inline-flex">
      <OperationButton operation="-" />
      <p class="mx-3">{amount}</p>

      <OperationButton operation="+" />
    </div>
  </div>
  <div class="text-center">
    <Button />
  </div>
</div>
