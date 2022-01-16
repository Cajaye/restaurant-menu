<script lang="ts">
  const year = new Date().getFullYear();
  import { Link } from "svelte-navigator";
</script>

<footer
  class="flex space-y-6 md:items-end justify-between p-8 md:flex-row flex-col"
>
  <div>
    <div class="mb-3">
      <h1 class="footerHeadings">SERVICES</h1>
    </div>
    <div class="leading-8 text-gray-900">
      <p>Branding</p>
      <p>Design</p>
      <p>Marketing</p>
      <p>Advertisement</p>
    </div>
  </div>
  <div>
    <div class="mb-3">
      <h1 class="footerHeadings">COMPANY</h1>
    </div>
    <div class="leading-8 text-gray-900">
      <Link to="../about">About us</Link>
      <p>Contact</p>
      <p>Jobs</p>
      <p>Funding</p>
    </div>
  </div>
  <div>
    <div class="mb-3">
      <h1 class="footerHeadings">LEGAL</h1>
    </div>
    <div class="leading-8 text-gray-900">
      <p>Terms of service</p>
      <p>Private policy</p>
      <p>Cookie policy</p>
    </div>
  </div>
  <div>
    <div class="mb-3">
      <h1 class="footerHeadings">NEWSLETTER</h1>
    </div>
    <form>
      <label class="text-gray-900" for="email">Enter your email address</label>
      <div class="relative">
        <input
          class="bg-gray-100 rounded-md mt-3 py-2 pl-3 pr-8 block "
          type="email"
          name=""
          id="email"
          placeholder="example@email.com"
        />
        <input
          class="bg-JetBlack absolute bottom-0 top-0 right-0 py-1 px-2 cursor-pointer rounded-md text-white font-bold"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  </div>
</footer>
