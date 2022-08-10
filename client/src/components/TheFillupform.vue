<script>
import DateTimeVue from "./form components/DateTime.vue";
import FormTextInputVue from "./form components/FormTextInput.vue";
import FormNavigateVue from "./form components/FormNavigate.vue";
import PatientInformationVue from "./form components/1_PatientInformation.vue";
import PhysicalIExam from "./form components/2_PhysicalExam.vue";
import ProgressLabor from "./form components/4_ProgressLabor.vue"
import MedicationTaken from "./form components/3_MedicationTaken.vue"
import AppButtonVue from "./AppButton.vue";
import formObject from "../data/formObject"
export default {
  components: {
    DateTimeVue,
    FormTextInputVue,
    FormNavigateVue,
    AppButtonVue,
    PatientInformationVue,
    PhysicalIExam,
    ProgressLabor,
    MedicationTaken,
  },
  data() {
    return {
      newObjectForm : "",
    }
  },
  watch:{
    newObjectForm(newObject, oldObject){
      console.log("new new", newObject)
    }
  },
  created() {
    // console.log(this.$route)
    this.newObjectForm = formObject;
  },
  mounted() {
    // console.log("this.newObjectForm",this.newObjectForm.medication_taken)
  },
  methods: {
    getNavigationButton(whereTo) {
      // console.log("dfsdfsdf", this.$refs.physical_exam.getBoundingClientRect())
      if ("patient_information" === whereTo) {
        //  start, center, end, or nearest. Defaults to start.
        this.$refs.patient_information.scrollIntoView({ behavior: "smooth" });
      } else if ("physical_exam" === whereTo) {
        this.$refs.physical_exam.scrollIntoView({ behavior: "smooth" });
      } else if ("medication_taken" === whereTo) {
        this.$refs.medication_taken.scrollIntoView({ behavior: "smooth" });
      } 
    },
  },
};
</script>
<template>
  <!-- form wrapper -->
  <form class="flex flex-col gap-3 md:m-5 my-2 pb-10 max-w-[1600px]">
    <FormNavigateVue :getNavigationButton="getNavigationButton" />
    <!-- date time wraper -->
    <div class="flex flex-row justify-end gap-2">
      <div class="flex justify-center items-center gap-2 "  v-if="this.$route.name ==='TheFillupform' ">
        <AppButtonVue
          :label="'CLEAR'"
          :button-type="'reset'"
          :style="'bg-white-50 text-gray-800 hover:bg-green hover:text-white-100 bg-white-300 rounded-sm py-3'"
        />
        <AppButtonVue
          :label="'SAVE'"
          :button-type="'submit'"
          :style="'rounded-sm py-3'"
        />
      </div>
      <DateTimeVue />
    </div>
    <!--  -->
    <div
      ref="patient_information"
      name="patient_information"
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">PATIENT INFORMATION</h2>
      <!-- patien information wrapper -->
      <PatientInformationVue :patient-information-object="newObjectForm.patient_information" />
    </div>
    <!-- physical exam -->
    <div
      ref="physical_exam"
      name="physical_exam"
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">PHYSICAL EXAM</h2>
      <PhysicalIExam />
    </div>
    <!-- medication taken -->
    <div
      ref="medication_taken"
      name="medication_taken"
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">MEDICATION TAKEN</h2>
      <MedicationTaken />
      <ProgressLabor />
      
    </div>
    <!-- progress of labor -->
    <!-- <div
      ref="progress_of_labor"
      name="progress_of_labor"
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">PROGRESS OF LABOR</h2>

      
    
    </div> -->
  </form>
</template>
<!-- medication taken -->
<!-- <div></div> -->
<!-- progress of labor -->
