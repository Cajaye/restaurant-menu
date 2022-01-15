<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Home from "./components/Home.svelte";
  import Login from "./components/Login.svelte";
  import SignUp from "./components/SignUp.svelte";
  import Reviews from "./components/Reviews.svelte";
  import Success from "./components/Success.svelte";
  import Cart from "./components/Cart.svelte";
  import Skeleton from "./components/Skeleton.svelte";
  import { token } from "./stores/token";
  $: isAuthenticated = $token;
</script>

<Router>
  <main>
    <Route path="/">
      <Home />
    </Route>
    <Route path="login">
      <Login />
    </Route>
    <Route path="register">
      <SignUp />
    </Route>
    {#if isAuthenticated}
      <Route path="cart">
        <Cart />
      </Route>
    {:else}
      <Route path={"cart"} component={Login} />
    {/if}
    {#if isAuthenticated}
      <Route path="reviews">
        <Reviews />
      </Route>
    {:else}
      <Route path={"reviews"} component={Login} />
    {/if}
    {#if isAuthenticated}
      <Route path="success">
        <Success />
      </Route>
    {/if}
    <Route path="skeleton">
      <Skeleton />
    </Route>
  </main>
</Router>

<style>
  :global(:focus) {
    outline: none;
  }
</style>
