<script lang="ts">
  import person from "../assets/person.jpg";
  import person2 from "../assets/person2.jpg";
  import person3 from "../assets/person3.jpg";
  import Stars from "./Stars.svelte";
  import TestimonialCard from "./TestimonialCard.svelte";
  import { fade } from "svelte/transition";

  type active = "first" | "second" | "third";
  export let testimonialCards: active = "first";

  const changeState = (state: active) => {
    return (testimonialCards = state);
  };

  //write if statements in html for the paragraphs
  //like if testimonialCards === first then show the first paragraph...
  //   {#if porridge.temperature > 100}
  // 	<p>too hot!</p>
  // {:else if 80 > porridge.temperature}
  // 	<p>too cold!</p>
  // {:else}
  // 	<p>just right!</p>
  // {/if}
</script>

<article class="mt-16 mx-4">
  <h1 class="mainText mb-8">Testimonials</h1>
  <div class="grid md:grid-cols-2 gap-x-10">
    <div>
      <TestimonialCard
        State={() => changeState("first")}
        class={testimonialCards === "first" ? "shadow-lg" : ""}
        name="Ca-Jaye Clarke"
        dateVisited="April 17,2021"
        picture={person}
      />
      <TestimonialCard
        State={() => changeState("second")}
        class={testimonialCards === "second" ? "shadow-lg" : ""}
        name="Sydney James"
        dateVisited="January 1,2021"
        picture={person2}
      />
      <TestimonialCard
        State={() => changeState("third")}
        class={testimonialCards === "third" ? "shadow-lg" : ""}
        name="Dexter Morgan"
        dateVisited="November 21,2020"
        picture={person3}
      />
    </div>
    <section>
      <div>
        <p class="text-lg font-semibold">I had a great experience!</p>
      </div>
      <Stars fill1="#FBBF24" outline1="" />
      <div class="leading-loose lg:whitespace-pre-line">
        {#if testimonialCards === "first"}
          <p transition:fade={{ delay: 250, duration: 300 }}>
            Great restaurant with a long history of providing our family a
            consistently excellent dining experience. The owners and staff
            always exceed our expectations and truly seem to appreciate their
            customers. There are so many great menu items to choose from. Their
            salad dressing is AMAZING! We recently celebrated Mother's Day
            there. The weather was beautiful that morning. We really enjoyed
            sitting out on the covered patio. If you've never been, you owe it
            to yourself to give them a try.
          </p>
        {/if}
      </div>
      <div class="mt-5">
        <p>
          Feel free to also leave a <a
            href="rev.com"
            class="text-blue-600 font-semibold"
            >review <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg></a
          >
        </p>
      </div>
    </section>
  </div>
</article>
