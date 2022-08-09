<script>
import AppInputFieldVue from "../components/AppInputField.vue";
import AppButtonVue from "../components/AppButton.vue";
import AppLogoVue from "../components/AppLogo.vue";
import { axios } from "../utils/axios.js";
export default {
  name: "LoginView",
  components: {
    AppInputFieldVue,
    AppButtonVue,
    AppLogoVue,
  },
  data() {
    return {
      isPasswordVisible: false,
      email: "",
      password: "",
    };
  },
  methods: {
    getEmailInput(e) {
      this.email = e.target.value;
    },
    getPasswordInput(e) {
      this.password = e.target.value;
    },
    showPassword() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    submitSignup(e) {
      e.preventDefault();
      axios({
        url: "auth/user/login",
        method: "post",
        withCredentials: true, 
        data: {
          email: this.email, password: this.password
        },
      })
        .then((res) => {
          if (res.data.success) {
            
            window.localStorage.setItem("user", JSON.stringify(res.data))
            // this.$router.go();
            this.$router.push({ path: "/dashboard" });
          }
        })
        .catch((err) => {
          const {response} = err;
          console.log(response)
          if (!response.verified){ // if user is verified false
            this.$router.push({path: '/verify'})
          }
        });
    },
  },
};
</script>

<template>
  <div
    class="flex w-full justify-center items-center min-h-[100vh] bg-white-300 "
  >
    <form
    @submit="submitSignup($event)"
      class="logInForm flex max-w-[500px] flex-col gap-6 p-6 py-10 w-full justify-center items-center bg-white-50 rounded-3xl"
    >
      <AppLogoVue />
      <h1 class="text-[35px] font-display font-bold text-gray-800">Log In</h1>
      <div class="w-full flex justify-center flex-col gap-8">
        <AppInputFieldVue
          :label="'Email'"
          :input-type="'email'"
          :is-required="true"
          :placeholder="'Enter Your Email'"
          :get-input="getEmailInput"
        />
        <AppInputFieldVue
          :label="'Password'"
          :input-type="isPasswordVisible ? 'text' : 'password'"
          :is-required="true"
          :placeholder="'Enter Your Password'"
          :get-input="getPasswordInput"
        />
      </div>
      <div
        class="flex gap-2 justify-start items-center hover:cursor-pointer w-full"
        @click="showPassword"
      >
        <input type="checkbox" :checked="isPasswordVisible" class="w-[20px] h-[20px]" />
        <p class="text-[19px]">show password</p>
      </div>
      <p
        class="text-[19px] font-semibold text-green hover:cursor-pointer"
        @click="() => this.$router.push({ name: 'SignupView' })"
      >
        Create an Account
      </p>
      <div class="container display flex justify-center items-center">
        <AppButtonVue :label="'LOG IN'" :button-type="'submit'" :style="'rounded-md'" />
      </div>
    </form>
  </div>
</template>
