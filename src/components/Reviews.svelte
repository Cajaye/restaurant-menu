<script lang="ts">
  let data = {
    name: "",
    content: "",
  };

  const clearInputs = () => {
    data.name = "";
    data.content = "";
  };

  const url = "http://localhost:5000/api/v1/reviews";

  const getData = async () => {
    try {
      const res = await fetch(url);
      let data = await res.json();
      if (res.ok) {
        return data.reviews;
      } else {
        throw new Error(data);
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
          "Content-type": "application/json",
          charset: "utf-8",
        },
      });
      clearInputs();
    } catch (error) {
      console.log(error);
    }
  };

  getData();
</script>

<section class="h-screen grid grid-rows-6 grid-cols-2">
  <!--This section contains two grids-->

  <div class="overscroll-y-auto row-span-5 col-span-2 self-end">
    <ul>
      {#await getData()}
        ...Loading
      {:then arrOfReviews}
        {#each arrOfReviews as review}
          <li>
            <h3>{review.name}</h3>
            <p>{review.content}</p>
          </li>
        {/each}
      {:catch error}
        <p>Some went wrong {error.message}</p>
      {/await}
    </ul>
  </div>
  <div class="self-end col-span-1">
    <form on:submit|preventDefault={postData}>
      <!--Set up functionality to get data after submit here-->
      <input
        bind:value={data.name}
        type="text"
        name="name"
        id=""
        class="bg-gray-100 rounded-md"
        placeholder="name"
        required
      />
      <input
        bind:value={data.content}
        type="text"
        name="content"
        id=""
        class="bg-gray-100 rounded-md"
        placeholder="content"
        required
      />
      <input type="submit" value="submit" class="bg-gray-100 rounded-md p-2" />
    </form>
  </div>
</section>
