<template>
    <div class="row align-items-center justify-content-center g-4">
        <div v-for="(item, index) in cityData" :key="index" :class="item.gridClass">
            <div class="card border-0 rounded-4 ht-300 position-relative">
                <NuxtLink to="#" class="h-100" tabindex="-1">
                    <div class="abx-thumb h-100" data-overlay="3">
                        <img :src="item.image" class="w-100 h-100 object-fit" alt=""/>
                    </div>
                </NuxtLink>
                <div class="position-absolute top-0 end-0 mt-3 me-3 z-1">
                    <span class="badge badge-xs bg-light text-dark rounded-pill">{{item.listing}}</span>
                </div>
                <div class="position-absolute bottom-0 start-0 mb-3 ms-3 z-1">
                    <div class="d-block w-100 position-relative">
                        <div class="cityTitle">
                            <h4 class="text-light">{{item.name}}</h4>
                        </div>
                        <div class="d-flex align-items-center justify-content-start flex-wrap gap-2">
                            <span v-for="(el, index) in item.tag" :key="index" class="badge badge-xs badge-transparent rounded-pill">{{el}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { cityData } from '@/data/data';
</script>
