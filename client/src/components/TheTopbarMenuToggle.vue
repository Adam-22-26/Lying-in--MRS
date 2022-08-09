<script>
import { Icon } from "@iconify/vue";
import userAuthStore from "../store";
export default {
  name: "TheTopbarMenuToggle",
  components:{
    Icon,
  },
  data() {
    return {
        
    }
  },
  methods: {
    toggleSideBar() {
      userAuthStore.commit("toggleSidebar");
      console.log("userAuthStore", userAuthStore.state.sidebarStatus);
    },
  },
  computed:{
    
  }
};
</script>
<template>
  <div
    @click="toggleSideBar"
    class="h-full  flex justify-center items-center"
  >
    <Icon
      icon="eva:menu-outline"
      class="w-[40px] h-[40px] text-gray-800 cursor-pointer hover:bg-gray-300/50"
    />
  </div>
</template>
