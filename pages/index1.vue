<template>
    <div>
        <ClientOnly>
            <NavbarDark/>
        </ClientOnly>

        <div class="image-cover hero-header position-relative" :style="{ background: `url(${bg}) no-repeat`, backgroundSize: 'cover' }" data-overlay="6">
            <div class="container">
                <div class="row justify-content-center align-items-center mb-5 mt-lg-0 mt-5">
                    <div class="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                        <div class="position-relative text-center">
                            <h1>Acheter, étudier et séjourner en chine avec notre expertise</h1>
                            <p class="subtitle">etudes, Commerce, visa : nous simplifions votre projet chinois</p>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-start justify-content-center mb-lg-5 mb-4">
                    <div class="col-xl-11 col-lg-12 col-md-12 col-sm-12">
                        <FormOne/>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12 mb-2">
                        <div class="text-center"><h6 class="fw-semibold">Explore Popular Categories</h6></div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-md-12 col-12">
                        <div class="popularSearches d-flex align-items-center justify-content-center column-gap-3 row-gap-1 flex-wrap">
                            <div class="singleItem"><NuxtLink to="#" class="badge badge-transparent rounded-pill">Real Estate</NuxtLink></div>	
                            <div class="singleItem"><NuxtLink to="#" class="badge badge-transparent rounded-pill">Eat & Drink</NuxtLink></div>	
                            <div class="singleItem"><NuxtLink to="#" class="badge badge-transparent rounded-pill">Shopping</NuxtLink></div>	
                            <div class="singleItem"><NuxtLink to="#" class="badge badge-transparent rounded-pill">Nightlife</NuxtLink></div>	
                            <div class="singleItem"><NuxtLink to="#" class="badge badge-transparent rounded-pill">Services</NuxtLink></div>	
                        </div>
                    </div>
                </div>
            </div>
            <div class="mousedrop z-1"><a href="#mains" class="mousewheel"><i class="bi bi-mouse"></i></a></div>
        </div>

        <section class="py-4 pb-0">
            <div class="container">
                <BrandSlider/>
            </div>
        </section>

        <section class="pb-0" id="mains">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Hot & Trending <span class="text-primary">Categories</span></h3>
                            <p>Explore all types of popular category for submit your listings</p>
                        </div>
                    </div>
                </div>
                <CategoryOne/>
            </div>

            <!-- <div v-appear="'fade-up'">Hello</div>
<div v-appear="'fade-left'">Je viens de la gauche</div>
<div v-appear="'zoom-in'">Zoom</div> -->

        </section>

        <section>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Trending & Popular <span class="text-primary">Listings</span></h3>
                            <p>Explore Hot & Popular Business Listings</p>
                        </div>
                    </div>
                </div>
                <PopularListingOne/>
            </div>
        </section>

        
        <section class="bg-light">
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

        <section>
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

        <FooterTop/>

        <FooterOne/>

        <BackToTop/>
    </div>
</template>

<script setup>
import bg from "@/assets/img/banner-1.jpg"
import PopularListingOne from '@/components/listing/popular-listing-one.vue'

</script>

<style lang="scss" scoped>

</style>