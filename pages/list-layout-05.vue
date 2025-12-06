<template>
    <div>
        <ClientOnly>
            <NavbarTheme />
        </ClientOnly>

        <div class="image-cover hero-banner overflow-hidden py-5" style="background:#ffe8ee url(assets/img/title-bg.png)no-repeat;">
            <div class="container">
                <div class="row justify-content-start align-items-start">
                    <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12">
                        <div class="position-relative text-start py-4 pt-lg-4 pt-5 mt-lg-0 mt-4">
                            <h2>Get Your Dream Places</h2>
                            <div class="heroSearch style-01 mt-4">
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
                </div>
            </div>
        </div>

        <section class="py-5">
            <div class="container">
                <div class="row align-items-start justify-content-between g-4">
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <ListSidebarOne/>
                    </div>

                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div class="row align-items-center justify-content-between mb-4">
                            <div class="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                                <div class="viewOptions">
                                    <ul class="nav nav-pills nav-fill gap-2 small d-inline-flex primary-soft rounded-2">
                                        <li class="nav-item" role="presentation">
                                            <NuxtLink to="/list-layout-03" class="nav-link rounded-2 active" id="listViews" role="tab" aria-selected="true"><i class="bi bi-list me-2"></i>List</NuxtLink>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <NuxtLink to="/grid-layout-03" class="nav-link rounded-2" id="gridViews" role="tab" aria-selected="false"><i class="bi bi-ui-radios-grid me-2"></i>Grid</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                                <div class="text-end">
                                    <div class="dropdown d-inline-flex p-0">
                                        <a href="#" class="py-2 px-3 dropdown-toggle toogleDrops" id="shortfilter" data-bs-toggle="dropdown" aria-expanded="false">
                                            Short Listings
                                        </a>
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
                                <div class="listingCard listLayouts light card rounded-3 border-0">
                                    <div class="row align-items-center justify-content-start g-3">
                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div class="listThumb overflow-hidden position-relative">
                                                <div v-if="item.status === 'open'" class="position-absolute start-0 top-0 ms-3 mt-3"><span class="badge badge-xs text-uppercase listOpen rounded-pill">Open</span></div>
                                                <div v-if="item.status === 'closed'" class="position-absolute start-0 top-0 ms-3 mt-3"><span class="badge badge-xs text-uppercase listClose rounded-pill">Close</span></div>
                                                <div v-if="item.featured === true" class="position-absolute end-0 bottom-0 me-3 mb-3"><span class="badge badge-xs featuredList rounded-pill"><i class="fa-solid fa-star me-1"></i>Featured</span></div>
                                                <NuxtLink :to="`/single-listing-05/${item.id}`" class="d-block"><img :src="item.image" class="img-fluid list-thumb object-fit" alt="Listing Img"/></NuxtLink>
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
                        
                        <div class="row align-items-center justify-content-center mt-5">
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item">
                                            <NuxtLink to="#" class="page-link"><i class="fa-solid fa-arrow-left"></i></NuxtLink>
                                        </li>
                                        <li class="page-item"><NuxtLink to="#" class="page-link">1</NuxtLink></li>
                                        <li class="page-item active"><NuxtLink to="#" class="page-link">2</NuxtLink></li>
                                        <li class="page-item"><NuxtLink to="#" class="page-link">3</NuxtLink></li>
                                        <li class="page-item"><NuxtLink to="#" class="page-link">4</NuxtLink></li>
                                        <li class="page-item"><NuxtLink to="#" class="page-link">5</NuxtLink></li>
                                        <li class="page-item">
                                            <NuxtLink to="#" class="page-link"><i class="fa-solid fa-arrow-right"></i></NuxtLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
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
    import ListSidebarOne from '@/components/listing/list-sidebar-one.vue';
    import { listData } from '@/data/data';
</script>