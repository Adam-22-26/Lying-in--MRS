<template>
  <div class="bg-blue-300/25 flex justify-center items-center h-[100vh]">
    <div class="bg-white-20 p-2 flex flex-col container rounded-2xl md:p-10">
      <img
        class="object-contain w-80 m-auto"
        src="../assets/hero/almost-done-now-hero.png"
        alt=""
      />
      <p class="text-[50px] font-bold text-center">Almost Done Now</p>
      <p class="text-center font-semibold text-[20px]">
        Please wait for Admin’s approval or contact <router-link :to="{name: 'LandingPage'}"  class="text-blue-300 cursor-pointer">here</router-link>. You will redirect to
        the home page when you are verified.
      </p>
    </div>
  </div>
</template>
