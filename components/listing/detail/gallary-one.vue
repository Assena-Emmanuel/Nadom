<template>
    <div class="listingSingleblock mb-4" id="Galleries">
        <div class="SingleblockHeader">
            <a data-bs-toggle="collapse" data-parent="#gallery" data-bs-target="#gallery" aria-controls="gallery" href="#" aria-expanded="false" class="collapsed"><h4 class="listingcollapseTitle">Gallery</h4></a>
        </div>
        
        <div id="gallery" class="panel-collapse collapse show">
            <div class="card-body p-4 pt-2">
                <ul class="row align-items-center justify-content-center g-3 p-0">
                    <li v-for="(item, index) in images" :key="index" class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                        <NuxtLink to="#" @click.prevent="openLightbox(index)" class="mfp-gallery d-block"><img :src="item" class="img-fluid rounded" alt="Gallery Img"/></NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <vue-easy-lightbox
            :visible="visible"
            :imgs="images"
            :index="index"
            @hide="visible = false"
        />
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import VueEasyLightbox from 'vue-easy-lightbox'

    import img1 from '@/assets/img/gal-1.jpg'
    import img2 from '@/assets/img/gal-2.jpg'
    import img3 from '@/assets/img/gal-3.jpg'
    import img4 from '@/assets/img/gal-4.jpg'
    import img5 from '@/assets/img/gal-5.jpg'
    import img6 from '@/assets/img/gal-6.jpg'

    const images = [img1, img2, img3, img4, img5, img6]

    const visible = ref(false)
    const index = ref(0)

    const openLightbox = (i) => {
        index.value = i
        visible.value = true
    }
</script>
