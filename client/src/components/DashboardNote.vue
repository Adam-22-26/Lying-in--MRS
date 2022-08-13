<script>
import { Icon } from "@iconify/vue";
import { axios } from "../utils/axios";
export default {
  name: "DashboardNote",
  components: {
    Icon,
  },
  props: {
    date: { type: String },
  },
  data() {
    return {
      noteData: {
        title: "",
        body: "",
        user_id: "",
        privacy: "only me",
        date: "",
        status: false,
      },
    };
  },
  created() {
    this.noteData.date = this.date;
  },
  methods: {
    newNote(e) {
      e.preventDefault();
      if (!this.noteData.body.length) return;

      axios({
        url: "api/new-note",
        method: "post",
        withCredentials: true,
        data: this.noteData,
      })
        .then((res) => {
          if (res.data.success) {
            console.log("resss", res.data.success);
            this.noteData = {
              title: "",
              body: "",
              user_id: "",
              privacy: "only me",
              date: "",
              status: false,
            };
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
  <form
    @submit="newNote($event)"
    class="bg-white-100 rounded-xl flex flex-col gap-2 "
  >
    <!-- header -->
    <div class="flex flex-wrap justify-between p-2">
      <input
        v-model="this.noteData.title"
        type="text"
        placeholder="Title"
        class="bg-white-100 focus:outline-none flex-glow"
      />
      <button class="flex-glow text-center text-[30px] text-green px-3 py-2">
        <Icon icon="fa:sticky-note" />
      </button>
    </div>
    <!-- body -->

    <!-- input -->
    <div>
      <textarea
        v-model="this.noteData.body"
        class="bg-white-100 focus:outline-none p-2"
        placeholder="Your Note"
        name=""
        id=""
        cols="30"
        rows="5"
      ></textarea>
    </div>
  </form>
</template>
