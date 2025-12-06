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
                                <h2 class="fw-medium mb-0">Hello, Themez</h2>
                            </div>

                            <div class="dashCaption p-xl-5 p-3 p-md-4">

                                <div class="row align-items-start g-4 mb-4">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div class="alert alert-primary alert-dismissible fade show" role="alert">
                                            Your listing <strong>Holy Guacamole!</strong> has been approved!.
                                            <button type="button" class="btn-close text-sm text-primary" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                    <div v-for="(item, index) in aboutData" :key="index" class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                        <div class="card rounded-3 position-relative p-4">
                                            <div class="position-absolute w-30 h-100 start-0 top-0 rounded-end-pill" :class="item.bgStyle">
                                                <div class="position-absolute top-50 start-50 translate-middle"><i :class="item.icon"></i></div>
                                            </div>
                                            <div class="d-flex flex-column align-items-end justify-content-end ht-80">
                                                <h2 class="mb-0"><span class="ctr">{{item.value}}</span></h2>
                                                <p class="text-muted-2 fw-medium mb-0">{{item.title}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                    <div class="col-xl-6 col-lg-6 col-md-12">
                                        <div class="card rounded-3 shadow-sm">
                                            <div class="card-header py-3 px-4">
                                                <h4 class="m-0">Recent Activities</h4>
                                            </div>
                                            <div class="card-body p-0">
                                                <ul class="dashboardListgroup">
                                                    <li>
                                                        <span class="icons bg-light-warning text-warning"><i class="bi bi-star"></i></span>
                                                        <div class="listCaps">Mortin Musk left a review<span class="ratting high">4.2</span>on <NuxtLink to="/single-listing-01" class="listing-link">Snow Restaurants</NuxtLink></div>
                                                    </li>
                                                    <li>
                                                        <span class="icons bg-light-danger text-danger"><i class="bi bi-heart"></i></span>
                                                        <div class="listCaps">Someone bookmark your <NuxtLink to="/single-listing-01" class="listing-link">Pepsco Cafe</NuxtLink> Listing</div>
                                                    </li>
                                                    <li>
                                                        <span class="icons bg-light-warning text-warning"><i class="bi bi-star"></i></span>
                                                        <div class="listCaps">Arun Kovil left a review<span class="ratting mid">3.7</span>on <NuxtLink to="/single-listing-01" class="listing-link">Blue Crystel</NuxtLink></div>
                                                    </li>
                                                    <li>
                                                        <span class="icons bg-light-success text-success"><i class="bi bi-check-circle"></i></span>
                                                        <div class="listCaps">Your listing <NuxtLink to="/single-listing-01" class="listing-link">Craft Casino</NuxtLink> has been approved!</div>
                                                    </li>
                                                    <li>
                                                        <span class="icons bg-light-warning text-warning"><i class="bi bi-star"></i></span>
                                                        <div class="listCaps">Arun Kovil left a review<span class="ratting low">2.9</span>on <NuxtLink to="/single-listing-01" class="listing-link">Sagar Salon</NuxtLink></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-6 col-lg-6 col-md-12">
                                        <div class="card rounded-3 shadow-sm">
                                            <div class="card-header py-3 px-4">
                                                <h4 class="m-0">Messages</h4>
                                                <NuxtLink to="#" class="text-muted-2 text-md fw-medium">View All</NuxtLink>
                                            </div>
                                            <div class="card-body p-4">
                                                <div class="messagesWrapers d-flex flex-column gap-4">
                                                    <div v-for="(item, index) in massageData" :key="index" class="singleMessagesline">
                                                        <NuxtLink to="#" class="d-flex align-items-center justify-content-start gap-2">
                                                            <div class="msgLinethumb">
                                                                <div class="square--50 circle"><img :src="item.image" class="img-fluid circle" alt=""/></div>
                                                            </div>
                                                            <div class="msgLinecaption flex-fill">
                                                                <div class="msglineTitle d-flex align-items-center justify-content-between gap-3">
                                                                    <h6 class="fw-semibold m-0">{{item.name}}</h6>
                                                                    <span class="text-sm fw-medium text-muted">{{item.time}}</span>
                                                                </div>
                                                                <div class="msglineParag d-flex align-items-center justify-content-between gap-3">
                                                                    <p class="text-md m-0">{{item.msg}}</p>
                                                                    <span v-if="item.unRead" class="square--20 circle bg-primary text-light text-sm">{{item.noOfMsg}}</span>
                                                                </div>
                                                            </div>
                                                        </NuxtLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <div class="card rounded-3 shadow-sm">
                                            <div class="card-header flex-wrap gap-3 px-4">
                                                <div class="cardTitle">
                                                    <h4>View Invoices</h4>
                                                </div>

                                                <div class="headerInformations">
                                                    <div class="d-flex align-items-center justify-content-start justify-content-md-between flex-wrap gap-3">
                                                        <div class="singleCaps">
                                                            <div class="form-group position-relative m-0">
                                                                <input type="text" class="form-control form-control-md bg-light border-0 ps-5" placeholder="Search any parameters...">
                                                                <span class="position-absolute top-50 start-0 translate-middle-y ms-3"><i class="fa-solid fa-magnifying-glass"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card-body p-3">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Package Name</th>
                                                            <th scope="col">Order ID</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Due Date</th>
                                                            <th scope="col">View</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr v-for="(item, index) in invoiceData" :key="index">
                                                            <td data-label="Package Name">{{item.name}}</td>
                                                            <td data-label="Order ID">{{item.id}}</td>
                                                            <td v-if="item.status === 'Paid'" data-label="Status"><span class="badge badge-xs badge-success rounded-pill">Paid</span></td>
                                                            <td v-if="item.status === 'Unpaid'" data-label="Status"><span class="badge badge-xs badge-danger rounded-pill">Unpaid</span></td>
                                                            <td v-if="item.status === 'On Hold'" data-label="Status"><span class="badge badge-xs badge-info rounded-pill">On Hold</span></td>
                                                            <td data-label="Due Date"><span class="text-normal">{{item.date}}</span></td>
                                                            <td data-label="View"><NuxtLink to="/invoice-page" class="btn btn-sm fw-medium btn-light-primary rounded-pill">View Invoice</NuxtLink></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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
import team4 from '@/assets/img/team-4.jpg'
import team5 from '@/assets/img/team-5.jpg'
import team6 from '@/assets/img/team-6.jpg'
import team7 from '@/assets/img/team-7.jpg'
import team8 from '@/assets/img/team-8.jpg'
import { ref } from 'vue';

const aboutData = ref([
    {
        icon:'bi bi-pin-map-fill text-success fs-2',
        bgStyle:'bg-light-success',
        value:'23',
        symbol:'',
        title:'Active Listings'
    },
    {
        icon:'bi bi-graph-up-arrow text-danger fs-2',
        bgStyle:'bg-light-danger',
        value:'32',
        symbol:'K',
        title:'Total Views'
    },
    {
        icon:'bi bi-suit-heart text-warning fs-2',
        bgStyle:'bg-light-warning',
        value:'4',
        symbol:'K',
        title:'Total Saved'
    },
    {
        icon:'bi bi-yelp text-info fs-2',
        bgStyle:'bg-light-info',
        value:'88',
        symbol:'',
        title:'Total Reviews'
    },
])

const massageData = ref([
    {
        image:team4,
        name:'Warlinton Diggs',
        msg:'How are you stay dude?',
        time:'08:20 AM',
        unRead:false,
        noOfMsg:'0'
    },
    {
        image:team5,
        name:'Chad M. Pusey',
        msg:'Hey man it is possible to pay mo..',
        time:'06:40 AM',
        unRead:true,
        noOfMsg:'5'
    },
    {
        image:team6,
        name:'Mary D. Homer',
        msg:'Dear you have a spacial offers...',
        time:'08:10 AM',
        unRead:true,
        noOfMsg:'3'
    },
    {
        image:team7,
        name:'Marc S. Solano',
        msg:'Sound good! We will meet you aft...',
        time:'10:10 AM',
        unRead:false,
        noOfMsg:'0'
    },
    {
        image:team8,
        name:'Sandra W. Barge',
        msg:'I am also good and how are...',
        time:'07:20 PM',
        unRead:true,
        noOfMsg:'2'
    },
])

const invoiceData = ref([
    {
        name:'Basic Platinum Plan',
        id:'#PC01362',
        status:'Paid',
        date:'Dec 10,2023'
    },
    {
        name:'Standard Platinum Plan',
        id:'#PC01363',
        status:'Unpaid',
        date:'Jan 23,2024'
    },
    {
        name:'Extended Platinum Plan',
        id:'#PC01364',
        status:'On Hold',
        date:'July 12,2023'
    },
    {
        name:'Basic Platinum Plan',
        id:'#PC01365',
        status:'Paid',
        date:'Aug 15,2024'
    },
])

const year = ref(new Date().getFullYear())

</script>

<style lang="scss" scoped></style>