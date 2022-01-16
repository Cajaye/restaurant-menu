<script lang="ts">
  import { Link, useNavigate } from "svelte-navigator";
  import { itemsInCart } from "../stores/cartstore";
  import { token } from "../stores/token";
  const navigate = useNavigate();
  $: isAuthenticated = $token;
  let toggleMenu = false;
  const toggle = (bool: boolean): boolean => {
    return (toggleMenu = bool);
  };
  import { useLocation } from "svelte-navigator";

  const location = useLocation();
  $: address = $location.pathname;
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

    <nav class="md:block {toggleMenu === false ? 'hidden' : ''}">
      <ul>
        <li
          class="navItems {address === '/' ? 'border-b-2 border-JetBlack' : ''}"
        >
          <Link to="../">Home</Link>
        </li>
        <li
          class="navItems {address === '/menu'
            ? 'border-b-2 border-JetBlack'
            : ''}"
        >
          <Link to="../menu">Menu</Link>
        </li>
        <li
          class="navItems {address === '/reviews'
            ? 'border-b-2 border-JetBlack'
            : ''}"
        >
          <Link to="../reviews">Reviews</Link>
        </li>
        <li
          class="navItems {address === '/about'
            ? 'border-b-2 border-JetBlack'
            : ''}"
        >
          <Link to="../about">About</Link>
        </li>
        <li
          class="navItems {address === '/gallery'
            ? 'border-b-2 border-JetBlack'
            : ''}"
        >
          <Link to="../gallery">Gallery</Link>
        </li>

        <Link to="../cart">
          <li class="navItems relative mt-5 md:mt-0">
            <div
              class="bg-JetBlack p-0.5 rounded-full w-5 h-5 text-xs absolute top-[-14px] md:right-[-17px] left-5"
            >
              <p class="text-center text-white font-bold">
                {$itemsInCart}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline cursor-pointer mb-1.5 md:mb-0"
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
        </Link>

        <!--If token does not exist show the login and resiter buttons if it does exists show to logout button-->
        {#if $token === null}
          <li class="inline mr-2">
            <Link to="../login">
              <input
                class="rounded-md px-2 bg-gray-100 py-px cursor-pointer"
                type="button"
                value="login"
                name="login"
              />
            </Link>
          </li>
          <li class="md:inline mr-2 text-center my-2 md:my-2">
            <Link to="../register">
              <input
                class="rounded-md px-2 py-px bg-JetBlack text-white cursor-pointer font-semibold"
                type="button"
                value="Create Account"
                name="Create Account"
              />
            </Link>
          </li>
        {:else}
          <li class="md:inline mr-2 text-center my-2 md:my-2">
            <input
              on:click={() => {
                localStorage.removeItem("token");
                window.location.reload();
                if (!$token) {
                  navigate("/");
                }
              }}
              class="rounded-md px-2 py-px bg-JetBlack text-white cursor-pointer font-semibold"
              type="button"
              value="logout"
              name="Log out"
            />
          </li>
        {/if}
      </ul>
    </nav>
  </div>
</header>
