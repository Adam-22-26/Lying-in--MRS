<script>
import { Icon } from "@iconify/vue";
export default {
  name: "PageNotFoundView",
  components: {
    Icon,
  },
};
</script>

<template>
  <div
    class="font-display flex flex-col justify-center items-center md:flex-row container min-h-[100vh] min-w-full"
  >
    <!-- image -->
    <div class="h-auto">
      <img
        class="w-full h-full"
        src="https://res.cloudinary.com/depht0372/image/upload/v1660119771/296607078_3209993205943802_7049022204341723475_n_j2h097.png"
      />
    </div>
    <!-- 404 -->
    <div
      class="h-auto flex-col justify-center items-center bg-none leading-tight"
    >
      <p class="text-gray-800 font-semibold text-[150px] text-center">404</p>
      <p class="text-gray-800 text-[50px] font-semibold text-center">
        Page Not Found
      </p>
      <p class="text-gray-800 text-[20px] font-semibold text-center">
        We are sorry, but the page you requested was not found.
      </p>
      <button
        @click="() => this.$router.push({ name: 'LandingPage' })"
        class="bg-gray-800 m-auto text-white-20 flex items-center gap-2 px-4 py-2 rounded-xl mt-5"
      >
        <Icon icon="bx:arrow-back" /><span>Back to home</span>
      </button>
    </div>
  </div>
</template>
