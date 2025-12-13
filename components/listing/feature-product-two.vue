<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <Swiper class="owl-carousel owl-theme itemslider"
                :slides-per-view="3"
                :space-between="15"
                :loop="true"
                :modules="[Autoplay,Pagination]"
                :autoplay="{ delay: 2500, disableOnInteraction: false }"
                :pagination="true"
                :breakpoints="{
                     0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                    1400: { slidesPerView: 4 },
                    }"
            >
                <SwiperSlide v-for="card in cards" :key="card.title" class="singleItem">

                    <div class="listingitem-container">
                        <div class="singlelisting-item border">
                            <div class="listing-top-item">
                                <!-- <div class="position-absolute end-0 top-0 me-3 mt-3 z-2">
                                    <NuxtLink to="/single-listing-04" class="bookmarkList" data-bs-toggle="tooltip" data-bs-title="Save Listing"><i class="bi bi-suit-heart m-0"></i></NuxtLink>
                                </div> -->
                                <NuxtLink to="/single-listing-04" class="topLink">
                                    <div class="position-absolute start-0 top-0 ms-3 mt-3 z-2">
                                        <div class="d-flex align-items-center justify-content-start gap-2">
                                            <span class="badge badge-xs text-uppercase listOpen">{{ card.category }}</span>
                                            
                                            <!-- <span class="badge badge-xs badge-transparent">$$$</span>
                                            <span class="badge badge-xs badge-transparent"><i class="bi bi-star mb-0 me-1"></i>Featured</span> -->
                                        </div>
                                    </div>
                                    <img :src="card.image" :alt="card.title" />
                                </NuxtLink>
                                <div class="opssListing position-absolute start-0 bottom-0 ms-3 mb-4 z-2">
                                    <div class="d-flex align-items-center justify-content-start gap-2">
                                        <!-- <div class="listing-avatar">
                                            <NuxtLink to="/single-listing-04" class="avatarImg"><img :src="item.user" class="img-fluid circle" alt="Avatar"/></NuxtLink>
                                        </div> -->
                                        <div class="listing-details">
                                            <h4 class="listingTitle"><NuxtLink to="/single-listing-04" class="titleLink">{{ card.title }}<span class="verified"><i class="bi bi-patch-check-fill m-0"></i></span></NuxtLink></h4>
                                            <!-- <div class="list-infos">
                                                <div class="mt-1">
                                                    <div class="list-distance text-light mt-1"><i class="bi bi-geo-alt mb-0 me-2"></i>{{item.loction}}</div>
                                                    <div class="list-calls text-light hide-mob mt-2"><i class="bi bi-telephone mb-0 me-2"></i>{{item.call}}</div>
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="listing-footer-item border-0">
                                <span class="badge badge-xs text-uppercase listClose">Closed</span>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <div class="content">
                                        <p>{{ card.description }}</p>
                                    </div>
                                    <!-- <div class="listing-shares">
                                        <div class="d-flex align-items-center justify-content-start gap-2">
                                            <NuxtLink to="/single-listing-04" class="smallLinks" data-bs-toggle="tooltip" data-bs-title="View Listing"><i class="bi bi-eye-fill m-0"></i></NuxtLink>
                                            <NuxtLink to="/single-listing-04" class="smallLinks" data-bs-toggle="tooltip" data-bs-title="Save Listing"><i class="bi bi-suit-heart m-0"></i></NuxtLink>
                                            <NuxtLink to="/single-listing-04" class="smallLinks" data-bs-toggle="tooltip" data-bs-title="Share Listing"><i class="bi bi-share-fill m-0"></i></NuxtLink>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>

            <!-- <NuxtLink to="/tourisme" class="read-more">
                Explorer →
                </NuxtLink> -->

            
        </div>
        <div class="d-flex justify-content-center mt-5">
            <NuxtLink 
                to="/tourisme" 
                class="btn-outline"
                v-appear="'fade-up'"
            >
                {{ $t('learnmore') }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    import {ref} from "vue"
import { listData } from '@/data/data';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination  } from 'swiper/modules';
import 'swiper/css';
import { onMounted } from 'vue';

const cards = ref([
  {
    category: 'PATRIMOINE MONDIAL',
    title: 'La Grande Muraille de Chine',
    description:
      'Symbole légendaire de la civilisation chinoise, la Grande Muraille traverse montagnes et déserts sur plus de 20 000 km.',
    image:
      'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1200&q=80'
  },

  {
    category: 'HISTOIRE IMPÉRIALE',
    title: 'La Cité Interdite – Pékin',
    description:
      'Ancien palais des empereurs chinois, ce site majestueux révèle l’art, la culture et les traditions de la Chine impériale.',
    image:
      'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1200&q=80'
  },

  {
    category: 'PAYSAGES NATURELS',
    title: 'Montagnes de Zhangjiajie',
    description:
      'Des formations rocheuses spectaculaires suspendues dans la brume, source d’inspiration du film Avatar.',
    image:
      'https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1200&q=80'
  },

  {
    category: 'CULTURE & TRADITIONS',
    title: 'Temples bouddhistes chinois',
    description:
      'Plongez dans la spiritualité chinoise à travers des temples anciens, lieux de méditation et de sérénité.',
    image:
      'https://images.unsplash.com/photo-1580654712603-eb43273aff33?auto=format&fit=crop&w=1200&q=80'
  },

  {
    category: 'VILLE MODERNE',
    title: 'Shanghai – Skyline futuriste',
    description:
      'Une métropole impressionnante où gratte-ciel, technologie et traditions cohabitent harmonieusement.',
    image:
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80'
  },

  {
    category: 'CITY LIFE',
    title: 'Hong Kong la nuit',
    description:
      'Un spectacle urbain fascinant où les lumières de la ville reflètent l’énergie et la modernité asiatique.',
    image:
      'https://images.unsplash.com/photo-1506973035872-a4f23e57624b?auto=format&fit=crop&w=1200&q=80'
  },

  {
    category: 'CULTURE & GASTRONOMIE',
    title: 'Marchés traditionnels chinois',
    description:
      'Découvrez les saveurs authentiques de la Chine à travers ses marchés animés et sa cuisine locale.',
    image:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80'
  },

  {
    category: 'FESTIVALS & TRADITIONS',
    title: 'Fête des lanternes',
    description:
      'Un événement culturel magique où lanternes colorées illuminent les villes chinoises.',
    image:
      'https://images.unsplash.com/photo-1518544887687-3194b7c9c3c0?auto=format&fit=crop&w=1200&q=80'
  }
])


onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new window.bootstrap.Tooltip(tooltipTriggerEl); // Use global bootstrap if needed
  });
});

</script>
