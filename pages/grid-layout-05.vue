<template>
    <div>
        <ClientOnly>
            <NavbarTheme />
        </ClientOnly>

        <div class="image-cover hero-banner overflow-hidden py-5" :style="{ backgroundImage: `url(${bg})`, backgroundColor: '#ffe8ee', backgroundRepeat: 'no-repeat' }">
            <div class="container">
                <div class="row justify-content-start align-items-start">
                    <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12">
                        <div class="position-relative text-start py-4 pt-lg-0 pt-5 mt-lg-3 mt-4">
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
                                            <NuxtLink to="/list-layout-03" class="nav-link rounded-2" id="listViews" role="tab" aria-selected="true"><i class="bi bi-list me-2"></i>List</NuxtLink>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <NuxtLink to="/grid-layout-03" class="nav-link rounded-2 active" id="gridViews" role="tab" aria-selected="false"><i class="bi bi-ui-radios-grid me-2"></i>Grid</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                                <div class="text-end">
                                    <div class="dropdown d-inline-flex p-0">
                                        <NuxtLink to="#" class="py-2 px-3 dropdown-toggle toogleDrops" id="shortfilter" data-bs-toggle="dropdown" aria-expanded="false">
                                            Short Listings
                                        </NuxtLink>
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
                            <div v-for="(item, index) in listData.slice(0, 8)" :key="index" class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="listingitem-container">
                                    <div class="singlelisting-item bg-light border-0">
                                        <div class="listing-top-item">
                                            <div class="position-absolute end-0 top-0 me-3 mt-3 z-2">
                                                <NuxtLink :to="`/single-listing-05/${item.id}`" class="bookmarkList" data-bs-toggle="tooltip" data-bs-title="Save Listing"><i class="bi bi-suit-heart m-0"></i></NuxtLink>
                                            </div>
                                            <NuxtLink :to="`/single-listing-05/${item.id}`" class="topLink">
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
                                                        <NuxtLink :to="`/single-listing-05/${item.id}`" class="avatarImg"><img :src="item.user" class="img-fluid circle" alt="Avatar"/></NuxtLink>
                                                    </div>
                                                    <div class="listing-details ms-2">
                                                        <h4 class="listingTitle"><NuxtLink :to="`/single-listing-05/${item.id}`" class="titleLink">{{ item.title }}<span class="verified"><i class="bi bi-patch-check-fill m-0"></i></span></NuxtLink></h4>
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
                                                        <NuxtLink :to="`/single-listing-05/${item.id}`" class="d-flex align-items-center justify-content-start gap-2">
                                                            <span :class="item.tagIconStyle"><i :class="item.tagIcon"></i></span>
                                                            <span class="catTitle">{{item.tag}}</span>
                                                        </NuxtLink>
                                                    </div>
                                                </div>
                                                <div class="listing-rates">
                                                    <div class="">
                                                        <span class="d-flex align-items-center justify-content-start gap-1 text-sm">
                                                            <i class="bi bi-star-fill mb-0 text-warning"></i><i class="bi bi-star-fill mb-0 text-warning"></i><i class="bi bi-star-fill mb-0 text-warning"></i><i class="bi bi-star-fill mb-0 text-warning"></i><i class="bi bi-star-half mb-0 text-warning"></i>
                                                        </span>
                                                        <span class="text-md text-muted-2 hide-mob">(42 Reviews)</span>
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
                                            <NuxtLink to="">
                                                <i class="fa-solid fa-arrow-left"></i>
                                            </NuxtLink>
                                        </li>
                                        <li class="page-item">
                                            <NuxtLink to="" class="page-link">1</NuxtLink>
                                        </li>
                                        <li class="page-item active"><NuxtLink to="" class="page-link">2</NuxtLink></li>
                                        <li class="page-item"><NuxtLink to="" class="page-link">3</NuxtLink></li>
                                        <li class="page-item"><NuxtLink to="" class="page-link">4</NuxtLink></li>
                                        <li class="page-item"><NuxtLink to="" class="page-link">5</NuxtLink></li>
                                        <li class="page-item">
                                            <NuxtLink to=""><i class="fa-solid fa-arrow-right"></i></NuxtLink>
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
import { onMounted } from 'vue';
import NavbarTheme from '@/components/navbar/navbar-theme.vue';
import ListSidebarOne from '@/components/listing/list-sidebar-one.vue';
import bg from '@/assets/img/title-bg.png'
import { listData } from '@/data/data';
import FooterTop from '@/components/footer/footer-top.vue';
import FooterOne from '@/components/footer/footer-one.vue';
import BackToTop from '@/components/back-to-top.vue';

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new window.bootstrap.Tooltip(tooltipTriggerEl); // Use global bootstrap if needed
  });
});

</script>

<style lang="scss" scoped></style>