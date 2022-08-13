<script>
import AppSidebarVue from "../components/AppSidebar.vue";
import AppTopbarVue from "../components/AppTopbar.vue";
import DashboardCard from "../components/DashboardCard.vue";
import { Icon } from "@iconify/vue";
import { axios } from "../utils/axios";
import DashboardNoteVue from "../components/DashboardNote.vue";
import DashboardNotesViewer from "../components/DashboardNotesViewer.vue"
import { RouterLink, RouterView } from "vue-router";
import moment from "moment";
export default {
  name: "DashboardView",
  components: {
    Icon,
    AppSidebarVue,
    AppTopbarVue,
    DashboardCard,
    DashboardNoteVue,
    DashboardNotesViewer,
  },
  data() {
    return {
      topBar:'AppTopbarVue',
      dashboardNoteState: false,
      dateTime: "",
      time: "",
      date: "",
      profile: null,
    };
  },
  created() {
    setInterval(() => {
      this.dateTime = moment().format("MMMM Do YYYY, h:mm:ss a").split(",");
      this.date = this.dateTime[0];
      this.time = this.dateTime[1];
    }, 1000);
    this.fetchUser();
  },
  methods: {
    toggleNewNote(){

      this.dashboardNoteState = !this.dashboardNoteState;
      console.log(this.dashboardNoteState)
    },
    fetchUser() {
      axios({
        url: "api/isAuthenticated",
        method: "get",
        withCredentials: true,
      })
        .then((res) => {
          if (res.data.success) {
            this.profile = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<template>
  <div
    class="font-display relative flex flex-row max-h-[100vh] overflow-hidden"
  >
    <AppSidebarVue />
    <div class="w-full relative">
      <!-- <RouterView /> -->
      <!-- <router-view class="view left-sidebar" name="AppTopBar"></router-view> -->
      <keep-alive>
         <component :is="topBar"></component>
      </keep-alive>

      <div
        class="w-full h-full overflow-auto p-3 flex flex-col gap-5 relative min-h-full"
      >
        <div class="flex gap-3 items-center" v-if="profile">
          <div
            class="w-[100px] h-[100px] overflow-hidden rounded-full flex justify-center items-center"
          >
            <img
              :src="profile.user.display_photo"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <p class="text-[22px] text-gray-700">Good Day!</p>
            <p class="text-[30px] font-semibold text-gray-800">
              {{ profile.user.fullname }}
            </p>
          </div>
        </div>
        <div class="flex flex-wrap py-10 border-b-[2px] border-gray-300/75">
          <DashboardCard
            :icon="'akar-icons:clock'"
            :title="time"
            :info="date"
            :icon-style="'text-[#7A9C41] text-[50px]'"
            icon-background-style="bg-[#7A9C41]/30 p-5 rounded-full "
          />
        </div>
        <div>
          <DashboardNotesViewer />
        </div>
      </div>
      <div class="fixed bottom-[0px] right-[10px]" v-if="!dashboardNoteState" >
        <button class="text-[50px] text-green" @click="toggleNewNote">
          <Icon icon="clarity:note-edit-solid" />
        </button>
      </div>
      <div class="newNote fixed bottom-[0px] right-[10px]" v-else-if="dashboardNoteState">
        <button class="text-red-600 text-[30px] " @click="toggleNewNote"><Icon icon="akar-icons:circle-x-fill" /></button>
        <DashboardNoteVue :date="date" />
      </div>
    </div>
  </div>
</template>
