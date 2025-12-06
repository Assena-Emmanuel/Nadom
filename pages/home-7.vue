<template>
    <div>
        <ClientOnly>
            <NavbarLight/>
        </ClientOnly>

        <div class="image-cover hero-header full-height position-relative" :style="{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}" data-overlay="6">
            <div class="container">
                <div class="row justify-content-center align-items-center mb-5 mt-lg-0 mt-5">
                    <div class="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                        <div class="position-relative text-center">
                            <h1>Explore Verified Listings</h1>
                            <p class="fs-5 fw-light">Browse high-rated hotels, restaurants, attractions, activities and more!</p>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-start justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12">
                        <div class="searchUpper">
                            <nav>
                                <div class="nav nav-tabs d-flex align-items-center justify-content-center" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-placess-tab" data-bs-toggle="tab" data-bs-target="#nav-placess" type="button" role="tab" aria-selected="true">Places</button>
                                    <button class="nav-link" id="nav-rentalss-tab" data-bs-toggle="tab" data-bs-target="#nav-rentalss" type="button" role="tab" aria-selected="false">Rental</button>
                                    <button class="nav-link" id="nav-classifiedss-tab" data-bs-toggle="tab" data-bs-target="#nav-classifiedss" type="button" role="tab" aria-selected="false">Classified</button>
                                    <button class="nav-link" id="nav-attractionss-tab" data-bs-toggle="tab" data-bs-target="#nav-attractionss" type="button" role="tab" aria-selected="false">Attractions</button>
                                </div>
                            </nav>
                            <div class="heroSearch rounded-search style-01">
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
                                            <button type="button" class="btn btn-primary rounded-pill full-width fw-medium"><i class="bi bi-search me-2"></i>Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mousedrop z-1"><a href="#mains" class="mousewheel center"><i class="bi bi-mouse"></i></a></div>
        </div>

        <section class="py-5 pb-0">
            <div class="container">
                <div class="row align-items-center justify-content-between g-xl-4 g-3">
                    <div v-for="(item, index) in review" :key="index" class="col-xl-4 col-lg-4 col-md-4">
                        <div class="ratingcaption text-center">
                            <div class="figureimg mb-3"><img :src="item.image" width="50" class="img-fluid" alt=""></div>
                            <div class="d-flex align-items-center justify-content-center gap-1">
                                <div class="fw-bold text-dark">4.8</div>
                                <div class="d-flex align-items-center justify-content-start gap-1 mb-2">
                                    <i v-for="(el, index) in item.rate" :key="index" :class="el"></i>
                                </div>
                            </div>
                            <div class="text-muted fw-medium"><span>{{item.review}}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="mains">
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

        <section class="bg-light">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Hot & Trending <span class="text-primary">Categories</span></h3>
                            <p>Explore all types of popular category for submit your listings</p>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-center justify-content-between row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-xl-4 g-3">
                    <div v-for="(item, index) in categoryData.slice(0,10)" :key="index" class="col">
                        <div class="category-small-wrapper">
                            <router-link to="#" class="categoryBox">
                                <div class="categoryCapstions">
                                    <div class="catsIcons"><div class="icoBoxx"><i :class="item.icon"></i></div></div>
                                    <div class="catsTitle"><h5>{{item.title}}</h5></div>
                                    <div class="CatsLists"><span class="categorycounter">{{item.list}}</span></div>
                                </div>
                                <img :src="item.image" class="img-fluid" alt=""/>
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

        <FooterTopTwo/>
        <FooterTwo/>
        <BackToTop/>
    </div>
</template>

<script setup>
    import FeatureProductTwo from '@/components/listing/feature-product-two.vue';
    import PopularListingTwo from '@/components/listing/popular-listing-two.vue';
    import ExploreCity from '@/components/listing/explore-city.vue';
    import bg from '@/assets/img/banner-5.jpg'
    import { categoryData, review } from '@/data/data';
</script>

