<script>
import { Icon } from "@iconify/vue";
export default {
  name: "FormNavigate",
  components: {
    Icon,
  },
  props: {
    getNavigationButton: { type: Function },
  },
  methods: {
    patient_information() {
      this.getNavigationButton("patient_information");
    },
    physical_exam() {
      this.getNavigationButton("physical_exam");
    },
    medication_taken() {
      this.getNavigationButton("medication_taken");
    },
  },
};
</script>

<template>
  <div class="absolute bottom-[15px] flex flex-col md:flex-row bg-green p-2 gap-2">
    <div @click="patient_information">
      <Icon
        icon="fluent:patient-32-filled"
        class="text-[28px] hover:text-white-20 text-gray-300 cursor-pointer"
      />
    </div>
    <div @click="physical_exam">
      <Icon
        icon="medical-icon:physical-therapy"
        class="text-[28px] hover:text-white-20 text-gray-300 cursor-pointer"
      />
    </div>
    <div @click="medication_taken">
      <Icon
        icon="material-symbols:medication"
        class="text-[28px] hover:text-white-20 text-gray-300 cursor-pointer"
      />
    </div>
  </div>
</template>
