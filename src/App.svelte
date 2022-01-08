<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Home from "./components/Home.svelte";
  import Login from "./components/Login.svelte";
  import SignUp from "./components/SignUp.svelte";
  import Reviews from "./components/Reviews.svelte";
  import Success from "./components/Success.svelte";
  import Cart from "./components/Cart.svelte";
</script>

<Router>
  <main>
    <Route path="/">
      <Home />
    </Route>
    <Route path="login">
      <Login />
    </Route>
    <Route path="reviews">
      <Reviews />
    </Route>
    <Route path="register">
      <SignUp />
    </Route>
    <Route path="success">
      <Success />
    </Route>
    <Route path="cart">
      <Cart />
    </Route>
  </main>
</Router>

<style>
</style>
