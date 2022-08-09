<script>
import TheSidebarLinkVue from "./TheSidebarLink.vue";
import { Icon } from "@iconify/vue";
import { axios } from "../utils/axios";
import Swal from "sweetalert2";
import userAuthStore from "../store/index";
import TheTopbarMenuToggleVue from "./TheTopbarMenuToggle.vue";
export default {
  name: "AppSideBar",
  data() {
    return {
      sideBarStatus: true,
    };
  },
  components: {
    TheSidebarLinkVue,
    TheTopbarMenuToggleVue,
    Icon,
  },
  watch: {},
  created() {
    console.log("created", this.$route.name);
    if (this.$route.name === "LoginView") {
      logout();
    }
  },
  computed: {
    getSidebarStatus() {
      return userAuthStore.state.sidebarStatus;
    },
  },
  methods: {
    logout() {
      Swal.fire({
        title: "Log Out?",
        text: "Please save your progress first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#7B9749",
        cancelButtonColor: "#d33",
        confirmButtonText: "Logout",
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            url: "auth/user/logout",
            method: "get",
            withCredentials: true,
          })
            .then((res) => {
              console.log("resssssssssssssssssssssss", res);

              if (res.data.success) {
                window.localStorage.setItem(
                  "user",
                  JSON.stringify({ success: false })
                ); //
                this.$router.push({ name: "LoginView" });
                // this.$router.go();
              }

              // window.localStorage.removeItem("user")
            })
            .catch((err) => {
              console.log(err);
            });
          // Swal.fire("Logout", "Your file has been deleted.", "success");
        }
      });
    },
  },
};
</script>

<template>
  <div
    v-if="getSidebarStatus"
    class="sideBar z-10 flex flex-col justify-between w-[60px] min-w-[60px] items-center min-h-[100vh] bg-darkgreen"
  >
    <div class="main_navbar flex flex-col gap-5 w-full items-center">
      <div class="min-h-[59px] w-full bg-white-100">
        <TheTopbarMenuToggleVue />
      </div>
      <p class="text-white-50 font-semibold text-[12px]">PAGES</p>
      <TheSidebarLinkVue />
    </div>
    <button class="cursor-pointer mb-2" @click="logout">
      <Icon
        icon="majesticons:logout"
        class="text-[30px] text-white-400 hover:text-white-50"
      />
    </button>
  </div>
</template>
