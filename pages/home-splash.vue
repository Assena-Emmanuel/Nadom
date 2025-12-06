<template>
    <div>
        <ClientOnly>
            <NavbarLight/>
        </ClientOnly>

        <div class="image-cover hero-header full-height position-relative" :style="{backgroundImage:`url(${currentImage})`}" data-overlay="6">
            <div class="container">
                <div class="row justify-content-center align-items-center mb-5 mt-lg-0 mt-5">
                    <div class="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                        <div class="position-relative text-center">
                            <h1>Explore Your Dream Places</h1>
                            <p class="fs-5 fw-light">Browse high-rated hotels, restaurants, attractions, activities and more!</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-start justify-content-center mb-lg-5 mb-4">
                    <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12">
                        <FormOne/>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="d-block position-relative">
                            <PopularSearchOne/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mousedrop z-1"><a href="#mains" class="mousewheel center"><i class="bi bi-mouse"></i></a></div>
        </div>

        <section class="pb-0">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Hot & Trending <span class="text-primary">Categories</span></h3>
                            <p>Explore all types of popular category for submit your listings</p>
                        </div>
                    </div>
                </div>
                <CategoryTwo/>
            </div>
        </section>

        <section>
            <div class="container">

                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Popular Listings In <span class="text-primary">Chicago</span></h3>
                            <p>Explore Hot & Popular Business Listings</p>
                        </div>
                    </div>
                </div>
                <PopularListingTwo/>
            </div>
        </section>

        <section class="bg-light">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Explore Listings By <span class="text-primary">Cities</span></h3>
                            <p>Our cliens love our services and give great & positive reviews</p>
                        </div>
                    </div>
                </div>
                <ExploreCity/>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Our Great <span class="text-primary">Reviews</span></h3>
                            <p>Our cliens love our services and give great & positive reviews</p>
                        </div>
                    </div>
                </div>
                <ClientOne/>
            </div>
        </section>

        <section class="light-top-gredient">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Latest Updates <span class="text-primary">News</span></h3>
                            <p>Join ListingHub and get latest & trending updates about listing</p>
                        </div>
                    </div>
                </div>
                <BlogOne/>
            </div>
        </section>

        <section class="pt-0">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Explore Upcoming <span class="text-primary">Events</span></h3>
                            <p>Browse our upcoming events and join soon.</p>
                        </div>
                    </div>
                </div>
                <EventOne/>
            </div>
        </section>

        <FooterTop/>
        <FooterOne/>
        <BackToTop/>
        
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import FormOne from '@/components/form/form-one.vue';
import PopularSearchOne from '@/components/listing/popular-search-one.vue';
import NavbarLight from '@/components/navbar/navbar-light.vue';

import bg1 from '@//assets/img/banner-4.jpg'
import bg2 from '@//assets/img/banner-5.jpg'
import bg3 from '@//assets/img/banner-6.jpg'
import bg4 from '@//assets/img/banner-7.jpg'
import CategoryTwo from '@/components/category/category-two.vue';
import PopularListingTwo from '@/components/listing/popular-listing-two.vue';
import ExploreCity from '@/components/listing/explore-city.vue';
import ClientOne from '@/components/client-one.vue';
import BlogOne from '@/components/blog-one.vue';
import EventOne from '@/components/event-one.vue';
import FooterOne from '@/components/footer/footer-one.vue';
import FooterTop from '@/components/footer/footer-top.vue';
import BackToTop from '@/components/back-to-top.vue';

const images = [
  bg1,bg2,bg3,bg4
];

const currentImageIndex = ref(0);
const intervalId = ref(null);

const currentImage = computed(() => images[currentImageIndex.value]);

const startImageRotation = () => {
  intervalId.value = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }, 3000);
};

onMounted(() => {
  startImageRotation();
});

onBeforeUnmount(() => {
  clearInterval(intervalId.value);
});

</script>

<style lang="scss" scoped>

</style>