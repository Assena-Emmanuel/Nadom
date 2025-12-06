<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <Swiper class="owl-carousel categorySlider"
                :space-between="'15px'"
                :slides-per-view="6"
                :loop="true"
                :modules="[Autoplay]"
                :autoplay="{ delay: 2500, disableOnInteraction: false }"
                :breakpoints="{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                    1200: { slidesPerView: 6 }
                    }" 
            >
                <SwiperSlide v-for="(item, index) in categoryData" :key="index" class="singleCategory">
                    <div class="moder-category">
                        <div class="moder-categoryImage">
                            <img :src="item.image" class="img-fluid" alt="Category Image"/>
                            <div class="moder-categoryIcon">
                                <i class="bi bi-backpack"></i>
                            </div>
                        </div>
                        <div class="moder-categoryContent text-center">
                            <h5><NuxtLink to="/listing_page">{{item.title}}</NuxtLink></h5>
                            <div class="d-flex align-items-center justify-content-center"><span class="badge badge-xs rounded-pill">{{item.list}}</span></div>
                        </div>
                    </div>	
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import { categoryData } from '@/data/data';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay  } from 'swiper/modules';
import 'swiper/css';


</script>
