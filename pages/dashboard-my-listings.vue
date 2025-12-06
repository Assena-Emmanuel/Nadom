<template>
    <div>
        <ClientOnly>
            <NavbarAdmin />
        </ClientOnly>

        <section class="p-0">
            <div class="container-fluid p-0">
                <div class="row user-dashboard g-0">
                    <div class="col-xl-2 col-lg-3 col-md-12">
                        <AdminSidebar/>
                    </div>

                    <div class="col-xl-10 col-lg-9 col-md-12">
                        <div class="user-dashboard-box bg-light">
                            <div class="dashHeader p-xl-5 p-4 pb-xl-0 pb-0 pt-lg-0 pt-5 mt-lg-0 mt-5">
                                <h2 class="fw-medium mb-0">My Listings</h2>
                            </div>

                            <div class="dashCaption p-xl-5 p-3 p-md-4">

                                <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <div class="card rounded-3 shadow-sm">
                                            <div class="card-header px-4 py-3">
                                                <h4 class="m-0">Manage Listings</h4>
                                            </div>
                                            <div class="card-body p-0">
                                                <ul class="dashboardListgroup">

                                                    <li v-for="(item, index) in listData" :key="index">
                                                        <div class="mngListings">
                                                            <div class="d-flex align-items-center justify-content-start gap-3 flex-wrap">
                                                                <div class="mngListinfirst">
                                                                    <div class="d-flex align-items-center justify-content-start gap-3 flex-wrap">
                                                                        <div class="mngListings-thumb">
                                                                            <figure class="m-0"><img :src="item.image" class="img-fluid rounded" alt="Avatar"></figure>
                                                                        </div>

                                                                        <div class="mngListings-caps">
                                                                            <h5 class="mnglstTitle">{{item.title}}</h5>
                                                                            <span>{{item.desc}}</span>
                                                                            <div class="d-flex align-items-center justify-content-start gap-2 mt-3">
                                                                                <div class="ratingView" data-rating="5.0">
                                                                                    <i v-for="(el, index) in item.rate" :key="index" :class="el"></i>
                                                                                </div>
                                                                                <div class="text-md">{{item.review}}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="mngListinlast">
                                                                    <div class="d-flex align-items-center justify-content-start gap-3">
                                                                        <NuxtLink to="#" class="btn btn-sm btn-light-success fw-medium rounded-pill"><i class="bi bi-check2-circle me-1"></i>Edit</NuxtLink>
                                                                        <NuxtLink to="#" class="btn btn-sm btn-light-danger fw-medium rounded-pill"><i class="bi bi-x me-1"></i>Delete</NuxtLink>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row align-items-start g-4">
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <p class="text-muted m-0">©ListingHub {{year}} Design & Develop By ShreeThemes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <BackToTop/>
    </div>
</template>

<script setup>
    import AdminSidebar from '@/components/admin-sidebar.vue';
    import NavbarAdmin from '@/components/navbar/navbar-admin.vue';
    import BackToTop from '@/components/back-to-top.vue';
    import list1 from '@/assets/img/list-1.jpg'
    import list2 from '@/assets/img/list-2.jpg'
    import list3 from '@/assets/img/list-3.jpg'
    import list4 from '@/assets/img/list-4.jpg'
    import { ref } from 'vue';

    const listData = ref([
        {
            image:list1,
            title:'The Big Bumbble Gym',
            desc:'410 Apex Avenue, California USA',
            rate:['bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-half'],
            review:'412 Reviews'
        },
        {
            image:list2,
            title:'Greenvally Real Estate',
            desc:'410 Apex Avenue, California USA',
            rate:['bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-half'],
            review:'152 Reviews'
        },
        {
            image:list3,
            title:'The Blue Ley Light',
            desc:'520 Adde Resort, Liverpool UK',
            rate:['bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-half'],
            review:'302 Reviews'
        },
        {
            image:list4,
            title:'Shreya Study Center',
            desc:'102 Hozri Avenue, California USA',
            rate:['bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-half'],
            review:'180 Reviews'
        },
    ])

    const year = ref(new Date().getFullYear())
</script>

<style lang="scss" scoped></style>