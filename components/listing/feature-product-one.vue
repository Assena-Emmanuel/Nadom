<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <Swiper class="owl-carousel owl-theme itemslider"
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
                <SwiperSlide v-for="(item, index) in listData" :key="index" class="singleItem">

                    <div class="listingitem-container">
                        <div class="singlelisting-item bg-light border-0">
                            <div class="listing-top-item">
                                <div class="position-absolute end-0 top-0 me-3 mt-3 z-2">
                                    <NuxtLink to="/single-listing-03" class="bookmarkList" data-bs-toggle="tooltip" data-bs-title="Save Listing"><i class="bi bi-suit-heart m-0"></i></NuxtLink>
                                </div>
                                <NuxtLink to="/single-listing-03" class="topLink">
                                    <div class="position-absolute start-0 top-0 ms-3 mt-3 z-2">
                                        <div class="d-flex align-items-center justify-content-start gap-2">
                                            <span v-if="item.status === 'open'" class="badge badge-xs text-uppercase listOpen">Open</span>
                                            <span v-if="item.status === 'close'" class="badge badge-xs text-uppercase listClose">Closed</span>
                                            <span class="badge badge-xs badge-transparent">$$$</span>
                                            <span v-if="item.featured === true" class="badge badge-xs badge-transparent"><i class="bi bi-star mb-0 me-1"></i>Featured</span>
                                        </div>
                                    </div>
                                    <img :src="item.image" class="img-fluid" alt="Listing Image"/>
                                </NuxtLink>
                                <div class="opssListing position-absolute start-0 bottom-0 ms-3 mb-4 z-2">
                                    <div class="d-flex align-items-center justify-content-start gap-2">
                                        <div class="listing-avatar">
                                            <NuxtLink to="/single-listing-03" class="avatarImg"><img :src="item.user" class="img-fluid circle" alt="Avatar"/></NuxtLink>
                                        </div>
                                        <div class="listing-details">
                                            <h4 class="listingTitle"><NuxtLink to="/single-listing-03" class="titleLink">{{ item.title }}<span class="verified"><i class="bi bi-patch-check-fill m-0"></i></span></NuxtLink></h4>
                                            <div class="list-infos">
                                                <div class="mt-1">
                                                    <div class="list-distance text-light mt-1"><i class="bi bi-geo-alt mb-0 me-2"></i>{{item.loction}}</div>
                                                    <div class="list-calls text-light hide-mob mt-2"><i class="bi bi-telephone mb-0 me-2"></i>{{item.call}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-footer-item border-0">
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <div class="catdWraps">
                                        <div class="flex-start">
                                            <NuxtLink to="/single-listing-03" class="d-flex align-items-center justify-content-start gap-2">
                                                <span :class="item.tagIconStyle"><i :class="item.tagIcon"></i></span>
                                                <span class="catTitle">{{item.tag}}</span>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div class="listing-rates">
                                        <div class="">
                                            <span class="d-flex align-items-center justify-content-start gap-1 text-sm">
                                                <i class="bi bi-star-fill mb-0 text-warning"></i><i class="bi bi-star-fill mb-0 text-warning"></i><i class="bi bi-star-fill mb-0 text-warning"></i><i class="bi bi-star-fill mb-0 text-warning"></i><i class="bi bi-star-half mb-0 text-warning"></i>
                                            </span>
                                            <span class="text-md text-muted-2 hide-mob">(42 Reviews)</span>
                                        </div>
                                    </div>
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
import { listData } from '@/data/data';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination  } from 'swiper/modules';
import 'swiper/css';

</script>
