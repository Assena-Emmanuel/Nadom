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
                                <h2 class="fw-medium mb-0">All Reviews</h2>
                            </div>
                            
                            <div class="dashCaption p-xl-5 p-3 p-md-4">
                                <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <div class="card rounded-3 shadow-sm">
                                            <div class="card-header px-4 py-3">
                                                <h4 class="m-0">Reviews</h4>
                                            </div>
                                            <div class="card-body p-0">
                                                <ul class="dashboardListgroup hovereffect">
                                                    <li v-for="(item, index) in data" :key="index">
                                                        <div class="singleReviewswrap">
                                                            <div class="singlereviews">
                                                                <div class="reviewerAvatar">
                                                                    <figure class="m-0">
                                                                        <img :src="item.image" class="img-fluid circle avatar-xl" alt="Avatar"/>
                                                                    </figure>
                                                                </div>
                                                                
                                                                <div class="reviewsInfo">
                                                                    <div class="reviewssupper d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
                                                                        <div class="reviewsExtopper">
                                                                            <div class="reviewrHeadline d-flex align-items-center justify-content-start gap-2">
                                                                                <h6 class="messageuserTitle">{{item.name}}</h6> On <NuxtLink to="#" class="fw-medium text-primary">Blewr Cafe</NuxtLink>
                                                                            </div>
                                                                            <div class="postedDate"><span class="text-md">{{item.date}}</span></div>
                                                                        </div>
                                                                        <div class="flxLast">
                                                                            <div class="reviewsStar" data-rating="5">
                                                                                <i v-for="(el, index) in item.rate" :key="index" :class="el"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="reviewsBody">
                                                                        <div class="reviewDescription d-block mb-3">
                                                                            <p class="m-0">{{item.desc}}</p>
                                                                        </div>
                                                                        <div class="reviewreply">
                                                                            <button type="button" class="btn btn-sm fw-medium btn-light-primary rounded-pill"  data-bs-toggle="modal" data-bs-target="#replyModal"><i class="bi bi-reply me-2"></i>Reply to this review</button>
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

const year =  ref(new Date().getFullYear())



const data = ref([
    {
        image:team1,
        name:'Karan Shivraj',
        date:'19th June 2025',
        desc:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
        rate:['bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-half']
    },
    {
        image:team2,
        name:'Karan Shivraj',
        date:'19th June 2025',
        desc:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
        rate:['bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-half']
    },
    {
        image:team3,
        name:'Karan Shivraj',
        date:'19th June 2025',
        desc:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
        rate:['bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-half']
    },
    {
        image:team4,
        name:'Karan Shivraj',
        date:'19th June 2025',
        desc:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
        rate:['bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-fill','bi bi-star-half']
    },
])

</script>

