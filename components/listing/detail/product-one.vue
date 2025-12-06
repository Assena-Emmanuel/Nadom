<template>
    <div class="listingSingleblock mb-4" id="productss">
        <div class="SingleblockHeader">
            <a data-bs-toggle="collapse" data-parent="#products" data-bs-target="#products" aria-controls="products" href="#" aria-expanded="false" class="collapsed"><h4 class="listingcollapseTitle">Browse Products</h4></a>
        </div>
        
        <div id="products" class="panel-collapse collapse show">
            <div class="card-body p-4 pt-2">
                <Swiper class="owl-carousel owl-theme catalogslider"
                    :space-between="'15px'"
                    :slides-per-view="3"
                    :loop="true"
                    :modules="[Autoplay]"
                    :autoplay="{ delay: 2500, disableOnInteraction: false }"
                    :breakpoints="{
                        320: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        }"
                >

                    <SwiperSlide v-for="(item, index) in productData" :key="index" class="singleItem">
                        <div class="catalogCard">
                            <div class="catalogThumb position-relative">
                                <div v-if="item.tag === 'Sold'" class="position-absolute top-0 start-0 mt-3 ms-3"><span class="badge badge-xs bg-dark text-uppercase">Sold</span></div>
                                <div v-if="item.tag === 'Hot'" class="position-absolute top-0 start-0 mt-3 ms-3"><span class="badge badge-xs bg-danger text-uppercase">Hot</span></div>
                                <div v-if="item.tag === 'New'" class="position-absolute top-0 start-0 mt-3 ms-3"><span class="badge badge-xs bg-seegreen text-uppercase">New</span></div>
                                <NuxtLink to="#">
                                    <figure>	
                                        <img :src="item.image" class="img-fluid rounded-2" alt="Product Thumb"/>
                                    </figure>
                                </NuxtLink>
                            </div>
                            
                            <div class="catalogCaps">
                                <div class="d-flex align-items-start justify-content-between gap-2">
                                    <div class="catalogProducttitle">
                                        <h6 class="lh-base m-0">{{item.title}}</h6>
                                        <p class="text-md d-flex align-items-center gap-2 m-0"><span>{{item.value}}</span></p>
                                    </div>
                                    <div class="addCart">
                                        <NuxtLink to="#" class="text-muted-2 square--40 circle bg-light" data-bs-toggle="tooltip" data-bs-title="Add To Cart"><i class="bi bi-basket2-fill"></i></NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay  } from 'swiper/modules';
    import 'swiper/css';
    import img1 from '@/assets/img/h.jpg'
    import img2 from '@/assets/img/i.jpg'
    import img3 from '@/assets/img/j.jpg'
    import img4 from '@/assets/img/e.jpg'
    import img5 from '@/assets/img/f.jpg'
    import img6 from '@/assets/img/g.jpg'

    const productData = ref([
        {
        tag:'Sold',
        image:img1,
        title:'Wooden Flop Vase',
        value:'$57.40'
        },
        {
        tag:'Hot',
        image:img2,
        title:'Sandlwood Vase',
        value:'$29.56'
        },
        {
        tag:'New',
        image:img3,
        title:'Sonalik Vase Cast',
        value:'$52.42'
        },
        {
        tag:'Hot',
        image:img4,
        title:'Causio Matt Vase',
        value:'$35.60'
        },
        {
        tag:'New',
        image:img5,
        title:'Venila Flower Vase',
        value:'$41.20'
        },
        {
        tag:'Hot',
        image:img6,
        title:'Prodcast Vase',
        value:'$50.56'
        },
  ])
</script>
