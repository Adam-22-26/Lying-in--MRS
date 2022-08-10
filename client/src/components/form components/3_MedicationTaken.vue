<script>
import FormTextInputVue from './FormTextInput.vue'
export default {
    name: "MedicationTaken",
    components:{
        FormTextInputVue,
    }
    
}
</script>

<template>
      <!-- before refferal, during -->
      <div class="border-[1px] border-gray-300 md:rounded-2xl p-3 rounded-md">
        <div class="flex flex-wrap gap-3">
          <!-- beforee -->
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'Before Referral'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="false"
              :input-type="'text'"
            />
          </div>
          <!-- during -->
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'During Referral'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="false"
              :input-type="'text'"
            />
          </div>
        </div>
      </div>
</template>