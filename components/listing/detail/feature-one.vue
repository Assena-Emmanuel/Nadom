<template>
    <div class="listingSingleblock mb-4" id="features">
        <div class="SingleblockHeader">
            <a data-bs-toggle="collapse" data-parent="#feature" data-bs-target="#feature" aria-controls="feature" href="#" aria-expanded="false" class="collapsed"><h4 class="listingcollapseTitle">Features</h4></a>
        </div>
        
        <div id="feature" class="panel-collapse collapse show">
            <div class="card-body p-4 pt-2">
                <div class="interioramenities-block">
                    <div class="interioramenities-body">
                        <div class="row align-items-start justify-content-start g-3">
                            <div v-for="(item, index) in data" :key="index" class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                <div class="d-flex align-items-center"><i :class="item.icon"></i>{{item.title}}</div>
                            </div>
                        </div>
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
        icon:'fa-solid fa-oil-can text-primary me-2',
        title:'Natural Gas'
    },
    {
        icon:'fa-solid fa-mask-ventilator text-primary me-2',
        title:'Ventilation'
    },
    {
        icon:'fa-solid fa-droplet text-primary me-2',
        title:'Pure Water'
    },
    {
        icon:'fa-solid fa-dumpster-fire text-primary me-2',
        title:'Heating'
    },
    {
        icon:'fa-solid fa-plug text-primary me-2',
        title:'Electricity'
    },
    {
        icon:'fa-solid fa-fan text-primary me-2',
        title:'Cooling Air'
    },
    {
        icon:'fa-solid fa-smoking text-primary me-2',
        title:'Smoke detectors'
    },
    {
        icon:'fa-solid fa-wifi text-primary me-2',
        title:'Free WiFi'
    },
    {
        icon:'fa-solid fa-house-fire text-primary me-2',
        title:'Fireplace'
    },
    {
        icon:'fa-solid fa-toilet-paper text-primary me-2',
        title:'Elevator'
    },
    {
        icon:'fa-solid fa-wheelchair text-primary me-2',
        title:'Chair Accessible'
    },
])

</script>
