<script>
import AppSidebarVue from "../components/AppSidebar.vue";
import AppTopbarVue from "../components/AppTopbar.vue";
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "DashboardView",
  components: {
    AppSidebarVue,
    AppTopbarVue,
    RouterView,
  },
};
</script>
<template>
  <div class="font-display relative flex flex-row max-h-[100vh] overflow-hidden">
    <AppSidebarVue />
    <div class="w-full">
      <!-- <RouterView /> -->
      <!-- <router-view class="view left-sidebar" name="AppTopBar"></router-view> -->
      <AppTopbarVue />
      <div class="w-full h-full overflow-auto">
        DASHBOARD CONTENTSDKJFSDLKJFSDLKFJ
      </div>
    </div>
  </div>
</template>
