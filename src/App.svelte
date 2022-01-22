<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Home from "./components/Home.svelte";
  import Menu from "./components/Menu.svelte";
  import Login from "./components/Login.svelte";
  import SignUp from "./components/SignUp.svelte";
  import Reviews from "./components/Reviews.svelte";
  import Success from "./components/Success.svelte";
  import Cart from "./components/Cart.svelte";
  import About from "./components/About.svelte";
  import Gallery from "./components/Gallery.svelte";
  import { token } from "./stores/token";
  $: isAuthenticated = $token;
</script>

<Router>
  <main>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <SignUp />
    </Route>
    {#if isAuthenticated}
      <Route path="/cart">
        <Cart />
      </Route>
    {:else}
      <Route path={"/cart"} component={Login} />
    {/if}
    {#if isAuthenticated}
      <Route path="/reviews">
        <Reviews />
      </Route>
    {:else}
      <Route path={"/reviews"} component={Login} />
    {/if}
    {#if isAuthenticated}
      <Route path="/success">
        <Success />
      </Route>
    {/if}
    <Route path="/menu">
      <Menu />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/gallery">
      <Gallery />
    </Route>
  </main>
</Router>

<style>
  :global(:focus) {
    outline: none;
  }
</style>
