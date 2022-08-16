<script>
import AppSidebarVue from "../components/AppSidebar.vue";
import AppTopbarVue from "../components/AppTopbar.vue";
import TheViewform from "../components/TheViewform.vue";
import { RouterLink, RouterView } from "vue-router";
import { Icon } from "@iconify/vue";
import { axios } from "../utils/axios";
import moment from "moment";
export default {
  name: "RecordsView",
  data() {
    return {
      openSearch: false,
      searchValue: "",
      results: [],
      formDataView: null,
      recents: [],
      date: null,
      searchBy: "fullname"
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
    // get recent
    this.getRecent();
  },
  watch: {
    $route() {
      // fetch
      const { id } = this.$route.params;
      if (id !== "no-id") {
        this.getRecordById(id);
      } else {
        this.formDataView = null;
      }
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
    getRecent() {
      this.date = moment().format("MMMM Do YYYY, h:mm:ss a").split(",")[0];
      axios({
        url: `api/forms?date=${this.date}`,
        method: "get",
        withCredentials: true,
      }).then((res) => {
        if (res.data.success) {
          console.log("receeeeent", res.data);
          this.recents = res.data.records;
        }
      });
    },
    onChangeSearchBox(e) {
      this.searchValue = e.target.value;

      if (this.searchValue.length) {
        if (this.searchBy === "fullname") {
          axios({
            // records?search
            url: `api/records?search=${this.searchValue}`,
            method: "get",
            withCredentials: true,
          }).then((res) => {
            if (res.data.success) {
              this.results = res.data.results.patient_form_results;              
              console.log(res.data.results.patient_form_results)
            }
          }).catch(err=>{
            console.log(er)
          })
        }else if(this.searchBy === "ob_score"){
         
          axios({
            url: `api/records/ob-score?search=${this.searchValue}`,
            method: "get",
            withCredentials: true,
          }).then(res=>{
            console.log("dataaaaaaaaaaaaaaa",res.data.patientWithObScore)
            if(res.data.success){
              this.results = res.data.patientWithObScore
            }
          }).catch(err=>{
            console.log("err",err)
          })
        } else if(this.searchBy === "date"){
          axios({
            url: `api/records/date?search=${this.searchValue}`,
            method: "get",
            withCredentials: true,
          }).then(res=>{
            console.log("dataaaaaaaaaaaaaaa",res.data.patientByCertainDate)
            if(res.data.success){
              this.results = res.data.patientByCertainDate
            }
          }).catch(err=>{
            console.log("err",err)
          })
        }
         else {
          this.results = [];
          this.searchValue = "";
        }
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
  beforeUnmount() {

  },
};
</script>
<template>
  <div class="flex flex-row max-h-[100vh] overflow-hidden font-display">
    <AppSidebarVue />
    <div class="w-full flex flex-col">
      <AppTopbarVue />
      <div class="w-full h-full overflow-auto md:p-3">
        <div class="relative flex flex-col gap-2 border-[1px] border-white-300 p-2 rounded-xl">
          <div class="flex gap-2 items-center">
            <p class="text-[22px] font-semibold text-gray-800">RECENT</p>
            <p class="text-gray-600">{{ this.date }}</p>
            <button @click="toggleSearch" type="button"
              class="ml-5 transition-all rounded-3xl w-[50px] hover:w-[100px] ease-in-out px-2 py-1 flex items-center justify-end text-white-20 bg-green"
              v-if="!this.openSearch">
              <Icon icon="fa:search" class="w-[30px] h-[30px]" />
            </button>
          </div>
          <div class="h-auto flex flex-wrap gap-2">
            <router-link v-for="recent in recents" :to="{ name: 'RecordsView', params: { id: recent?._id } }"
              class="flex-1 flex flex-col flex-grow whitespace-nowrap border-[1px] border-green hover:bg-green text-gray-700 hover:text-white-20 hover:cursor-pointer p-1 rounded-md items-center">
              <p class="font-semibold text-[18px]">
                {{ recent.patient_information.name }}
              </p>
              <div class="flex flex-row gap-3">
                <p class="italic"><span>Age:</span>{{ recent.patient_information.age }}</p>
                <p class="italic"><span>Gender:</span>{{ recent.patient_information.gender }}</p>
              </div>

            </router-link>
          </div>
          <!-- search -->
          <div
            class="searchBox z-10 flex flex-col gap-2 p-3 absolute inset-x-0 top-0 bg-white-20 transition-all rounded-xl"
            v-if="this.openSearch">
            <div class="flex w-full gap-3">
              <button @click="toggleSearch"
                class="transition-all w-[50px] h-[50px] flex items-center justify-center font-bold text-[30px] rounded-full hover:bg-gray-600 hover:text-white-20">
                <Icon icon="bi:x-lg" />
              </button>
              <div class="flex flex-col w-full gap-3">
                <input type="text" placeholder="search" @input="onChangeSearchBox($event)"
                  class="text-[19px] focus:outline-none bg-white-100 p-4 rounded-full w-full " />
                <div class="flex ">
                  <p class="text-[20px] font-semibold ">Search By: </p>
                  <select v-model="searchBy" name="searchBy" id="searchBy" class="focus:outline-none">
                    <option value="fullname" >Full Name</option>
                    <option value="ob_score">Ob Score</option>
                    <option value="date">Date</option>
                  </select>
                </div>
              </div>

            </div>
            <!-- result(s) -->
            <div class="flex flex-col gap-2">
              <div v-for="form in this.results"
                class="flex items-center gap-2 rounded-2xl border-[1px] border-white-100 cursor-pointer hover:border-green overflow-hidden">
                <Icon icon="fluent:document-data-32-filled" class="w-[44px] h-[44px] text-green" />
                <div>
                  <router-link :to="{ name: 'RecordsView', params: { id: form?._id } }"
                    class="flex flex-col justify-start">
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

        <div class="w-full">
          <div v-if="!formDataView" class="flex flex-col justify-center items-center">
            <img src="../assets/hero/document_shield_plus.webp" alt="" class="w-[250px]" />
          </div>

          <TheViewform :formDataView="formDataView" v-else-if="formDataView" :key="formDataView._id" />
        </div>
      </div>
    </div>
  </div>
</template>
