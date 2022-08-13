<script>
import { axios } from "../utils/axios";
import { Icon } from '@iconify/vue';
export default {
  name: "DashboardNotesViewer",
  data() {
    return {
      notes: null,
    };
  },
  components:{
    Icon,
  },
  created() {
    axios({
      url: "api/mynotes",
      method: "get",
      withCredentials: true,
    })
      .then((res) => {
        console.log("res.data", res.data);
        if (res.data.success) {
          this.notes = res.data.myNotes;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <div
      v-for="note in notes"
      class="flex flex-col hover:bg-white-200 bg-white-100 flex-grow p-2 rounded-xl min-h-[200px] min-w-[250px] max-w-[250px]" 
    >
      <div class="bg-white-100 text-center font-semibold border-b-[1px] border-b-gray-300">{{ note.title }}</div>
      <div class=" flex items-center justify-center h-full">{{ note.body }}</div>
      <div class="flex justify-between items-end">
        <p class="text-gray-600 text-[13px] ">{{ note.date }}</p>
        <button class="text-emerald-500 hover:bg-white-300 p-2 rounded-full text-[19px]"><Icon icon="ant-design:check-outlined" /></button>
      </div>
    </div>
  </div>
</template>
