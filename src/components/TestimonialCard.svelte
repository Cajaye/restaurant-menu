<script lang="ts">
  export let name: string;
  export let dateVisited: string;
  export let picture: string;

  let className: string;
  export { className as class };
</script>

<section class="p-6 {className} ml-2">
  <div class="flex items-center p-5 hover:cursor-pointer">
    <div>
      <img
        class=" mb-8 w-32 h-32 object-cover rounded-full"
        src={picture}
        alt=""
      />
    </div>
    <div class="leading-loose ml-12">
      <p class="text-lg font-semibold">{name}</p>
      <p class="text-gray-700">Visited on {dateVisited}</p>
    </div>
  </div>
</section>
