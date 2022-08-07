import { createRouter, createWebHistory } from "vue-router";
import routes  from "./routes";
import userAuthStore from "../store";

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from)=>{
    // userAuthStore.commit('fetchUser')
    const user = JSON.parse(window.localStorage.getItem("user"))
    console.log("user==> ",user)
    console.log(user.success, to.meta.requiresAuth, to.name !== "Loginview")

    if(!user.success && to.meta.requiresAuth){
            console.log("redirecting to login view", !user.success ,user.success)
         return {name: "LoginView"}
    }else if(user.success && to.name === "LoginView"){
        return {name: "DashboardView"}
        // 
    }
    // if route is requires auth, and user is authenticated, and route not /login

        // userAuthStore.commit('fetchUser')
        // if(to.meta.requiresAuth && !userAuthStore.state.user?.success && to.name !== "LoginView"){
        //     console.log('return to log in view')
        //     return {name: "LoginView"}
        // }
        // else if(userAuthStore.state.user?.success && to.meta.requiresAuth ){
        //     console.log("going to dashboard", userAuthStore.state.user?.success)
        //     return {name: "DashboardView"}
        //     // return false
        // }
    
    

    // console.log('------------------------------------------------')
    // console.log("userAuthStore.state.user", userAuthStore.state)


    // console.log("userAuthStore.state.user?.success",userAuthStore.state.user?.success)
    // console.log(!userAuthStore.state.user?.success, to.name !== "LoginView", to.meta.requiresAuth)


    // if(!userAuthStore.state.user?.success && to.meta.requiresAuth) return
    // console.log(userAuthStore.state.user?.success)    
    // if(to.meta.requiresAuth && to.name !== "LoginView" && userAuthStore.state.user?.success){   
   
    //     console.log(userAuthStore.state.user?.success) 
    // }else if(!to.meta.requiresAuth && !userAuthStore.state.user?.success){
    //     console.log("cancel nav",from )
    //     // return false
    // }else{
    //     
    // }
    // console.log(to.name !== "LoginView")
})
export default router