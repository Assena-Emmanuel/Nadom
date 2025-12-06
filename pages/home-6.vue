<template>
    <div>
        <ClientOnly>
            <NavbarDark />
        </ClientOnly>

        <div class="image-cover hero-header position-relative overflow-hidden" :style="{backgroundImage:`url(${bg})`}" data-overlay="6">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                        <div class="position-relative text-center mb-5 mt-lg-0 mt-5">
                            <h1 class="fw-semibold mb-4">Explore <span class="text-light border border-light border-2 px-3 rounded-pill br-dashed">Restaurants</span>in New York</h1>
                            <p class="fs-5 fw-light">Browse high-rated hotels, restaurants, attractions, activities and more!</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="row gx-lg-0 gx-md-0 m-0">
                            <div class="search-wrap bg-white rounded-pill p-2 border">
                                <div class="row gx-lg-2 gx-md-2 gx-3">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-primary rounded-pill fw-medium"><i class="fa-solid fa-magnifying-glass text-light fs-5"></i></button>
                                    </div>
                                    <div class="col">
                                        <div class="form-group no-border position-relative mb-0">
                                            <input type="text" class="form-control border-0 fw-medium rounded-pill ps-2" placeholder="Search for locality, project..">
                                            <span class="position-absolute top-50 end-0 translate-middle"><label class="badge text-success bg-light-success rounded">22k+</label></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="d-block position-relative mt-5">
                            <div class="popularSearches d-flex align-items-center justify-content-center gap-3 flex-wrap">
                                <div class="singleItem"><NuxtLink to="#" class="badge badge-transparent rounded-pill"><i class="fa-solid fa-spa me-2"></i>Beauty & Spa</NuxtLink></div>
                                <div class="singleItem"><NuxtLink to="#" class="badge badge-transparent rounded-pill"><i class="fa-solid fa-bowl-rice me-2"></i>Eat & Drink</NuxtLink></div>
                                <div class="singleItem"><NuxtLink to="#" class="badge badge-transparent rounded-pill"><i class="fa-solid fa-bag-shopping me-2"></i>Shopping</NuxtLink></div>
                                <div class="singleItem"><NuxtLink to="#" class="badge badge-transparent rounded-pill"><i class="fa-solid fa-martini-glass me-2"></i>Nightlife</NuxtLink></div>
                                <div class="singleItem"><NuxtLink to="#" class="badge badge-transparent rounded-pill"><i class="fa-solid fa-mug-saucer me-2"></i>Coffee Shop</NuxtLink></div>
                            </div>
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
                <CategoryThree/>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Featured Listing In <span class="text-primary">Las Vegas</span></h3>
                            <p>Explore Hot & Popular Business Listings</p>
                        </div>
                    </div>
                </div>
                <FeatureProductOne/>
            </div>
        </section>

        <section class="light-top-gredient">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">How ListingHub <span class="text-primary">Work?</span></h3>
                            <p>Let's see ListingHub work process and create an account.</p>
                        </div>
                    </div>
                </div>
                <HowItsWork/>
            </div>
        </section>

        <WorkProcessTwo/>

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
    import bg from '@/assets/img/banner-6.jpg'
    import FeatureProductOne from '@/components/listing/feature-product-one.vue';
</script>

<style lang="scss" scoped></style>