<script>
import AppSidebarVue from "../components/AppSidebar.vue";
import AppTopbarVue from "../components/AppTopbar.vue";
import TheFillupform from "../components/TheFillupform.vue";
import { Icon } from "@iconify/vue";
export default {
  name: "RecordsView",
  data() {
    return {
      openSearch: false,
    };
  },
  components: {
    AppSidebarVue,
    AppTopbarVue,
    Icon,
    TheFillupform,
  },
  methods: {
    toggleSearch(){
        this.openSearch = !this.openSearch
    }
  },
};
</script>
<template>
  <div class="flex flex-row max-h-[100vh] overflow-hidden font-display">
    <AppSidebarVue />
    <div class="w-full flex flex-col">
      <AppTopbarVue />
      <div class="w-full h-full overflow-auto md:p-3 ">
        <div class="relative flex flex-col gap-2">
          <div class="flex gap-2 items-center ">
            <p class="text-[22px] font-semibold text-gray-800">RECENT</p>
            <p class="text-gray-600">August 06, 2022</p>
            <button @click="toggleSearch" type="button" class="ml-5 transition-all rounded-full flex items-center justify-center hover:bg-gray-600 hover:text-white-20 w-[50px] h-[50px] " v-if="!this.openSearch">
              <Icon icon="fa:search" class="w-[30px] h-[30px]" />
            </button>

          </div>
            <div class="h-auto flex flex-wrap gap-3 " >
                <div v-for="i in [1, 2,3,4,5,6,7,8]" class="flex-1 flex flex-col whitespace-nowrap  border-[1px] border-green hover:bg-green text-gray-800 hover:text-white-20 hover:cursor-pointer p-2 rounded-2xl  items-center">
                    <p class="font-semibold text-[19px] ">Full Name {{i}} </p>
                    <div class="flex flex-row gap-3">
                        <p class="italic">Gender</p>
                    <p class="italic">Age</p>
                    </div>
                </div>

            </div>
          <!-- search -->
          <div class="z-10 flex flex-col gap-2 p-3 absolute inset-x-0 top-0 bg-white-20 transition-all" v-if="this.openSearch">
            <div class="flex w-full gap-3 ">
              <button @click="toggleSearch" class="transition-all w-[50px] h-[50px] flex items-center justify-center font-bold text-[30px] rounded-full hover:bg-gray-600 hover:text-white-20 "><Icon icon="bi:x-lg" /></button>
              <input type="text" placeholder="search" class=" text-[19px] focus:outline-none bg-white-100 p-4 rounded-full  w-full">
            </div>
            <!-- result(s) -->
            <div class="flex flex-col gap-2 ">
                <div v-for="i in [1,2,3,4,5,6,7,8,9,10] " class="flex items-center rounded-2xl border-[1px] border-white-100 cursor-pointer hover:border-green overflow-hidden">
                    <Icon icon="fluent:document-data-32-filled" class="w-[44px] h-[44px] text-green" />
                    <div><p class="text-[22px] font-semibold text-gray-800">Fullname </p> <p class="text-[16px] text-gray-600">Date Created</p></div>
                </div>

            </div>
          </div>
        </div>
        <div>
        <TheFillupform />
        </div>
      </div>
    </div>
  </div>
</template>
