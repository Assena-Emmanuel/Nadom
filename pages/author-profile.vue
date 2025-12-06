<template>
    <div>
        <ClientOnly>
            <NavbarLightThree/>
        </ClientOnly>
        <section class="bg-light py-5">
            <div class="container">
                <div class="row g-4">
                    <div class="col-xl-8 col-lg-8 col-md-12">
                        <div class="authorBoxesGroups d-flex align-items-start flex-column gap-4 w-100">
                            <div class="singleauthorBox d-block mt-lg-0 mt-5">
                                <div class="card">
                                    <div class="bg-cover card-header py-3 px-4 position-relative" :style="{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}" data-overlay="4">
                                        <div class="position-absolute end-0 top-0 me-3 mt-3 z-1">
                                            <NuxtLink to="#" class="btn btn-sm btn-whites fw-medium rounded-pill"><i class="bi bi-person-check me-2"></i>Follow</NuxtLink>
                                        </div>
                                        <div class="avatarBox position-relative z-1 py-5 mt-5">
                                            <div class="d-flex align-items-center justify-content-start gap-3">
                                                <div class="square--80 circle bg-transparents mx-auto p-1 z-2"><img :src="team1" class="img-fluid circle" alt="Avatar"></div>
                                                <div class="listingInfo">
                                                    <h4 class="text-light fs-5 mb-0">Shree K. Patel</h4>
                                                    <p class="text-md fw-medium text-light mb-0">PRDO Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                                        <p class="m-0">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="singleauthorBox d-block">
                                <div class="row align-items-center justify-content-between mb-4">
                                    <div class="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                                        <div class="totalListingshow">
                                            <h6 class="fw-medium mb-0">106 Listings Founds</h6>
                                        </div>
                                    </div>
                                    <div class="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                                        <div class="text-end">
                                            <div class="dropdown d-inline-flex p-0">
                                                <NuxtLink to="#" class="py-2 px-3 bg-white dropdown-toggle toogleDrops" id="shortfilter" data-bs-toggle="dropdown" aria-expanded="false">Short Listings</NuxtLink>
                                                <div class="dropdown-menu border shadow-sm">
                                                    <div class="card rounded-0">
                                                        <li><NuxtLink to="#" class="dropdown-item">Default Order</NuxtLink></li>
                                                        <li><NuxtLink to="#" class="dropdown-item">Highest Rated</NuxtLink></li>
                                                        <li><NuxtLink to="#" class="active dropdown-item">Most Reviewed</NuxtLink></li>
                                                        <li><NuxtLink to="#" class="dropdown-item">Newest Listings</NuxtLink></li>
                                                        <li><NuxtLink to="#" class="dropdown-item">Oldest Listings</NuxtLink></li>
                                                        <li><NuxtLink to="#" class="dropdown-item">Featured Listings</NuxtLink></li>
                                                        <li><NuxtLink to="#" class="dropdown-item">Most Viewed</NuxtLink></li>
                                                        <li><NuxtLink to="#" class="dropdown-item">Short By A To Z</NuxtLink></li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row align-items-center justify-content-center g-xl-4 g-3">

                                    <div v-for="(item, index) in listData.slice(0,5)" :key="index" class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div class="listingCard listLayouts card rounded-3 border-0">
                                            <div class="row align-items-center justify-content-start g-3">
                                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div class="listThumb overflow-hidden position-relative">
                                                        <div v-if="item.status === 'open'" class="position-absolute start-0 top-0 ms-3 mt-3"><span class="badge badge-xs text-uppercase listOpen rounded-pill">Open</span></div>
                                                        <div v-if="item.status === 'closed'" class="position-absolute start-0 top-0 ms-3 mt-3"><span class="badge badge-xs text-uppercase listClose rounded-pill">Close</span></div>
                                                        <div v-if="item.featured === true" class="position-absolute end-0 bottom-0 me-3 mb-3"><span class="badge badge-xs featuredList rounded-pill"><i class="fa-solid fa-star me-1"></i>Featured</span></div>
                                                        <NuxtLink :to="`/single-listing-02/${item.id}`" class="d-block"><img :src="item.image" class="img-fluid list-thumb object-fit" alt="Listing Img"/></NuxtLink>
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
                                                                    <h5 class="listItemtitle"><NuxtLink :to="`/single-listing-02/${item.id}`">{{ item.title }}<span class="verified"><i class="bi bi-patch-check-fill m-0"></i></span></NuxtLink></h5>
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
                                                                    <NuxtLink :to="`/single-listing-02/${item.id}`" class="bookmarkList"><i class="fa-regular fa-heart"></i></NuxtLink>
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

                    <div class="col-xl-4 col-lg-4 col-md-12">
                        <div class="sidebarGroups d-flex flex-column gap-4">
                            <div class="card">
                                <div class="card-body p-0">
                                    <div class="avatarBox my-4">
                                        <div class="square--100 circle bg-secondary mx-auto mb-2 p-2"><img :src="team1" class="img-fluid circle" alt="Avatar"></div>
                                        <div class="listingInfo text-center">
                                            <p class="text-md text-muted mb-0">Author</p>
                                            <h6 class="mb-0">Shree K. Patel</h6>
                                            <div class="authorRatings">
                                                <div class="d-flex align-items-center justify-content-center gap-2 mt-1">
                                                    <div class="d-flex align-items-center justify-content-start gap-1">
                                                        <i class="bi bi-star-fill text-warning text-sm"></i>
                                                        <i class="bi bi-star-fill text-warning text-sm"></i>
                                                        <i class="bi bi-star-fill text-warning text-sm"></i>
                                                        <i class="bi bi-star-fill text-warning text-sm"></i>
                                                        <i class="bi bi-star-half text-warning text-sm"></i>
                                                    </div>
                                                    <span class="text-md text-muted">(42k Reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="followButtons d-block mt-4">
                                            <div class="d-flex align-items-center justify-content-center gap-3 px-4">
                                                <div class="authPlaces text-center flex-fill">
                                                    <h5 class="mb-0 ctr">22</h5>
                                                    <p class="text-muted m-0">Active Places</p>
                                                </div>
                                                <div class="authFollowers text-center flex-fill">
                                                    <h5 class="mb-0 ctr">435</h5>
                                                    <p class="text-muted m-0">Followers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="avatarInfo mb-2">
                                        <div v-for="(item, index) in personal" :key="index" class="py-3 px-3 border-top">
                                            <div class="infoFlexio d-flex align-items-center justify-content-start gap-2">
                                                <div class="square--40 rounded bg-light-primary"><i :class="item.icon"></i></div>
                                                <div class="infoDetails">
                                                    <p class="text-muted lh-base mb-0">{{item.title}}</p>
                                                    <p class="text-dark lh-base fw-semibold fs-6 mb-0">{{item.desc}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer bg-white border-top">
                                    <div class="d-flex align-items-center justify-content-center gap-3">
                                        <div v-for="(item, index) in socialData" :key="index" class="flexSocial"><NuxtLink to="#" class="square--40 circle border"><i :class="item"></i></NuxtLink></div>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header py-3">
                                    <div class="headerFirst">
                                        <h6><i class="bi bi-envelope-check-fill me-2"></i>Message To Author</h6>
                                    </div>
                                </div>
                                <div class="p-xl-4 p-3">
                                    <div class="contactForm position-relative">
                                        <div class="form-group form-border">
                                            <input type="text" class="form-control" placeholder="Your Name">
                                        </div>
                                        <div class="form-group form-border">
                                            <input type="email" class="form-control" placeholder="Your Email">
                                        </div>
                                        <div class="form-group form-border">
                                            <input type="tel" class="form-control" placeholder="Your Phone">
                                        </div>
                                        <div class="form-group form-border">
                                            <textarea class="form-control" placeholder="Leave a comment here" style="height: 120px"></textarea>
                                        </div>
                                        <div class="form-group form-border">
                                            <button type="button" class="btn btn-primary rounded-pill fw-medium w-100"><i class="bi bi-send me-2"></i>Send Message</button>
                                        </div>
                                    </div>
                                </div>
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
    import bg from '@/assets/img/avatar-bg-2.jpg'
    import team1 from '@/assets/img/team-4.jpg'
    import { listData } from '@/data/data';
    import { ref } from 'vue';

    const socialData = ref(['bi bi-facebook color--facebook','bi bi-twitter color--twitter','bi bi-instagram color--instagram','bi bi-youtube color--pinterest','bi bi-whatsapp color--whatsapp'])

    const personal = ref([
        {
            icon:'bi bi-envelope text-primary',
            title:'Email',
            desc:'shree.patel@gmail.com'
        },
        {
            icon:'bi bi-phone text-primary',
            title:'Phone No.',
            desc:'+41 256 254 5487'
        },
        {
            icon:'bi bi-browser-chrome text-primary',
            title:'Website',
            desc:'www.ListingHub.co.in'
        },
    ])
</script>
