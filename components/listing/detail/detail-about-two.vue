<template>
    <div class="listingSingleblock mb-4">
        <div class="card-body p-4">
            <div class="row align-items-start justify-content-start gy-4 gx-5">
                <div v-for="(item, index) in data" :key="index" class="d-flex align-items-center justify-content-start gap-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="flex-y01"><div class="square--35 circle bg-light-primary text-primary text-md"><i :class="item.icon"></i></div></div>	
                    <div class="flex-y02">
                        <p class="text-dark mb-0">{{item.title}}</p>
                    </div>	
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
    {
        icon:'fa-solid fa-fan',
        title:'Air Condition'
    },
    {
        icon:'fa-solid fa-shield-halved',
        title:'Air Bag'
    },
    {
        icon:'fa-solid fa-wheelchair',
        title:'Heated Seats'
    },
    {
        icon:'fa-solid fa-music',
        title:'Audio System'
    },
    {
        icon:'fa-solid fa-location-crosshairs',
        title:'GPS'
    },
    {
        icon:'fa-regular fa-window-maximize',
        title:'Electric Window'
    },
    {
        icon:'fa-solid fa-mask-ventilator',
        title:'Power Break'
    },
    {
        icon:'fa-brands fa-usb',
        title:'USP Port'
    },
])

</script>