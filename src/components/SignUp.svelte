<script lang="ts">
  import { Link, useNavigate } from "svelte-navigator";
  import Header from "./Header.svelte";

  const navigate = useNavigate();

  const userInfo = {
    firstname: "",
    lastname: "",
    password: "",
    email: "",
  };

  const clearInputs = () => {
    userInfo.firstname = "";
    userInfo.lastname = "";
    userInfo.password = "";
    userInfo.email = "";
  };

  let errorMessage = "";

  const url = "http://localhost:5000/api/v1/auth/register";

  const signUp = async () => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userInfo),
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
    } else {
      errorMessage = "Please fill out all input fields";
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
      <h1 class="font-semibold text-xl text-center">Sign Up/Register</h1>
    </div>

    <form on:submit|preventDefault={signUp} action="">
      <input
        class="bg-gray-200 py-2 pl-2 rounded-md w-full md:w-auto md:mb-0 mb-8"
        bind:value={userInfo.firstname}
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
      />
      <input
        class="bg-gray-200 py-2 pl-2 rounded-md w-full md:w-auto"
        bind:value={userInfo.lastname}
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
      />
      <div>
        <input
          bind:value={userInfo.email}
          type="email"
          class="bg-gray-200 block w-full mt-8 py-2 pl-2 rounded-md"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          class="bg-gray-200 w-full my-8 py-2 pl-2 rounded-md"
          bind:value={userInfo.password}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <input
        class="bg-JetBlack text-white font-semibold rounded-md w-full py-2 cursor-pointer"
        type="submit"
        value="Create Account"
      />
      <p class="text-red-500 mt-4">{errorMessage}</p>
      <p class="mt-4">
        Already have an acccount?<Link to="../login" class="text-blue-600"
          >Log in</Link
        >
      </p>
    </form>
  </div>
</section>
