<script>
import { Icon } from '@iconify/vue';
export default{
    name: "DashboardCard",
    components:{
        Icon,
    },
    props:{
        iconStyle:{type:String},
        icon:{type: String},
        iconBackgroundStyle:{type: String},
        title: {type: String},
        info: {type: String}

    }
}
</script>


<template>
    <div class="flex flex-glow justify-between px-5 items-center  border-[1px] border-gray-300 rounded-xl h-[150px] w-[350px]">
        <div>
           <p class="text-[30px] font-semibold text-gray-800">{{title}}</p>
           <p class="text-gray-600 font-semibold">{{info}}</p>
        </div>
        <div :class="iconBackgroundStyle">
            <Icon :icon="icon" :class="iconStyle" />
        </div>
    </div>
</template>