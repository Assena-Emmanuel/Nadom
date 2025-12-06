<template>
    <div>
        <ClientOnly>
            <NavbarLight/>
        </ClientOnly>

        <div class="image-cover hero-header full-height position-relative" :style="{backgroundImage:`url(${bg})`}" data-overlay="6">
            <div class="container">
                <div class="row justify-content-center align-items-center mb-5">
                    <div class="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                        <div class="position-relative text-center">
                            <h1>Explore Nearby Restaurants</h1>
                            <p class="fs-5 fw-light">Browse high-rated hotels, restaurants, attractions, activities and more!</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-start justify-content-center">
                    <div class="col-xl-11 col-lg-12 col-md-12 col-sm-12">
                        <FormThree/>
                    </div>
                </div>
            </div>
            <div class="mousedrop z-1"><a href="#mains" class="mousewheel center"><i class="bi bi-mouse"></i></a></div>
        </div>

        <section class="py-5 pb-0">
            <div class="container">
                <BrandSlider/>
            </div>
        </section>

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
                <CategoryOne/>
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
    import bg from '@/assets/img/banner-7.jpg'
    import ExploreListingOne from '@/components/listing/explore-listing-one.vue';
    import ExploreCity from '@/components/listing/explore-city.vue';
</script>

