<script>
import AppButtonVue from "../components/AppButton.vue";
export default {
  name: "TheFormSlip",
  components: {
    AppButtonVue,
  },
};
</script>
<template>
  <div class="flex flex-col gap-5 max-w-[1000px] min-w-[1000px] m-auto">
    <div class="min-h-[2px] w-full bg-gray-800 mt-10"></div>
    <p class="font-bold text-center w-full">RETURN SLIP</p>
    <table class="w-full">
      <tr>
        <td colspan="3"></td>
        <td colspan="1" class="">
          <p class="font-semibold">Date:</p>
          <input
            type="text"
            class="border-b-[1px] focus:outline-none max-w-[100px] ml-6 mr-2"
          />
        </td>
      </tr>
      <tr>
        <td class="" colspan="2">
          <p class="font-semibold">patient's Name:</p>
          <input
            type="text"
            class="focus:outline-none border-b-[2px] min-w-[400px]"
          />
        </td>
        <td class="" colspan="1">
          <p class="font-semibold">Age:</p>
          <input type="text" class="focus:outline-none border-b-[2px] w-full" />
        </td>
        <td class="" colspan="1">
          <p class="font-semibold">Sex:</p>
          <input type="text" class="focus:outline-none border-b-[2px] w-full" />
        </td>
      </tr>
      <tr class="">
        <td colspan="4">
          <p class="font-semibold">Initial Diagnosis/ Admitting Impression:</p>
          <input type="text" class="focus:outline-none border-b-[2px] w-full" />
        </td>
      </tr>
      <tr class="">
        <td colspan="4">
          <p class="font-semibold">Action Taken:</p>
          <input type="text" class="focus:outline-none border-b-[2px] w-full" />
        </td>
      </tr>
      <tr class="">
        <td colspan="4">
          <p class="font-semibold">Initial Plan:</p>
          <input type="text" class="focus:outline-none border-b-[2px] w-full" />
        </td>
      </tr>
      <tr>
        <td><br /></td>
      </tr>
      <tr>
        <td colspan="3"></td>
        <td colspan="1">
          <input
            type="text"
            value="Juan Dela Cruz"
            class="focus:outline-none border-b-[2px] w-full text-center"
          />
          <p class="text-center font-bold">Signature over Printed Name</p>
          <p class="text-center font-bold">
            Attending Health Provider / Department
          </p>
        </td>
      </tr>
    </table>
    <div class="flex gap-2">
      <p class="font-bold">Facility Contact Number:</p>
      <input type="text" value="09XXXXXXXX" />
    </div>
    <div>
      <AppButtonVue
        @click="this.$router.push({path: '/new-record/form'})"
        :button-type="'button'"
        :label="'back'"
        :style="'bg-white-50 text-gray-800 hover:bg-green hover:text-white-100 bg-white-300 w-[150px] '"
      />
      <AppButtonVue
        :button-type="'button'"
        :label="'Print'"
        :style="'w-[150px] '"
      />
    </div>
  </div>
</template>
