<template>
    <div>
        <ClientOnly>
            <NavbarDarkTwo />
        </ClientOnly>

        <div class="map-banner-wrap half-map">
            <div class="map-left-box">
                <div class="map-home flt-wrap">
                    <div class="home-map-container fw-map">
                        <MapOne/>
                    </div>
                </div>
            </div>

            <div class="map-content-wrap">
                <FilterThree />

                <div class="map-content-list border-top py-4">

                    <div class="row align-items-center justify-content-between mb-4">
                        <div class="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                            <div class="totalListingshow">
                                <h6 class="fw-medium mb-0">106 Listings Founds</h6>
                            </div>
                        </div>

                        <div class="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                            <div class="text-end">
                                <div class="dropdown d-inline-flex p-0">
                                    <NuxtLink to="#" class="py-2 px-3 dropdown-toggle toogleDrops bg-white" id="shortfilter" data-bs-toggle="dropdown" aria-expanded="false">Short Listings</NuxtLink>
                                    <div class="dropdown-menu border shadow-sm">
                                        <ul class="card rounded-0 p-0">
                                            <li><NuxtLink to="#" class="dropdown-item">Default Order</NuxtLink></li>
                                            <li><NuxtLink to="#" class="dropdown-item">Highest Rated</NuxtLink></li>
                                            <li><NuxtLink to="#" class="active dropdown-item">Most Reviewed</NuxtLink></li>
                                            <li><NuxtLink to="#" class="dropdown-item">Newest Listings</NuxtLink></li>
                                            <li><NuxtLink to="#" class="dropdown-item">Oldest Listings</NuxtLink></li>
                                            <li><NuxtLink to="#" class="dropdown-item">Featured Listings</NuxtLink></li>
                                            <li><NuxtLink to="#" class="dropdown-item">Most Viewed</NuxtLink></li>
                                            <li><NuxtLink to="#" class="dropdown-item">Short By A To Z</NuxtLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-center justify-content-center g-xl-4 g-3">
                        <div v-for="(item, index) in listData" :key="index" class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div class="listingCard listLayouts card rounded-3 border p-3">
                                <div class="row align-items-center justify-content-start g-3">
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div class="listThumb overflow-hidden position-relative">
                                            <div v-if="item.status === 'open'" class="position-absolute start-0 top-0 ms-3 mt-3"><span class="badge badge-xs text-uppercase listOpen rounded-pill">Open</span></div>
                                            <div v-if="item.status === 'closed'" class="position-absolute start-0 top-0 ms-3 mt-3"><span class="badge badge-xs text-uppercase listClose rounded-pill">Close</span></div>
                                            <div v-if="item.featured === true" class="position-absolute end-0 bottom-0 me-3 mb-3"><span class="badge badge-xs featuredList rounded-pill"><i class="fa-solid fa-star me-1"></i>Featured</span></div>
                                            <NuxtLink :to="`/single-listing-05/${item.id}`" class="d-block"><img :src="item.image" class="img-fluid list-thumb object-fit rounded-3" alt="Listing Img"/></NuxtLink>
                                        </div>
                                    </div>

                                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                                        <div class="listCaption px-3 py-4">
                                            <div class="listTitle d-block mb-4">
                                                <div class="d-flex align-items-start justify-content-between gap-2">
                                                    <div class="flex-first">
                                                        <div class="d-flex align-items-center justify-content-start gap-2 flex-wrap mb-3">
                                                            <div class="singleCaption">
                                                                <div class="bg-white rounded-pill py-1 ps-1 pe-3">
                                                                    <div class="d-inline-flex align-items-center justify-content-start gap-2">
                                                                        <span class="square--25 circle bg-price text-light text-sm"><i class="bi bi-coin lh-1 h-auto"></i></span>
                                                                        <span class="text-sm fw-medium">$30.50-$50.55</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div v-if="item.instantBooking === true" class="singleCaption">
                                                                <div class="bg-white rounded-pill py-1 ps-1 pe-3">
                                                                    <div class="d-inline-flex align-items-center justify-content-start gap-2">
                                                                        <span class="square--25 circle bg-booking text-light text-sm"><i class="bi bi-lightning-charge-fill lh-1 h-auto"></i></span>
                                                                        <span class="text-sm fw-medium">Instant Booking</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h5 class="listItemtitle"><NuxtLink :to="`/single-listing-05/${item.id}`">{{ item.title }}<span class="verified"><i class="bi bi-patch-check-fill m-0"></i></span></NuxtLink></h5>
                                                        <div class="d-flex align-items-center justify-content-start flex-wrap gap-3 mt-3">
                                                            <div class="flex-start">
                                                                <div class="list-location text-muted"><span><i class="fa-solid fa-location-dot me-2"></i>{{ item.loction }}</span></div>
                                                            </div>
                                                            <div class="flex-last">
                                                                <div class=" d-flex align-items-center justify-content-start">
                                                                    <i class="fa-solid fa-star text-warning"></i><span class="mx-1 text-dark fw-bold">4.7</span><span class="text-muted text-md">(42k Reviews)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-last">
                                                        <NuxtLink :to="`/single-listing-05/${item.id}`" class="bookmarkList"><i class="fa-regular fa-heart"></i></NuxtLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="list-features d-flex align-items-center justify-content-start row-gap-2 column-gap-3 flex-wrap text-dark">
                                                <div class="d-flex align-items-center fw-medium">
                                                    <span :class="item.tagIconStyle"><i :class="item.tagIcon"></i></span>{{ item.tag }}
                                                </div>
                                                <div class="d-flex align-items-center fw-medium">
                                                    <span class="listCall me-2"><i class="bi bi-telephone"></i></span>{{ item.call }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-center justify-content-center my-5">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item">
                                        <NuxtLink to="#" class="page-link"><i class="fa-solid fa-arrow-left"></i></NuxtLink>
                                    </li>
                                    <li class="page-item"><NuxtLink to="#" class="page-link" href="#">1</NuxtLink></li>
                                    <li class="page-item active"><NuxtLink to="#" class="page-link" href="#">2</NuxtLink></li>
                                    <li class="page-item"><NuxtLink to="#" class="page-link" href="#">3</NuxtLink></li>
                                    <li class="page-item"><NuxtLink to="#" class="page-link" href="#">4</NuxtLink></li>
                                    <li class="page-item"><NuxtLink to="#" class="page-link" href="#">5</NuxtLink></li>
                                    <li class="page-item">
                                        <NuxtLink to="#" class="page-link" href="#"><i class="fa-solid fa-arrow-right"></i></NuxtLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div class="row align-items-center justify-content-center mt-5">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="copyrightbox text-center">
                                <p class="text-muted m-0">©Copyright ListingHub Business Directory {{year}} Design & Develop By ShreeThemes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>

        <BackToTop/>
    </div>
</template>

<script setup>
    import FilterThree from '@/components/listing/filter-three.vue';
    import MapOne from '@/components/listing/map-one.vue';

    import { listData } from '@/data/data';
    import { onMounted, ref } from 'vue';

    const year = ref(new Date().getFullYear())

    onMounted(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new window.bootstrap.Tooltip(tooltipTriggerEl); 
        });
    });
</script>
