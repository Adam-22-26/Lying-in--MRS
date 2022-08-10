<script>
import AppSidebarVue from "../components/AppSidebar.vue";
import AppTopbarVue from "../components/AppTopbar.vue";
import TheFillupformVue from "../components/TheFillupform.vue";
import VueHtml2pdf from "vue-html2pdf";
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "NewRecordView",
  components: {
    AppSidebarVue,
    AppTopbarVue,
    VueHtml2pdf,
    RouterView,
    TheFillupformVue,
  },
  created() {},
};
</script>
<template>
  <div class="font-display flex flex-row max-h-[100vh] overflow-hidden">
    <AppSidebarVue />
    <div class="w-full flex flex-col">
      <AppTopbarVue />
      <div class="w-full h-full overflow-auto m-auto">
        <div>
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
