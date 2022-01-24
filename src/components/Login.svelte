<script lang="ts">
  import { Link, useNavigate } from "svelte-navigator";
  const navigate = useNavigate();
  import Header from "./Header.svelte";
  const loginInfo = {
    email: "",
    password: "",
  };
  let errorMessage = "";
  const url = "https://restaurant-01api.herokuapp.com/api/v1/auth/login";

  const clearInputs = () => {
    loginInfo.email = "";
    loginInfo.password = "";
  };
  const login = async () => {
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
          "Content-type": "application/json",
          charset: "utf-8",
        },
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        const { fullname, userId, email } = data.user;
        localStorage.setItem("fullname", fullname);
        localStorage.setItem("userId", userId);
        localStorage.setItem("email", email);
        clearInputs();
        //redirect to success
        navigate("../success");
      }
    } catch (error) {
      console.error(error);
    }
  };
</script>

<Header />
<section class="h-screen grid place-items-center">
  <div
    style="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;"
    class="bg-white rounded-md md:w-[70%] w-[90%] p-12 flex justify-evenly items-center flex-col"
  >
    <div class="mb-8">
      <h1 class="font-semibold text-xl text-center">Login</h1>
    </div>
    <div>
      <form action="" on:submit|preventDefault={login}>
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
