<script>
import AppInputFieldVue from "../components/AppInputField.vue";
import AppButtonVue from "../components/AppButton.vue";
import AppLogoVue from "../components/AppLogo.vue";
import { axios } from "../utils/axios.js";
import { Icon } from "@iconify/vue";

export default {
  name: "SignupView",
  components: {
    AppInputFieldVue,
    AppButtonVue,
    AppLogoVue,
    Icon,
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
        display_photo: null,
      },
      image_file_to_upload: null,
      confirm_pasword: "",
      isPasswordVisible: false,
    };
  },
  computed: {
    isPasswordIdentical() {
      if (
        this.confirm_pasword.length > 0 &&
        this.signupData.password.length > 0
      ) {
        if (this.signupData.password === this.confirm_pasword) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
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
      if (this.confirm_pasword === this.signupData.password) {
        // alert('dsfsdf')
        axios({
          url: "auth/user/signup",
          method: "post",
          withCredentials: true,
          data: this.signupData,
        })
          .then((res) => {
            console.log("signup res", res);
            if (res.data.success) {
              this.$router.push({ path: "/login" });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
      }
    },

    onChangeInputFile() {
      this.$refs.imageFormSubmitRef.submit();
    },
    removeImage() {
      this.signupData.display_photo = null;
    },
    addDisplayPhoto(e) {
      e.preventDefault();
      const file = this.$refs.displayPhotoRef.files[0];
      this.image_file_to_upload = file;

      const formData = new FormData();
      formData.append("file", this.image_file_to_upload);

      axios({
        url: "api/addphoto",
        method: "post",
        withCredentials: true,
        data: formData,
      })
        .then((res) => {
          if (res.data.success) {
            const image = res.data.imgUrl;
            this.signupData.display_photo = image;
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
  <div
    class="font-display flex w-full justify-center items-center min-h-[100vh] bg-white-300"
  >
    <form
      @submit="submitSignup($event)"
      class="signUpFrom md:m-2 flex max-w-[900px] flex-col gap-6 md:p-6 py-10 w-full justify-center items-center bg-white-50 md:rounded-3xl"
    >
      <AppLogoVue />
      <h1 class="font-display text-[35px] text-center font-bold text-gray-800">
        Create Account
      </h1>
      <AppInputFieldVue
        :label="'Full Name'"
        :input-type="'text'"
        :is-required="true"
        :placeholder="'Juan Dela Cruz'"
        :get-input="getFullnameInput"
      />
      <AppInputFieldVue
        :label="'Gender'"
        :input-type="'text'"
        :is-required="true"
        :placeholder="'Gender'"
        :get-input="getGenderInput"
      />
      <AppInputFieldVue
        :label="'Age'"
        :input-type="'number'"
        :is-required="true"
        :placeholder="'Age'"
        :get-input="getAgeInput"
      />
      <AppInputFieldVue
        :label="'Position'"
        :input-type="'text'"
        :is-required="true"
        :placeholder="'eg. Doctor'"
        :get-input="getPositionInput"
      />
      <AppInputFieldVue
        :label="'Account Role'"
        :input-type="'text'"
        :is-required="true"
        :placeholder="'eg. employee'"
        :get-input="getAccountRoleInput"
      />
      <AppInputFieldVue
        :label="'Email'"
        :input-type="'email'"
        :is-required="true"
        :placeholder="'eg. juandelacruz@gmail.com'"
        :get-input="getEmailInput"
      />
      <div class="w-full flex flex-col gap-6 p-1 relative justify-center items-center  ">
        <div
          class=" rounded-[10px] min-w-full  border-red-600 border-[2px] min-h-full absolute"
          v-if="!isPasswordIdentical"
        ></div>

        <AppInputFieldVue
          :label="'Password'"
          :input-type="isPasswordVisible ? 'text' : 'password'"
          :is-required="true"
          :placeholder="'eg. secret'"
          :get-input="getPasswordInput"
        />
        <AppInputFieldVue
          :label="'Confirm Password'"
          :input-type="isPasswordVisible ? 'text' : 'password'"
          :is-required="true"
          :placeholder="'eg. secret'"
          :get-input="getConfirmPasswordInput"
        />
      </div>
      <form
        @submit="addDisplayPhoto($event)"
        ref="imageFormSubmitRef"
        enctype="multipart/form-data"
        class="w-full flex gap-2 flex-col justify-center items-center bg-white-100 p-2"
      >
        <p class="font-semibold">Display Photo</p>
        <div
          v-if="signupData.display_photo"
          class="relative w-[100px] h-[100px] border-[1px] border-white-400 rounded-full overflow-hidden"
        >
          <img
            :src="signupData.display_photo"
            class="w-[100px] h-[100px] rounded-full m-auto object-cover"
            alt="image"
            srcset=""
          />
          <button
            @click="removeImage"
            type="button"
            class="absolute bottom-2 right-3 text-[30px] text-red-600"
          >
            <Icon icon="akar-icons:circle-x-fill" />
          </button>
        </div>
        <div
          v-else
          class="relative w-[100px] h-[100px] border-[1px] border-white-400 rounded-full"
        >
          <!-- default clipart img -->
          <Icon
            icon="healthicons:doctor"
            class="absolute w-full h-full p-0 text-gray-300"
          />
          <!-- icon -->
          <div class="w-full">
            <label for="file-input"
              ><Icon
                icon="ant-design:plus-square-filled"
                class="absolute w-[45px] h-[45px] top-7 left-7 text-green cursor-pointer opacity-90"
            /></label>
            <input
              ref="displayPhotoRef"
              @change="addDisplayPhoto"
              type="file"
              id="file-input"
              class="hidden w-full h-full object-cover"
              accept="image/*"
              required
            />
          </div>
        </div>
      </form>

      <div
        class="flex gap-2 justify-start items-center hover:cursor-pointer w-full ml-4"
        @click="showPassword"
      >
        <input
          class="w-[19px] h-[19px]"
          type="checkbox"
          :checked="isPasswordVisible"
        />
        <p class="font-display text-[19px] ">show password</p>
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
        <AppButtonVue
          :label="'SIGN UP'"
          :button-type="'submit'"
          :style="'rounded-md py-3'"
        />
      </div>
    </form>
  </div>
</template>
