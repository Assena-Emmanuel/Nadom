<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-12">
            <Swiper class="owl-carousel brand-slider"
                :slides-per-view="3"
                :loop="true"
                :modules="[Autoplay]"
                :autoplay="{ delay: 2500, disableOnInteraction: false }"
                :breakpoints="{
                    320: { slidesPerView: 2 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                    1200: { slidesPerView: 6 }
                    }"
                >
                <SwiperSlide v-for="(item, index) in brandImage" :key="index" class="brand-slide px-3 px-lg-5">
                    <img :src="item" class="light-mode-item img-fluid" alt="brand image">
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
    import { brandImage } from '@/data/data';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay  } from 'swiper/modules';
    import 'swiper/css';
</script>