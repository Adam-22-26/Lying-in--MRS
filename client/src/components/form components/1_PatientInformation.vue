<script>
import FormTextInputVue from "./FormTextInput.vue";

export default {
  name: "PatientInformation",
  components: {
    FormTextInputVue,
  },
  props: {
    patientInformation: { type: Object },
  },
  computed:{
    patientInformationObject(){
        return this.patientInformation
    }
  }

};
</script>
<template>
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
          ref="name"
          :value="patientInformationObject.name"
          v-model="this.patientInformationObject.name"
        />
      </div>
      <!-- bd, age wrapper -->
      <div class="flex flex-wrap gap-3 flex-grow">
        <!-- birthday -->
        <div class="flex-grow">
          <FormTextInputVue
            :label="'Birthday'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
            :value="patientInformationObject.birthday"
            v-model="this.patientInformationObject.birthday"
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
            v-model="this.patientInformationObject.age"
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
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
          :value="patientInformationObject.arrival_date"
          v-model="patientInformationObject.arrival_date"
        />
      </div>
      <!-- time , status warapper -->
      <div class="flex flex-wrap gap-3 flex-grow">
        <!-- date -->
        
        <div class="flex-grow">
          <FormTextInputVue
            :label="'Arrival Time'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
            v-model="this.patientInformationObject.arrival_time"
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
            v-model="this.patientInformationObject.status"
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
        v-model="this.patientInformationObject.address"
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
          :input-type="'number'"
          v-model="this.patientInformationObject.no_of_hours_stayed"
        />
      </div>
      <!-- checkups -->
      <div class="flex-grow">
        <FormTextInputVue
          :label="'No. Of Check-ups'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'number'"
          v-model="this.patientInformationObject.no_of_check_ups"
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
          :input-type="'number'"
          v-model="this.patientInformationObject.no_of_tetanus_toxoid_given"
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
          v-model="this.patientInformationObject.obs_score"
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
             v-model="this.patientInformationObject.laboratory_done.cbc"
          />
          <p class="font-semibold text-gray-600">CBC</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            v-model="this.patientInformationObject.laboratory_done.unalysis"
          />
          <p class="font-semibold text-gray-600">URINALYSIS</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            v-model="this.patientInformationObject.laboratory_done.hbsag"
          />
          <p class="font-semibold text-gray-600">HBSAG</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            v-model="this.patientInformationObject.laboratory_done.vdrl"
          />
          <p class="font-semibold text-gray-600">VDRL</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            v-model="this.patientInformationObject.laboratory_done.blood_typing"
          />
          <p class="font-semibold text-gray-600">BLOOD TYPING</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            v-model="this.patientInformationObject.laboratory_done.ultrasound"
          />
          <p class="font-semibold text-gray-600">ULTRA SOUND</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            v-model="this.patientInformationObject.laboratory_done.syphilis"
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
            v-model="this.patientInformationObject.medical_history.hypertension"
          />
          <p class="font-semibold text-gray-600">HYPERTENSION</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            v-model="
              this.patientInformationObject.medical_history.thyroid_problems
            "
          />
          <p class="font-semibold text-gray-600">THYROID PROBLEMS</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            v-model="
              this.patientInformationObject.medical_history.heart_problems
            "
          />
          <p class="font-semibold text-gray-600">HEART PROBLEMS</p>
        </div>
        <div class="flex gap-3 flex-flow min-w-[160px]">
          <input
            class="formCheckbox text-gray-300 w-[20px] h-[20px]"
            type="checkbox"
            v-model="
              this.patientInformationObject.medical_history.diabetes_mellitus
            "
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
            v-model="this.patientInformationObject.medical_history.others"
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
            v-model="this.patientInformationObject.medical_history.ob_hisotry.nsd"
          />
        </div>
        <div class="flex flex-grow">
          <FormTextInputVue
            :label="'CS'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
            v-model="this.patientInformationObject.medical_history.ob_hisotry.cs"
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
            v-model="this.patientInformationObject.vital_sign.bp"
          />
        </div>
        <div class="flex flex-grow">
          <FormTextInputVue
            :label="'HR'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
            v-model="this.patientInformationObject.vital_sign.hr"
          />
        </div>
        <div class="flex flex-grow">
          <FormTextInputVue
            :label="'PR'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
            v-model="this.patientInformationObject.vital_sign.pr"
          />
        </div>
        <div class="flex flex-grow">
          <FormTextInputVue
            :label="'TEMP'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
            v-model="this.patientInformationObject.vital_sign.temp"
          />
        </div>
        <div class="flex flex-grow">
          <FormTextInputVue
            :label="'BLOOD TYPE/RH'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="false"
            :input-type="'text'"
            v-model="this.patientInformationObject.vital_sign.blood_type_RH"
          />
        </div>
      </div>
    </div>
  </div>
</template>
