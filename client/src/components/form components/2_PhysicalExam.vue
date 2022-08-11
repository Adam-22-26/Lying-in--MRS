<script>
import FormTextInputVue from "./FormTextInput.vue";
export default {
  name: "PhysicalIExam",
  components: {
    FormTextInputVue,
  },
  props: {
    physicalExam: { type: Object },
  },
};
</script>
<template>
  <div class="border-[1px] border-gray-300 p-3 rounded-md">
    <!-- headneck, heart, chest, abdomen -->
    <div class="flex flex-wrap gap-3">
      <div class="flex flex-grow">
        <FormTextInputVue
          :label="'Head/Neck'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
          :value="this.physicalExam.head_neck"
          v-model="this.physicalExam.head_neck"
        />
      </div>
      <div class="flex flex-grow">
        <FormTextInputVue
          :label="'Heart'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
          :value="this.physicalExam.heart"
          v-model="this.physicalExam.heart"
        />
      </div>
      <div class="flex flex-grow">
        <FormTextInputVue
          :label="'Chest'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
          :value="this.physicalExam.chest"
          v-model="this.physicalExam.chest"
        />
      </div>
      <!-- abdomen -->
      <div class="flex flex-flow flex-col">
        <h3 class="font-semibold text-gray-700">Abdomen</h3>
        <div class="flex flex-wrap gap-2 px-3">
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'FH'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="false"
              :input-type="'text'"
              :value="this.physicalExam.abdomen.fh"
              v-model="this.physicalExam.abdomen.fh"
            />
          </div>
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'FHT'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="false"
              :input-type="'text'"
              :value="this.physicalExam.abdomen.fht"
              v-model="this.physicalExam.abdomen.fht"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- pelvis -->
  <div class="border-[1px] border-gray-300 rounded-md p-2 flex flex-col gap-2">
    <h3 class="font-semibold text-[22px] text-gray-700">Pelvis</h3>
    <!-- id, cx.dilation, ...character -->
    <div class="flex flex-wrap gap-3">
      <div class="flex flex-grow">
        <FormTextInputVue
          :label="'IE'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
          :value="this.physicalExam.pelvis.ie"
          v-model="this.physicalExam.pelvis.ie"
        />
      </div>
      <div class="flex flex-grow">
        <FormTextInputVue
          :label="'Cx. Dilatation'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
          :value="this.physicalExam.pelvis.cx_dilatation"
          v-model="this.physicalExam.pelvis.cx_dilatation"
        />
      </div>
      <div class="flex flex-grow">
        <FormTextInputVue
          :label="'Effacement'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
          :value="this.physicalExam.pelvis.effacement"
          v-model="this.physicalExam.pelvis.effacement"
        />
      </div>
      <div class="flex flex-grow">
        <FormTextInputVue
          :label="'Station'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
          :value="this.physicalExam.pelvis.station"
          v-model="this.physicalExam.pelvis.station"
        />
      </div>
      <!-- bow ruptured -->
      <div class="flex flex-grow gap-3">
        <h3 class="font-semibold text-gray-700">BOW Ruptured</h3>
        <div class="flex flex-row gap-2 items-center">
          <div class="flex gap-3 flex-flow min-w-[60px]">
            <input
              class="formCheckbox text-gray-300 w-[20px] h-[20px]"
              type="checkbox"
              v-model="this.physicalExam.pelvis.bow_ruptured.yes"
            />
            <p class="font-semibold text-gray-600">YES</p>
          </div>
          <div class="flex gap-3 flex-flow min-w-[60px]">
            <input
              class="formCheckbox text-gray-300 w-[20px] h-[20px]"
              type="checkbox"
              v-model="this.physicalExam.pelvis.bow_ruptured.no"
            />
            <p class="font-semibold text-gray-600">NO</p>
          </div>
        </div>
      </div>
      <!-- time -->
      <div class="flex-grow">
        <FormTextInputVue
          :label="'Time'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
           :value="this.physicalExam.pelvis.time"
          v-model="this.physicalExam.pelvis.time"
        />
      </div>
      <!-- character -->
      <div class="flex-grow">
        <FormTextInputVue
          :label="'Character'"
          :label-style="'font-semibold text-gray-600'"
          :placeholder="''"
          :is-required="false"
          :input-type="'text'"
           :value="this.physicalExam.pelvis.character"
          v-model="this.physicalExam.pelvis.character"
        />
      </div>
    </div>
  </div>
</template>
