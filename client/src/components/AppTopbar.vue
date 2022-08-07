<script>
export default {
  name: "AppTopbar",
};
</script>
<template>
  <div class="flex sticky justify-between  items-center px-5 w-full min-h-[60px] max-h-[60px] overflow-hidden bg-white-100 shadow-md">
    <div class="w-full">
        <p class="text-[20px] font-semibold"> 12 : 33 : PM</p>
        <p class="text-[13px]"> Tuesday, 7/29/2022</p>
    </div>
    <div class="flex flex-row justify-end gap-3  w-full ml-[10px] ">
        <p class="text-[20px] font-semibold ">Juan Dela Cruz</p>
      <img
        src="../assets/hero/doctor.png"
        alt="hero"
        class="objec-fit w-[35px] h-[35px] border-2 border-green rounded-full"
      />
      
    </div>

  </div>
</template>

