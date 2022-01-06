<script lang="ts">
  import { Link } from "svelte-navigator";
  const loginInfo = {
    email: "",
    password: "",
  };
  let errorMessage = "";
  const url = "http://localhost:5000/api/v1/auth/login";
</script>

<section class="h-screen grid place-items-center">
  <div
    style="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;"
    class="bg-white rounded-md w-7/12 p-8 flex justify-evenly items-center flex-col"
  >
    <div class="mb-8">
      <h1 class="font-semibold text-xl text-center">Login</h1>
    </div>
    <div>
      <form action="">
        <div>
          <input
            bind:value={loginInfo.email}
            type="email"
            class="bg-gray-200 block w-full mt-8 py-2 pl-2 rounded-md"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            class="bg-gray-200 w-full my-8 py-2 pl-2 rounded-md"
            bind:value={loginInfo.password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <input
          class="bg-JetBlack text-white font-semibold rounded-md w-full py-2 cursor-pointer"
          type="submit"
          value="Login"
        />
        <p class="text-red-500">{errorMessage}</p>
        <p class="mt-6">
          Don't have an account?<Link to="../register" class="text-blue-600"
            >Sign up/Register</Link
          >
        </p>
      </form>
    </div>
  </div>
</section>
