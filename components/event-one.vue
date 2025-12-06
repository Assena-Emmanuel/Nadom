<template>
    <div class="row align-items-center justify-content-center g-4">
        <div v-for="(item, index) in eventOne" :key="index" class="col-xl-4 col-lg-4 col-md-6">
            <div class="eventCard">
                <NuxtLink to="/single-listing-04" class="d-block ht-auto">
                    <div class="eventThumbs position-relative">
                        <div class="eventcats position-absolute top-0 end-0 mt-3 me-3">
                            <div class="rounded bg-dark text-center py-2 px-4">
                                <h4 class="text-light m-0">{{item.date}}</h4>
                                <h6 class="text-light text-md opacity-75 m-0">{{item.month}}</h6>
                            </div>
                        </div>
                        <figure><img :src="item.image" class="img-fluid rounded-3" alt="Event Image"/></figure>
                        <div class="eventcats position-absolute bottom-0 start-0 mb-3 ms-3">
                            <span :class="item.tagstyle"><i class="bi bi-cup-hot me-1"></i>{{item.tag}}</span>
                        </div>
                    </div>
                    <div class="eventCaptions">
                        <h6 class="lh-base fw-semibold m-0">{{item.title}}</h6>
                        <p class="text-md m-0"><i class="bi bi-clock-history me-1"></i>{{item.time}}</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { eventOne } from '@/data/data';


</script>
