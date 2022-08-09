<script>
import { Icon } from "@iconify/vue";
import { axios } from "../utils/axios";

export default {
  name: "TheProfileCard",
  data() {
    return {
      account: null,
    };
  },
  components: {
    Icon,
  },

  props: {
    status: { type: Boolean },
    data: { type: Object },
    updateData: { type: Function },
  },
  created() {
    this.account = this.data;
  },
  methods: {
    verifyUser(id) {
      axios({
        url: `api/verify?id=${id}`,
        method: "post",
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            this.updateData(true);
            console.log("success verified");
          } else {
            this.updateData(false); // haha
            console.log("failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    declineUser(id) {
      axios({
        url: `api/account/delete?id=${id}`,
        method: "post",
        withCredentials: true,
      })
        .then((res) => {
          if (res.data.success) {
            this.updateData(true);
            // render  a modal?
          } else {
            this.updateData(false);
            console.log("failed");
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
  <!-- data  -->
  <div
    class="profileCard p-x-5 transition ease-in-out delay-1000  py-10 flex flex-col relative items-center gap-2 border-[1px] border-green rounded-lg overflow-hidden min-w-[225px] max-w-[250px] m-3 bg-white-20"
  >
    <!--  -->
    <div
      class="w-[200px] h-[100px] absolute bg-darkgreen rotate-45 right-[-100px] top-[-20px] p-2"
    >

    </div>
    <!--  -->
    <div
      class="w-full flex justify-between border-darkgreen absolute border-b-[10px] border-l-[10px] border-r-[10px] bottom-0 h-[50px]"
    >
      <div
        class="w-[50px] h-[20px] bg-white-20 rotate-45 mt-[-20px] ml-[-30px]"
      ></div>
      <div
        class="w-[20px] h-[50px] bg-white-20 rotate-45 mt-[-35px] mr-[-20px]"
      ></div>
    </div>
    <div class="w-full flex flex-col justify-center items-center">
      <div
        class="flex justify-center items-center w-[120px] h-[120px] border-t-[5px] border-b-[5px] border-r-[5px] border-green rounded-full overflow-hidden "
      >
      <img :src="data.display_photo" alt="" srcset="" class=" rounded-full h-full w-full object-cover " />
      </div>
      <p class="text-center w-full text-[19px] font-semibold">
        {{ data.fullname }} 
      </p>
      <p class="text-center w-full text-gray-600 mt-[-5px]">
        {{ data.position.toUpperCase() }}
      </p>
    </div>

    <div class="flex flex-col">
      <p class="text-center w-full text-gray-600 mb-[-10px]">Acccount Role</p>
      <p class="text-center w-full text-[25px] font-semibold">
        {{ data.account_role.toUpperCase() }}
      </p>
    </div>
    <div v-if="status === false">
      <div class="flex gap-3">
        <button
          @click="declineUser(data._id)"
          class="transition-all text-[25px] text-red-600 rounded-full hover:bg-red-600 hover:text-white-20 p-3"
        >
          <Icon icon="bi:x" />
        </button>
        <button
          @click="verifyUser(data._id)"
          class="transition-all text-[25px] text-green rounded-full hover:bg-green hover:text-white-20 p-3"
        >
          <Icon icon="akar-icons:check" />
        </button>
      </div>
    </div>
  </div>
</template>
