<script>
import { axios } from "../utils/axios";
export default {
  name: "LogoutModal",
  methods: {
    logout() {
      axios({
        url: "auth/user/logout",
        method: "get",
        withCredentials: true,
      });
    },
  },
};
</script>
<template>
  <div class="">

  </div>
</template>

