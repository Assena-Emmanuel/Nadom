<template>
    <div class="row justify-content-center g-4">
        <div class="col-xl-12 col-lg-12 col-md-12 col-12">
            <Swiper class="owl-carousel owl-theme teamSlider"
                :slides-per-view="5"
                :space-between="15"
                :loop="true"
                :modules="[Autoplay,Pagination]"
                :autoplay="{ delay: 2500, disableOnInteraction: false }"
                :pagination="false"
                :breakpoints="{
                     0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                    1400: { slidesPerView: 5 },
                    }"
            >
                <SwiperSlide v-for="(item, index) in teamData" :key="index" class="singleItem">
                    <div class="card border">
                        <div class="d-block p-3 pb-0">
                            <img class="img-fluid rounded" :src="item.image" alt="Team image"/>
                        </div>
                        <div class="card-body pb-0">
                            <div class="teamCaps text-center mb-5">
                                <h5 class="mb-0 lh-base">{{item.name}}</h5>
                                <p>{{item.position}}</p>
                            </div>
                            <div class="teamSocial text-center">
                                <div class="d-inline-flex align-items-center justify-content-center gap-4 py-3 px-5  mx-auto border border-bottom-0 rounded-top">
                                    <NuxtLink to="#" v-for="(el, index) in item.social" :key="index" :class="el.iconStyle"><i :class="el.icon"></i></NuxtLink>
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
import { teamData } from '@/data/data';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination  } from 'swiper/modules';
import 'swiper/css';

</script>
