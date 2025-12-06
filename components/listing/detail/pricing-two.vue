<template>
    <div class="listingSingleblock mb-4" id="pricingss">
        <div class="SingleblockHeader">
            <a data-bs-toggle="collapse" data-parent="#pricing" data-bs-target="#pricing" aria-controls="pricing" href="#" aria-expanded="false" class="collapsed"><h4 class="listingcollapseTitle">Extra Amenities Pricing</h4></a>
        </div>
        
        <div id="pricing" class="panel-collapse collapse show">
            <div class="card-body p-4 pt-2">
                <ul class="deatil_features row align-items-start g-3 p-0">
                    <li v-for="(item, index) in data" :key="index" class="col-xl-4 col-lg-6 col-md-6">
                        <div class="pricingMenu d-block">
                            <div class="d-flex align-items-center justify-content-between gap-2 border br-dashed rounded-pill p-2">
                                <div class="pricingMain d-flex align-items-center justify-content-start gap-2">
                                    <div class="pricingMenuIcons">
                                        <div class="square--50 circle bg-light-primary text-primary"><i :class="item.icon"></i></div>
                                    </div>
                                    
                                    <div class="prcCaptions">
                                        <h6 class="fw-medium mb-0">{{item.title}}</h6>
                                    </div>
                                </div>
                                <div class="pricingCharges">
                                    <h6 class="text-muted m-0">{{item.value}}</h6>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
    {
        icon:'fa-solid fa-dog',
        title:'Pet Allow',
        value:'$12.5'
    },
    {
        icon:'fa-solid fa-football',
        title:'Gaming',
        value:'$17.2'
    },
    {
        icon:'fa-solid fa-car',
        title:'Hire car',
        value:'$15'
    },
    {
        icon:'fa-solid fa-bus',
        title:'City Tour',
        value:'$14.5'
    },
    {
        icon:'fa-solid fa-water-ladder',
        title:'Swiming Pool',
        value:'$17.5'
    },
])
</script>
