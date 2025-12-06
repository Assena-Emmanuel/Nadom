<template>
    <div>
        <ClientOnly>
            <NavbarDark/>
        </ClientOnly>

        <section class="bg-cover position-relative" :style="{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}" data-overlay="6">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-7 col-lg-9 col-md-12 col-sm-12">
                        <div class="position-relative text-center mb-5 pt-lg-0 pt-5">
                            <h1 class="text-light xl-heading">Latest Updates</h1>
                            <nav id="breadcrumbs" class="breadcrumbs light">
                                <ul>
                                    <li><NuxtLink to="#">Home</NuxtLink></li>
                                    <li><NuxtLink to="#">Pages</NuxtLink></li>
                                    <li>Blog</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-light">
            <div class="container">
                <div class="row justify-content-center g-4">
                    <div class="col-xl-12 col-lg-12 col-md-12">
                        <div class="card rounded-4 border">
                            <div class="row align-items-center justify-content-start">
                            
                                <div class="col-xl-4 col-lg-4 col-md-4">
                                    <NuxtLink to="/blog-detail" class="d-block p-3">
                                        <img class="img-fluid rounded" :src="blogImg" alt="blog image"/>
                                    </NuxtLink>
                                </div>
                                
                                <div class="col-xl-8 col-lg-8 col-md-8">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-start gap-2 mb-3">
                                            <span class="badge badge-xs badge-success rounded-pill">Featured</span>
                                            <span class="badge badge-xs badge-danger rounded-pill">Web Design</span>
                                        </div>
                                        <NuxtLink to="/blog-detail"><h4 class="fw-semibold fs-5 lh-base mb-2">Boost Your Website's Performance with These Bootstrap Optimization Tips</h4></NuxtLink>
                                        <p>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra.</p>
                                        <div class="d-flex align-items-center justify-content-start mt-4">
                                            <NuxtLink to="#" class="badge badge-primary rounded-pill">Continue Reading</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div v-for="(item, index) in blogData" :key="index" class="col-xl-4 col-lg-4 col-md-6">
                        <div class="card rounded-4 shadow-sm h-100">
                            <NuxtLink :to="`/blog-detail/${item.id}`" class="d-block bg-gradient rounded-top">
                                <img class="card-img-top hover-fade-out" :src="item.image" alt="blog image"/>
                            </NuxtLink>
                            <div class="card-body">
                                <NuxtLink :to="`/blog-detail/${item.id}`"><h4 class="fw-semibold fs-5 lh-base mb-3">{{item.title}}</h4></NuxtLink>
                                <p>{{item.desc}}</p>
                                <div class="d-flex align-items-center justify-content-start mt-4">
                                    <NuxtLink :to="`/blog-detail/${item.id}`" class="badge badge-primary rounded-pill">Continue Reading</NuxtLink>
                                </div>
                            </div>
                            <div class="card-footer bg-white d-flex justify-content-between align-items-center py-3">
                                <div class="text-dark fw-medium text-md"><i class="bi bi-calendar-check me-2"></i>{{item.date}}</div>
                                <div class="text-muted fw-medium text-md"><i class="bi bi-eye-fill me-2"></i>12k Views</div>
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
                                <li class="page-item"><NuxtLink class="page-link" to="#">1</NuxtLink></li>
                                <li class="page-item active"><NuxtLink class="page-link" to="#">2</NuxtLink></li>
                                <li class="page-item"><NuxtLink class="page-link" to="#">3</NuxtLink></li>
                                <li class="page-item">
                                    <NuxtLink class="page-link" to="#"><i class="fa-solid fa-arrow-right"></i></NuxtLink>
                                </li>
                            </ul>
                        </nav>
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
    import bg from '@/assets/img/title-banner.jpg'
    import blogImg from '@/assets/img/blog-5.jpg'
    import { blogData } from '@/data/data';
</script>
