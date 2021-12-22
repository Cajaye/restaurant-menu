<script lang="ts">
  const uid = (): string => {
    const head = performance.now().toString(36);
    const tail = Math.random().toString(36).substr(2);
    return head + tail;
  };

  let arrOfReviews = [
    {
      id: uid(),
      content: "Great expierience at your restaurant",
      name: "Ca-Jaye",
    },
    {
      id: uid(),
      content: "Bad expierience at your restaurant",
      name: "Bobby",
    },
    {
      id: uid(),
      content: "Decent expierience at your restaurant",
      name: "John",
    },
  ];

  let name: string;
  let content: string;

  //function that takes one argument which is a review object and pushes it to arrOfReviews
</script>

<section>
  <!--This section contains two grids-->

  <div>
    <ul>
      {#each arrOfReviews as review (review.id)}
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
        arrOfReviews.push({ id: uid(), content, name });
        arrOfReviews = arrOfReviews;
        content = "";
        name = "";
        console.table(arrOfReviews);
      }}
    >
      <input
        bind:value={name}
        type="text"
        name=""
        id=""
        class="bg-gray-100 rounded-md"
        placeholder="name"
        required
      />
      <input
        bind:value={content}
        type="text"
        name=""
        id=""
        class="bg-gray-100 rounded-md"
        placeholder="content"
        required
      />
      <input type="submit" value="submit" class="bg-gray-100 rounded-md p-2" />
    </form>
  </div>
</section>
