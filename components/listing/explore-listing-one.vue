<template>
    <div class="row align-items-center justify-content-center g-4">
        <div v-for="(item, index) in listData.slice(0,6)" :key="index" class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="listingitem-container">
                <div class="singlelisting-item">
                    <div class="listing-top-item">
                        <NuxtLink to="/single-listing-04" class="topLink">
                            <div class="position-absolute start-0 top-0 ms-3 mt-3 z-2">
                                <div class="d-flex align-items-center justify-content-start gap-2">
                                    <span v-if="item.status === 'open'" class="badge badge-xs text-uppercase listOpen">Open</span>
                                    <span v-if="item.status === 'close'" class="badge badge-xs text-uppercase listClose">Closed</span>
                                    <span class="badge badge-xs badge-transparent">$$$</span>
                                    <span v-if="item.featured === true" class="badge badge-xs badge-transparent"><i class="bi bi-star mb-0 me-1"></i>Featured</span>
                                </div>
                            </div>
                            <img :src="item.image" class="img-fluid" alt="Listing Image"/>
                        </NuxtLink>
                        <div class="position-absolute end-0 bottom-0 me-3 mb-3 z-2">
                            <NuxtLink to="/single-listing-04" class="bookmarkList" data-bs-toggle="tooltip" data-bs-title="Save Listing"><i class="bi bi-suit-heart m-0"></i></NuxtLink>
                        </div>
                    </div>
                    <div class="listing-middle-item">
                        <div class="listing-avatar">
                            <NuxtLink to="/single-listing-04" class="avatarImg"><img :src="item.user" class="img-fluid circle" alt="Avatar"/></NuxtLink>
                        </div>
                        <div class="listing-details">
                            <h4 class="listingTitle"><NuxtLink to="/single-listing-01" class="titleLink">{{item.title}}<span class="verified"><i class="bi bi-patch-check-fill m-0"></i></span></NuxtLink></h4>
                            <p>{{item.desc}}</p>
                        </div>
                        <div class="listing-info-details">
                            <div class="d-flex align-items-center justify-content-start gap-2">
                                <div class="list-calls"><i class="bi bi-telephone mb-0 me-2"></i>{{item.call}}</div>
                                <div class="list-distance"><i class="bi bi-geo-alt mb-0 me-2"></i>{{item.loction}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="listing-footer-item">
                        <div class="d-flex align-items-center justify-content-between gap-2">
                            <div class="catdWraps">
                                <div class="flex-start">
                                    <NuxtLink to="/single-listing-04" class="d-flex align-items-center justify-content-start gap-2">
                                        <span :class="item.tagIconStyle"><i :class="item.tagIcon"></i></span>
                                        <span class="catTitle">{{item.tag}}</span>
                                    </NuxtLink>
                                </div>
                                <div class="flex-end"><span class="moreCatcounter">+2</span></div>
                            </div>
                            <div class="listing-shares">
                                <div class="d-flex align-items-center justify-content-start gap-2">
                                    <NuxtLink to="/single-listing-04" class="smallLinks" data-bs-toggle="tooltip" data-bs-title="View Listing"><i class="bi bi-eye-fill m-0"></i></NuxtLink>
                                    <NuxtLink to="/single-listing-04" class="smallLinks" data-bs-toggle="tooltip" data-bs-title="Save Listing"><i class="bi bi-suit-heart m-0"></i></NuxtLink>
                                    <NuxtLink to="/single-listing-04" class="smallLinks" data-bs-toggle="tooltip" data-bs-title="Share Listing"><i class="bi bi-share-fill m-0"></i></NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { listData } from '@/data/data';
import { onMounted } from 'vue';

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new window.bootstrap.Tooltip(tooltipTriggerEl); // Use global bootstrap if needed
  });
});


</script>

<style lang="scss" scoped>

</style>