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
                                <h2 class="fw-medium mb-0">Wallet</h2>
                            </div>
                            
                            <div class="dashCaption p-xl-5 p-3 p-md-4">
                                
                                <div class="row align-items-start g-4 mb-4">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                                            Your last payout <strong>$450 USD</strong> has been withdrawa!.
                                            <button type="button" class="btn-close text-sm text-primary" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                    <div v-for="(item, index) in aboutData" :key="index" class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                        <div class="card rounded-3 position-relative p-4">
                                            <div class="position-absolute w-30 h-100 start-0 top-0 rounded-end-pill" :class="item.bgStyle"><div class="position-absolute top-50 start-50 translate-middle"><i :class="item.icon"></i></div></div>
                                            <div class="d-flex flex-column align-items-end justify-content-end ht-80">
                                                <h2 class="mb-0"><span class="ctr">{{item.value}}</span></h2>
                                                <p class="text-muted-2 fw-medium mb-0">{{item.title}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <div class="card rounded-3 shadow-sm">
                                            <div class="card-header flex-wrap gap-3 px-4">
                                                <div class="cardTitle"><h4>Your Earning</h4></div>
                                                
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
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Order ID</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Fee</th>
                                                        </tr>
                                                    </thead>
                                                    
                                                    <tbody>
                                                    
                                                        <tr v-for="(item, index) in earning" :key="index">
                                                            <td data-label="Name">{{item.name}}</td>
                                                            <td data-label="Order ID">{{item.id}}</td>
                                                            <td data-label="Date"><span class="text-normal">{{item.date}}</span></td>
                                                            <td data-label="Amount"><span class="fw-medium text-dark">{{item.amount}}</span></td>
                                                            <td data-label="View"><span class="fw-medium text-danger">{{item.fee}}</span></td>
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
import { ref } from 'vue';

const aboutData = ref([
    {
        bgStyle:'bg-danger',
        icon:'bi bi-wallet text-white fs-2',
        value:'510',
        title:'Your Balance in USD'
    },
    {
        bgStyle:'bg-warning',
        icon:'bi bi-coin text-white fs-2',
        value:'720',
        title:'Total Earning in USD'
    },
    {
        bgStyle:'bg-purple',
        icon:'bi bi-basket2 text-white fs-2',
        value:'7',
        title:'Total Orders'
    },
])

const earning = ref([
    {
        name:'Swarna Apartment',
        id:'#PC01362',
        date:'Dec 10,2023',
        amount:'$200 USD',
        fee:'$17.10 USD'
    },
    {
        name:'Blue Cafe',
        id:'#PC01363',
        date:'Jan 12,2024',
        amount:'$150 USD',
        fee:'$12.30 USD'
    },
    {
        name:'Kanoop Barbar Shop',
        id:'#PC01364',
        date:'Sep 22,2023',
        amount:'$75.50 USD',
        fee:'$10.20 USD'
    },
    {
        name:'Classic Casino',
        id:'#PC01365',
        date:'Dec 16,2024',
        amount:'$652 USD',
        fee:'$80.90 USD'
    },
])

const year = ref(new Date().getFullYear())

</script>
