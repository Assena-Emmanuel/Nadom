<template>
    <div class="row align-items-center justify-content-center g-4">
        <div v-for="(item, index) in blogData.slice(0,3)" :key="index" class="col-xl-4 col-lg-4 col-md-6">
            <div class="card rounded-4 shadow-sm h-100">
                <NuxtLink :to="`/blog-detail/${item.id}`" class="d-block bg-gradient rounded-top">
                    <img class="card-img-top hover-fade-out" :src="item.image" alt="blog image"/>
                </NuxtLink>
                <div class="card-body">
                    <NuxtLink :to="`/blog-detail/${item.id}`"><h4 class="fw-medium fs-5 lh-base mb-3">{{item.title}}</h4></NuxtLink>
                    <p>{{item.desc}}</p>
                    <div class="d-flex align-items-center justify-content-start mt-4">
                        <NuxtLink :to="`/blog-detail/${item.id}`" class="badge badge-primary rounded-pill">Continue Reading</NuxtLink>
                    </div>
                </div>
                <div class="card-footer bg-white d-flex justify-content-between align-items-center py-3">
                    <NuxtLink :to="`/blog-detail/${item.id}`" class="text-dark fw-medium text-md"><i class="bi bi-calendar-check me-2"></i>{{item.date}}</NuxtLink>
                    <div class="text-muted text-md"><i class="bi bi-eye-fill me-2"></i>{{item.views}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { blogData } from '@/data/data';
</script>
