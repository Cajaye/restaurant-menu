<script lang="ts">
  import { fade } from "svelte/transition";
  import Header from "./Header.svelte";
  import Skeleton from "./Skeleton.svelte";
  let y;
  type toggle = true | false;

  let uporDown: toggle = false;

  const toggle = (state: boolean) => {
    uporDown = state;
  };
</script>

<header class={y >= 167 ? "invisible" : "block"}>
  <Header />
</header>
<section class="h-screen p-2">
  <div
    class="w-full {y >= 167
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
        autocomplete="off"
        class="bg-gray-100 rounded-md py-2 md:pl-16 mr-4 pl-12 min-w-[70%]"
        type="search"
        name="search"
        id="search"
        placeholder="Search for an item..."
      />
      <div
        on:click={() => {
          if (uporDown == false) {
            toggle(true);
          } else {
            toggle(false);
          }
        }}
        class="flex items-center cursor-pointer relative"
      >
        <p class="mr-2">Sort by</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 {uporDown === true
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
        {#if uporDown === true}
          <div
            transition:fade={{ delay: 50, duration: 140 }}
            class="absolute bottom-0 mt-2 h-48 border border-gray-200 font-semibold leading-8 w-40 p-5 right-0 top-7 bg-white rounded-md z-10"
          >
            <ul>
              <li>Feautured</li>
              <li>Price low-high</li>
              <li>Price high-low</li>
              <li>Rating low-high</li>
              <li>Rating high-low</li>
            </ul>
          </div>
        {/if}
      </div>
    </div>
  </div>
  <section class="grid md:grid-cols-3 mt-20">
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </section>
</section>

<svelte:window bind:scrollY={y} />
