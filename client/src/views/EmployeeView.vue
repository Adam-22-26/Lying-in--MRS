<script>
import AppSidebarVue from "../components/AppSidebar.vue";
import AppTopbarVue from "../components/AppTopbar.vue";
import TheProfileCardVue from "../components/TheProfileCard.vue";
import userAuthStore from "../store";
import { RouterLink, RouterView } from "vue-router";
import { axios } from "../utils/axios";
import { Icon } from "@iconify/vue";
import AppLoadingVue from "../components/AppLoading.vue";
export default {
  name: "EmployeeView",
  data() {
    return {
      allVerifiedAccount: null,
      allPendingAccount: null,
      showmanage: null,
    };
  },
  components: {
    Icon,
    RouterView,
    AppSidebarVue,
    AppTopbarVue,
    TheProfileCardVue,
    AppLoadingVue,
  },
  created() {
    // getAllPendingAccount

    this.getAllVerifiedAccount();
    this.getAllPendingAccount();
  },
  methods: {
    showManage() {
      this.showmanage = !this.showmanage;
    },
    updateData(isUpdated) {
      if (isUpdated) {
        console.log("updating...........");
        this.getAllVerifiedAccount();
        this.getAllPendingAccount();
      }
    },
    getAllVerifiedAccount() {
      axios({
        url: "api/account/verified",
        method: "get",
        withCredentials: true,
      })
        .then((res) => {
          if (res.data.success) {
            console.log("reeessssssss", res.data);
            this.allVerifiedAccount = res.data;
          } else {
            this.allVerifiedAccount = [];
          }
        })
        .catch((err) => {
          console.log("getAllverifiedErr", err);
        });
    },
    getAllPendingAccount() {
      // pendingAccount
      axios({
        url: "api/account/requests",
        method: "get",
        withCredentials: true,
      })
        .then((res) => {
          console.log("pendingAccount reeessssssss", res.data);
          if (res.data.success) {
            this.allPendingAccount = res.data;
          } else {
            this.allPendingAccount = [];
          }
        })
        .catch((err) => {
          console.log("pendingAccount", err);
        });
    },
  },
};
</script>
<template>
  <div class="font-display flex flex-row max-h-[100vh] overflow-hidden">
    <AppSidebarVue />
    <div class="w-full">
      <AppTopbarVue />
      <div
        class="manageAccount relative flex flex-col gap-3 w-full h-full overflow-auto bg-white-100"
        v-if="showmanage"
      >
        <div class="p-3 flex  gap-3  items-center">
          <button
            @click="showManage()"
            class="text-[30px] p-3 rounded-full hover:text-white-20 hover:bg-gray-800"
          >
            <Icon icon="bi:x-lg" />
          </button>
          <p class="text-[30px] font-semibold text-gray-600">Manage Accounts</p>
        </div>
        <div class="flex flex-wrap w-full justify-center">
          <AppLoadingVue v-if="!allVerifiedAccount" />
          <TheProfileCardVue
            v-else
            v-for="verified in allVerifiedAccount?.verified"
            :status="true"
            :data="verified"
            :updateData="updateData"
          />
        </div>
        <div class="p-3">
            Edit Account
        </div>
      </div>
      <div class="flex flex-col gap-3 w-full h-full overflow-auto">
        <div class="m-5 flex gap-3 w-full justify-start items-center">
          <p class="text-[20px] font-semibold text-gray-800">Accepting</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <div>
            <button
              @click="showManage()"
              class="text-gray-600 text-[20px] hover:text-green hover:bg-white-100 px-5 py-3 cursor-pointer"
            >
              Manage Account
            </button>
          </div>
        </div>
        <div class="p-5 bg-white-300/25">
          <p class="text-[20px] font-semibold flex items-center gap-3">
            Accounts
            <button
              @click="updateData"
              class="text-white-20 bg-gray-400 text-[25px] hover:bg-green transition-all rounded-full p-2"
            >
              <Icon icon="fontisto:cloud-refresh" />
            </button>
          </p>
          <div class="flex flex-wrap w-full justify-center">
            <AppLoadingVue v-if="!allVerifiedAccount" />
            <TheProfileCardVue
              v-else
              v-for="verified in allVerifiedAccount?.verified"
              :status="true"
              :data="verified"
              :updateData="updateData"
            />
          </div>
        </div>
        <div
          class="p-5 mb-10 bg-white-300/25"
          v-if="allPendingAccount?.unverified"
        >
          <p class="text-[20px] font-semibold">Pending Accounts</p>
          <div class="flex flex-wrap w-full justify-center">
            <AppLoadingVue v-if="!allPendingAccount" />
            <TheProfileCardVue
              v-else
              v-for="unverified in allPendingAccount?.unverified"
              :status="false"
              :data="unverified"
              :updateData="updateData"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
