<template>
    <div class="popularSearches d-flex align-items-center justify-content-center gap-4 flex-wrap">
        <div class="singleItem"><NuxtLink to="#" data-bs-toggle="tooltip" data-bs-title="Beauty & Spa" class="badge-transparent square--70 circle"><i class="fa-solid fa-spa fs-3"></i></NuxtLink></div>	
        <div class="singleItem"><NuxtLink to="#" data-bs-toggle="tooltip" data-bs-title="Eat & Drink" class="badge-transparent square--70 circle"><i class="fa-solid fa-bowl-rice fs-3"></i></NuxtLink></div>	
        <div class="singleItem"><NuxtLink to="#" data-bs-toggle="tooltip" data-bs-title="Shopping" class="badge-transparent square--70 circle"><i class="fa-solid fa-bag-shopping fs-3"></i></NuxtLink></div>	
        <div class="singleItem"><NuxtLink to="#" data-bs-toggle="tooltip" data-bs-title="Nightlife" class="badge-transparent square--70 circle"><i class="fa-solid fa-martini-glass fs-3"></i></NuxtLink></div>	
        <div class="singleItem"><NuxtLink to="#" data-bs-toggle="tooltip" data-bs-title="Coffee Shop" class="badge-transparent square--70 circle"><i class="fa-solid fa-mug-saucer fs-3"></i></NuxtLink></div>		
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new window.bootstrap.Tooltip(tooltipTriggerEl);
  });
});
</script>