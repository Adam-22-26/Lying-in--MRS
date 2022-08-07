<script>
import AppInputFieldVue from "../components/AppInputField.vue";
import AppButtonVue from "../components/AppButton.vue";
import AppLogoVue from "../components/AppLogo.vue";
import { axios } from "../utils/axios.js";
export default {
  name: "SignupView",
  components: {
    AppInputFieldVue,
    AppButtonVue,
    AppLogoVue,
  },
  data() {
    return {
      signupData: {
        fullname: "",
        gender: "",
        age: "",
        position: "",
        account_role: "",
        email: "",
        password: "",
      },
      confirm_pasword: "",
      isPasswordVisible: false,
    };
  },
  methods: {
    getFullnameInput(e) {
      this.signupData.fullname = e.target.value;
    },
    getGenderInput(e) {
      this.signupData.gender = e.target.value;
    },
    getAgeInput(e) {
      this.signupData.age = e.target.value;
    },
    getPositionInput(e) {
      this.signupData.position = e.target.value;
    },
    getAccountRoleInput(e) {
      this.signupData.account_role = e.target.value;
    },
    getEmailInput(e) {
      this.signupData.email = e.target.value;
    },
    getPasswordInput(e) {
      this.signupData.password = e.target.value;
    },
    getConfirmPasswordInput(e) {
      this.confirm_pasword = e.target.value;
    },
    showPassword() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    submitSignup(e) {
      e.preventDefault();
      axios({
        url: "auth/user/signup",
        method: 'post',
        withCredentials: true,
        data: this.signupData
      }).then(res=>{
        console.log("signup res", res)
        if(res.data.success){

          this.$router.push({path: "/login"})
        }
      }).catch(err=>{
        console.log(err)
      })
    },
  },
};
</script>

<template>
  <div
    class="font-display flex w-full justify-center items-center min-h-[100vh] bg-auth-hero"
  >
    <form
      @submit="submitSignup($event)"
      class="m-2 flex max-w-[720px] flex-col gap-6 p-6 py-10 w-full justify-center items-center  bg-white-50 rounded-md"
    >
      <AppLogoVue />
      <h1 class="font-display text-[35px] text-center font-bold text-gray-800">
        Create Account
      </h1>
      <AppInputFieldVue
        :label="'Fullname'"
        :input-type="'text'"
        :is-required="true"
        :placeholder="'Juan Dela Cruz'"
        :get-input="getFullnameInput"
      />
      <AppInputFieldVue
        :label="'Gender'"
        :input-type="'text'"
        :is-required="true"
        :placeholder="'Male'"
        :get-input="getGenderInput"
      />
      <AppInputFieldVue
        :label="'Age'"
        :input-type="'number'"
        :is-required="true"
        :placeholder="'30'"
        :get-input="getAgeInput"
      />
      <AppInputFieldVue
        :label="'Position'"
        :input-type="'text'"
        :is-required="true"
        :placeholder="'Doctor'"
        :get-input="getPositionInput"
      />
      <AppInputFieldVue
        :label="'Account Role'"
        :input-type="'text'"
        :is-required="true"
        :placeholder="'Admin'"
        :get-input="getAccountRoleInput"
      />
      <AppInputFieldVue
        :label="'Email'"
        :input-type="'email'"
        :is-required="true"
        :placeholder="'juandelacruz@gmail.com'"
        :get-input="getEmailInput"
      />
      <AppInputFieldVue
        :label="'Password'"
        :input-type="isPasswordVisible ? 'text' : 'password'"
        :is-required="true"
        :placeholder="''"
        :get-input="getPasswordInput"
      />
      <AppInputFieldVue
        :label="'Confirm Password'"
        :input-type="isPasswordVisible ? 'text' : 'password'"
        :is-required="true"
        :placeholder="''"
        :get-input="getConfirmPasswordInput"
      />
      <div
        class="flex gap-2 justify-start items-center hover:cursor-pointer w-full"
        @click="showPassword"
      >
        <input
          class="w-[19px] h-[19px]"
          type="checkbox"
          :checked="isPasswordVisible"
        />
        <p class="font-display text-[19px]">show password</p>
      </div>
      <p
        class="font-semibold text-[20px] text-green hover:cursor-pointer"
        @click="() => this.$router.push({ name: 'LoginView' })"
      >
        Log In instead
      </p>
      <div class="container display flex gap-5 justify-around items-center">
        <AppButtonVue
          :label="'CLEAR'"
          :button-type="'reset'"
          :style="'bg-white-50 text-gray-800 hover:bg-green hover:text-white-100 bg-white-300 rounded-md py-3'"
        />
        <AppButtonVue :label="'LOG IN'" :button-type="'submit'" :style="'rounded-md py-3'" />
      </div>
    </form>
  </div>
</template>
