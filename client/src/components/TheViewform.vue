<script>
import DateTimeVue from "./form components/DateTime.vue";
import FormTextInputVue from "./form components/FormTextInput.vue";
import FormNavigateVue from "./form components/FormNavigate.vue";
import PatientInformationVue from "./form components/1_PatientInformation.vue";
import PhysicalIExam from "./form components/2_PhysicalExam.vue";
import ProgressLabor from "./form components/4_ProgressLabor.vue"
import MedicationTaken from "./form components/3_MedicationTaken.vue"
import AppButtonVue from "./AppButton.vue";

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
  props:{
    formDataView:{type:Object}
  },
  created() {
    
    this.newObjectForm = this.formDataView;

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
      <DateTimeVue  :date="this.newObjectForm.date" :time="this.newObjectForm.time"/>
    </div>
    <!--  -->
    <div
      ref="patient_information"
      name="patient_information"
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">PATIENT INFORMATION</h2>
      <!-- patien information wrapper -->
      <PatientInformationVue :patient-information="newObjectForm.patient_information" />
    </div>
    <!-- physical exam -->
    <div
      ref="physical_exam"
      name="physical_exam"
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">PHYSICAL EXAM</h2>
      <PhysicalIExam  :physical-exam="newObjectForm.physical_exam" />
    </div>
    <!-- medication taken -->
    <div
      ref="medication_taken"
      name="medication_taken"
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">MEDICATION TAKEN</h2>
      <MedicationTaken  :medication-taken="newObjectForm.medication_taken"/>
      <ProgressLabor :medication-taken="newObjectForm.medication_taken" />
      
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
