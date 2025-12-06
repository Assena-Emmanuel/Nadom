<template>
    <div>
        <ClientOnly>
            <NavbarDark/>
        </ClientOnly>
        <div class="image-cover hero-banner bg-primary" :style="{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}" data-overlay="5">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="position-relative text-start mt-4 pt-lg-0 pt-5">
                            <h2>Get Your Dream Place in New York</h2>
                            <p class="fs-5 fw-light">Discover the best place for your dream place & homes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="position-relative d-flex flex-column mt-n3 z-2">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-11 col-lg-12 col-md-12 col-12">
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
            </div>
        </div>

        <section>
            <div class="container">
                <div class="row g-4">
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <ListSidebarOne/>
                    </div>
                
                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        
                        <div class="row align-items-start mb-4">
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <div class="d-flex align-items-center justify-content-start gap-3 flex-wrap">
                                    <div class="alert tag-alert alert-light alert-dismissible fade show" role="alert">
                                        <span>Classified</span>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    
                                    <div class="alert tag-alert alert-light alert-dismissible fade show" role="alert">
                                        <span>Services</span>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    
                                    <div class="alert tag-alert alert-light alert-dismissible fade show" role="alert">
                                        <span>75Km</span>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    
                                    <div class="alert tag-alert alert-light alert-dismissible fade show" role="alert">
                                        <span>Dinner</span>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    
                                    <div class="alert tag-alert alert-light alert-dismissible fade show" role="alert">
                                        <span>$80-$100</span>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    
                                    <div class="clearList">
                                        <NuxtLink to="#" class="fw-medium text-primary text-md">Clear All</NuxtLink>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    
                        <div class="row align-items-center justify-content-between mb-4">
                            <div class="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                                <h6 class="m-0">64 Listings Found</h6>
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
                            <div v-for="(item, index) in listData.slice(0,8)" :key="index" class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="listingitem-container">
                                    <div class="singlelisting-item">
                                        <div class="listing-top-item">
                                            <NuxtLink :to="`/single-listing-01/${item.id}`" class="topLink">
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
                                            <div class="position-absolute end-0 bottom-0 me-3 mb-3 z-2">
                                                <NuxtLink :to="`/single-listing-01/${item.id}`" class="bookmarkList" data-bs-toggle="tooltip" data-bs-title="Save Listing"><i class="bi bi-suit-heart m-0"></i></NuxtLink>
                                            </div>
                                        </div>
                                        <div class="listing-middle-item">
                                            <div class="listing-avatar">
                                                <NuxtLink :to="`/single-listing-01/${item.id}`" class="avatarImg"><img :src="item.user" class="img-fluid circle" alt="Avatar"/></NuxtLink>
                                            </div>
                                            <div class="listing-details">
                                                <h4 class="listingTitle"><NuxtLink :to="`/single-listing-01/${item.id}`" class="titleLink">{{item.title}}<span class="verified"><i class="bi bi-patch-check-fill m-0"></i></span></NuxtLink></h4>
                                                <p>{{item.desc}}</p>
                                            </div>
                                            <div class="listing-info-details">
                                                <div class="d-flex align-items-center justify-content-start gap-2">
                                                    <div class="list-calls"><i class="bi bi-telephone mb-0 me-2"></i>{{item.call}}</div>
                                                    <div class="list-distance"><i class="bi bi-geo-alt mb-0 me-2"></i>{{item.loction}}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="listing-footer-item">
                                            <div class="d-flex align-items-center justify-content-between gap-2">
                                                <div class="catdWraps">
                                                    <div class="flex-start">
                                                        <NuxtLink :to="`/single-listing-01/${item.id}`" class="d-flex align-items-center justify-content-start gap-2">
                                                            <span :class="item.tagIconStyle"><i :class="item.tagIcon"></i></span>
                                                            <span class="catTitle">{{item.tag}}</span>
                                                        </NuxtLink>
                                                    </div>
                                                    <div class="flex-end"><span class="moreCatcounter">+2</span></div>
                                                </div>
                                                <div class="listing-rates">
                                                    <div class="d-flex align-items-center justify-content-start gap-1">
                                                        <span class="ratingAvarage" :class="item.rating">{{item.ratingRate}}</span>
                                                        <span class="overallrates">{{item.review}}</span>
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
import { onMounted } from 'vue';
import bg from '@/assets/img/banner-6.jpg'
import ListSidebarOne from '@/components/listing/list-sidebar-one.vue';
import { listData } from '@/data/data';

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new window.bootstrap.Tooltip(tooltipTriggerEl); // Use global bootstrap if needed
  });
});
</script>