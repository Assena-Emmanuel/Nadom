<template>
    <div class="listingSingleblock mb-4">
        <div class="card-body p-4">
            <div class="row align-items-start justify-content-start gy-4 gx-5">
                <div v-for="(item, index) in data" :key="index" class="d-flex align-items-center justify-content-start gap-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="flex-y01"><div class="square--25 circle bg-light-primary text-primary text-xs"><i :class="item.icon"></i></div></div>	
                    <div class="flex-y02">
                        <p class="mb-0">{{item.title}}</p>
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
        icon:'fa-regular fa-building',
        title:'Apartment'
    },
    {
        icon:'fa-solid fa-bed',
        title:'3 Beds'
    },
    {
        icon:'fa-solid fa-bath',
        title:'2 Baths'
    },
    {
        icon:'fa-solid fa-vector-square',
        title:'2500 sqft'
    },
])
</script>
