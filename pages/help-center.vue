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
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">How can we <span class="text-primary">help?</span></h3>
                            <p>Perceived end knowledge certainly day sweetness why cordially</p>
                        </div>
                    </div>
                </div>

                <div class="row align-items-start justify-content-center g-4">
                    <div v-for="(item, index) in helpData" :key="index" class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div class="helpCategories">
                            <div class="iconlink">
                                <div class="icon"><i :class="item.icon"></i></div>
                                <div class="link"><NuxtLink to="/single-helps" class="link"><i class="bi bi-box-arrow-in-right"></i></NuxtLink></div>									
                            </div>
                            <div class="details">
                                <div class="headers">
                                    <h5 class="tltname">{{item.title}}</h5>
                                    <p>{{item.desc}}</p>
                                </div>
                                <div class="subcategories">
                                    <span v-for="(el, index) in item.tag" :key="index">{{el}}</span>
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
    import { helpArticles, helpData } from '@/data/data';
</script>

<style lang="scss" scoped>

</style>