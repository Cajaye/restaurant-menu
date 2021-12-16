<script lang="ts">
  import person from "../assets/person.jpg";
  import person2 from "../assets/person2.jpg";
  import person3 from "../assets/person3.jpg";
  import Stars from "./Stars.svelte";
  import TestimonialCard from "./TestimonialCard.svelte";
  import { fade } from "svelte/transition";

  type active = "first" | "second" | "third";
  let testimonialCards: active = "first";
  //changes the paragraph and box shadow
  const changeState = (state: active) => {
    return (testimonialCards = state);
  };
</script>

<article class="mt-16 p-8">
  <h1 class="mainText mb-8">Testimonials</h1>
  <div class="grid md:grid-cols-2 gap-x-10">
    <div>
      <TestimonialCard
        on:click={() => changeState("first")}
        class={testimonialCards === "first" ? "shadow-lg" : ""}
        name="Ca-Jaye Clarke"
        dateVisited="April 17,2021"
        picture={person}
      />
      <TestimonialCard
        on:click={() => changeState("second")}
        class={testimonialCards === "second" ? "shadow-lg" : ""}
        name="Sydney James"
        dateVisited="January 1,2021"
        picture={person2}
      />
      <TestimonialCard
        on:click={() => changeState("third")}
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
      <div class="leading-loose lg:whitespace-pre-line text-gray-900">
        {#if testimonialCards === "first"}
          <p>
            "Great restaurant with a long history of providing our family a
            consistently excellent dining experience. The owners and staff
            always exceed our expectations and truly seem to appreciate their
            customers. There are so many great menu items to choose from. Their
            salad dressing is AMAZING! We recently celebrated Mother's Day
            there. The weather was beautiful that morning. We really enjoyed
            sitting out on the covered patio. If you've never been, you owe it
            to yourself to give them a try."
          </p>
        {:else if testimonialCards === "second"}
          <p>
            "Gorgeous restaurant, incredible food. I ordered their Oven Roasted
            Pork Chop with Scallion Mashed Potatoes, Balsamic Roasted Red
            Onions, and Port Reduction Sauce. It was so lovely and tender, it
            literally fell off the bone. Tuscany is an absolutely beautiful
            restaurant that I would highly recommend it for special occasions
            and events."
          </p>
        {:else if testimonialCards === "third"}
          <p>
            "I just wanted to let you know that I had one of the best dinners of
            my life last night…. at your restaurant!! I have been out of town
            and I saw the email about the 3-course Bastille Day/Week dinner. It
            was a last minute thing and I love Chicken Cordon Bleu, so I decided
            to go. Anyway, I had the cold-smoked French herring with warm potato
            salad and the fruit tart. Everything was just superb!"
          </p>
        {/if}
      </div>
      <div class="mt-5">
        <p class="text-gray-900">
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
