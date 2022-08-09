<script>
export default {
  name: "FormTextInput",
  props: {
    label: { type: String },
    labelStyle: {type: String},
    placeholder: { type: String },
    isRequired: { type: Boolean },
    inputType: { type: String },

  },
};
</script>

<template>
  <div class="flex flex-col w-full">
    <label :class="labelStyle? labelStyle : 'font-medium text-gray-800'" for="input">{{ label }}</label>
    <input
      class="bg-gray-50 focus:outline-none focus:border-blue-300 border-[1px] border-gray-300 h-[50px] text-[22px] rounded-md px-3 font-medium text-gray-800"
      :type="inputType"
      id="input"
      :placeholder="placeholder"
      :required="isRequired"
    />

  </div>
</template>
