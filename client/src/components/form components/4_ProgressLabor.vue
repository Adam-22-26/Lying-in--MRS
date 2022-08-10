<script>
import FormTextInputVue from './FormTextInput.vue';
export default {
  name: "ProgressLabor",
  components:{
    FormTextInputVue,
  }
};
</script>

<template>
  <div
    class="flex flex-col gap-3 border-[1px] border-gray-300 md:rounded-2xl p-3 rounded-md"
  >
    <div>
      <FormTextInputVue
        :label="'Diagnosis and Finding:'"
        :label-style="'font-semibold text-gray-600'"
        :placeholder="''"
        :is-required="true"
        :input-type="'text'"
      />
    </div>
    <div>
      <FormTextInputVue
        :label="'Reason/s for Referral (specify)'"
        :label-style="'font-semibold text-gray-600'"
        :placeholder="''"
        :is-required="false"
        :input-type="'text'"
      />
    </div>
  </div>
  <!-- designation and contact no. wrapper -->
  <div
    class="flex flex-col gap-3 border-[1px] border-gray-300 md:rounded-2xl p-3 rounded-md"
  >
    <div class="flex flex-glow overflow-hidden">
      <FormTextInputVue
        :label="'Name and Designation of Referring Service Provider '"
        :label-style="'font-semibold text-gray-600'"
        :placeholder="''"
        :is-required="true"
        :input-type="'text'"
      />
    </div>
    <div>
      <FormTextInputVue
        :label="'Contact No.'"
        :label-style="'font-semibold text-gray-600'"
        :placeholder="''"
        :is-required="false"
        :input-type="'text'"
      />
    </div>
  </div>
</template>
