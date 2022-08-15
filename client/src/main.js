import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import userAuthStore from "./store";
const app = createApp(App);

app.use(userAuthStore);
// userAuthStore.commit("fetchUser");
app.use(router);

app.mount("#app");
