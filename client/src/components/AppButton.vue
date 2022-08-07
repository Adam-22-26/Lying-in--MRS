<script>
export default {
  name: "AppButton",
  props: {
    buttonType: { type: String },
    label: { type: String },
    style: {type: String}
  },
};
</script>
<template>
  <button
    class= "font-display overflow-hidden font-semibold bg-green text-white-100 px-4 py-2 w-full "
    :class=" style || 'bg-green text-white-100'"
    :type="buttonType || 'button'"

  >
    {{ label }}
  </button>
</template>
