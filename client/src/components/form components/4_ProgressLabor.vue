<script>
import FormTextInputVue from "./FormTextInput.vue";
export default {
  name: "PhysicalIExam",
  components: {
    FormTextInputVue,
  },
  props: {
    medicationTaken: { type: Object },
  },
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
        :is-required="false"
        :input-type="'text'"
        v-model="this.medicationTaken.diagnostic_and_finding"
      />
    </div>
    <div>
      <FormTextInputVue
        :label="'Reason/s for Referral (specify)'"
        :label-style="'font-semibold text-gray-600'"
        :placeholder="''"
        :is-required="false"
        :input-type="'text'"
        v-model="this.medicationTaken.reasons_for_referral"

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
        :is-required="false"
        :input-type="'text'"
        v-model="this.medicationTaken.name_and_designation_of_reffering_service_provider"

      />
    </div>
    <div>
      <FormTextInputVue
        :label="'Contact No.'"
        :label-style="'font-semibold text-gray-600'"
        :placeholder="''"
        :is-required="false"
        :input-type="'text'"
        v-model="this.medicationTaken.contact_no"
        
      />
    </div>
  </div>
</template>
