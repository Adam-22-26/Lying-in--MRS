<script>
export default {
  name: "DateTime",
  props: {
    date: { type: String },
    time: { type: String },
  },
};
</script>

<template>
  <!-- @input="$emit('update:modelValue', $event.target.value)" -->
  <div
    class="border-[1px] border-gray-300 rounded-2xl bg-white-20 p-2 flex flex-col gap-1"
  >
    <input
    v-model="date"
      @input="$emit('update:modelValue', $event.target.value)"
      contenteditable="true"
      class="focus:outline-none focus:bg-white-200 p-2 rounded-md font-display text-gray-800 text-[22px] font-semibold w-full text-center"
    />
    <input
    v-model="time"
      @input="$emit('update:modelValue', $event.target.value)"
      contenteditable="true"
      class="focus:outline-none focus:bg-white-200 p-2 font-display text-gray-800 text-[19px] font-semibold w-full text-center"
    />
  </div>
</template>
