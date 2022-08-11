<script>
import userAuthStore from "../store";
import { axios } from "../utils/axios";
import { Icon } from "@iconify/vue";
import TheTopbarMenuToggle from "./TheTopbarMenuToggle.vue";
export default {
  name: "AppTopbar",
  components: {
    Icon,
    TheTopbarMenuToggle,
  },
  data() {
    return {
      userProfile: null,
      sideBarStatus: true,
    };
  },
  created() {
    this.fetchUser();
  },
  computed: {
    myProfile(){

      return this.userProfile
    },
    getSidebarStatus() {
      return (this.sideBarStatus = userAuthStore.state.sidebarStatus);
    },
  },
  methods: {
    fetchUser() {
      console.log("this.userProfile",this.userProfile, "userAuthStore.state.user",userAuthStore.state.user)
      
      if (userAuthStore.state.user && !this.userProfile) {
        // if null
        axios({
          url: "api/isAuthenticated",
          method: "get",
          withCredentials: true,
        })
          .then((res) => {
            if (res.data.success) {
              this.userProfile = res.data;
              console.log("atpptopbar", res.data);
            } else {
              this.userProfile = { success: false, user: null };
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        const user = JSON.parse(window.localStorage.getItem("user"));
        this.userProfile = user;
        console.log("else, this.userProfile", this.userProfile)
      }
    },
  },
};
</script>
<template>
  <div
    class=" flex relative justify-between items-center px-5 w-full min-h-[60px] max-h-[60px] overflow-hidden bg-white-100 shadow-md"
  >
    <!-- <div class="w-full">
      <p class="text-[20px] font-semibold">12 : 33 : PM</p>
      <p class="text-[13px]">Tuesday, 7/29/2022</p>
    </div> -->
    <!-- <div @click="toggleSideBar" class="">
      <Icon icon="eva:menu-outline" class="w-[40px] h-[40px] text-gray-800 cursor-pointer hover:bg-gray-300/50 " />
    </div> -->
    <div v-if="!getSidebarStatus" class="ml-[-10px]">
      <TheTopbarMenuToggle />
    </div>
    <div class="flex flex-row justify-end gap-3 w-full ml-[10px]">
      <!-- <p class="text-[20px] font-semibold">{{ myProfile?.user?.fullname }}</p> -->
      <img
        :src=" myProfile?.user?.display_photo"
        class="objec-fit w-[50px] h-[50px] border-2 border-green rounded-full transition-all ease-in-out"
      />
    </div>
  </div>
</template>
