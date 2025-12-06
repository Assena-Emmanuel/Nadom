<template>
    <div class="listingSingleblock mb-4" id="pricingss">
        <div class="SingleblockHeader">
            <a data-bs-toggle="collapse" data-parent="#pricing" data-bs-target="#pricing" aria-controls="pricing" href="#" aria-expanded="false" class="collapsed"><h4 class="listingcollapseTitle">Menu Pricing</h4></a>
        </div>
        
        <div id="pricing" class="panel-collapse collapse show">
            <div class="card-body p-4 pt-2">
                <ul class="deatil_features row align-items-start g-3 p-0">
                    <li v-for="(item, index) in data" :key="index" class="col-xl-4 col-lg-6 col-md-6">
                        <div class="pricingMenu d-block">
                            <div class="d-flex align-items-center justify-content-between gap-2 border br-dashed rounded-pill p-2">
                                <div class="pricingMain d-flex align-items-center justify-content-start gap-2">
                                    <div class="pricingMenuthumb"><figure class="m-0"><img :src="item.image" class="img-fluid avatar-lg circle" alt=""></figure></div>
                                    
                                    <div class="prcCaptions">
                                        <h6 class="fw-medium mb-0">{{item.title}}</h6>
                                        <p class="text-md m-0">{{item.tag}}</p>
                                    </div>
                                </div>
                                <div class="pricingCharges">
                                    <h6 class="text-primary m-0">{{item.value}}</h6>
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
import img1 from '@/assets/img/prc-1.jpg'
import img2 from '@/assets/img/prc-2.jpg'
import img3 from '@/assets/img/prc-3.jpg'
import img4 from '@/assets/img/prc-4.jpg'
import img5 from '@/assets/img/prc-5.jpg'
import img6 from '@/assets/img/prc-6.jpg'
import { ref } from 'vue'

const data = ref([
    {
        image:img1,
        title:'Potato Slice',
        tag:'Spicy',
        value:'$20'
    },
    {
        image:img2,
        title:'Tasty Tandoori',
        tag:'Dyno',
        value:'$45'
    },
    {
        image:img3,
        title:'Indian Thali',
        tag:'Tasty',
        value:'$120'
    },
    {
        image:img4,
        title:'Slice Burger',
        tag:'Spicy',
        value:'$60'
    },
    {
        image:img5,
        title:'Cheese Burger',
        tag:'Cold',
        value:'$50'
    },
    {
        image:img6,
        title:'Cold Coffee',
        tag:'Taste',
        value:'$35'
    },
])

</script>
