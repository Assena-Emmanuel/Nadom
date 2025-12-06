<template>
    <div>
        <ClientOnly>
            <NavbarDark/>
        </ClientOnly>

        <div class="image-cover hero-header" :style="{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat',backgroundColor:'#fff0f2'}">
            <div class="container">
                <div class="row justify-content-center align-items-center mb-5">
                    <div class="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                        <div class="position-relative text-center pt-lg-0 pt-5">
                            <h1>Find The Best Places To Stay</h1>
                            <p class="fs-5 fw-light">Browse high-rated hotels, restaurants, attractions, activities and more!</p>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-start justify-content-center mb-lg-5 mb-4">
                    <div class="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                        <div class="heroSearch style-01 shadow-sm">
                            <div class="row gx-lg-2 gx-md-2 gx-3 gy-sm-2 gy-2">
                                <div class="col-xl-10 col-lg-9 col-md-12">
                                    <div class="row gx-lg-2 gx-md-2 gx-3 gy-sm-2 gy-2">
                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div class="form-group">
                                                <div class="mobSearch d-flex align-items-center justify-content-start">
                                                    <div class="flexStart ps-2"><span class="fw-semibold text-dark">Find</span></div>
                                                    <input type="text" class="form-control fs-6 fw-medium border-0" placeholder="What are you looking for?">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 single-border">
                                            <div class="form-group">
                                                <div class="mobSearch d-flex align-items-center justify-content-start">
                                                    <div class="flexStart ps-2"><span class="fw-semibold text-dark">Where</span></div>
                                                    <input type="text" class="form-control fs-6 fw-medium border-0" placeholder="Location">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-3 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <button type="button" class="btn btn-primary full-width fw-medium"><i class="bi bi-search me-2"></i>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="d-block position-relative">
                            <PopularSearchTwo/>
                        </div>
                    </div>
                </div>
            </div>
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
                <CategoryFour/>
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
                <FeatureProductTwo/>
            </div>
        </section>

        <WorkProcessOne/>

        <section>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Choose Your <span class="text-primary">Package</span></h3>
                            <p>Find & Select a perfect & suitable package for your choice.</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center mb-4">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4">
                        <div class="d-flex align-items-center justify-content-between gap-4 p-3 bg-light-primary border border-primary flex-wrap gap-3 rounded-3">
                            <div class="freeprcIcon">
                                <div class="freeprcBocses d-flex align-items-center justify-content-start gap-3">
                                    <div class="freeprcFirst"><span class="square--60 bg-primary text-light circle"><i class="bi bi-patch-check-fill h-auto fs-4"></i></span></div>
                                    <div class="freeprcInfo">
                                        <h5 class="fw-semibold lh-base mb-0">Free Account</h5>
                                        <p class="lh-base mb-0">Choose free account valid for 3 listings</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="freeprcAccount mob-100">
                                <button type="button" class="btn btn-md btn-whites rounded-pill fw-medium mob-100">Free Listing<i class="bi bi-arrow-right ms-2"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <PricingOne/>				
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
import bg from '@/assets/img/banner.png'
import PopularSearchTwo from '@/components/listing/popular-search-two.vue';
import FeatureProductTwo from '@/components/listing/feature-product-two.vue';
</script>

<style lang="scss" scoped>

</style>