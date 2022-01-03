<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Home from "./components/Home.svelte";
  import Login from "./components/Login.svelte";
  import SignUp from "./components/SignUp.svelte";
  import Reviews from "./components/Reviews.svelte";
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
  </main>
</Router>

<style>
</style>
