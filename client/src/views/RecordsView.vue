<script>
import AppSidebarVue from "../components/AppSidebar.vue";
import AppTopbarVue from "../components/AppTopbar.vue";
import TheViewform from "../components/TheViewform.vue";
import { RouterLink, RouterView } from "vue-router";
import { Icon } from "@iconify/vue";
import { axios } from "../utils/axios";
export default {
  name: "RecordsView",
  data() {
    return {
      openSearch: false,
      searchValue: "",
      results: [],
      formDataView: null,
    };
  },
  components: {
    AppSidebarVue,
    AppTopbarVue,
    Icon,
    TheViewform,
  },
  created() {
    const { id } = this.$route.params;
    if (id !== "no-id") {
      this.getRecordById(id);
      
    }
  },
  watch: {
    $route() {
      // fetch
      const { id } = this.$route.params;
      this.getRecordById(id);
    },
  },
  methods: {
    toggleSearch() {
      this.openSearch = !this.openSearch;
      if (!this.openSearch) {
        this.results = [];
        this.searchValue = "";
      }
    },

    onChangeSearchBox(e) {
      this.searchValue = e.target.value;
      if (this.searchValue.length) {
        axios({
          url: `api/records?search=${this.searchValue}`,
          method: "get",
          withCredentials: true,
        }).then((res) => {
          if (res.data.success) {
            this.results = res.data.results.patient_form_results;
            console.log(this.results);
          }
        });
      } else {
        this.results = [];
        this.searchValue = "";
      }
    },
    getRecordById(id) {
      axios({
        url: `api/form?id=${id}`,
        method: "get",
        withCredentials: true,
      })
        .then((res) => {
          if (res.data.success) {
            this.formDataView = res.data.form;
            this.openSearch = false;
            console.log(this.formDataView);

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
  <div class="flex flex-row max-h-[100vh] overflow-hidden font-display">
    <AppSidebarVue />
    <div class="w-full flex flex-col">
      <AppTopbarVue />
      <div class="w-full h-full overflow-auto md:p-3">
        <div class="relative flex flex-col gap-2">
          <div
            class="flex gap-2 items-center border-[1px] border-white-300 p-2 rounded-xl"
          >
            <p class="text-[22px] font-semibold text-gray-800">RECENT</p>
            <p class="text-gray-600">August 06, 2022</p>
            <button
              @click="toggleSearch"
              type="button"
              class="ml-5 transition-all rounded-3xl w-[50px] hover:w-[100px] ease-in-out p-2 flex items-center justify-end text-white-20 bg-green"
              v-if="!this.openSearch"
            >
              <Icon icon="fa:search" class="w-[30px] h-[30px]" />
            </button>
          </div>
          <!-- <div class="h-auto flex flex-wrap gap-3 " >
                <div v-for="i in [1, 2,3,4,5,6,7,8]" class="flex-1 flex flex-col flex-grow whitespace-nowrap  border-[1px] border-green hover:bg-green text-gray-800 hover:text-white-20 hover:cursor-pointer p-2 rounded-2xl  items-center">
                    <p class="font-semibold text-[19px] ">Full Name {{i}} </p>
                    <div class="flex flex-row gap-3">
                        <p class="italic">Gender</p>
                    <p class="italic">Age</p>
                    </div>
                </div>

            </div> -->
          <!-- search -->
          <div
            class="searchBox z-10 flex flex-col gap-2 p-3 absolute inset-x-0 top-0 bg-white-20 transition-all"
            v-if="this.openSearch"
          >
            <div class="flex w-full gap-3">
              <button
                @click="toggleSearch"
                class="transition-all w-[50px] h-[50px] flex items-center justify-center font-bold text-[30px] rounded-full hover:bg-gray-600 hover:text-white-20"
              >
                <Icon icon="bi:x-lg" />
              </button>
              <input
                type="text"
                placeholder="search"
                @input="onChangeSearchBox($event)"
                class="text-[19px] focus:outline-none bg-white-100 p-4 rounded-full w-full"
              />
            </div>
            <!-- result(s) -->
            <div class="flex flex-col gap-2">
              <div
                v-for="form in this.results"
                class="flex items-center gap-2 rounded-2xl border-[1px] border-white-100 cursor-pointer hover:border-green overflow-hidden"
              >
                <Icon
                  icon="fluent:document-data-32-filled"
                  class="w-[44px] h-[44px] text-green"
                />
                <div>
                  <router-link
                    :to="{ name: 'RecordsView', params: { id: form?._id } }"
                    class="flex flex-col justify-start"
                  >
                    <p class="text-[22px] font-semibold text-gray-700">
                      {{ form?.patient_information?.name }}
                    </p>
                    <p class="text-[16px] text-gray-600">{{ form?.date }}</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <!-- <router-view name="TheViewform"></router-view> -->
          <!-- <router-link class="" @submit="getRecordById($event, form._id)">
                  <button
                    ref="getRecordByIdRef"
                    type="submit"
                    class="flex flex-col justify-start"
                  >
                    <p class="text-[22px] font-semibold text-gray-700">
                      {{ form.patient_information.name }}
                    </p>
                    <p class="text-[16px] text-gray-600">{{ form.date }}</p>
                  </button>
                </router-link> -->
          <TheViewform :formDataView="formDataView" v-if="formDataView" />
        </div>
      </div>
    </div>
  </div>
</template>
