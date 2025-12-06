<template>
    <div>
        <ClientOnly>
            <NavbarDark/>
        </ClientOnly>

        <section class="bg-cover position-relative" :style="{backgroundImage:`url(${bg})`, backgroundColor:'#ffe8ee', backgroundRepeat:'no-repeat'}">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-12 col-lg-12 col-md-12">
                        <div class="fpc-capstion text-center my-4">
                            <div class="fpc-captions pt-lg-0 pt-5">
                                <h1 class="fs-1 lh-base">Help Center</h1>
                                <form class="col-md-6 bg-body rounded-pill mx-auto p-2 mb-3">
                                    <div class="input-group">
                                        <input class="form-control border-0 fs-6 fw-medium me-1 rounded-pill" type="text" placeholder="Search question...">
                                        <button type="button" class="btn btn-primary fw-medium rounded-pill px-xl-5 mb-0">Search</button>
                                    </div>
                                </form>
                                <div class="row align-items-center mt-5 mb-2">
                                    <div class="col-xl-6 col-lg-8 col-md-9 mx-auto">
                                        <h6 class="text-primary mb-3">Popular questions</h6>
                                        <div class="list-group hstack gap-3 justify-content-center flex-wrap mb-0">
                                            <NuxtLink to="#" class="btn-link text-decoration-underline p-0 mb-0"> How can we help?</NuxtLink>
                                            <NuxtLink to="#" class="btn-link text-decoration-underline p-0 mb-0"> How to upload data to the system? </NuxtLink>
                                            <NuxtLink to="#" class="btn-link text-decoration-underline p-0 mb-0"> Installation Guide?</NuxtLink>
                                            <NuxtLink to="#" class="btn-link text-decoration-underline p-0 mb-0"> How to view expired tickets? </NuxtLink>
                                            <NuxtLink to="#" class="btn-link p-0 mb-0">View all question</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-light">
            <div class="container">
                <div class="row align-items-start justify-content-center g-4">
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 sticky-lg-top py-lg-5">
                        <div class="helpNav">
                            <nav id="single-helps" class="h-100 flex-column align-items-stretch pe-4" style="margin-top: 30px;">
                                <nav class="nav nav-pills light flex-column">
                                    <a class="nav-link ms-3 my-1" href="#item-1">How Do I Add Or Change My Billing Details?</a>
                                    <a class="nav-link ms-3 my-1" href="#item-2">How do I purchase an item?</a>
                                    <a class="nav-link ms-3 my-1" href="#item-3">How do refunds work?</a>
                                    <a class="nav-link ms-3 my-1" href="#item-4">I'm trying to find a specific item</a>
                                    <a class="nav-link ms-3 my-1" href="#item-5">Envato and the Envato Market sites</a>
                                    <a class="nav-link ms-3 my-1" href="#item-6">Purchasing Items As A Member</a>
                                    <a class="nav-link ms-3 my-1" href="#item-7">Buyers Guide to YouTube Content ID & ...</a>
                                </nav>
                            </nav>
                        </div>
                    </div>
                    
                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div class="singleHelp card">
                            <div class="card-header flex-column justify-content-start align-items-start">
                                <nav id="breadcrumbs" class="breadcrumbs">
                                    <ul>
                                        <li><NuxtLink to="#">Home</NuxtLink></li>
                                        <li><NuxtLink to="#">Pages</NuxtLink></li>
                                        <li>Help & Center</li>
                                    </ul>
                                </nav>
                                <div class="helpTitle">
                                    <h3 class="m-0 lh-base">Account & Billing</h3>
                                </div>
                                <div class="lastUpdates">
                                    <div class="text-muted-2 text-md">Update 6 month ago</div>
                                </div>
                            </div>
                            
                            <div class="card-body">
                                <div data-bs-spy="scroll" data-bs-target="#single-helps" data-bs-smooth-scroll="true" class="singleHelpgroup" tabindex="0">
                                    <div v-for="(item, index) in singleHelpData" :key="index" class="singlHelpgroup" :id="item.id">
                                        <div class="d-flex align-items-start justify-content-start gap-2 mb-2">
                                            <span v-if="item.badge" class="badge badge-xs badge-success rounded">Popular Question</span>
                                        </div>
                                        <h4>{{item.title}}</h4>
                                        <p>{{ item.text1 }}</p>
                                        <p>{{ item.text2 }}</p>
                                        <p>{{ item.text3 }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Explore Popular <span class="text-primary">Articles</span></h3>
                            <p>Perceived end knowledge certainly day sweetness why cordially</p>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-center justify-content-center g-4">
                    <div v-for="(item, index) in helpArticles" :key="index" class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <NuxtLink to="/single-helps" class="popularArticles">
                            <div class="descriptions">
                                <h5 class="title">{{item.title}}</h5>
                                <p class="sedc">{{item.desc}}</p>
                            </div>
                        </NuxtLink>
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
    import bg from '@/assets/img/title-bg.png'
    import { helpArticles, singleHelpData } from '@/data/data';
</script>