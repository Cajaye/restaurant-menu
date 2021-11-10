<script lang="ts">
  import burger from "../assets/burgerr.png";
  import burger2 from "../assets/burger2.png";
  import pizza from "../assets/pizza.png";

  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";

  // import Swiper core and required modules
  import SwiperCore, { Autoplay, Pagination } from "swiper";

  // install Swiper modules
  SwiperCore.use([Autoplay, Pagination]);
</script>

<article class="grid lg:grid-cols-2 mt-16 items-center">
  <section class="ml-16">
    <div>
      <div>
        <p class="text-4xl mb-3">
          Place your order or <span class="block">come in anytime</span>
        </p>
      </div>
      <div class="mb-3">
        <p class="text-gray-700">Opening hours? we're always open</p>
      </div>
      <div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 absolute top-2 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <input
          class="bg-gray-100 rounded-md py-2 pl-12 pr-8 shadow-"
          placeholder="Enter delivery address"
          type="text"
          name="search"
          id="search"
        />
      </div>
    </div>
  </section>
  <!--Other section starts here-->
  <section class="place-self-center mr-12">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3800,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      class="w-[42rem]"
    >
      <SwiperSlide>
        <img class="block object-cover w-screen" src={burger} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="block object-cover w-screen" src={burger} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="block object-cover w-screen" src={burger2} alt="" />
      </SwiperSlide>
      <img
        class=" w-screen h-full object-cover"
        src={pizza}
        alt=""
      /><SwiperSlide />
    </Swiper>
  </section>
</article>
