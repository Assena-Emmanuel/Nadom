<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <Swiper class="owl-carousel owl-theme reviewsSlide"
                :slides-per-view="3"
                :space-between="15"
                :loop="true"
                :modules="[Autoplay,Pagination]"
                :autoplay="{ delay: 2500, disableOnInteraction: false }"
                :pagination="true"
                :breakpoints="{
                     0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                    1400: { slidesPerView: 4 },
                    }"
            >
                <SwiperSlide v-for="(item, index) in reviewData" :key="index" class="singleItem">
                    <div class="reviews-wrappers">
                        <div class="reviewsBox card border-0 rounded-4 shadow-sm">
                            <div class="card-body p-xl-5 p-lg-5 p-4">
                                <div class="reviews-topHeader d-flex flex-column mb-3">
                                    <div class="d-flex align-items-center justify-content-center mb-2">
                                        <span v-for="(el, index) in item.rate" :key="index" class="me-1 text-sm text-warning"><i :class="el"></i></span>
                                    </div>
                                    <div class="revws-desc text-center">
                                        <p class="text-dark fw-semibold mb-1">{{item.title}}</p>
                                        <p class="m-0 text-dark">{{item.desc}}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="reviewsers d-flex flex-column mt-5">
                            <div class="d-flex align-items-center flex-column flex-thumbes gap-2">
                                <div class="revws-pic"><img :src="item.image" class="img-fluid circle" width="55" alt=""/></div>
                                <div class="revws-caps text-center">
                                    <h6 class="fw-medium fs-6 m-0">{{item.name}}</h6>
                                    <p class="text-muted-2 text-md m-0">{{item.position}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import { reviewData } from '@/data/data';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination  } from 'swiper/modules';
import 'swiper/css';

</script>
