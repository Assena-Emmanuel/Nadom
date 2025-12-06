<template>
    <div>
        <ClientOnly>
            <NavbarDark/>
        </ClientOnly>

        <section class="py-0">
            <div class="container-fluid p-0">
                <div class="row align-items-start">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                        <Swiper class="owl-carousel owl-theme galleryslide"
                            :slides-per-view="2.5"
                            :space-between="0"
                            :loop="true"
                            :modules="[Autoplay,Pagination]"
                            :autoplay="{ delay: 2500, disableOnInteraction: false }"
                            :pagination="false"
                            :breakpoints="{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2.5 },
                                }"
                        >
                            <SwiperSlide v-for="(item, index) in carImages" :key="index" class="gallery-slides">
                                <NuxtLink to="#" @click.prevent="openLightbox(index)" class="mfp-gallery"><img :src="item" class="img-fluid" alt="brand image"/></NuxtLink>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <vue-easy-lightbox
                        :visible="visible"
                        :imgs="carImages"
                        :index="index"
                        @hide="visible = false"
                    />
                </div>
            </div>
        </section>

        <section class="position-relative py-4 bg-white">
            <div class="container">
                <div class="row align-items-start">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div class="mainlistingInfos">
                            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div class="firstColumn">
                                    <div class="listingFirstinfo d-flex align-items-center justify-content-start gap-3 flex-wrap">
                                        <div class="listingCaptioninfo">
                                            <div class="propertyTitlename d-flex align-items-center gap-2 mb-1"><h3 class="fw-semibold mb-0">TATA Nexon XM White</h3></div>
                                            <div class="listingsbasicInfo">
                                                <div class="d-flex align-items-center justify-content-start flex-wrap gap-2">
                                                    <div class="flexItem me-2"><span class="text-md fw-medium"><i class="fa-solid fa-location-dot me-2"></i>Old Paris, France</span></div>
                                                    <div class="flexItem me-2"><span class="text-md text-success fw-medium"><i class="bi bi-briefcase me-2"></i>Classified</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lastColumn">	
                                    <div class="d-flex align-items-center justify-content-md-end gap-3">
                                        <div class="flexStart Priceinfo d-flex flex-column">
                                            <span class="fw-medium">Price</span>
                                            <span class="fw-bold fs-6 text-dark">$2,485</span>
                                        </div>
                                        <div class="flexlastButton"><button type="button" class="btn px-4 btn-light-primary fw-medium rounded-pill"><i class="bi bi-telephone me-2"></i>Call Now</button></div>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="gray-simple pt-4 pt-xl-5">
            <div data-bs-spy="scroll" data-bs-target="#scrollphyNav" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                <div class="container">
                    <div class="row align-items-start gx-xl-5 g-4">
                        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <DetailAboutTwo/>

                            <GallaryOne/>

                            <DescOne/>

                            <DetailMap/>

                            <DetailList/>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <DetailSidebarFive/>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <FooterTop/>
        <FooterOne/>
        <BackToTop/>

    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination  } from 'swiper/modules';
import 'swiper/css';
import VueEasyLightbox from 'vue-easy-lightbox'
import car1 from '@/assets/img/car-1.jpg'
import car2 from '@/assets/img/car-2.jpg'
import car3 from '@/assets/img/car-3.jpg'
import car4 from '@/assets/img/car-4.jpg'
import { ref } from 'vue';
import DetailAboutTwo from '@/components/listing/detail/detail-about-two.vue';
import GallaryOne from '@/components/listing/detail/gallary-one.vue';
import DescOne from '@/components/listing/detail/desc-one.vue';
import DetailMap from '@/components/listing/detail/detail-map.vue';
import DetailList from '@/components/listing/detail/detail-list.vue';
import DetailSidebarFive from '@/components/listing/detail/detsil-sidebar-five.vue'

const carImages = ref([car1,car2,car3,car4])

const visible = ref(false)
const index = ref(0)

const openLightbox = (i) => {
    index.value = i
    visible.value = true
}

</script>
