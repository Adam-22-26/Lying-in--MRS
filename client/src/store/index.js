import { axios } from "../utils/axios";
import { createStore } from "vuex";

 const userAuthStore = createStore({
  state() {
    return {
      user: null,
      verifiedAccount: null,
      pendingAccount: null,
      sidebarStatus: true,
    };
  },
  mutations: {
    fetchUser(state) {
      axios({
        url: "api/isAuthenticated",
        method: "get",
        withCredentials: true,
      })
        .then((res) => {
          if (res.data.success) {
            state.user = res.data
            // console.log("fetchUser if", res.data)
            window.localStorage.setItem("user", JSON.stringify(res.data))
          }else{
            state.user = {success:false, user: null}
            // console.log("fetchUser else", res.data)
            window.localStorage.setItem("user", JSON.stringify(res.data))
          }
        })
        .catch((err) => {
          state.user = {success: false, ...err}
          // console.log("mutations", err)
          const {response} = err
          window.localStorage.setItem("user", JSON.stringify(response.data))
        });
    },
    getAllVerifiedAccount(state){
      axios({
        url: "api/account/verified",
        method: "get",
        withCredentials: true,
      }).then(res=>{
        // console.log('reeessssssss', res)
        if(res.data.success){
          state.verifiedAccount = res
        }else{
          state.verifiedAccount = []
        }
      }).catch(err=>{
        console.log("getAllverifiedErr", err)
      })
    },
    getAllPendingAccount(state){
      // pendingAccount
      axios({
        url: "api/account/requests",
        method: "get",
        withCredentials: true,
      }).then(res=>{
        // console.log('pendingAccount reeessssssss', res)
        if(res.data.success){
          state.pendingAccount = res
        }else{
          state.pendingAccount = []
        }
      }).catch(err=>{
        console.log("pendingAccount", err)
      })
    },
    getMyProfile(state){

    },
    toggleSidebar(state){
      state.sidebarStatus = !state.sidebarStatus
    }
  },
});
export default userAuthStore;