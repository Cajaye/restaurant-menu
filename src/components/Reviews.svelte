<script lang="ts">
  import Header from "./Header.svelte";
  import { token } from "../stores/token";

  const bearerToken = `Bearer ${$token}`;

  let data = {
    content: "",
    rating: "",
  };

  const clearInputs = () => {
    data.content = "";
  };

  let reviews = [];
  let errorMessage = "";

  const url = "https://restaurant-01api.herokuapp.com/api/v1/reviews";

  const getData = async () => {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: bearerToken,
        },
      });
      let data = await res.json();
      if (res.ok) {
        reviews = data.reviews;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async () => {
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: bearerToken,
          "Content-type": "application/json",
          charset: "utf-8",
        },
      });
      const dataError = await res.json();
      if (res.ok) {
        getData();
        clearInputs();
        errorMessage = "";
      } else {
        errorMessage = dataError.msg;
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData();
</script>

<Header />
<section class="h-screen flex items-center justify-center flex-col pt-8 px-8">
  <div>
    <div>
      <form action="" on:submit|preventDefault={postData}>
        <textarea
          style="scrollbar-width: none"
          class="border-gray-300 rounded-md w-full pb-24 border-2 pl-4 pt-2 resize-none"
          placeholder="Add a comment..."
          bind:value={data.content}
        />
        <div class="block mt-2">
          <label class="text-gray-700" for="Rating">Rating</label>
          <select
            bind:value={data.rating}
            class="rounded-md bg-JetBlack text-white font-semibold"
            name="Rating"
          >
            <option value="5" selected>5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
        <p class="text-red-500 mt-2">{errorMessage}</p>
        <input
          class="bg-JetBlack text-white font-semibold rounded-md w-full px-52 py-2 block mt-3 cursor-pointer"
          type="submit"
          value="POST"
        />
      </form>
    </div>
    <!--Filter methods wit query-->
  </div>
  <div style="scrollbar-width: thin" class="overflow-y-scroll w-1/2 mt-8 p-4">
    {#each reviews as review}
      <div
        style="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;"
        class="rounded-md mb-4 p-4"
      >
        <div class="flex items-center justify-between">
          <p
            class="bg-gray-300 p-4 text-2xl rounded-[50%] font-semibold w-12 h-12 text-center flex items-center justify-center"
          >
            {review.name.charAt(0)}
          </p>
          <p>{review.date}</p>
        </div>
        <div class="flex items-center justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <p>{review.rating}</p>
        </div>
        <p>{review.name}</p>
        <p class="text-gray-700">{review.content}</p>
      </div>
    {/each}
  </div>
</section>
