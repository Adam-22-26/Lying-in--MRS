
<script>
import AppSidebarVue from '../components/AppSidebar.vue'
import AppTopbarVue from '../components/AppTopbar.vue'
export default {
    name: "DashboardView",
    components:{
        AppSidebarVue,
        AppTopbarVue
    }
}
</script>
<template>
    <div class="flex flex-row max-h-[100vh] overflow-hidden ">
        <AppSidebarVue />
        <div class="w-full ">
            <AppTopbarVue />
            <div class="w-full h-full overflow-auto">

                DASHBOARD CONTENTSDKJFSDLKJFSDLKFJ
            </div>
        </div>
    </div>
</template>