<script lang="ts">
  export let name: string;
  export let dateVisited: string;
  export let picture: string;

  let className: string;
  export { className as class };
</script>

<section class="p-6 {className} rounded-md">
  <div class="flex items-center p-5 hover:cursor-pointer">
    <div>
      <img class="w-28 h-28 object-cover rounded-full" src={picture} alt="" />
    </div>
    <div class="leading-loose ml-12">
      <p class="text-lg font-semibold">{name}</p>
      <p class="text-gray-700">Visited on {dateVisited}</p>
    </div>
  </div>
</section>
