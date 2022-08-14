import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import userAuthStore from "../store";
import routerScrollBehavior from "../utils/routerScrollBehavior";
const router = createRouter({
  history: createWebHistory(),
  routes,
  routerScrollBehavior,
});

router.beforeEach((to, from) => {
  // userAuthStore.commit('fetchUser')
  let user = window.localStorage.getItem("user");
  console.log(user)
  // user !== undefined? (user = JSON.parse(user)) : (user = undefined)
  if (user) {
    user = JSON.parse(user);
  } 
  console.log(!user)

  // console.log(user?.success, to.meta.requiresAuth, to.name !== "Loginview")

  if (!user?.success && to.meta.requiresAuth) {
    console.log("redirecting to login view", !user?.success, user?.success);
    return { name: "LoginView" };
  } else if (user?.success && to.name === "LoginView") {
    return { name: "DashboardView" };
    //
  }
});
export default router;
