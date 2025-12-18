<template>
    <div class="row d-flex align-items-center justify-content-center ">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
            <Swiper class="owl-carousel categorySlider"
                :space-between="'15px'"
                :slides-per-view="6"
                :loop="true"
                :modules="[Autoplay]"
                :breakpoints="{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    
                    }"
            >
                <SwiperSlide v-for="(item, index) in elements" :key="index" class="singleCategory">
                    <div class="category-small-wrapper">
                        <NuxtLink to="#" class="categoryBox" :style="{
                            width: item.width || props.width,
                            height: item.height || props.height
                        }">

                        <!-- Image -->
                        <img
                            v-if="item.image"
                            :src="item.image"
                            class="img-fluid mb-3"
                            :alt="item.title"
                        />

                        <div class="categoryCapstions">
                            <div class="catsIcons">
                            <div class="icoBoxx">
                                <i :class="item.icon"></i>
                            </div>
                            </div>

                            <div class="catsTitle">
                            <h5>{{ $t(`${item.title}`) }}</h5>
                            </div>

                            <div class="CatsLists">
                            <span class="categorycounter">{{ item.list }}</span>
                            </div>
                        </div>

                        </NuxtLink>
                    </div>	
                </SwiperSlide>
            </Swiper>
        </div>
    </div>


 
</template>


<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay  } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css'

const props = withDefaults(
  defineProps<{
    elements: {
      icon: string
      title: string
      list?: string | number
      image?: string
      width?: string
      height?: string
    }[]
    width?: string
    height?: string
  }>(),
  {
    width: () => '100%',
    height: () =>  '230px'
  }
)
</script>




<!-- <div v-appear="'fade-up'" class="d-flex justify-content-center gap-5">
                <div class="category-small-wrapper">
                    <NuxtLink to="#" class="categoryBox border border-primary">
                        
                        <div class="categoryCapstions">
                            <div class="catsIcons"><div class="icoBoxx"><i class="bi bi-cash-stack me-1"></i></div></div>
                            <div class="catsTitle"><h5>{{ $t('supplier_payment') }}</h5></div>
                            <div class="CatsLists"><span class="categorycounter">+</span></div>
                        </div>
                        <img :src="item.image" class="img-fluid" alt=""/>
                    </NuxtLink>
                </div>	

                

                <div class="category-small-wrapper">
                    <NuxtLink to="#" class="categoryBox border border-primary">
                        
                        <div class="categoryCapstions">
                            <div class="catsIcons"><div class="icoBoxx"><i class="bi bi-arrow-left-right me-1"></i></div></div>
                            <div class="catsTitle"><h5>{{ $t('money_transfers') }}</h5></div>
                            <div class="CatsLists"><span class="categorycounter">+</span></div>
                        </div>
                        <img :src="item.image" class="img-fluid" alt=""/>
                    </NuxtLink>
                </div>	

                <div class="category-small-wrapper">
                    <NuxtLink to="#" class="categoryBox border border-primary">
                        
                        <div class="categoryCapstions">
                            <div class="catsIcons"><div class="icoBoxx"><i class="bi bi-box-seam me-1"></i></div></div>
                            <div class="catsTitle"><h5> {{ $t('package_reception') }}</h5></div>
                            <div class="CatsLists"><span class="categorycounter">+</span></div>
                        </div>
                        <img :src="item.image" class="img-fluid" alt=""/>
                    </NuxtLink>
                </div>	
            </div> -->