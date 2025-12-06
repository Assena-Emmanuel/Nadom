<template>
    <div>
        <ClientOnly>
            <NavbarAdmin/>
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
                                <h2 class="fw-medium mb-0">Recent Bookings</h2>
                            </div>
                            
                            <div class="dashCaption p-xl-5 p-3 p-md-4">
                                
                                <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <div class="card rounded-3 shadow-sm">
                                            <div class="card-header px-4 py-3">
                                                <h4 class="m-0">Recent Bookings</h4>
                                            </div>
                                            <div class="card-body p-0">
                                                <ul class="dashboardListgroup">
                                                    <li v-for="(item, index) in bookingData" :key="index">
                                                        <div class="bookingActivities">
                                                            <div class="d-flex align-items-start justify-content-start gap-3 flex-wrap">
                                                                <div class="bookingAvatar">
                                                                    <figure class="m-0"><img :src="item.image" class="img-fluid circle avatar-xl" alt="Avatar"></figure>
                                                                </div>
                                                                
                                                                <div class="bookingInfo">
                                                                    <div class="bookingTitle">
                                                                        <h5 class="titlesName">{{item.title}}<span class="Bookscats">{{item.tag}}</span></h5>
                                                                        <div class="d-flex align-items-center justify-content-start gap-2">
                                                                            <span v-if="item.pending" class="badge badge-xs pending rounded-pill">Pending</span>
                                                                            <span v-if="item.unpaid" class="badge badge-xs unpaid rounded-pill">Unpaid</span>
                                                                            <span v-if="item.approved" class="badge badge-xs approved rounded-pill">Approved</span>
                                                                            <span v-if="item.cancelled" class="badge badge-xs cancelled rounded-pill">Cancelled</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="bookingDetails">
                                                                        <div class="singledetailInfo"><span class="listTitle">Booking Date</span>{{item.date}}</div>
                                                                        <div class="singledetailInfo"><span class="listTitle">Booking Info</span>{{item.info}}</div>
                                                                        <div class="singledetailInfo"><span class="listTitle">Client Name</span>{{item.name}}</div>
                                                                        <div class="singledetailInfo"><span class="listTitle">Contact</span>{{item.call}}</div>
                                                                        <div class="singledetailInfo"><span class="listTitle">Price</span>{{item.price}}</div>
                                                                    </div>
                                                                    <div class="bookingAction">
                                                                        <div class="d-flex align-items-center justify-content-start flex-wrap gap-3">
                                                                            <NuxtLink v-if="item.reject" to="#" class="btn btn-sm btn-light-danger fw-medium rounded-pill"><i class="bi bi-x me-1"></i>Reject</NuxtLink>
                                                                            <NuxtLink v-if="item.approve" to="#" class="btn btn-sm btn-light-success fw-medium rounded-pill"><i class="bi bi-check2-circle me-1"></i>Approve</NuxtLink>
                                                                            <NuxtLink v-if="item.play" to="#" class="btn btn-sm btn-light-success fw-medium rounded-pill"><i class="bi bi-send-check me-1"></i>Pay Now</NuxtLink>
                                                                            <NuxtLink v-if="item.massage" to="#" class="btn btn-sm btn-secondary fw-medium rounded-pill" data-bs-toggle="modal" data-bs-target="#messageModal"><i class="bi bi-envelope-dash me-1"></i>Send Message</NuxtLink>
                                                                        </div>
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
import team1 from '@/assets/img/team-1.jpg'
import team2 from '@/assets/img/team-2.jpg'
import team3 from '@/assets/img/team-3.jpg'
import team4 from '@/assets/img/team-4.jpg'
import { ref } from 'vue';

const bookingData = ref([
    {
        image:team1,
        title:'Mubarak Barbar Shop',
        tag:'Salon',
        pending:true,
        unpaid:true,
        approved:false,
        cancelled:false,
        reject:true,
        approve:true,
        massage:true,
        play:false,
        date:'12.05.2024 at 11:30 AM',
        info:'02 Adults, 01 Child',
        name:'Kallay Mortin',
        call:'41 125 254 2563',
        price:'$25.50'
    },
    {
        image:team2,
        title:'Sunrise Apartment',
        tag:'Apartment',
        pending:false,
        unpaid:false,
        approved:true,
        cancelled:false,
        reject:false,
        approve:false,
        massage:true,
        play:false,
        date:'14.06.2024 - 15.06.2025 at 11:30 AM',
        info:'02 Adults, 02 Child',
        name:'Kalla Adroise',
        call:'41 125 254 6258',
        price:'$17,00'
    },
    {
        image:team3,
        title:'Blue Star Cafe',
        tag:'Restaurants',
        pending:false,
        unpaid:false,
        approved:false,
        cancelled:true,
        reject:false,
        approve:false,
        massage:false,
        play:false,
        date:'12.05.2024 at 16:30 AM',
        info:'02 Adults, 01 Child',
        name:'Sorika Michel',
        call:'41 125 254 625',
        price:'$245.00'
    },
    {
        image:team4,
        title:'Snow Valley Resort',
        tag:'Hotel',
        pending:false,
        unpaid:true,
        approved:true,
        cancelled:false,
        reject:false,
        approve:false,
        massage:true,
        play:true,
        date:'14.10.2024 at 08:30 PM',
        info:'03 Adults, 01 Child',
        name:'Arun Govil',
        call:'41 125 254 3265',
        price:'$190.00'
    },
])

const year = ref(new Date().getFullYear())

</script>
