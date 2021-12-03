<script lang="ts">
  import { itemsInCard } from "../stores/cartstore";
  let toggleMenu = false;
  const toggle = (bool: boolean): boolean => {
    return (toggleMenu = bool);
  };
</script>

<header class="flex justify-between text-JetBlack m-6 md:items-center">
  <div>
    <h1 class="mainText">
      F<span>u</span>l
    </h1>
  </div>
  <div class="self-center">
    <div>
      <svg
        on:click={() => {
          if (!toggleMenu) {
            toggle(true);
          } else {
            toggle(false);
          }
        }}
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 cursor-pointer md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#2D2D2D"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
    <nav class=" md:block {toggleMenu === false ? 'hidden' : ''}">
      <ul>
        <li class="navItems border-b-2 border-JetBlack">
          <a href="home.com">Home</a>
        </li>
        <li class="navItems">
          <a href="menue.com">Menu</a>
        </li>
        <li class="navItems">
          <a href="service.com">Service</a>
        </li>
        <li class="navItems">
          <a href="about.com">About</a>
        </li>
        <li class="navItems">
          <a href="gallery.com">Gallery</a>
        </li>
        <li class="navItems relative mt-5 md:mt-0">
          <div
            class="bg-JetBlack rounded-full w-5 h-5 text-xs absolute top-[-14px] md:right-[-17px] left-5"
          >
            <p class=" p-0.5 text-center text-white font-bold">
              {$itemsInCard}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 inline cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </li>
        <li class="inline mr-2">
          <input
            class="rounded-md px-2 bg-gray-100 py-px cursor-pointer"
            type="button"
            value="login"
            name="login"
          />
        </li>
        <li class="inline mr-2">
          <input
            class="rounded-md px-2 py-px bg-JetBlack text-white cursor-pointer font-semibold"
            type="button"
            value="Create Account"
            name="Create Account"
          />
        </li>
      </ul>
    </nav>
  </div>
</header>
