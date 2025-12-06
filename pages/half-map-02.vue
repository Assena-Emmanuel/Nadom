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

                <div class="map-content-list bg-light py-4">

                    <div class="row align-items-center justify-content-between mb-4">
                        <div class="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                            <div class="totalListingshow">
                                <h6 class="fw-medium mb-0">106 Listings Founds</h6>
                            </div>
                        </div>

                        <div class="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                            <div class="text-end">
                                <div class="dropdown d-inline-flex p-0">
                                    <a href="#" class="py-2 px-3 dropdown-toggle toogleDrops bg-white" id="shortfilter" data-bs-toggle="dropdown" aria-expanded="false">Short Listings</a>
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
                        <div v-for="(item, index) in listData.slice(0,8)" :key="index" class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                            <div class="listingitem-container">
                                <div class="singlelisting-item border">
                                    <div class="listing-top-item">
                                        <div class="position-absolute end-0 top-0 me-3 mt-3 z-2">
                                            <NuxtLink :to="`/single-listing-02/${item.id}`" class="bookmarkList" data-bs-toggle="tooltip" data-bs-title="Save Listing"><i class="bi bi-suit-heart m-0"></i></NuxtLink>
                                        </div>
                                        <NuxtLink :to="`/single-listing-02/${item.id}`" class="topLink">
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
                                                    <NuxtLink :to="`/single-listing-02/${item.id}`" class="avatarImg"><img :src="item.user" class="img-fluid circle" alt="Avatar"/></NuxtLink>
                                                </div>
                                                <div class="listing-details ms-2">
                                                    <h4 class="listingTitle"><NuxtLink :to="`/single-listing-02/${item.id}`" class="titleLink">{{ item.title }}<span class="verified"><i class="bi bi-patch-check-fill m-0"></i></span></NuxtLink></h4>
                                                    <div class="list-infos">
                                                        <div class="mt-1">
                                                            <div class="list-distance text-light my-2"><i class="bi bi-geo-alt mb-0 me-2"></i>{{item.loction}}</div>
                                                            <div class="list-calls text-light hide-mob"><i class="bi bi-telephone mb-0 me-2"></i>{{item.call}}</div>
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
                                                    <NuxtLink :to="`/single-listing-02/${item.id}`" class="d-flex align-items-center justify-content-start gap-2">
                                                        <span :class="item.tagIconStyle"><i :class="item.tagIcon"></i></span>
                                                        <span class="catTitle">{{item.tag}}</span>
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <div class="listing-shares">
                                                <div class="d-flex align-items-center justify-content-start gap-2">
                                                    <NuxtLink :to="`/single-listing-02/${item.id}`" class="smallLinks" data-bs-toggle="tooltip" data-bs-title="View Listing"><i class="bi bi-eye-fill m-0"></i></NuxtLink>
                                                    <NuxtLink :to="`/single-listing-02/${item.id}`" class="smallLinks" data-bs-toggle="tooltip" data-bs-title="Save Listing"><i class="bi bi-suit-heart m-0"></i></NuxtLink>
                                                    <NuxtLink :to="`/single-listing-02/${item.id}`" class="smallLinks" data-bs-toggle="tooltip" data-bs-title="Share Listing"><i class="bi bi-share-fill m-0"></i></NuxtLink>
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
    import BackToTop from '@/components/back-to-top.vue';

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
