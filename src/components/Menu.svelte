<script lang="ts">
  import Header from "./Header.svelte";
  import Skeleton from "./Skeleton.svelte";
  let y;

  //add a searchbar with some filters beside it
  //filter by title,price and rating ascending and descending order
  //top-10
</script>

<Header />
<section class="h-screen p-12">
  <div class="w-full">
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
        autocomplete="off"
        class="bg-gray-100 rounded-md py-2 md:pl-16 pl-12 min-w-[70%]"
        type="search"
        name="search"
        id="search"
        placeholder="Search for an item..."
      />
    </div>
  </div>
  <section class="grid grid-cols-3 mt-20">
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </section>
</section>
