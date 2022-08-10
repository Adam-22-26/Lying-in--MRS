<script>
import FormTextInputVue from "./FormTextInput.vue"
export default {
  name: "PatientInformation",
  components:{
    FormTextInputVue,
  },
  props:{
     patientInformationObject : {type: Object}
  },
   data() {
    return {
        
    }
   },
    created() {
    // console.log(this.patientInformationObject)        
    },
  methods: {
    onChangeFormPatienInformation(){

    }
  },

};
</script>
<template>
{{patientInformationObject}}
  <div class="flex flex-col gap-3">
    <!-- full name, birtheday, age warapper -->
    <div class="flex flex-wrap gap-3">
      <!-- full name -->
      <div class="flex-grow">
        <FormTextInputVue
          :label="'Full Name'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="true"
          :input-type="'text'"
          key="1"
          :input="patientInformationObject.name"
        />
      </div>
      <!-- bd, age wrapper -->
      <div class="flex flex-wrap gap-3 flex-grow">
        <!-- birthday -->
        <div class="flex-grow">
          <FormTextInputVue
            :label="'Birthday'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="'yyyy/mm/dd'"
            :is-required="false"
            :input-type="'text'"
          />
        </div>
        <!-- age -->
        <div class="flex-grow">
          <FormTextInputVue
            :label="'Age'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'number'"
          />
        </div>
      </div>
    </div>
    <!-- Arrival date, time , status warapper -->
    <div class="flex flex-wrap gap-3">
      <!-- Arrival date -->
      <div class="flex-grow">
        <FormTextInputVue
          :label="'Arrival Date'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="'yyyy/mm/dd'"
          :is-required="false"
          :input-type="'text'"
        />
      </div>
      <!-- time , status warapper -->
      <div class="flex flex-wrap gap-3 flex-grow">
        <!-- date -->
        <div class="flex-grow">
          <FormTextInputVue
            :label="'Arrival Time'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="'yyyy/mm/dd'"
            :is-required="false"
            :input-type="'text'"
          />
        </div>
        <!-- time -->
        <div class="flex-grow">
          <FormTextInputVue
            :label="'Status'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
          />
        </div>
      </div>
    </div>
    <!-- address -->
    <div class="flex w-full">
      <FormTextInputVue
        :label="'Adress'"
        :label-style="'font-semibold text-gray-600'"
        :placeholder="''"
        :is-required="false"
        :input-type="'text'"
      />
    </div>
    <!-- no. hours stayed and checkups wrapper-->
    <div class="flex flex-wrap gap-3 flex-grow">
      <!-- stayed -->
      <div class="flex-grow">
        <FormTextInputVue
          :label="'No. Of Hours Stayed'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
        />
      </div>
      <!-- checkups -->
      <div class="flex-grow">
        <FormTextInputVue
          :label="'No. Of Check-ups'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
        />
      </div>
    </div>
    <!-- no. tetanus ans ob score wrapper-->
    <div class="flex flex-wrap gap-3 flex-grow">
      <!-- tetanus -->
      <div class="flex-grow">
        <FormTextInputVue
          :label="'No. Of Tetanus Toxide Given'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
        />
      </div>
      <!-- ob score -->
      <div class="flex-grow">
        <FormTextInputVue
          :label="'OB Score'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
        />
      </div>
    </div>
    <!-- loboratory done -->
    <div
      class="border-[1px] border-gray-300 rounded-md p-2 flex flex-col gap-2"
    >
      <h3 class="font-semibold text-[22px] text-gray-700">Laboratory Done</h3>
      <div class="flex flex-wrap gap-3">
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            value="true"
          />
          <p class="font-semibold text-gray-600">CBC</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            value="true"
          />
          <p class="font-semibold text-gray-600">URINALYSIS</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            value="true"
          />
          <p class="font-semibold text-gray-600">HBSAG</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            value="true"
          />
          <p class="font-semibold text-gray-600">VDRL</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            value="true"
          />
          <p class="font-semibold text-gray-600">BLOOD TYPING</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            value="true"
          />
          <p class="font-semibold text-gray-600">ULTRA SOUND</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            value="true"
          />
          <p class="font-semibold text-gray-600">SYPHILIS</p>
        </div>
      </div>
    </div>
    <!-- medical hisotry, ob history wrapper -->
    <div
      class="border-[1px] border-gray-300 rounded-md p-2 flex flex-col gap-2"
    >
      <h3 class="font-semibold text-[22px] text-gray-700">Medical History</h3>

      <!-- medical history wrapper -->
      <div class="flex flex-wrap gap-3">
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            value="true"
          />
          <p class="font-semibold text-gray-600">HYPERTENSION</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            value="true"
          />
          <p class="font-semibold text-gray-600">THYROID PROBLEMS</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            value="true"
          />
          <p class="font-semibold text-gray-600">HEART PROBLEMS</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            value="true"
          />
          <p class="font-semibold text-gray-600">DIABETES</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <FormTextInputVue
            :label="'OTHERS'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
          />
        </div>
      </div>
      <!-- ob history wrapper -->
      <h3 class="font-semibold text-[22px] text-gray-700">OB History</h3>
      <div class="flex flex-wrap gap-3 flex-grow">
        <div class="flex flex-grow">
          <FormTextInputVue
            :label="'NSD'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
          />
        </div>
        <div class="flex flex-grow">
          <FormTextInputVue
            :label="'CS'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
          />
        </div>
      </div>
    </div>
    <!-- vital Sign wrapper -->
    <div
      class="border-[1px] border-gray-300 rounded-md p-2 flex flex-col gap-2"
    >
      <h3 class="font-semibold text-[22px] text-gray-700">Vital Sign</h3>
      <div class="flex flex-wrap gap-3">
        <div class="flex flex-grow">
          <FormTextInputVue
            :label="'BP'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
          />
        </div>
        <div class="flex flex-grow">
          <FormTextInputVue
            :label="'HR'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
          />
        </div>
        <div class="flex flex-grow">
          <FormTextInputVue
            :label="'PR'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
          />
        </div>
        <div class="flex flex-grow">
          <FormTextInputVue
            :label="'TEMP'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
          />
        </div>
        <div class="flex flex-grow">
          <FormTextInputVue
            :label="'BLOOD TYPE/RH'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
            
          />
        </div>
      </div>
    </div>
  </div>

</template>

