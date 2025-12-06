<template>
    <div>

        <ClientOnly>
            <NavbarLight/>
        </ClientOnly>

        <div class="image-cover hero-header bg-primary position-relative" :style="{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}" data-overlay="6">
            <div class="container position-relative z-1">
                <div class="row justify-content-center align-items-center mb-5">
                    <div class="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                        <div class="position-relative text-center">
                            <h1>Browse Nearby Restaurant</h1>
                            <p class="fs-5 fw-light">Browse high-rated hotels, restaurants, attractions, activities and more!</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-start justify-content-center mb-lg-5 mb-4">
                    <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12">
                        <div class="heroSearch rounded-search style-01">
                            <div class="row gx-lg-2 gx-md-2 gx-3 gy-sm-2 gy-2">
                                <div class="col-xl-10 col-lg-9 col-md-8 col-sm-12">
                                    <div class="form-group position-relative">
                                        <input type="text" class="form-control fs-6 fw-medium border-0" placeholder="What are you looking for?">
                                        <div class="position-absolute top-50 end-0 translate-middle-y d-md-block d-none"><span class="badge badge-xs badge-primary rounded-pill">22k listing found</span></div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <button type="button" class="btn btn-primary full-width fw-medium rounded-pill"><i class="bi bi-search me-2"></i>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mousedrop z-1"><a href="#mains" class="mousewheel center"><i class="bi bi-mouse"></i></a></div>
        </div>

        <section class="bg-dark" id="mains">
            <div class="container">
                <div class="row row-cols-xl-6 row-cols-lg-6 row-cols-md-5 row-cols-sm-3 row-cols-2 g-xl-4 g-3">
                    <div v-for="(item, index) in categoryData" :key="index" class="col">
                        <div class="cardio">
                            <router-link to="#" class="cats-modern">
                                <div class="cats-icons">
                                    <i :class="item.icon"></i>
                                </div>
                                <div class="cats-titles">
                                    <h5>{{item.title}}</h5>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">

                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Explore Trending <span class="text-primary">Listings</span></h3>
                        </div>
                    </div>
                </div>
            
                <ExploreListingOne/>
                
                <div class="row align-items-center justify-content-center mt-5">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                        <div class="text-center"><button type="button" class="btn btn-light-primary fw-medium rounded-pill px-md-5">Explore More listings</button></div>
                    </div>
                </div>
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
                <AboutOne/>
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
    import bg from '@/assets/img/banner-8.jpg'
    import { categoryData } from '@/data/data';
    import ExploreListingOne from '@/components/listing/explore-listing-one.vue';
    import ExploreCity from '@/components/listing/explore-city.vue';
</script>