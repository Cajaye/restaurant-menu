<script lang="ts">
  import supabase from "../lib/db.js";
  import { onMount } from "svelte";
  import cardburger from "../assets/cardburger.jpg";
  //step 1 - design and code the cards
  //step 2 - figure out the thing with supabase
  //finally - you did it!
</script>

<article class="mt-14 h-screen">
  <div>
    <h1 class="text-4xl text-center">Meals of the month</h1>
  </div>
  <section class="grid md:grid-cols-3 mt-8">
    <div class="bg-gray-100 p-4 rounded-md mx-4">
      <div>
        <img
          class="w-full h-full object-cover rounded-md mb-3"
          src={cardburger}
          alt=""
        />
      </div>
      <div class="font-semibold">
        <p>Burger</p>
        <p>$20.00</p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div>
        <button>-</button>
        <p>0</p>
        <button>+</button>
      </div>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
    <div class="bg-gray-100 p-4 rounded-md mx-4">
      <div>
        <img
          class="w-full h-full object-cover rounded-md mb-3"
          src={cardburger}
          alt=""
        />
      </div>
      <div class="font-semibold">
        <p>Burger</p>
        <p>$20.00</p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div>
        <button>-</button>
        <p>0</p>
        <button>+</button>
      </div>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
    <div class="bg-gray-100 p-4 rounded-md mx-4">
      <div>
        <img
          class="w-full h-full object-cover rounded-md mb-3"
          src={cardburger}
          alt=""
        />
      </div>
      <div class="font-semibold">
        <p>Burger</p>
        <p>$20.00</p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div>
        <button>-</button>
        <p>0</p>
        <button>+</button>
      </div>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  </section>
</article>
