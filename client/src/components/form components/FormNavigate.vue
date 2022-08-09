<script>
import { Icon } from '@iconify/vue';
    export default {
        name: "FormNavigate",
        components:{
            Icon,
        }
    }
</script>

<template >
    <div class="absolute flex  bg-green p-2 gap-2 ">
        <div><Icon icon="fluent:patient-32-filled"  class="text-[20px] hover:text-white-20 text-gray-300 cursor-pointer" /></div>
        <div><Icon icon="medical-icon:physical-therapy"  class="text-[20px] hover:text-white-20 text-gray-300 cursor-pointer" /></div>
        <div><Icon icon="material-symbols:medication"  class="text-[20px] hover:text-white-20 text-gray-300 cursor-pointer" /></div>
        <div><Icon icon="wpf:collaborator"  class="text-[20px] hover:text-white-20 text-gray-300 cursor-pointer" /></div>
    </div>
</template>