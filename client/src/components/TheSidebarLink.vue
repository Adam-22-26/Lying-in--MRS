sidebarLink <script>
import { Icon } from "@iconify/vue";
export default {
  name: "TheSidebarLink",
  components: {
    Icon,
  },
};
</script>

<template>
  <router-link to="/dashboard" 
class="sidebarLink  dashboardLink text-[30px] text-white-500 w-full flex items-center justify-center relative"    ><Icon icon="bxs:dashboard" 
  /></router-link>

  <router-link :to="{ path: '/new-record/form' }"
    class="sidebarLink  recordFormLink text-[30px] text-white-500 w-full flex items-center justify-center relative"><Icon icon="mdi:file-document-plus" 
  /></router-link>

  <router-link :to="{ name: 'RecordsView', params:{id: 'no-id'} }"
    class="sidebarLink recordsViewLink text-[30px] text-white-500 w-full flex items-center justify-center relative"><Icon icon="fluent:document-search-24-filled" 
  /></router-link>
  
  <router-link :to="{ name: 'EmployeeView' }"
    class="sidebarLink employeeLink  text-[30px] text-white-500 w-full flex items-center justify-center relative"><Icon icon="clarity:employee-solid" 
  /></router-link>
</template>

<style scoped> 
    .router-link-exact-active{
        @apply text-green;
    }
</style>
