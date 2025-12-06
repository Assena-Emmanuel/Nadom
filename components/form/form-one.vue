<template>
    <div class="heroSearch style-01 shadow">
        <div class="row gx-lg-2 gx-md-2 gx-3 gy-sm-2 gy-2">
            <div class="col-xl-4 col-lg-3 col-md-12 col-sm-12">
                <div class="form-group position-relative">
                    <input type="text" class="form-control fs-6 fw-medium border-0 ps-md-2" placeholder="What are you looking for?">
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 side-border">
                <div class="form-group position-relative">
                    <input type="text" class="form-control fs-6 fw-medium border-0" placeholder="Location">
                    <span class="position-absolute top-50 end-0 translate-middle me-2"><i class="fa-solid fa-location-dot text-muted opacity-50 fs-5"></i></span>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <div class="form-group fw-medium lights-bg no-border">
                    <Multiselect 
                        v-model="selected" 
                        :options="options" 
                        placeholder="All Categories" 
                        :open="true"
                        />
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-12 col-sm-12">
                <div class="form-group">
                    <button type="button" class="btn btn-primary full-width fw-medium"><i class="bi bi-search me-2"></i>Search</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import Multiselect from 'vue-multiselect'
    import 'vue-multiselect/dist/vue-multiselect.min.css'
   const options = ['Eat & Drinking', 'Rental Property', 'Classifieds','Bank Services','Shopping','Fintess & Gym','Coaching','Other Services']

   const selected = ref(null);

</script>

<style lang="scss" scoped>

</style>