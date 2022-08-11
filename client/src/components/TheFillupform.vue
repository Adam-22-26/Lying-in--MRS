<script>
import DateTimeVue from "./form components/DateTime.vue";
import FormTextInputVue from "./form components/FormTextInput.vue";
import FormNavigateVue from "./form components/FormNavigate.vue";
import PatientInformationVue from "./form components/1_PatientInformation.vue";
import PhysicalIExam from "./form components/2_PhysicalExam.vue";
import ProgressLabor from "./form components/4_ProgressLabor.vue";
import MedicationTaken from "./form components/3_MedicationTaken.vue";
import AppButtonVue from "./AppButton.vue";
import formObject from "../data/formObject";
import { axios } from "../utils/axios";
import moment from "moment";
import Swal from "sweetalert2";
import AppLogovue from "./AppLogo.vue"
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
    AppLogovue,
  },
  data() {
    return {
      newObjectForm: "",
      dateTime: "",
      time: "",
      date: "",
    };
  },
  watch: {},
  created() {
    // console.log(this.$route)
    this.newObjectForm = formObject;
    setInterval(() => {
      this.dateTime = moment().format("MMMM Do YYYY, h:mm:ss a").split(",");
      this.newObjectForm.date = this.dateTime[0];
      this.newObjectForm.patient_information.arrival_date = this.dateTime[0];
      this.newObjectForm.time = this.dateTime[1];
    }, 1000);
  },

  mounted() {
    // console.log("this.newObjectForm",this.newObjectForm.medication_taken)
  },
  methods: {

    submitForm(e) {
      e.preventDefault();
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        confirmButtonColor: "#7B9749",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          axios({
            url: "api/fillup",
            method: "post",
            data: this.newObjectForm,
            withCredentials: true,
          })
            .then((res) => {
              if (res.data.success) {
                console.log(res.data);
                Swal.fire("Saved!", "", "success");
              } else {
                Swal.fire("Changes are not saved", "", "info");
              }
            })
            .catch((err) => {
              Swal.fire("Changes are not saved", "", "info");
            });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    },

    // scrolview ------------------------------------------------------------->
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

  <form
    @submit="submitForm($event)"
    ref="fillup_form"
    class="flex flex-col gap-3 md:m-5 my-2 pb-10 max-w-[1600px]"
  >
  <AppLogovue />
    <FormNavigateVue :getNavigationButton="getNavigationButton" />
    <!-- date time wraper -->
    <div class="flex flex-row md:justify-end w-full gap-2">
      <div
        class="flex justify-center items-center gap-2 absolute bottom-[15px]"
        v-if="this.$route.name === 'TheFillupform'"
      >
        <AppButtonVue
          @click="resetForm"
          ref="reset"
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
      <div
        class="border-[1px] border-gray-300 rounded-2xl bg-white-20 p-2 flex flex-col gap-1 w-full lg:w-auto"
      >
        <input
          v-model="this.newObjectForm.date"
          contenteditable="true"
          class="focus:outline-none focus:bg-white-200 p-2 rounded-md font-display text-gray-800 text-[22px] font-semibold w-full text-center"
        />
        <input
          v-model="this.newObjectForm.time"
          contenteditable="true"
          class="focus:outline-none focus:bg-white-200 p-2 font-display text-gray-800 text-[19px] font-semibold w-full text-center"
        />
      </div>
    </div>
    <!--  -->
    <div
      ref="patient_information"
      name="patient_information"
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">PATIENT INFORMATION</h2>
      <!-- patien information wrapper -->
      <PatientInformationVue
        :patient-information="newObjectForm.patient_information"
      />
    </div>
    <!-- physical exam -->
    <div
      ref="physical_exam"
      name="physical_exam"
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">PHYSICAL EXAM</h2>
      <PhysicalIExam :physical-exam="newObjectForm.physical_exam" />
    </div>
    <!-- medication taken -->
    <div
      ref="medication_taken"
      name="medication_taken"
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">MEDICATION TAKEN</h2>
      <MedicationTaken :medication-taken="newObjectForm.medication_taken" />
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
