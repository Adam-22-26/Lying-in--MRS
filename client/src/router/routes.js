import LoginView from "../views/LoginView.vue"
import SignupView from "../views/SignupView.vue"
const routes =[
    {
        path: "/",
        name: "LoginView",
        component:LoginView
    },
    {
        path: "/signup",
        name: "SignupView",
        component:SignupView
    },

]
export default routes