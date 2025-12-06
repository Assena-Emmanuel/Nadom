<template>
    <div>
        <ClientOnly>
            <NavbarDark/>
        </ClientOnly>

        <section class="bg-cover position-relative ht-500 py-0" :style="{backgroundImage:`url(${data && data.image ? data.image :bg})`, backgroundRepeat:'no-repeat'}" data-overlay="4">
            <div class="container h-100">
                <div class="row align-items-start">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div class="mainlistingInfo">
                            <div class="d-flex align-items-end justify-content-between flex-wrap gap-3">
                                <div class="firstColumn">
                                    <div class="listingFirstinfo d-flex align-items-center justify-content-start gap-3 flex-wrap">
                                        <div class="listingAvatar">
                                            <NuxtLink to="#" class="d-block"><img :src="logo" class="img-fluid rounded-3" width="95" alt="Avatar"/></NuxtLink>
                                        </div>
                                        <div class="listingCaptioninfo">
                                            <div class="propertyTitlename d-flex align-items-center gap-2 mb-1"><h2 class="fw-semibold text-light mb-0">{{data && data.title ? data.title : 'Christmas Monday'}}</h2><span class="verified mt-1"><img :src="tick" class="img-fluid" width="22" alt="Verified Listing"></span></div>
                                            <div class="listingsbasicInfo">
                                                <div class="d-flex align-items-center justify-content-start flex-wrap gap-2">
                                                    <div class="flexItem me-2"><span class="text-md fw-medium text-light"><i class="fa-solid fa-location-dot me-2"></i>{{data && data.loction ? data.loction : 'Old Paris, France'}}</span></div>
                                                    <div class="flexItem me-2"><span class="text-md fw-medium text-light"><i class="bi bi-briefcase me-2"></i>{{data && data.tag ? data.tag : 'Events'}}</span></div>
                                                    <div class="flexItem">
                                                        <div class="d-flex align-items-center justify-content-start gap-2">
                                                            <div class="d-flex align-items-center justify-content-start gap-1">
                                                                <i class="bi bi-star-fill text-warning text-sm"></i><i class="bi bi-star-fill text-warning text-sm"></i><i class="bi bi-star-fill text-warning text-sm"></i><i class="bi bi-star-fill text-warning text-sm"></i><i class="bi bi-star-half text-warning text-sm"></i>
                                                            </div>
                                                            <span class="text-md fw-medium text-light">(2k Reviews)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lastColumn">	
                                    <div class="d-flex align-items-center justify-content-md-end flex-wrap gap-3">
                                        <div class="flexStart Priceinfo d-flex flex-column">
                                            <span class="fw-medium text-light">Event Time</span>
                                            <span class="fw-bold text-md text-light">24 Nov 2024 - 10:30AM To 14:30PM</span>
                                        </div>
                                        <div class="flexlastButton"><button type="button" class="btn px-4 btn-whites text-primary fw-medium rounded-pill"><i class="bi bi-telephone me-2"></i>Call Now</button></div>
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
                            <DescOne/>

                            <PriceOne/>

                            <ProductOne/>

                            <FeatureOne/>

                            <GallaryOne/>

                            <DetailMap/>

                            <DetailChart/>

                            <DetailReview/>

                            <DetailList/>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <DetailSidebarFour/>
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
import bg from '@/assets/img/single-4.jpg'
import logo from '@/assets/img/logo-4.png'
import tick from '@/assets/img/tick.svg'
import DescOne from '@/components/listing/detail/desc-one.vue';
import PriceOne from '@/components/listing/detail/price-one.vue';
import ProductOne from '@/components/listing/detail/product-one.vue';
import FeatureOne from '@/components/listing/detail/feature-one.vue';
import GallaryOne from '@/components/listing/detail/gallary-one.vue';
import DetailMap from '@/components/listing/detail/detail-map.vue';
import DetailChart from '@/components/listing/detail/detail-chart.vue';
import DetailReview from '@/components/listing/detail/detail-review.vue';
import DetailList from '@/components/listing/detail/detail-list.vue';
import DetailSidebarFour from '@/components/listing/detail/detail-sidebar-four.vue';
import { useRoute } from 'vue-router'
import { listData } from '@/data/data';

 const route = useRoute()

const data = listData.find((item)=>item.id === parseInt(route.params.id))
</script>

<style lang="scss" scoped>

</style>