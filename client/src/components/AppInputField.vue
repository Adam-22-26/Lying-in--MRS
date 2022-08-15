<script>
export default {
  name: "AppInputField",
  props: {
    getInput: { type: Function },
    label: { type: String },
    placeholder: { type: String },
    isRequired: { type: Boolean },
    inputType: { type: String },
  },
  methods: {
    onchange(event){
        this.getInput(event)
    }
  },
};
</script>

<template>
  <div class=" flex flex-col relative min-h-[40px] w-full rounded-md ">
    <label for="input" class="text-[16px]  absolute mt-[-10px] bg-white-50 ml-5 text-gray-800 font-display ">{{ label }}</label>
    <input
    class="font-display min-h-[40px] px-5 py-3 text-gray-800 focus:outline-none font-regular text-[19px] rounded-lg border-[1px] focus:border-blue-300"
      name="input"
      :type="inputType || 'text'"
      :placeholder="placeholder || ''"
      :required="isRequired || false"
      @input="onchange($event)"
    />
  </div>
</template>
