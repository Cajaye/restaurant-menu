<script lang="ts">
  //use fetch methods get and post in this file
  let name: string;
  let content: string;

  interface Reviews {
    id: string;
    name: string;
    content: string;
  }

  let arrOfReviews: Reviews[] = [];

  //function that takes one argument which is a review object and pushes it to arrOfReviews
</script>

<section>
  <!--This section contains two grids-->

  <div>
    <ul>
      {#each arrOfReviews as review}
        <li>
          <h3>{review.name}</h3>
          <p>{review.content}</p>
        </li>
      {/each}
    </ul>
  </div>
  <div>
    <form
      on:submit|preventDefault={() => {
        arrOfReviews.push({ content, name });
        arrOfReviews = arrOfReviews;
        content = "";
        name = "";
        console.table(arrOfReviews);
      }}
    >
      <input
        bind:value={name}
        type="text"
        name="name"
        id=""
        class="bg-gray-100 rounded-md"
        placeholder="name"
        required
      />
      <input
        bind:value={content}
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
