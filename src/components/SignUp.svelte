<script lang="ts">
  import { Link } from "svelte-navigator";

  let firstname: string;
  let lastname: string;
  let password: string;
  let email: string;

  const userInfo = {
    firstname: firstname,
    lastname: lastname,
    password: password,
    email: email,
  };

  const url = "http://localhost:5000/api/v1/auth/register";
</script>

<section class="bg-gray-100 h-screen grid place-items-center ">
  <div class="bg-white rounded-md">
    <h1 class="font-semibold text-xl text-center">Sign Up</h1>
    <form action="">
      <input
        bind:value={firstname}
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
      />
      <input
        bind:value={lastname}
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
      />
      <div>
        <input
          bind:value={email}
          type="email"
          class="block"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          bind:value={password}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <input type="submit" value="Create Account" />
      <p>
        Already have an acccount?<Link to="login" class="text-blue-600"
          >Log in</Link
        >
      </p>
    </form>
  </div>
</section>
